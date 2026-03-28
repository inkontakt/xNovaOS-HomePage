import { ArrowRightIcon, CircleCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { NeuralButton } from '@/components/ui/neural-button'
import { MotionPreset } from '@/components/ui/motion-preset'
import { GlassButton } from '@/components/ui/glass-button'

type AboutApp = {
  title: string
  description: string
}

type AboutAppSection = {
  title: string
  description: string
  features: AboutApp[]
  image: string
  imageAlt: string
}

type AboutAppProps = {
  aboutAppData: AboutAppSection[]
}

const AboutApp = ({ aboutAppData }: AboutAppProps) => {
  return (
    <section id='about-app' className='relative z-1 overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Core Features
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
            Explore Our AI Chatbot Features
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
            Discover the powerful tools that make our chatbot the perfect solution for your business.
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

        {/* Feature Sections */}
        {aboutAppData.map((section, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-2 xl:gap-24 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Text Content */}
            <MotionPreset
              fade
              slide={{ direction: index % 2 === 0 ? 'left' : 'right', offset: 50 }}
              delay={0.6}
              transition={{ duration: 0.7 }}
              className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
            >
              <div className='space-y-6'>
                <div className='space-y-4'>
                  <h3 className='text-xl font-semibold text-white md:text-2xl'>{section.title}</h3>
                  <p className='text-lg text-white/70'>{section.description}</p>
                </div>
                <ul className='space-y-3.5'>
                  {section.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className='flex gap-3'>
                      <CircleCheckIcon className='mt-0.5 size-5 shrink-0 text-white' />
                      <p className='text-white/70'>
                        <span className='font-medium'>{feature.title}</span>: {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionPreset>

            {/* Image */}
            <MotionPreset
              fade
              slide={{ direction: index % 2 === 0 ? 'right' : 'left', offset: 50 }}
              delay={0.8}
              transition={{ duration: 0.7 }}
              className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
            >
              <div className='relative overflow-hidden rounded-xl bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'>
                <img
                  src={section.image}
                  alt={section.imageAlt}
                  className={`w-full max-lg:rounded-md lg:scale-95 ${index % 2 === 1 ? 'lg:origin-top-left lg:rounded-br-md' : 'lg:origin-bottom-right lg:rounded-tl-md'} object-cover transition-transform duration-300 hover:scale-100`}
                />
              </div>
            </MotionPreset>
          </div>
        ))}
      </div>

      {/* Background Decoration */}
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.9}
        transition={{ duration: 0.5 }}
        className='absolute bottom-[7%] -left-[15%] -z-1 w-full opacity-50 md:bottom-[15%] md:w-[80%] lg:bottom-0 xl:w-1/2'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='-rotate-150' />
      </MotionPreset>
      <MotionPreset
        fade
        slide={{ direction: 'right', offset: 100 }}
        delay={0.9}
        transition={{ duration: 0.5 }}
        className='absolute top-[30%] -right-[15%] -z-1 w-full opacity-50 md:top-[20%] md:w-[80%] xl:w-1/2'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='-rotate-150' />
      </MotionPreset>
    </section>
  )
}

export default AboutApp
