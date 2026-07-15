import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <PageTransition>
      <Seo title="Page not found" />
      <section className="notfound">
        <div className="notfound__inner">
          <Eyebrow tone="ember">Error 404</Eyebrow>
          <p className="notfound__code">404</p>
          <h1 className="notfound__title">
            This page took the day off<span className="dot">.</span>
          </h1>
          <p className="notfound__text">
            The page you're after doesn't exist or has moved. Let's get you back
            to something useful.
          </p>
          <div className="notfound__ctas">
            <Button variant="primary" size="lg" dot as={Link} to="/">
              Back to home
            </Button>
            <Button variant="outline" size="lg" as={Link} to="/contact">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
