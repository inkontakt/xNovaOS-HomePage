'use client'

import { useState } from 'react'

import { Badge } from '@/components/ui/badge'

import { Input } from '@/components/ui/input'

import Neural from '@/assets/svg/neural'
import { NeuralButton } from '@/components/ui/neural-button'
import { Orbiting } from '@/components/ui/orbiting'
import { MotionPreset } from '@/components/ui/motion-preset'

type Logos = {
  image: string
  alt: string
  size: string
}

const CTA = ({ logos }: { logos: Logos[] }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Add your form submission logic here
    console.log('Email submitted:', email)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between gap-24 max-lg:flex-col'>
          <div className='space-y-4'>
            <MotionPreset fade slide={{ direction: 'up', offset: 50 }} blur transition={{ duration: 0.5 }}>
              <Badge variant='outline' className='border-white/40 text-sm font-normal text-white'>
                A Legacy of Trust
              </Badge>
            </MotionPreset>

            <MotionPreset
              component='h2'
              className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'
              fade
              slide={{ direction: 'up', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.3}
            >
              Helping visionary brands scale & innovate
            </MotionPreset>

            <MotionPreset
              component='p'
              className='mb-12 text-xl text-white/70 sm:mb-16 lg:mb-24'
              fade
              blur
              slide={{ direction: 'up', offset: 50 }}
              transition={{ duration: 0.5 }}
              delay={0.6}
            >
              We power some of the world&apos;s most successful companies, helping them and exceed expectations.
            </MotionPreset>

            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }} delay={0.9}>
              <form
                onSubmit={handleSubmit}
                className='flex items-center gap-4 rounded-xl bg-linear-to-r from-white/25 to-white/15 p-2.5 pl-4 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
              >
                <Input
                  type='email'
                  placeholder='Are u the next one?'
                  className='border-0! p-0! text-base! text-white! outline-none! placeholder:text-white/50! focus-visible:ring-0!'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <NeuralButton type='submit' size='lg' disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send'}
                </NeuralButton>
              </form>
            </MotionPreset>
          </div>

          <MotionPreset
            className='max-sm:scale-75'
            fade
            blur
            zoom={{ initialScale: 0.8 }}
            transition={{ duration: 0.8 }}
            delay={0.5}
          >
            <div className='relative flex size-112 flex-col items-center justify-center'>
              <Orbiting radius={200} dashed={true} dashedGap={12} strokeColor='#ffffff66'>
                {logos.slice(0, 6).map((logo, index) => (
                  <img key={index} src={logo.image} alt={logo.alt} className={logo.size} />
                ))}
              </Orbiting>
              <Orbiting radius={115} reverse speed={2} dashed={true} dashedGap={12} strokeColor='#ffffff40'>
                {logos.slice(6).map((logo, index) => (
                  <img key={index} src={logo.image} alt={logo.alt} className={logo.size} />
                ))}
              </Orbiting>

              <div className='absolute top-1/2 left-1/2 flex size-20.5 shrink-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-linear-135 from-[#18C1FF] to-[#0054DB]'>
                <Neural className='size-10' />
              </div>
            </div>
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default CTA
