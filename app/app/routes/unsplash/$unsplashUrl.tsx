import { useParams } from "@remix-run/react";

export default function UnsplashUrl() {
  const url = useParams().unsplashUrl;
  return <img className="h-1/3" src={url} alt="Bilde" />;
}
