import { ArrowRightIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'

import { NeuralButton } from '@/components/ui/neural-button'
import { GlassButton } from '@/components/ui/glass-button'
import { Rating } from '@/components/ui/rating'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Marquee } from '@/components/ui/marquee'
import { Card, CardContent } from '@/components/ui/card'

import { WavesCanvas } from '@/components/blocks/testimonials/waves-canvas'

type TestimonialItem = {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

type AvatarProps = {
  src: string
  className: string
}[]

const Testimonials = ({ avatars, testimonials }: { avatars: AvatarProps; testimonials: TestimonialItem[] }) => {
  return (
    <section id='testimonials' className='relative overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='space-y-4 text-center'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Testimonials
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
            What Our Users Are Saying
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
            See how businesses like yours are transforming with our AI-powered solutions.
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
      </div>

      {/* Waves Section */}
      <MotionPreset
        fade
        blur
        delay={0.8}
        transition={{ duration: 0.5 }}
        className='relative my-12 h-80 sm:my-16 lg:my-24'
      >
        <WavesCanvas />

        {avatars.map((avatar, index) => (
          <MotionPreset
            fade
            key={index}
            className={cn('absolute size-10', avatar.className)}
            motionProps={{
              animate: {
                y: [0, -10, 0],
                opacity: 1
              },
              transition: {
                y: {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: index * 0.2
                },
                opacity: {
                  duration: 0.5,
                  delay: 0.6
                }
              }
            }}
          >
            <Avatar className='size-10 transition-all duration-500 hover:scale-120'>
              <AvatarImage src={avatar.src} alt='Hallie Richards' />
              <AvatarFallback className='text-xs'>HR</AvatarFallback>
            </Avatar>
          </MotionPreset>
        ))}
      </MotionPreset>

      {/* Testimonials Marquee */}

      <MotionPreset
        fade
        blur
        delay={0.9}
        slide={{ direction: 'down', offset: 50 }}
        transition={{ duration: 0.5 }}
        className='relative'
      >
        <Marquee pauseOnHover duration={40} gap={1.5}>
          {testimonials.map((testimonial, index) => (
            <Card
              key={`${testimonial.name}-${index}`}
              className='h-full max-w-95 border-0 bg-neutral-100/20 bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]! backdrop-blur-lg'
            >
              <CardContent className='space-y-8'>
                <Rating readOnly variant='yellow' size={24} value={testimonial.rating} precision={0.5} />

                <p className='text-white/70'>{testimonial.content}</p>
                <div className='flex items-center gap-2'>
                  <Avatar className='size-10'>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ', 2)
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className='space-y-0.5'>
                    <h3 className='font-medium text-white'>{testimonial.name}</h3>
                    <p className='text-xs text-white/70'>
                      {testimonial.role} at <span className='font-semibold text-white'>{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </Marquee>
        <MotionPreset
          fade
          slide={{ direction: 'right', offset: 100 }}
          delay={0.9}
          transition={{ duration: 1.2 }}
          className='absolute inset-0 left-1/2 -z-1 -translate-x-1/2'
        >
          <img
            src='/images/bg-glow.webp'
            alt='Background decoration'
            className='size-full max-h-70 max-w-350 object-fill opacity-50'
          />
        </MotionPreset>
        <div className='pointer-events-none absolute inset-y-0 left-0 z-1 w-30 bg-linear-to-r from-gray-950 to-transparent' />
        <div className='pointer-events-none absolute inset-y-0 right-0 z-1 w-30 bg-linear-to-l from-gray-950 to-transparent' />
      </MotionPreset>
    </section>
  )
}

export default Testimonials
