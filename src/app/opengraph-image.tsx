import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#241d15",
          color: "#f7ecd8",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#e8b95c",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 68,
            fontWeight: 800,
            lineHeight: 1.05,
            maxWidth: 900,
            textTransform: "uppercase",
          }}
        >
          Stop planning your comeback. Start living.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#c98a4b" }}>
          Retreats &middot; Life Coaching &middot; Research Peptides
        </div>
      </div>
    ),
    { ...size }
  );
}
