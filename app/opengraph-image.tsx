import { ImageResponse } from "next/og";

export const alt = "Dental Service Premium — премиальная стоматология в Усть-Каменогорске";
export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative",
          background:
            "linear-gradient(135deg, #2f2621 0%, #614b3d 45%, #f6ece2 100%)",
          overflow: "hidden",
          color: "#fff9f3",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(255,255,255,0.18), transparent 22%), radial-gradient(circle at 85% 75%, rgba(255,255,255,0.16), transparent 18%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "60px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <div
              style={{
                display: "flex",
                width: 88,
                height: 88,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "linear-gradient(135deg, #a68368 0%, #6e5443 100%)",
                boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
                fontSize: 30,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textIndent: "0.2em",
              }}
            >
              DSP
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  fontSize: 34,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                }}
              >
                Dental Service Premium
              </div>
              <div
                style={{
                  fontSize: 18,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#e9dbcf",
                }}
              >
                Ust-Kamenogorsk
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 22,
              maxWidth: 920,
            }}
          >
            <div
              style={{
                fontSize: 74,
                lineHeight: 1.02,
                fontWeight: 700,
              }}
            >
              Премиальная стоматология в Усть-Каменогорске
            </div>
            <div
              style={{
                fontSize: 30,
                lineHeight: 1.35,
                maxWidth: 800,
                color: "#f3e7da",
              }}
            >
              Современное лечение, эстетика улыбки и сервис, в котором спокойно
              с первого визита.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
