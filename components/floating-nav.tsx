"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // 魔法在这里：手机端 bottom-6（在底部），电脑端 md:top-6 md:bottom-auto（在顶部）
    <div className="fixed bottom-6 md:bottom-auto md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[90%] max-w-sm md:w-auto">
      <nav 
        className={`flex items-center justify-between md:justify-center w-full gap-1 sm:gap-2 px-5 md:px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled 
            ? "bg-zinc-950/90 backdrop-blur-md border-zinc-800/50 shadow-2xl shadow-black/50" 
            : "bg-zinc-900/60 backdrop-blur-md border-white/10"
        }`}
      >
        <Link href="#about" className="px-2 py-1 text-[13px] md:text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          关于
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden md:block"></div>
        <Link href="#skills" className="px-2 py-1 text-[13px] md:text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          技能
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden md:block"></div>
        <Link href="#projects" className="px-2 py-1 text-[13px] md:text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          作品
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden md:block"></div>
        <Link href="#experience" className="px-2 py-1 text-[13px] md:text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          履历
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700 hidden md:block"></div>
        <Link href="#contact" className="px-2 py-1 text-[13px] md:text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          联络
        </Link>
      </nav>
    </div>
  )
}