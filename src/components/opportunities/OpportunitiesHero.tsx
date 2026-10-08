import type { CSSProperties } from "react"
import { ArrowUpRight } from "lucide-react"
import { ARENA, CAREERS } from "@/lib/site"
import { cn } from "@/lib/utils"
import { steps } from "./content"

// The entrance runs on CSS keyframes, so it plays straight from the server HTML
// with no hydration step to get wrong. `motion-safe:` leaves every element in its
// resting state (text shown, path fully drawn) for reduced-motion users.
const KEYFRAMES =
  "@keyframes ls-opp-rise{from{opacity:0;transform:translate3d(0,1.25rem,0)}}" +
  "@keyframes ls-opp-fill{from{transform:scaleX(0)}}" +
  "@keyframes ls-opp-lit{from{opacity:0}}"

const rise = "motion-safe:animate-[ls-opp-rise_1s_cubic-bezier(0.16,1,0.3,1)_both]"
const fill = "motion-safe:animate-[ls-opp-fill_0.35s_linear_both]"
const lit = "motion-safe:animate-[ls-opp-lit_0.3s_ease-out_both]"

const delay = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` })

/** When the first step's segment starts drawing, and the gap before each next one. */
const STEP_START = 0.6
const STEP_GAP = 0.3

export function OpportunitiesHero() {
  return (
    <section
      aria-labelledby="opportunities-hero-title"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden border-b border-white/[0.06]"
    >
      <style>{KEYFRAMES}</style>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_85%_0%,rgba(255,255,255,0.06),transparent_70%)]"
      />

      <div className="container-page flex flex-1 flex-col gap-14 pb-12 pt-24 sm:pb-16">
        <div className="max-w-4xl">
          <h1
            id="opportunities-hero-title"
            className={cn(
              "font-fancy text-[3.25rem] font-light leading-none tracking-tight text-headings text-balance sm:text-7xl lg:text-8xl xl:text-[7rem]",
              rise,
            )}
            style={delay(0.1)}
          >
            Find what&apos;s next.
          </h1>
          <p
            className={cn(
              "mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground text-pretty sm:mt-8 sm:text-lg",
              rise,
            )}
            style={delay(0.22)}
          >
            Verified internships, real projects and 1:1 mentorship on {CAREERS.name}, and competitions on {ARENA.name}.
          </p>

          <div className={cn("mt-10 flex flex-col gap-3 sm:flex-row sm:items-center", rise)} style={delay(0.34)}>
            <a
              href={CAREERS.home}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary min-h-12 w-full gap-2 whitespace-nowrap sm:w-auto"
            >
              Visit Careers
              <ArrowUpRight aria-hidden className="size-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href="#how-it-works" className="btn-secondary min-h-12 w-full whitespace-nowrap sm:w-auto">
              How it works
            </a>
          </div>
        </div>

        <StepPath />
      </div>
    </section>
  )
}

/**
 * The Careers flow from application to finished portfolio: the hero's picture of what
 * happens on Lumora Careers. Each step owns one segment of a path that draws step by
 * step on load. Two by two on phones, one row from md up.
 */
function StepPath() {
  return (
    <ol
      aria-label={`The path on ${CAREERS.name}`}
      className="mt-auto grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-8"
    >
      {steps.map((step, i) => {
        const at = STEP_START + i * STEP_GAP
        return (
          <li key={step.verb} className="relative pt-6 sm:pt-8">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/[0.12]" />
            <span
              aria-hidden
              className={cn("absolute inset-x-0 top-0 h-px origin-left bg-white/60", fill)}
              style={delay(at)}
            />
            <span
              aria-hidden
              className={cn("absolute -top-1 left-0 block size-[9px] rounded-full bg-white", lit)}
              style={delay(at)}
            />
            <span
              className={cn(
                "block font-fancy text-4xl font-light leading-[1.1] tracking-tight text-headings sm:text-5xl lg:text-7xl xl:text-8xl",
                rise,
              )}
              style={delay(at - 0.1)}
            >
              {step.verb}
            </span>
            <span className={cn("mt-2 block font-heading text-sm text-muted-foreground", rise)} style={delay(at)}>
              {step.short}
            </span>
          </li>
        )
      })}
    </ol>
  )
}
