import { useState } from "react"
import { corporateProjects, personalProjects } from "../../data/content"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { techIcons } from "../ui/techIcons"

const tabs = [
  { id: "corporate", label: "Corporate", items: corporateProjects },
  { id: "personal", label: "Personal", items: personalProjects },
]

const PAGE_SIZE = 3

const pagerBtn =
  "font-heading uppercase tracking-[0.2em] text-xs px-4 py-2 rounded-full border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
const pagerActive = "border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-midnight)]"
const pagerIdle = "border-[color:var(--color-gold)]/40 text-[color:var(--color-parchment-2)] hover:text-[color:var(--color-gold-bright)]"

const statusLabel = {
  done: "Completed",
  ongoing: "On-going",
  "coming-soon": "Coming soon",
}

function TechTag({ name }) {
  const Icon = techIcons[name]
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-[color:var(--color-gold-bright)] bg-[color:var(--color-midnight)]/60 rounded px-2 py-1">
      {Icon && <Icon aria-hidden="true" className="text-xs text-[color:var(--color-gold)]" />}
      {name}
    </span>
  )
}

export function Projects() {
  const [active, setActive] = useState("corporate")
  const current = tabs.find((t) => t.id === active)
  const [page, setPage] = useState(1)

  const totalPages = Math.max(1, Math.ceil(current.items.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const visibleItems = current.items.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <section id="enchantments" className="relative z-10 max-w-6xl mx-auto px-6 py-28">
      <SectionHeading eyebrow="The Workshop" title="Projects" />

      <div role="tablist" className="flex justify-center gap-3 mb-12">
        {tabs.map((tab) => {
          const selected = tab.id === active
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              onClick={() => { setActive(tab.id); setPage(1) }}
              className={`font-heading uppercase tracking-[0.2em] text-xs px-6 py-3 rounded-full border transition-colors ${
                selected
                  ? "border-[color:var(--color-gold)] bg-[color:var(--color-gold)] text-[color:var(--color-midnight)]"
                  : "border-[color:var(--color-gold)]/40 text-[color:var(--color-parchment-2)] hover:text-[color:var(--color-gold-bright)]"
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {visibleItems.map((project, i) => {
          const comingSoon = project.status === "coming-soon"
          const hasDemo = project.demo && project.demo !== "#"
          const hasSource = project.source && project.source !== "#"
          const hasLinks = hasDemo || hasSource
          return (
            <Reveal key={project.title} delay={i * 0.1}>
              <article className={`group relative h-full flex flex-col rounded-xl border border-[color:var(--color-gold)]/25 bg-[color:var(--color-ink)]/40 parchment-grain p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--color-gold)]/70 hover:shadow-[0_18px_50px_-12px_rgba(201,162,75,0.35)] ${comingSoon ? "border-dashed opacity-90" : ""}`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl text-[color:var(--color-gold)]">✧</div>
                  {project.status && (
                    <span className="font-heading uppercase tracking-[0.16em] text-[10px] text-[color:var(--color-gold)] border border-[color:var(--color-gold)]/40 rounded-full px-3 py-1">
                      {statusLabel[project.status]}
                    </span>
                  )}
                </div>
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="mb-5 w-full aspect-video object-cover object-top rounded-lg border border-[color:var(--color-gold)]/20"
                  />
                )}
                <h3 className="font-heading text-lg uppercase tracking-[0.12em] text-[color:var(--color-parchment)]">
                  {project.title}
                </h3>
                {project.period && (
                  <p className="mt-2 font-mono text-[11px] text-[color:var(--color-gold)]/80">
                    {project.period}
                  </p>
                )}
                <p className="mt-3 text-[color:var(--color-parchment-2)] leading-relaxed flex-1">
                  {project.blurb}
                </p>

                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((t) => (
                      <TechTag key={t} name={t} />
                    ))}
                  </div>
                )}

                {hasLinks && (
                  <div className="flex gap-5 mt-6 pt-5 border-t border-[color:var(--color-gold)]/15">
                    {hasDemo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="font-heading text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-bright)]">
                        Live Demo →
                      </a>
                    )}
                    {hasSource && (
                      <a href={project.source} target="_blank" rel="noreferrer" className="font-heading text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-parchment-2)] hover:text-[color:var(--color-parchment)]">
                        Source Code
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          )
        })}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Projects pagination"
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-12"
        >
          <button
            type="button"
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${pagerBtn} ${pagerIdle}`}
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              aria-current={n === currentPage ? "page" : undefined}
              aria-label={`Page ${n}`}
              onClick={() => setPage(n)}
              className={`${pagerBtn} min-w-[2.75rem] ${n === currentPage ? pagerActive : pagerIdle}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${pagerBtn} ${pagerIdle}`}
          >
            Next →
          </button>
        </nav>
      )}
    </section>
  )
}
