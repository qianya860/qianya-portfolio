import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import IllustrationCarousel from "@/components/illustration-carousel"
import { WechatButton } from "@/components/wechat-button" // 引入炫酷弹窗组件

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <div className="hidden md:block">
        <MouseFollower />
      </div>
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Social Media Manager & Content Strategist</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
              <span className="block mb-2 text-zinc-400">Hi, I{"'"}m</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 block leading-tight tracking-wide">
                QIANYA LÜ
                <br />
                吕倩雅
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-[600px]">
              深耕新媒体运营与内容创制四年
            </p>
            
            <div className="flex gap-4 pt-4">
              {/* 开头的微信：替换为弹窗组件 */}
              <WechatButton className="bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white" />

              {/* 邮箱 */}
              <Link href="mailto:860589339@qq.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section (完美保留你的等高布局) */}
      <section id="about" className="py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="视界与沉淀 / ABOUT" subtitle="My background and journey" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
            <div className="relative group h-full">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-zinc-500/20 to-zinc-700/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
              <div className="relative h-full min-h-[400px] w-full rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-xl transition-all duration-500 group-hover:border-zinc-700/50">
                <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-zinc-600/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 bg-zinc-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="text-7xl font-extralight tracking-tighter text-zinc-300">Qianya LÜ</span>
                  <div className="h-px w-12 bg-zinc-600 my-4"></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-zinc-500">Digital Vision</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-950/90 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </div>
                    <span className="text-sm font-medium text-zinc-300 tracking-wider">状态：开放联络，积极寻求机会</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full [&>div]:h-full">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  拥有 4 年新媒体全平台运营经验,熟悉微信生态(公众号、视频号)及抖音、小红书等主流平台的运营逻辑与从0-1搭建的完整流程。得益于数字媒体艺术的专业背景，我能够兼顾排版审美与基础设计、剪辑，确保优质内容高效落地。
                </p>
                <p className="text-lg text-zinc-300 mt-4 leading-relaxed">
                  擅长「内容策划 - 文案创作 - 数据复盘」的业务闭环，具备从 0-1 独立孵化新 IP 及从 1-N 放大账号矩阵的实战经验。善于深入分析平台算法与用户偏好，并基于数据持续打磨内容结构。
                </p>
                <p className="text-lg text-zinc-300 mt-4 leading-relaxed">
                  曾长负责官方百万级粉丝账号的矩阵运营，维稳并实现公众号单年净增粉 204 万；同时也成功策划过单条播放量近 300 万的爆款短视频，并在 3 个月内完成新账号的高效起盘与商业化变现。
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8 border-t border-zinc-800/50 pt-6">
                  <div className="space-y-1">
                    <div className="text-xs tracking-wider text-zinc-500 uppercase">姓名</div>
                    <div className="font-medium text-zinc-200">吕倩雅</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs tracking-wider text-zinc-500 uppercase">出生年月</div>
                    <div className="font-medium text-zinc-200">2000-06-19</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs tracking-wider text-zinc-500 uppercase">当前坐标</div>
                    <div className="font-medium text-zinc-200">江苏南京</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-xs tracking-wider text-zinc-500 uppercase">到岗时间</div>
                    <div className="font-medium text-zinc-200">6月15号后随时到岗</div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="专业技能 / SKILLS" subtitle="内容创制与平台运营矩阵" />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="内容策划" level={80} />
            <SkillBadge name="文案写作" level={95} />
            <SkillBadge name="账号定位" level={80} />
            <SkillBadge name="数据复盘" level={85} />
            <SkillBadge name="微信公众号" level={100} />
            <SkillBadge name="抖音" level={60} />
            <SkillBadge name="视频号" level={90} />
            <SkillBadge name="小红书" level={50} />
            <SkillBadge name="Premiere" level={75} />
            <SkillBadge name="Photoshop" level={85} />
            <SkillBadge name="Figma" level={85} />
            <SkillBadge name="Illustrator" level={80} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-zinc-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-zinc-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="精选作品 / FEATURED WORKS" subtitle="多维度的内容创制与视觉表达" />

          <div className="mt-20">
            <h3 className="text-2xl font-light text-zinc-300 mb-8 border-b border-zinc-800/50 pb-4 flex items-baseline">
              深度企划 <span className="text-sm text-zinc-500 ml-3 tracking-widest uppercase">/ WeChat Articles</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard title="回归自然：罗塞尔橡木花色精板的生命脉络" tags={["内容策划", "文案主笔", "内容矩阵"]} image="/articles/image-1.png" demoUrl="https://mp.weixin.qq.com/s/QAnb77gI64JfFchHP4q_CQ" />
              <ProjectCard title="100位设计师的花色乾坤" tags={["内容策划", "文案主笔", "品牌传播"]} image="/articles/image-2.png" demoUrl="https://mp.weixin.qq.com/s/YodmXPaZLJjeDjxMZkBvcg" />
              <ProjectCard title="NOVARO诺伽:万物生家" tags={["新媒体运营", "文案创作", "品牌搭建"]} image="/articles/image-3.jpg" demoUrl="https://mp.weixin.qq.com/s/2_WtgTkb2PDBDeVkDBDeVg" />
              <ProjectCard title="天翼智慧社区图鉴：情浓端午享安康，幸福相伴美好家" tags={["端午节", "SVG","卡片"]} image="/articles/image-6.jpg" demoUrl="https://mp.weixin.qq.com/s/4z1nrhBpHlokPsGghPGrOg" />
              <ProjectCard title="科技绽放美丽 智慧点亮生活" tags={["妇女节", "全案制作","SVG"]} image="/articles/image-7.jpg" demoUrl="https://mp.weixin.qq.com/s/YZw7GCBQW0yz23LtGJJylA" />
              <ProjectCard title="踏青正当时，天翼智慧社区助您无忧出行" tags={["产品宣传", "AI视觉","SVG"]} image="/articles/image-8.jpg" demoUrl="https://mp.weixin.qq.com/s/NW5Tn_OS14OLpCSu7DDhFw" />
              <ProjectCard title="天翼智慧社区喊你领618福利!随心选现金券天天抽→" tags={["内容策划", "长图设计"]} image="/articles/image-9.jpg" demoUrl="https://mp.weixin.qq.com/s/0AnixQwOeYnp078L2h6jaA" />
              <ProjectCard title="月满中秋夜，共享社区情" tags={["借势海报", "长图设计"]} image="/articles/image-10.jpg" demoUrl="https://mp.weixin.qq.com/s/5J3uCvQzjDndSMMzzbDzQg" />
              <ProjectCard title="智慧社区迎新春，万家灯火共团圆" tags={["节日策划", "动图制作"]} image="/articles/image-11.jpg" demoUrl="https://mp.weixin.qq.com/s/rPmiYtZOEA16uJYMXY2cQw" />
            </div>
          </div>

          <div className="mt-28">
            <h3 className="text-2xl font-light text-zinc-300 mb-8 border-b border-zinc-800/50 pb-4 flex items-baseline">
              公关通稿 <span className="text-sm text-zinc-500 ml-3 tracking-widest uppercase">/ Press Releases</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard title="天翼智慧社区亮相2024数字科技生态大会,创新引领数字生活" description="撰写并发布于国家级主流媒体平台的品牌公关稿件，精准传递品牌核心价值。" tags={["PR公关", "品牌宣发", "主流媒体"]} image="/articles/image-4.png" demoUrl="http://ex.chinadaily.com.cn/exchange/partners/82/rss/channel/cn/columns/snl9a7/stories/WS674eccf7a310b59111da6dbb.html" />
              <ProjectCard title="献礼517:天翼智慧社区再升级 科技赋能美好家" description="结合行业热点与品牌动向，撰写并在网易新闻端发布的深度稿件。" tags={["商业稿件", "公关发声", "平台分发"]} image="/articles/image-5.png" demoUrl="https://m.163.com/dy/article/JVMH495O0511BBQE.html" />
            </div>
          </div>

          <div className="mt-28">
            <h3 className="text-2xl font-light text-zinc-300 mb-8 border-b border-zinc-800/50 pb-4 flex items-baseline">
              视频编导 <span className="text-sm text-zinc-500 ml-3 tracking-widest uppercase">/ Video Direction</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ProjectCard title="NOVARO诺伽:万物生家" tags={["脚本编导", "品牌宣传", "IP孵化"]} image="/articles/image-12.png" demoUrl="/videos/video-1.mp4" />
              <ProjectCard title="方寸花色" tags={["内容架构", "短视频运营", "视觉表达"]} image="/articles/image-13.png" demoUrl="/videos/video-2.mp4" />
            </div>
          </div>

          <div className="mt-28">
            <h3 className="text-2xl font-light text-zinc-300 mb-8 border-b border-zinc-800/50 pb-4 flex items-baseline">
              数字艺术 <span className="text-sm text-zinc-500 ml-3 tracking-widest uppercase">/ Illustrations</span>
            </h3>
            <IllustrationCarousel />
          </div>
        </div>
      </section>

      {/* 工作经历版块 */}
      <section id="experience" className="py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-zinc-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-zinc-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="履历与沉淀 / EXPERIENCE" subtitle="从 0 到 1 的破局与百万级大盘操盘" />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* 联系方式版块 (完美保留你的宽幅居中) */}
      <section id="contact" className="py-16 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zinc-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-zinc-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="与我联络 / CONTACT" subtitle="期待探讨关于品牌视觉与内容的更多可能" />

          <div className="max-w-2xl mx-auto mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-light mb-8 text-zinc-200 tracking-wide text-center">联络档案</h3>
              <div className="space-y-8 flex flex-col items-center">
                
                <div className="flex items-center gap-5 group w-full max-w-sm">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-zinc-300">
                      <path d="M8.53 13.92c-3.52 0-6.38-2.4-6.38-5.36 0-2.96 2.86-5.36 6.38-5.36 3.52 0 6.38 2.4 6.38 5.36 0 .42-.06.83-.17 1.22-1.27-.47-2.7-.76-4.21-.76-4.63 0-8.38 3.12-8.38 6.97 0 .6.11 1.18.3 1.74-.29 1.13-1.12 2.37-1.12 2.37s1.39-.33 2.62-1.04c.82.26 1.69.41 2.58.41.83 0 1.63-.13 2.39-.37-.53-1.42-.81-2.97-.81-4.57 0-.21.01-.41.02-.61zm7.47-3.42c3.52 0 6.38 2.4 6.38 5.36s-2.86 5.36-6.38 5.36c-.89 0-1.75-.15-2.58-.41-1.23.71-2.62 1.04-2.62 1.04s.83-1.24 1.12-2.37c-.6-.79-.96-1.77-.96-2.82 0-2.96 2.86-5.36 6.38-5.36zM6.92 6.51c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm3.22 0c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm4.08 5.37c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65zm3.22 0c.36 0 .65.29.65.65s-.29.65-.65.65-.65-.29-.65-.65.29-.65.65-.65z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 tracking-wider uppercase mb-1">WeChat</div>
                    <div className="font-medium text-zinc-200">L860589339</div>
                  </div>
                </div>

                <div className="flex items-center gap-5 group w-full max-w-sm">
                  <div className="w-14 h-14 shrink-0 rounded-full bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                    <Mail className="h-6 w-6 text-zinc-300" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 tracking-wider uppercase mb-1">Email</div>
                    <div className="font-medium text-zinc-200">860589339@qq.com</div>
                  </div>
                </div>

              </div>

              <div className="mt-10 pt-8 border-t border-zinc-800/50 text-center">
                <h4 className="text-sm text-zinc-500 tracking-wider uppercase mb-4">当前状态 / Status</h4>
                <div className="flex items-center justify-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-zinc-300 text-sm">开放全职新机会</span>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Footer (加了一点底部边距 pb-24，为了不被手机底部的胶囊导航挡住) */}
      <footer className="border-t border-zinc-800/50 py-12 pb-24 md:pb-12 mt-20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl tracking-widest uppercase">
              <span className="text-zinc-200">QIANYA </span>
              <span className="text-zinc-600">LÜ</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2 tracking-wide">
              © {new Date().getFullYear()} Qianya Lü. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            {/* 结尾的微信：替换为弹窗组件 */}
            <WechatButton className="bg-zinc-800/30 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors" />

            <Link href="mailto:860589339@qq.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/30 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}