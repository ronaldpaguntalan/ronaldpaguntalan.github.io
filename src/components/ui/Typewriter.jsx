import { useEffect, useState } from "react"

// Types each word, holds, erases, then moves to the next word (loops forever).
export function Typewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  hold = 1600,
  pause = 400,
}) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    const fullyTyped = !deleting && text === current
    const fullyErased = deleting && text === ""

    let delay = deleting ? deleteSpeed : typeSpeed
    if (fullyTyped) delay = hold
    if (fullyErased) delay = pause

    const timer = setTimeout(() => {
      if (fullyTyped) {
        setDeleting(true)
      } else if (fullyErased) {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(
          deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1)
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, hold, pause])

  return (
    <span>
      {text}
      <span aria-hidden="true" className="inline-block w-[0.08em] ml-[0.05em] animate-pulse">
        |
      </span>
    </span>
  )
}
