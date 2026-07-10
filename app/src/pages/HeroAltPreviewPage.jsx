import PageTransition from "../components/PageTransition";
import HeroAlt from "../sections/HeroAlt";

// Temporary preview route for comparing the desk-orbit hero variant against
// the current one - not linked from nav, remove once a direction is picked.
export default function HeroAltPreviewPage() {
  return (
    <PageTransition>
      <HeroAlt />
    </PageTransition>
  );
}
