"use client"
import React, { useEffect, useState, useMemo } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine"
import { useTheme } from "next-themes"

export default function Background() {
  const { theme } = useTheme() // Get current theme
  const [init, setInit] = useState(false)

  const particleColor = theme === "dark" ? "#ffffff" : "#000000" // Set particle color based on theme

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {},
      particles: {
        number: {
          value: 160,
          density: {
            enable: false,
            value_area: 400,
          },
        },
        color: {
          value: particleColor, // Dynamic particle color
        },
        shape: {
          type: "square",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 4,
          },
        },
        opacity: {
          value: 0.15,
          random: true,
          anim: {
            enable: false,
            speed: 0.1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            size_min: 1,
            sync: false,
          },
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: MoveDirection.top,
          random: false,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
          bounce: false,
          attract: {
            enable: false,
            rotateX: 1042.21783956259,
            rotateY: 0,
          },
        },
      },
      detectRetina: true,
    }),
    [particleColor]
  )

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (init) {
    return (
      <div className="absolute top-0 left-0 w-screen h-[560px] bg-gradient-to-t from-background via-foreground/20 to-foreground/20 overflow-hidden">
        <Particles id="tsparticles" options={options} className="absolute top-0 left-0 w-full h-1/2" />
      </div>
    )
  }

  return <></>
}
