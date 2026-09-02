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
          background: "#F7F3EA",
          color: "#332619",
        }}
      >
        <div
          style={{
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#B04A26",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 900,
          }}
        >
          Stop planning your comeback. Start living it.
        </div>
        <div style={{ marginTop: 28, fontSize: 28, color: "#5C4B3A" }}>
          Retreats &middot; Life Coaching &middot; Research Peptides
        </div>
      </div>
    ),
    { ...size }
  );
}
