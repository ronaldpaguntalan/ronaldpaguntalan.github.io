import { useEffect, useState } from "react"
import { certificates } from "../../data/content"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion"

// Placeholder frames shown until certificates are added to content.js.
const placeholderCount = 3
const AUTOPLAY_MS = 5000

function CertCard({ cert, placeholder }) {
  const title = placeholder ? "Certificate Name" : cert.title
  const issuer = placeholder ? "Issuing Organization" : cert.issuer
  const date = placeholder ? "Year" : cert.date

  return (
    <article
      className={`relative h-full flex flex-col items-center text-center rounded-xl border p-7 parchment-grain transition-all duration-300 ${
        placeholder
          ? "border-dashed border-[color:var(--color-gold)]/40 bg-[color:var(--color-ink)]/20"
          : "border-[color:var(--color-gold)]/25 bg-[color:var(--color-ink)]/40 hover:-translate-y-1.5 hover:border-[color:var(--color-gold)]/70 hover:shadow-[0_18px_50px_-12px_rgba(201,162,75,0.35)]"
      }`}
    >
      {!placeholder && cert.image ? (
        <img
          src={cert.image}
          alt={`${cert.title} certificate`}
          loading="lazy"
          draggable="false"
          className="w-full aspect-[4/3] object-contain rounded-lg border border-[color:var(--color-gold)]/20 bg-[color:var(--color-midnight)]/60"
        />
      ) : (
        /* wax seal */
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[color:var(--color-gold)]/50 bg-[color:var(--color-midnight)]/60 text-2xl text-[color:var(--color-gold)]">
          ✦
        </div>
      )}
      <h3 className="font-heading text-base uppercase tracking-[0.12em] text-[color:var(--color-parchment)] mt-5">
        {title}
      </h3>
      <p className="font-accent italic text-[color:var(--color-gold-bright)] mt-2">{issuer}</p>
      <p className="font-mono text-[11px] text-[color:var(--color-gold)]/80 mt-3">{date}</p>
      {!placeholder && cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 font-heading text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-bright)]"
        >
          View credential →
        </a>
      )}
    </article>
  )
}

// Cards per view: 1 on phones, 2 on tablets, 3 on desktop.
function useVisibleCount() {
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)")
    const medium = window.matchMedia("(min-width: 640px)")
    const update = () => setVisible(wide.matches ? 3 : medium.matches ? 2 : 1)
    update()
    wide.addEventListener("change", update)
    medium.addEventListener("change", update)
    return () => {
      wide.removeEventListener("change", update)
      medium.removeEventListener("change", update)
    }
  }, [])
  return visible
}

export function Certificates() {
  const reduced = usePrefersReducedMotion()
  const visible = useVisibleCount()
  const [page, setPage] = useState(0)
  const [paused, setPaused] = useState(false)

  const hasItems = certificates.length > 0
  const items = hasItems ? certificates : Array.from({ length: placeholderCount })
  const n = items.length
  const pageCount = Math.max(1, Math.ceil(n / visible))
  const safePage = Math.min(page, pageCount - 1)
  // Last page slides back so it never shows empty space.
  const offset = Math.min(safePage * visible, Math.max(0, n - visible))

  // Auto-advance, looping back to the first page. Pauses on hover/focus and
  // is disabled when the visitor prefers reduced motion.
  useEffect(() => {
    if (reduced || paused || pageCount <= 1) return
    const id = setInterval(() => setPage((p) => (p + 1) % pageCount), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [reduced, paused, pageCount])

  return (
    <section
      id="certificates"
      className="relative z-10 max-w-6xl mx-auto px-6 py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <SectionHeading eyebrow="The Sealed Scrolls" title="Certificates" />

      <Reveal>
        {/* viewport: negative margin cancels the per-card horizontal padding */}
        <div className="overflow-hidden -mx-3.5">
          <div
            className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
            style={{
              width: `${(n * 100) / visible}%`,
              transform: `translateX(-${(offset / n) * 100}%)`,
            }}
          >
            {items.map((cert, i) => (
              <div
                key={hasItems ? cert.title : i}
                className="shrink-0 px-3.5"
                style={{ width: `${100 / n}%` }}
              >
                <CertCard cert={hasItems ? cert : undefined} placeholder={!hasItems} />
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {pageCount > 1 && (
        <div className="flex justify-center items-center gap-2.5 mt-10" role="tablist" aria-label="Certificate pages">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === safePage}
              aria-label={`Show certificates page ${i + 1}`}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === safePage
                  ? "w-7 bg-[color:var(--color-gold)]"
                  : "w-2.5 bg-[color:var(--color-gold)]/35 hover:bg-[color:var(--color-gold)]/70"
              }`}
            />
          ))}
        </div>
      )}

      {!hasItems && (
        <p className="text-center font-accent italic text-[color:var(--color-parchment-2)] mt-10">
          Certificates are being sealed. Coming soon.
        </p>
      )}
    </section>
  )
}
