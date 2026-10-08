import { Reveal } from "@/components/ui/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { CAREERS } from "@/lib/site"
import { tracks } from "./content"

export function Tracks() {
  return (
    <section id="tracks" className="section-y border-t border-white/[0.06] bg-[#08080A]">
      <div className="container-page">
        <SectionHeading title="Pick a track." lead={`Internship tracks on ${CAREERS.name}, and the tools each one works with.`} />

        <ul className="mt-12 border-b border-white/[0.08] sm:mt-16">
          {tracks.map((track, i) => (
            <li key={track.name} className="border-t border-white/[0.08]">
              <Reveal
                y={16}
                delay={i * 0.06}
                className="grid gap-5 py-8 sm:py-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-12"
              >
                <h3 className="font-fancy text-5xl font-light leading-[1.1] tracking-tight text-headings sm:text-7xl lg:col-span-7 lg:text-8xl">
                  {track.name}
                </h3>
                <ul aria-label={`${track.name} focus areas`} className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end">
                  {track.focus.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-white/[0.12] px-4 py-2 font-heading text-sm text-headings/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
