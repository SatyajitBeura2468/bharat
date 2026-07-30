"use client";

import { Line, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { createElement, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import type { Group, Points as ThreePoints } from "three";

type Geometry = {
  type: "Polygon" | "MultiPolygon";
  coordinates: number[][][] | number[][][][];
};

type Feature = {
  geometry: Geometry;
};

function AmbientLight(props: { intensity: number }) {
  return createElement("ambientLight", props);
}

function PointLight(props: { position: [number, number, number]; intensity: number; color: string }) {
  return createElement("pointLight", props);
}

const GroupElement = forwardRef<
  Group,
  { rotation: [number, number, number]; position: [number, number, number]; scale: number; children: React.ReactNode }
>(function GroupElement(props, ref) {
  return createElement("group", { ...props, ref });
});

function normalizeRing(ring: number[][], layer = 0): [number, number, number][] {
  return ring.map(([lng = 78, lat = 22]) => [
    (lng - 78.5) * 0.22,
    layer * 0.025,
    -(lat - 22.5) * 0.22,
  ]);
}

function AtlasContours() {
  const group = useRef<Group>(null);
  const particles = useRef<ThreePoints>(null);
  const { size } = useThree();
  const compact = size.width < 740;
  const [rings, setRings] = useState<number[][][]>([]);

  useEffect(() => {
    fetch("/data/india-adm1.geojson")
      .then((response) => response.json())
      .then((data: { features: Feature[] }) => {
        const outerRings = data.features.flatMap((feature) =>
          feature.geometry.type === "Polygon"
            ? [feature.geometry.coordinates[0] as number[][]]
            : (feature.geometry.coordinates as number[][][][]).map((polygon) => polygon[0] as number[][]),
        );
        setRings(outerRings.filter((ring) => ring.length > 2));
      })
      .catch(() => setRings([]));
  }, []);

  const cloud = useMemo(() => {
    const positions = new Float32Array(600 * 3);
    for (let index = 0; index < 600; index += 1) {
      const sequence = (offset: number) => {
        const value = Math.sin((index + 1) * (12.9898 + offset)) * 43758.5453;
        return value - Math.floor(value);
      };
      positions[index * 3] = (sequence(0) - 0.5) * 11;
      positions[index * 3 + 1] = (sequence(2.17) - 0.5) * 4;
      positions[index * 3 + 2] = (sequence(5.41) - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame(({ pointer, clock }) => {
    if (group.current) {
      group.current.rotation.y += (pointer.x * 0.045 - group.current.rotation.y) * 0.025;
      group.current.rotation.x += (-pointer.y * 0.018 - group.current.rotation.x) * 0.025;
      group.current.position.y = (compact ? 0.82 : -0.35) + Math.sin(clock.elapsedTime * 0.2) * 0.035;
    }
    if (particles.current) particles.current.rotation.y = clock.elapsedTime * 0.01;
  });

  return (
    <>
      <AmbientLight intensity={0.75} />
      <PointLight position={[3, 4, 2]} intensity={8} color="#C39B55" />
      <GroupElement
        ref={group}
        rotation={compact ? [-1.35, 0, -0.06] : [-0.84, 0, -0.06]}
        position={compact ? [0, 0.82, 0] : [1.15, -0.35, 0]}
        scale={compact ? 0.44 : 1}
      >
        {rings.map((ring, ringIndex) =>
          [0, 1, 2].map((layer) => (
            <Line
              key={`${ringIndex}-${layer}`}
              points={normalizeRing(ring, layer)}
              color={layer === 0 ? "#C39B55" : "#126C70"}
              transparent
              opacity={layer === 0 ? 0.42 : 0.13}
              lineWidth={layer === 0 ? 0.65 : 0.35}
            />
          )),
        )}
      </GroupElement>
      <Points ref={particles} positions={cloud} stride={3}>
        <PointMaterial transparent color="#C39B55" size={0.012} sizeAttenuation depthWrite={false} opacity={0.55} />
      </Points>
    </>
  );
}

export default function TerrainCanvas() {
  return (
    <div className="hero-canvas" aria-hidden="true">
      <Canvas camera={{ position: [0, 3.5, 7], fov: 42 }} dpr={[1, 1.45]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
        <AtlasContours />
      </Canvas>
    </div>
  );
}
