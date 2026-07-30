import { ImageResponse } from "next/og";

export const alt = "BHARAT — A living atlas of a civilization";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, color: "#F2EEE5", background: "radial-gradient(circle at 72% 42%, #126C7055, transparent 34%), #07111D", fontFamily: "serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", color: "#C39B55", fontSize: 22, letterSpacing: "0.18em" }}><span>BHARAT</span><span>INDEPENDENT EDUCATIONAL PROJECT</span></div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ fontSize: 154, letterSpacing: "-0.06em", lineHeight: 0.85 }}>BHARAT</div><div style={{ marginTop: 30, fontSize: 44 }}>A living atlas of a civilization.</div></div>
      <div style={{ color: "#AEB7BD", fontSize: 23 }}>LAND · PEOPLE · HISTORY · IDEAS · FUTURE</div>
    </div>,
    size,
  );
}
