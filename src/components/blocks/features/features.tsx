'use client'

// React Imports
import { useRef } from 'react'

import { BotMessageSquareIcon, FileInputIcon, UserIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { MotionPreset } from '@/components/ui/motion-preset'

import { AnimatedBeam } from '@/components/ui/animated-beam'

import Neural from '@/assets/svg/neural'

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const span1Ref = useRef<HTMLSpanElement>(null)
  const span2Ref = useRef<HTMLSpanElement>(null)
  const span3Ref = useRef<HTMLSpanElement>(null)
  const span4Ref = useRef<HTMLSpanElement>(null)
  const span5Ref = useRef<HTMLSpanElement>(null)
  const span6Ref = useRef<HTMLSpanElement>(null)
  const span7Ref = useRef<HTMLSpanElement>(null)
  const span8Ref = useRef<HTMLSpanElement>(null)
  const span9Ref = useRef<HTMLSpanElement>(null)

  return (
    <section id='features' className='relative py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Our Features
            </Badge>
          </MotionPreset>
          <MotionPreset
            component='h2'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.3}
            transition={{ duration: 0.5 }}
            className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
          >
            Powerful AI Simple to Use
          </MotionPreset>
          <MotionPreset
            component='p'
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
            className='text-xl text-white/70'
          >
            Empower your users with an AI chatbot that understands context, learns from every interaction, and delivers
            human-like responses — anytime, anywhere.
          </MotionPreset>
        </div>

        <div ref={containerRef} className='relative flex w-full flex-col items-center gap-18'>
          <MotionPreset
            fade
            blur
            delay={0.6}
            transition={{ duration: 0.5 }}
            ref={div1Ref}
            className='flex h-15 w-fit items-center gap-2 rounded-xl bg-linear-to-r from-white/25 to-white/15 px-5 text-2xl font-medium text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg lg:hidden'
          >
            <Neural className='size-8 text-white' />
            Neural
          </MotionPreset>

          <div className='relative flex w-full items-center justify-center max-lg:flex-wrap max-lg:gap-6 lg:justify-between'>
            <div className='flex gap-6 lg:flex-col lg:gap-18'>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div2Ref}
                className='flex h-11 w-fit items-center gap-2 rounded-md bg-linear-to-r from-white/25 to-white/15 px-2 text-lg text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <img
                  src='/images/features/chatgpt.webp'
                  alt='Chat GPT'
                  className='relative size-6.5 rounded-md object-cover'
                />
                Chat GPT
              </MotionPreset>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div3Ref}
                className='flex h-11 w-fit items-center gap-2 rounded-md bg-linear-to-r from-white/25 to-white/15 px-2 text-lg text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <img
                  src='/images/features/claude.webp'
                  alt='Claude'
                  className='relative size-6.5 rounded-md object-cover'
                />
                Claude
              </MotionPreset>
            </div>

            <div className='flex flex-col gap-14 max-lg:hidden'>
              <span ref={span1Ref} className='size-0.5' />
              <span ref={span2Ref} className='size-0.5' />
              <span ref={span3Ref} className='size-0.5' />
            </div>

            <MotionPreset
              fade
              blur
              delay={0.05}
              transition={{ duration: 0.5 }}
              ref={div1Ref}
              className='flex h-15 w-fit items-center gap-2 rounded-xl bg-linear-to-r from-white/25 to-white/15 px-5 text-2xl font-medium text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg max-lg:hidden'
            >
              <Neural className='size-8 text-white' />
              Neural
            </MotionPreset>

            <div className='flex flex-col gap-14 max-lg:hidden'>
              <span ref={span4Ref} className='size-0.5' />
              <span ref={span5Ref} className='size-0.5' />
              <span ref={span6Ref} className='size-0.5' />
            </div>

            <div className='flex items-end gap-6 lg:flex-col lg:gap-18'>
              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div4Ref}
                className='flex h-11 w-fit items-center gap-2 rounded-md bg-linear-to-r from-white/25 to-white/15 px-2 text-lg text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <img
                  src='/images/features/grok.webp'
                  alt='Grok'
                  className='relative size-6.5 rounded-md object-cover'
                />
                Grok
              </MotionPreset>

              <MotionPreset
                fade
                blur
                delay={0.05}
                transition={{ duration: 0.5 }}
                ref={div5Ref}
                className='flex h-11 w-fit items-center gap-2 rounded-md bg-linear-to-r from-white/25 to-white/15 px-2 text-lg text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <img
                  src='/images/features/deepseek.webp'
                  alt='Deepseek'
                  className='relative size-6.5 rounded-md object-cover'
                />
                Deepseek
              </MotionPreset>
            </div>
          </div>
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            <MotionPreset
              fade
              blur
              delay={0.1}
              transition={{ duration: 0.9 }}
              className='flex flex-col items-center gap-18'
            >
              <span ref={span7Ref} className='size-0.5 max-lg:hidden' />
              <div
                ref={div6Ref}
                className='overflow-hidden rounded-xl bg-linear-to-r from-white/25 to-white/15 p-6 text-center shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <div className='flex items-center justify-center gap-1.5 text-xl font-medium text-white'>
                  <BotMessageSquareIcon className='size-6 shrink-0' />
                  Smart Conversations
                </div>
                <p className='mt-1.5 text-white/70'>
                  Protect your sensitive information with advanced security measures.
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              blur
              delay={0.1}
              transition={{ duration: 0.9 }}
              className='flex flex-col items-center gap-18'
            >
              <span ref={span8Ref} className='size-0.5 max-lg:hidden' />
              <div
                ref={div7Ref}
                className='overflow-hidden rounded-xl bg-linear-to-r from-white/25 to-white/15 p-6 text-center shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <div className='flex items-center justify-center gap-1.5 text-xl font-medium text-white'>
                  <UserIcon className='size-6 shrink-0' />
                  24/7 Customer Support
                </div>
                <p className='mt-1.5 text-white/70'>
                  Protect your sensitive information with advanced security measures.
                </p>
              </div>
            </MotionPreset>
            <MotionPreset
              fade
              blur
              delay={0.1}
              transition={{ duration: 0.9 }}
              className='flex flex-col items-center gap-18'
            >
              <span ref={span9Ref} className='size-0.5 max-lg:hidden' />
              <div
                ref={div8Ref}
                className='overflow-hidden rounded-xl bg-linear-to-r from-white/25 to-white/15 p-6 text-center shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <div className='flex items-center justify-center gap-1.5 text-xl font-medium text-white'>
                  <FileInputIcon className='size-6 shrink-0' />
                  Easy Integration
                </div>
                <p className='mt-1.5 text-white/70'>
                  Protect your sensitive information with advanced security measures.
                </p>
              </div>
            </MotionPreset>
          </div>
          {/* Top */}

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span2Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span5Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span1Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span1Ref}
            toRef={div2Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span2Ref}
            toRef={span3Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span3Ref}
            toRef={div3Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            reverse
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span4Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span4Ref}
            toRef={div4Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span5Ref}
            toRef={span6Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span6Ref}
            toRef={div5Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />

          {/* Bottom Beam */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={span8Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            startXOffset={5}
            startYOffset={20}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span7Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            reverse
            className='-z-1 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={span9Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span8Ref}
            toRef={div7Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            endYOffset={-65}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span7Ref}
            toRef={div6Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            reverse
            className='-z-1 max-lg:hidden'
            endYOffset={-65}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={span9Ref}
            toRef={div8Ref}
            gradientStartColor='white'
            gradientStopColor='white'
            pathOpacity={0.4}
            pathColor='white'
            duration={4.5}
            className='-z-1 max-lg:hidden'
            endYOffset={-65}
          />
        </div>
      </div>
      <MotionPreset
        fade
        blur
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute -z-1 w-full md:-top-[10%] md:-right-[25%] md:w-[60%] xl:-top-[15%] xl:-right-[15%] xl:w-[40%]'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='rotate-120' />
      </MotionPreset>
    </section>
  )
}

export default Features
