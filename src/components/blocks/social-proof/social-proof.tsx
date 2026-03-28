import type { ReactNode } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { GlassButton } from '@/components/ui/glass-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { NeuralButton } from '@/components/ui/neural-button'
import { SocialGlobe } from '@/components/blocks/social-proof/social-globe'

type SocialProofProps = {
  id: number
  icon: ReactNode
  title: string
  value: string
}

const SocialProof = ({ socialProofs }: { socialProofs: SocialProofProps[] }) => {
  return (
    <section id='social-proof' className='relative gap-24 py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Trusted by Global Teams
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
            Trusted by Teams Who Value Smart Automation
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
            See how our chatbot transforms engagement and efficiency across industries.
          </MotionPreset>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.7}
            transition={{ duration: 0.5 }}
            className='flex gap-4 max-[420px]:flex-col min-[420px]:items-center min-[420px]:justify-center'
          >
            <NeuralButton size='lg'>
              <a href='/register'>Get Started - Free</a>
            </NeuralButton>

            <GlassButton asChild size='lg' className='group'>
              <a href='/#pricing'>
                View Pricing
                <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
              </a>
            </GlassButton>
          </MotionPreset>
        </div>

        <div className='grid gap-6 lg:grid-cols-4'>
          <div className='flex flex-col gap-7 lg:col-span-2'>
            <MotionPreset
              component='p'
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={1.2}
              transition={{ duration: 0.5 }}
              className='text-lg text-white/70'
            >
              Trusted by over 10,000+ businesses worldwide, Neural helps teams automate their workflows and save an
              average of 15+ hours per week. Join industry leaders who are transforming their operations with AI-powered
              automation that scales with your business.
            </MotionPreset>

            <MotionPreset
              fade
              blur
              slide={{ direction: 'down', offset: 50 }}
              delay={1.5}
              transition={{ duration: 0.5 }}
              className='grid gap-6 bg-contain bg-center bg-no-repeat sm:grid-cols-2 sm:bg-[url(/images/bg-glow.webp)]'
            >
              {socialProofs.map(proof => (
                <div
                  key={proof.id}
                  className='flex flex-col items-center gap-4 rounded-xl bg-linear-to-r from-white/15 to-white/15 py-6 shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-sm'
                >
                  <div className='flex items-center gap-2.5 text-white/70'>
                    {proof.icon}
                    <h3 className='text-xl font-medium'>{proof.title}</h3>
                  </div>
                  <span className='text-2xl font-semibold text-white md:text-3xl lg:text-4xl'>{proof.value}</span>
                </div>
              ))}
            </MotionPreset>
          </div>

          <MotionPreset
            fade
            blur
            slide={{ direction: 'down', offset: 50 }}
            delay={1.8}
            transition={{ duration: 0.5 }}
            className='relative max-sm:h-100 lg:col-span-2'
          >
            <SocialGlobe />
            <img src='/images/social-proof/background.webp' alt='galaxy background' className='absolute bottom-0' />
          </MotionPreset>
        </div>
      </div>
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute -z-1 w-full md:-top-[10%] md:-left-[25%] md:w-[60%] xl:-top-[15%] xl:-left-[15%] xl:w-[40%]'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='-rotate-120' />
      </MotionPreset>
    </section>
  )
}

export default SocialProof
