export function SectionHeading({ 
  title, 
  subtitle 
}: { 
  title: string
  subtitle?: string 
}) {
  // 自动识别 " / "，把中文和英文拆分开来做不同的排版设计
  const parts = title.split(' / ')

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16 relative z-20">
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-zinc-100 flex flex-col md:flex-row items-center gap-2 md:gap-4">
        {/* 中文部分：稍微亮一点 */}
        <span>{parts[0]}</span>
        
        {/* 英文部分：如果有的话，变成细体、灰色、全大写、字间距拉宽 */}
        {parts.length > 1 && (
          <span className="text-zinc-500 font-extralight tracking-widest text-2xl md:text-4xl uppercase mt-1 md:mt-0">
            <span className="hidden md:inline mr-2">/</span>
            {parts[1]}
          </span>
        )}
      </h2>
      
      {/* 底部副标题 */}
      {subtitle && (
        <p className="text-zinc-400 text-sm md:text-base tracking-[0.2em] uppercase font-light max-w-2xl">
          {subtitle}
        </p>
      )}

      {/* 极简渐变下划线 */}
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-6 opacity-50"></div>
    </div>
  )
}