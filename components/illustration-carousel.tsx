"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const illustrations = [
  "/illustrations/illus-1.jpg",
  "/illustrations/illus-2.jpg",
  "/illustrations/illus-3.jpg",
  "/illustrations/illus-4.jpg",
  "/illustrations/illus-5.jpg",
  "/illustrations/illus-6.jpg",
];

export default function IllustrationCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // 动态计算画廊的滚动边界，确保拖拽到边缘时能精准停止并回弹
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="relative w-full mt-16 py-4 overflow-hidden">
      {/* 极简的交互提示，带有呼吸感 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute -top-6 right-8 md:right-12 flex items-center gap-3 text-zinc-500 text-[10px] tracking-[0.3em] uppercase z-10"
      >
        Drag to explore
        <span className="w-12 h-[1px] bg-zinc-700"></span>
      </motion.div>

      <div ref={carouselRef} className="w-full">
        {/* 核心物理拖拽层 */}
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragElastic={0.15} // 模拟苹果边缘的橡胶回弹手感
          dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }} // 丝滑的物理惯性滑动
          className="flex gap-6 md:gap-12 px-4 md:px-12 cursor-grab active:cursor-grabbing"
        >
          {illustrations.map((src, idx) => (
            <motion.div
              key={idx}
              className="relative shrink-0 w-[75vw] sm:w-[320px] md:w-[400px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-2xl"
              whileHover={{ scale: 0.98 }} // 鼠标悬浮时产生极其轻微的下压感（模拟屏幕按压）
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src={src}
                alt={`Digital Art ${idx + 1}`}
                // pointer-events-none 极其关键：防止浏览器默认的图片拖拽拦截了我们的画廊滑动
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              />
              {/* Apple 风格的屏幕反光质感叠加层 */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}