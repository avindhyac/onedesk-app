import { useParams, Navigate } from "react-router-dom";
import ServiceDetailTemplate from "../components/ServiceDetailTemplate";
import { getServiceBySlug } from "../data/services";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  return <ServiceDetailTemplate service={service} />;
}
