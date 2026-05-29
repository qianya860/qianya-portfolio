"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

// 修复了字段名：将 year 改回了底层代码认识的 period
const experiences = [
  {
    title: "新媒体运营 & 品牌策划",
    company: "东一创造（南京）设计有限公司",
    period: "2026.03 - 2026.06",
    description: "全面负责品牌内容的策划与落地实施。主导并完成「NOVARO诺伽」品牌矩阵从 0 到 1 的搭建，横跨公众号、视频号、抖音及小红书生态，并把控全平台的内容调性与文案撰写。",
  },
  {
    title: "新媒体运营 & 内容策划",
    company: "南京汇龙科技有限公司",
    period: "2024.03 - 2025.12",
    description: "负责中国电信旗下「天翼智慧社区」矩阵的内容运营。搭建品牌动态与行业干货体系，通过严谨的数据复盘驱动内容优化。单年实现公众号净增粉 204 万，单篇头条最高阅读量突破 6 万+，并深度参与多项品牌公关与矩阵协同运作。",
  },
  {
    title: "新媒体运营 (IP孵化负责人)",
    company: "南京慧眼文化传播有限公司",
    period: "2023.04 - 2023.11",
    description: "从 0 到 1 独立操盘健康科普视频号 IP「小孙养生运动」。全链条包揽人设定位、脚本撰写、拍摄剪辑与平台分发。曾策划出近 300 万播放的爆款视频，实现 3 个月内涨粉 2.8 万，并成功对接促成 16 项商业合作。",
  },
  {
    title: "数字媒体艺术 / 艺术学学士",
    company: "云南财经大学",
    period: "2018.09 - 2022.06",
    description: "系统学习视觉传达与新媒体艺术，构筑了扎实的排版审美、基础设计与影像剪辑能力。在校期间荣获 HKDADC 香港数字艺术设计大赛一等奖等荣誉，为后续的优质内容呈现奠定坚实底色。",
  }
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l before:border-zinc-800 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 剔除紫粉色，重塑为高级暗色毛玻璃卡片 */}
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/60 p-8 transition-all duration-500 hover:bg-zinc-800/50 hover:border-zinc-600/50 group shadow-2xl">
              
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-zinc-100 tracking-wide mb-2">{experience.title}</h3>
                <div className="text-xs text-zinc-500 tracking-wider uppercase mb-5 flex items-center gap-2">
                  <span className="text-zinc-400">{experience.company}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-700"></span>
                  <span>{experience.period}</span>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base group-hover:text-zinc-300 transition-colors duration-300">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 剔除原版艳丽的圆点，重塑为克制的金属质感节点 */}
          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-700 z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}