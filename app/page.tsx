import { LandingPage } from "@/components/landing-page";
import { getStructuredData } from "@/lib/schema";

export default function Home() {
  const structuredData = getStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LandingPage />
    </>
  );
}

