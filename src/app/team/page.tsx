import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import TeamSection from "@/components/sections/TeamSection"
import { teamJsonLd } from "@/components/people/JsonLd"
import { JsonLd } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"
import { coreTeam, founders } from "@/data/people"

export const metadata = pageMetadata({
  title: "Team",
  description:
    "Meet the founders and core team behind LumoraSpace, an IT solutions company currently focused on education and hackathons.",
  path: "/team",
})

export default function TeamPage() {
  return (
    <>
      <JsonLd data={teamJsonLd([...founders, ...coreTeam])} />
      <Navbar />
      <main id="main" className="flex-1 bg-background">
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
