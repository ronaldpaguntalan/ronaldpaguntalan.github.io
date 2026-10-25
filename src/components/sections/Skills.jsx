import { skillGroups } from "../../data/content"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { techIcons } from "../ui/techIcons"

// One flat collection of every skill and tool, de-duplicated, in source order.
const allSkills = [...new Set(skillGroups.flatMap((group) => group.skills))]

export function Skills() {
  return (
    <section id="spellbook" className="relative z-10 py-28 bg-[color:var(--color-midnight-2)]/40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="The Spellbook" title="Skills & Tools" />

        <Reveal>
          <div className="rounded-xl border border-[color:var(--color-gold)]/25 bg-[color:var(--color-ink)]/40 parchment-grain p-8 md:p-10">
            <div className="flex flex-wrap justify-center gap-3.5">
              {allSkills.map((skill) => {
                const Icon = techIcons[skill]
                return (
                  <span
                    key={skill}
                    className="skill-tile inline-flex items-center gap-2.5 font-mono text-sm text-[color:var(--color-parchment-2)] bg-[color:var(--color-midnight)]/60 border border-[color:var(--color-gold)]/20 rounded-lg px-4 py-2.5 transition-colors hover:border-[color:var(--color-gold)]/60 hover:text-[color:var(--color-gold-bright)] cursor-default"
                  >
                    {Icon && <Icon aria-hidden="true" className="text-base text-[color:var(--color-gold)]" />}
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
