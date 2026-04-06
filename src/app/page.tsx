import LandingApple from "@/components/LandingApple";
import { loadLandingForTina } from "@/lib/load-landing";

export const metadata = {
  title: "Lumen Atelier — Beauty Salon",
  description: "Editorial hair color and skin rituals in Brooklyn.",
};

export default function HomePage() {
  const props = loadLandingForTina("home.md");
  return <LandingApple {...props} />;
}
