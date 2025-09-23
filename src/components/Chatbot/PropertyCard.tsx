import { motion } from "framer-motion";

export type Property = {
  id: string | number;
  title: string;
  image: string;
  price: string;
  location: string;
  bedrooms: number | string;
  bathrooms: number | string;
  area?: string;
};

const PropertyCard = ({ property }: { property: Property }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden w-full max-w-sm flex flex-col"
  >
    {/* 🖼️ Image */}
    <img
      src={property.image}
      alt={property.title}
      className="h-40 w-full object-cover"
    />

    {/* 📋 Content */}
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="font-semibold text-base text-gray-800 line-clamp-1">
        {property.title}
      </h4>
      <p className="text-sm text-gray-500">{property.location}</p>

      <p className="text-lg font-bold text-indigo-600 mt-2">
        {property.price}
      </p>

      {/* Details */}
      <div className="flex items-center text-sm text-gray-600 mt-3 space-x-4">
        <span>🛏 {property.bedrooms}</span>
        <span>🛁 {property.bathrooms}</span>
        {property.area && <span>📐 {property.area}</span>}
      </div>

      {/* 🔘 Button */}
      <button
        className="mt-4 w-full bg-indigo-600 text-white text-sm font-medium py-2 px-3 rounded-lg hover:bg-indigo-700 transition"
        onClick={() => alert(`More details about ${property.title}`)}
      >
        More Details
      </button>
    </div>
  </motion.div>
);

export default PropertyCard;