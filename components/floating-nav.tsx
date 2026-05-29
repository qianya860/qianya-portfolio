"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  // 监听滚动，如果往下滑动了，给导航栏加更深的毛玻璃和阴影
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // fixed, top-6, left-1/2, -translate-x-1/2 是让它“顶部绝对居中”的魔法代码
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <nav 
        className={`flex items-center gap-1 sm:gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled 
            ? "bg-zinc-950/80 backdrop-blur-md border-zinc-800/50 shadow-2xl shadow-black/50" 
            : "bg-zinc-900/40 backdrop-blur-sm border-white/5"
        }`}
      >
        <Link href="#about" className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          关于
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <Link href="#skills" className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          技能
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <Link href="#projects" className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          作品
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <Link href="#experience" className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          履历
        </Link>
        <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
        <Link href="#contact" className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
          联络
        </Link>
      </nav>
    </div>
  )
}