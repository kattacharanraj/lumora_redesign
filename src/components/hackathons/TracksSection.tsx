import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { TRACKS } from "./content"

export function TracksSection() {
  return (
    <section id="tracks" className="section-y border-t border-white/[0.06] bg-[#08080A]">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            title="Build in the stack you know."
            lead="Hackathon tracks on Arena include these languages and frameworks."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:mt-14 sm:gap-3">
            {TRACKS.map((track) => (
              <li
                key={track}
                className="rounded-full border border-white/[0.12] bg-white/[0.02] px-5 py-2.5 font-heading text-sm text-headings/90 sm:px-7 sm:py-3.5 sm:text-lg"
              >
                {track}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
