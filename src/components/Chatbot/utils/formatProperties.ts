// utils/formatProperties.ts
export function formatProperties(properties: any[]) {
  return properties.map((p) => ({
    id: p.id,
    title: p.title,
    image: p.photos?.[0] || "/placeholder.png",
    price: p.priceSar ? `${p.priceSar.toLocaleString()} SAR` : "Price on request",
    bedrooms: p.bedrooms ?? "-",
    bathrooms: p.bathrooms ?? "-",
    location: `${p.project?.city || ""} ${p.project?.district || ""}`,
    handoverDate: p.project?.handoverDate || null,
    area: p.totalArea ? `${p.totalArea} m²` : null,
  }));
}
