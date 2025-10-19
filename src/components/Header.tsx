import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
//import ChatContainer from "./Chatbot/ChatContainer";


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
    <div className="relative min-h-screen mb-8 flex flex-col w-full overflow-hidden" id="Header">
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

      {/* Center Chatbot
      <div className="relative flex flex-col items-center justify-center flex-1 text-white">
        <div className="flex flex-col items-center mb-1">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 p-0.5 rounded-full">
          <img 
            src="/Jadeer.png" 
            alt="Jadeer Real Estate Advisor" 
            className="w-28 h-28 rounded-full object-cover"
         />
          </div>
          <h2 className="mt-1 text-3xl font-medium opacity-100">What kind of property are you exploring?</h2>
        </div>
        <ChatContainer />
      </div>*/}
      <div className="relative flex flex-col items-center justify-center flex-1 text-white">
        <div className="flex flex-col items-center mb-1">
          <div className="bg-gradient-to-r from-gray-400 to-gray-400 p-0.5 rounded-full">
          </div>
          <h2 className="mt-1 text-5xl font-medium opacity-100">Redefining How You Find Home..</h2>
        </div>
      </div>






    </div>
  );
};

export default Header;


