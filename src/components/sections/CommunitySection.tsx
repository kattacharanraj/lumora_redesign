import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { ARENA, CAREERS, EDU, SOCIAL } from "@/lib/site"
import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { CHANNELS, type Channel } from "@/components/community/channels"
import { CommunityHero } from "@/components/community/CommunityHero"
import { MoveList, type MoveItem } from "@/components/community/MoveList"

const MOVES: MoveItem[] = [
  { verb: "Ask", line: "Bring the questions you're stuck on to people a few steps ahead of you." },
  { verb: "Share", line: "Post early drafts, broken code and rough wireframes. Feedback is how they get better." },
  { verb: "Learn", line: "See how your peers solve real problems, not only what tutorials show." },
  { verb: "Build", line: "Form teams, hack together and turn conversations into shipped projects." },
  { verb: "Grow", line: "Carry what you learn here into programs, hackathons and internships." },
]

type Happening = {
  title: string
  line: string
  internal: { href: string; label: string }
  external?: { href: string; host: string }
}

const HAPPENINGS: Happening[] = [
  {
    title: "Programs",
    line: "Live, mentor-led programs on LumoraSpace Academy, with a certificate when you finish.",
    internal: { href: "/cohorts", label: "Explore programs" },
    external: { href: EDU.courses, host: EDU.host },
  },
  {
    title: "Hackathons",
    line: "Ticketed team hackathons and seasonal solo challenges on Lumora Arena.",
    internal: { href: "/hackathons", label: "Explore hackathons" },
    external: { href: ARENA.home, host: ARENA.host },
  },
  {
    title: "Opportunities",
    line: "Verified internships on Lumora Careers, with the start date, hours, pay and mentorship stated up front.",
    internal: { href: "/opportunities", label: "Explore opportunities" },
    external: { href: CAREERS.home, host: CAREERS.host },
  },
  {
    title: "Mentors",
    line: "The practitioners who lead the programs and guide students through them.",
    internal: { href: "/mentors", label: "Meet the mentors" },
  },
]

function ExternalLink({ href, className, children }: { href: string; className: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

const cardBase =
  "group relative isolate flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0B0B0C] transition-[border-color,transform] duration-300 hover:border-white/20 active:scale-[0.99]"

const cardCta =
  "font-heading text-sm font-medium text-headings underline decoration-white/25 underline-offset-4 transition-colors group-hover:decoration-white"

/** Discord is the home base, so it gets the large tile. */
function FeaturedChannel({ channel }: { channel: Channel }) {
  return (
    <ExternalLink href={channel.href} className={`${cardBase} min-h-[20rem] p-7 sm:p-10 lg:min-h-[28rem]`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_60%_at_100%_0%,rgba(255,255,255,0.07),transparent_70%)]"
      />
      <div className="flex items-center justify-between gap-4">
        <span className="font-heading text-sm text-muted-foreground">{channel.handle}</span>
        <ArrowUpRight aria-hidden className="size-5 text-muted-foreground transition-colors group-hover:text-headings" />
      </div>
      <div className="mt-auto pt-16">
        <h3 className="font-fancy text-5xl font-light leading-[1.05] tracking-tight text-headings sm:text-6xl">
          {channel.name}
        </h3>
        <p className="mt-5 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          {channel.purpose}
        </p>
        <span className={`mt-8 inline-block ${cardCta}`}>{channel.cta}</span>
      </div>
    </ExternalLink>
  )
}

function ChannelCard({ channel }: { channel: Channel }) {
  return (
    <ExternalLink href={channel.href} className={`${cardBase} p-7 sm:p-8`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-2xl font-medium text-headings">{channel.name}</h3>
          <p className="mt-1 font-heading text-sm text-muted-foreground">{channel.handle}</p>
        </div>
        <ArrowUpRight aria-hidden className="size-5 text-muted-foreground transition-colors group-hover:text-headings" />
      </div>
      <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">{channel.purpose}</p>
      <span className={`mt-auto pt-8 ${cardCta}`}>{channel.cta}</span>
    </ExternalLink>
  )
}

export default function CommunitySection() {
  const [featured, ...rest] = CHANNELS

  return (
    <>
      <CommunityHero />

      {/* A community should help you move: sticky heading, verb list with a scroll-filled rail */}
      <section className="section-y border-t border-white/[0.06] bg-[#08080A]">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                title="A community should help you move."
                lead="Most students don't quit because they can't. They quit because they're building alone."
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <MoveList items={MOVES} />
          </div>
        </div>
      </section>

      {/* What happens here: editorial rows, each with its page and its sister site */}
      <section className="section-y border-t border-white/[0.06]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="What happens here"
              lead="The community sits alongside everything LumoraSpace runs."
            />
          </Reveal>

          <ul className="mt-14 border-t border-white/[0.08] sm:mt-16">
            {HAPPENINGS.map((item, i) => (
              <li key={item.title} className="border-b border-white/[0.08]">
                <Reveal
                  delay={i * 0.05}
                  y={16}
                  className="grid gap-y-3 py-8 sm:py-10 lg:grid-cols-12 lg:items-baseline lg:gap-x-8"
                >
                  <h3 className="font-heading text-2xl font-medium text-headings sm:text-[1.75rem] lg:col-span-4">
                    {item.title}
                  </h3>
                  <p className="max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:col-span-5">
                    {item.line}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 lg:col-span-3 lg:flex-col lg:items-end">
                    <Link
                      href={item.internal.href}
                      className="group inline-flex min-h-11 items-center gap-2 font-heading text-sm font-medium text-headings"
                    >
                      {item.internal.label}
                      <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                    {item.external && (
                      <ExternalLink
                        href={item.external.href}
                        className="inline-flex min-h-11 items-center gap-1.5 font-heading text-sm text-muted-foreground transition-colors hover:text-headings"
                      >
                        {item.external.host}
                        <ArrowUpRight aria-hidden className="size-4" />
                      </ExternalLink>
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Channels: asymmetric, Discord large, WhatsApp and Instagram stacked */}
      <section id="channels" className="section-y border-t border-white/[0.06] bg-[#08080A]">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              title="Where to find us"
              lead="Each channel is used for something different. Join one or all three."
            />
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-12">
            <li className="md:col-span-2 lg:col-span-7 lg:row-span-2">
              <Reveal y={16} className="h-full">
                <FeaturedChannel channel={featured} />
              </Reveal>
            </li>
            {rest.map((channel, i) => (
              <li key={channel.id} className="lg:col-span-5">
                <Reveal delay={(i + 1) * 0.08} y={16} className="h-full">
                  <ChannelCard channel={channel} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="section-y relative isolate overflow-hidden border-t border-white/[0.06]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(255,255,255,0.06),transparent_70%)]"
        />
        <Reveal className="container-page flex flex-col items-center text-center">
          <h2 className="max-w-4xl text-balance font-fancy text-5xl font-light leading-[1.05] tracking-tight text-headings sm:text-6xl lg:text-8xl">
            Ready to find your people?
          </h2>
          <p className="mt-6 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-lg">
            Start in the WhatsApp group, then explore the current programs.
          </p>
          <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:flex-row">
            <ExternalLink href={SOCIAL.whatsapp} className="btn-primary w-full gap-2 sm:w-auto">
              Join WhatsApp
              <ArrowUpRight aria-hidden className="size-4" />
            </ExternalLink>
            <Link href="/cohorts" className="btn-secondary w-full sm:w-auto">
              Explore programs
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
