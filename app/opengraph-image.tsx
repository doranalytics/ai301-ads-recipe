import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "How to AI by Ruben Hassid — Class 301: Build your ads harness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(path.join(process.cwd(), "public/brand/how-to-ai-logo.png"));
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#ffffff", color: "#000000", padding: 64, alignItems: "center", gap: 66 }}>
      <img src={`data:image/png;base64,${logo.toString("base64")}`} width={280} height={280} alt="How to AI" />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ fontSize: 18, color: "#757575", letterSpacing: 2, marginBottom: 28 }}>BY RUBEN HASSID · CLASS 301</div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "serif", fontSize: 70, lineHeight: 1.08 }}><span>Your posts.</span><span>Your ads.</span><span style={{ color: "#ff6719" }}>One place.</span></div>
        <div style={{ fontSize: 23, color: "#363737", marginTop: 30 }}>Copy. Personalize. Publish.</div>
      </div>
    </div>, size
  );
}
