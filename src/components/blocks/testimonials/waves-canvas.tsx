'use client'

import { useEffect, useRef } from 'react'

import { useAnimationFrame } from 'motion/react'

import { cn } from '@/lib/utils'

type WaveSettings = {
  waveCount?: number
  amplitude?: number
  baseSpeed?: number
  waveSpacing?: number
  lineWidth?: number
  direction?: 'left' | 'right'
}

type WavesCanvasProps = {
  settings?: WaveSettings
  className?: string
}

const getCSSColor = (cssVar: string): string => {
  if (typeof window === 'undefined') return '#000000'

  const temp = document.createElement('div')

  temp.style.color = cssVar
  document.body.appendChild(temp)

  const color = getComputedStyle(temp).color

  document.body.removeChild(temp)

  return color
}

const WavesCanvas = ({ settings, className }: WavesCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phasesRef = useRef<number[]>([])

  const colorsRef = useRef({
    muted: 'var(--primary)',
    primaryHalf: 'var(--muted)',
    primary: 'var(--primary)'
  })

  const {
    waveCount = 9,
    amplitude = 50,
    baseSpeed = 0.005,
    waveSpacing = 30,
    lineWidth = 1,
    direction = 'left'
  } = settings ?? {}

  // Initialize colors and phases
  useEffect(() => {
    colorsRef.current = {
      muted: getCSSColor('var(--primary)'),
      primaryHalf: getCSSColor('var(--muted)'),
      primary: getCSSColor('var(--primary)')
    }
    phasesRef.current = Array.from({ length: waveCount }, (_, i) => i * 0.3)
  }, [waveCount])

  // Handle resize
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const resize = () => {
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width
      canvas.height = rect.height
    }

    resize()
    window.addEventListener('resize', resize)

    return () => window.removeEventListener('resize', resize)
  }, [])

  // Animation loop using motion's useAnimationFrame
  useAnimationFrame(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')

    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const totalHeight = (waveCount - 1) * waveSpacing
    const centerY = (canvas.height - totalHeight) / 2
    const amp = Math.max(10, Math.min(amplitude, canvas.height / (waveCount * 2)))
    const speed = direction === 'right' ? -baseSpeed : baseSpeed

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)

    gradient.addColorStop(0.1, colorsRef.current.muted)
    gradient.addColorStop(0.5, colorsRef.current.primaryHalf)
    gradient.addColorStop(0.98, colorsRef.current.primary)

    for (let i = 0; i < waveCount; i++) {
      phasesRef.current[i] += speed

      ctx.beginPath()
      ctx.globalAlpha = 1 - i / waveCount
      ctx.strokeStyle = gradient
      ctx.lineWidth = lineWidth

      const yOffset = centerY + i * waveSpacing

      for (let x = 0; x <= canvas.width; x += 20) {
        const y =
          yOffset +
          Math.sin(x * 0.005 + phasesRef.current[i]) * amp +
          Math.cos(x * 0.002 + phasesRef.current[i]) * amp * 0.5

        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()
    }

    ctx.globalAlpha = 1
  })

  return (
    <canvas ref={canvasRef} className={cn('absolute top-0 left-1/2 h-full w-screen -translate-x-1/2', className)} />
  )
}

export { WavesCanvas }
export type { WaveSettings, WavesCanvasProps }
