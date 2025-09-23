import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import ChatContainer from "./Chatbot/ChatContainer";

const Header = () => {
  const images = [
    "/riyadh11.png","/riyadh12.png","/riyadh13.png","/riyadh14.png",
    "/riyadh15.png","/riyadh16.png","/riyadh17.png","/riyadh18.png",
    "/riyadh19.png","/riyadh20.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  // Preload images
  useEffect(() => {
    images.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () =>
        setLoaded((prev) => {
          const copy = [...prev];
          copy[idx] = true;
          return copy;
        });
    });
  }, []);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative min-h-screen mb-4 flex flex-col w-full overflow-hidden" id="Header">
      {/* Background slideshow */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: loaded[currentIndex] ? `url(${images[currentIndex]})` : "none",
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <Navbar />

      {/* Center Chatbot */}
      <div className="relative flex flex-col items-center justify-center flex-1 text-white">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-lg">
            <span className="text-3xl">🤖</span>
          </div>
          <h2 className="mt-4 text-lg font-medium opacity-80">Real Estate Advisor</h2>
        </div>
        <ChatContainer />
      </div>
    </div>
  );
};

export default Header;
