"use client"
import React, { useState, useEffect, useMemo } from "react"

const GlitchySubhead = () => {
  const words = useMemo(
    () => [
      {
        original: "Building",
        substitutions: ["Buylding", "Buildinc", "Blizdang"],
      },
      {
        original: "web",
        substitutions: ["wib", "wub", "yeb"],
      },
      {
        original: "stuff",
        substitutions: ["stush", "stank", "ztuzz"],
      },
      {
        original: "in",
        substitutions: [],
      },
      {
        original: "public",
        substitutions: ["publiz", "bublic", "pubyub"],
      },
    ],
    []
  )

  const [currentIndices, setCurrentIndices] = useState(words.map(() => -1))

  useEffect(() => {
    let isMounted = true
    const cycleDuration = 20000
    const minDelay = 400
    const maxDelay = 4000
    const startTime = Date.now()

    const updateWord = () => {
      if (!isMounted) return

      const elapsedTime = Date.now() - startTime

      // Display the original text for the first 4 seconds
      if (elapsedTime < 4000) {
        setTimeout(updateWord, 200)
        return
      }

      const t = elapsedTime % cycleDuration
      const delay = minDelay + (maxDelay - minDelay) * Math.abs(Math.cos((Math.PI * t) / cycleDuration))
      const wordIndex = Math.floor(Math.random() * words.length)
      const word = words[wordIndex]
      if (word.substitutions.length > 0) {
        setCurrentIndices((prevIndices) => {
          const newIndices = [...prevIndices]
          if (newIndices[wordIndex] === -1) {
            newIndices[wordIndex] = 0
          } else {
            if (newIndices[wordIndex] < word.substitutions.length - 1) {
              newIndices[wordIndex]++
            } else {
              newIndices[wordIndex] = -1
            }
          }
          return newIndices
        })
      }
      setTimeout(updateWord, delay)
    }
    updateWord()

    return () => {
      isMounted = false
    }
  }, [words])

  const currentWords = words.map((word, index) => {
    const substitutionIndex = currentIndices[index]
    return substitutionIndex === -1 ? word.original : word.substitutions[substitutionIndex]
  })

  return <h2 className="text-xl opacity-70 text-center font-mono">{currentWords.join(" ")}</h2>
}

export default GlitchySubhead
