"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WechatButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 触发按钮：去掉了悬浮 title，改成了点击打开弹窗 */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className={`rounded-full ${className}`}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M8.53 13.92c-3.52 0-6.38-2.4-6.38-5.36 0-2.96 2.86-5.36 6.38-5.36 3.52 0 6.38 2.4 6.38 5.36 0 .42-.06.83-.17 1.22-1.27-.47-2.7-.76-4.21-.76-4.63 0-8.38 3.12-8.38 6.97 0 .6.11 1.18.3 1.74-.29 1.13-1.12 2.37-1.12 2.37s1.39-.33 2.62-1.04c.82.26 1.69.41 2.58.41.83 0 1.63-.13 2.39-.37-.53-1.42-.81-2.97-.81-4.57 0-.21.01-.41.02-.61zm7.47-3.42c3.52 0 6.38 2.4 6.38 5.36s-2.86 5.36-6.38 5.36c-.89 0-1.75-.15-2.58-.41-1.23.71-2.62 1.04-2.62 1.04s.83-1.24 1.12-2.37c-.6-.79-.96-1.77-.96-2.82 0-2.96 2.86-5.36 6.38-5.36zM6.92 6.51c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm3.22 0c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm4.08 5.37c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm3.22 0c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65z"/>
        </svg>
        <span className="sr-only">WeChat</span>
      </Button>

      {/* 弹窗遮罩层（毛玻璃效果） */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" 
          onClick={() => setIsOpen(false)}
        >
          {/* 弹窗主体 */}
          <div 
            className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-in fade-in zoom-in duration-200" 
            onClick={(e) => e.stopPropagation()} // 阻止点击内部时关闭弹窗
          >
            {/* 右上角关闭按钮 */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            <h3 className="text-zinc-200 font-medium mb-6 tracking-wide">扫一扫添加微信</h3>
            
            {/* 二维码图片区域 */}
            <div className="bg-white p-3 rounded-xl mb-6 relative w-56 h-56 flex items-center justify-center overflow-hidden">
              <span className="text-zinc-400 text-sm absolute z-0 text-center px-4 leading-relaxed">
                请将二维码命名为<br/>
                <strong className="text-zinc-600">wechat-qr.png</strong><br/>
                放入 public 文件夹
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/wechat-qr.png" 
                alt="WeChat QR Code" 
                className="w-full h-full object-cover rounded-lg relative z-10 bg-white transition-opacity" 
                onError={(e) => e.currentTarget.style.opacity = '0'} // 如果没图片就隐藏，露出底部的文字提示
              />
            </div>

            <p className="text-zinc-400 text-sm tracking-widest uppercase">WeChat: L860589339</p>
          </div>
        </div>
      )}
    </>
  )
}