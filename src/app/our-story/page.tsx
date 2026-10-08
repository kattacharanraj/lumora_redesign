import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Reveal } from "@/components/ui/reveal"
import { LoopSequence } from "@/components/story/loop-sequence"
import { ScrollText } from "@/components/story/scroll-text"
import { EcosystemRows } from "@/components/features/ecosystem-rows"
import { pageMetadata } from "@/lib/metadata"

const description =
  "Why we started LumoraSpace, and where it is today: an IT solutions company focused on mentor-led programs, hackathons and opportunities for students."

export const metadata = pageMetadata({ title: "Our story", description, path: "/our-story" })

const loop = [
  "Opening YouTube",
  "Saving roadmaps",
  "Watching tutorials",
  "Starting a project",
  "Quitting the project",
  "Starting again",
] as const

const principles = [
  { title: "Clarity", body: "Knowing where to begin, with the noise stripped away and a real learning path in front of you." },
  { title: "Community", body: "Growing alongside people on the same path, sharing milestones and debugging together." },
  { title: "Confidence", body: "Belief built through action: designing, coding and shipping software that works." },
  { title: "Growth", body: "Steady progress over the long term, and readiness for real professional work." },
]

const h2Class = "max-w-4xl text-4xl leading-[1.08] tracking-tight text-headings text-balance sm:text-5xl lg:text-6xl"
const leadClass = "max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"

export default function OurStoryPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-background">
        {/* Opening */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]"
          />
          <div className="container-page page-header relative">
            <p className="eyebrow mb-6">Our story</p>
            <h1 className="max-w-5xl pb-1 text-5xl leading-[1.1] tracking-tight text-headings text-balance sm:text-7xl lg:text-8xl">
              Why is learning technology so <em className="italic">lonely?</em>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl md:mt-12">
              We built LumoraSpace not because we had all the answers, but because we were asking{" "}
              <span className="text-headings">the same questions.</span>
            </p>
          </div>
        </section>

        {/* Where it started: the tutorial loop */}
        <section className="section-y border-t border-white/[0.06]">
          <div className="container-page">
            <h2 className={h2Class}>It started with confusion.</h2>
            <p className={`mt-6 ${leadClass}`}>
              Most students begin the same way, in a loop of information overload that feels like progress but rarely
              adds up to skill.
            </p>

            <LoopSequence steps={loop} className="mt-12 flex max-w-3xl flex-wrap items-center gap-3 md:mt-16" />

            <p className="mt-20 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl md:mt-28">
              We know the feeling: the quiet belief that everyone else knows something you don&apos;t.
            </p>
            <ScrollText
              text="But the problem was never talent. It was direction."
              className="mt-6 max-w-4xl pb-1 font-fancy text-4xl font-light leading-[1.12] text-headings text-balance sm:text-5xl lg:text-6xl"
            />
          </div>
        </section>

        {/* What was missing */}
        <section className="section-y border-t border-white/[0.06] bg-[#08080A]">
          <div className="container-page">
            <ScrollText
              as="h2"
              unit="line"
              text={"Too many resources.\nToo many opinions.\nToo many paths.\nNot enough clarity."}
              className="pb-1 text-[2.75rem] leading-[1.1] tracking-tight text-headings sm:text-6xl lg:text-7xl"
            />
            <div className="mt-12 grid md:mt-16 lg:grid-cols-12">
              <p className="text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl lg:col-span-6 lg:col-start-6">
                The more students we spoke to, the more we heard the same story. The issue wasn&apos;t access to
                information. It was the absence of <span className="text-headings">guidance</span>,{" "}
                <span className="text-headings">community</span> and{" "}
                <span className="text-headings">accountability</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Why we exist */}
        <section className="section-y border-t border-white/[0.06]">
          <div className="container-page">
            <h2 className={h2Class}>We created LumoraSpace to give students what many of us never had.</h2>
            <ScrollText
              unit="line"
              text={"Direction.\nConfidence.\nBelonging."}
              className="mt-10 pb-1 font-fancy text-6xl font-light italic leading-[1.1] tracking-tight text-headings sm:text-7xl md:mt-14 lg:text-8xl"
            />

            <ul className="mt-16 grid gap-x-10 gap-y-10 border-t border-white/[0.08] pt-10 sm:grid-cols-2 md:mt-24 lg:grid-cols-4">
              {principles.map((principle, i) => (
                <li key={principle.title}>
                  <Reveal y={12} delay={(i % 4) * 0.06}>
                    <h3 className="text-xl font-medium text-headings">{principle.title}</h3>
                    <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-muted-foreground text-pretty sm:text-base">
                      {principle.body}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Where we are now */}
        <section className="section-y border-t border-white/[0.06]">
          <div className="container-page">
            <p className="eyebrow mb-5">Where we are now</p>
            <h2 className={h2Class}>Today, LumoraSpace is an IT solutions company.</h2>
            <p className={`mt-6 ${leadClass}`}>
              Our goal is end-to-end technology work: AI, data, cloud, software, design and MVPs. Right now, we focus on
              education, hackathons and opportunities for students.
            </p>
            <EcosystemRows className="mt-12 md:mt-16" />
          </div>
        </section>

        {/* Closing */}
        <section className="relative overflow-hidden border-t border-white/[0.06] bg-[#08080A] section-y">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[28rem] bg-[radial-gradient(60%_60%_at_50%_100%,rgba(255,255,255,0.05),transparent)]"
          />
          <Reveal className="container-page relative text-center">
            <h2 className="mx-auto max-w-3xl text-4xl leading-[1.08] tracking-tight text-headings text-balance sm:text-5xl lg:text-6xl">
              We&apos;re still early. But the mission is clear.
            </h2>
            <p className="mx-auto mt-8 max-w-2xl pb-1 font-fancy text-2xl italic leading-[1.25] text-headings/90 text-balance sm:text-3xl">
              No student should have to figure it out alone.
            </p>
            <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link href="/cohorts" className="btn-primary min-h-12 text-[#050505]">
                Explore programs
              </Link>
              <Link href="/team" className="btn-secondary min-h-12">
                Meet the team
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  )
}
