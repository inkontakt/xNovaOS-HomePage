'use client'

import { type ReactNode, useState } from 'react'

import { Badge } from '@/components/ui/badge'

import { Card, CardContent } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'

import { MotionPreset } from '@/components/ui/motion-preset'
import { NeuralButton } from '@/components/ui/neural-button'
import { GlassButton } from '@/components/ui/glass-button'
import { NumberTicker } from '@/components/ui/number-ticker'

type Plans = {
  name: string
  monthlyPrice: number
  annualPrice: number
  features: string[]
  description: string
  buttonText: string
  icon: ReactNode
  isPopular?: boolean
}

const Pricing = ({ plans }: { plans: Plans[] }) => {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section id='pricing' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        {/* Header */}
        <div className='mb-12 flex flex-col items-center gap-10 sm:mb-16 lg:mb-24'>
          <div className='space-y-4 text-center'>
            <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
              <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
                Pricing
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
              Choose the Perfect Plan for Your AI Journey
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
              Find the right plan to unlock AI-powered insights and streamline your workflow.
            </MotionPreset>
          </div>
          <MotionPreset
            fade
            blur
            slide={{ direction: 'up', offset: 50 }}
            delay={0.7}
            transition={{ duration: 0.5 }}
            className='flex h-12.5 w-fit items-center gap-3 rounded-xl bg-linear-to-r from-white/25 to-white/15 px-2.5 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
          >
            <span className='text-base font-medium text-white'>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className='border-0 bg-gray-950! shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] [&_span]:data-[state=unchecked]:translate-x-[calc(0%+2px)]'
            />
            <span className='text-base font-medium text-white'>Annually</span>
          </MotionPreset>
        </div>

        <div className='relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {plans.map((plan, idx) => {
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice

            return (
              <MotionPreset
                key={idx}
                fade
                blur
                slide={{ direction: 'up', offset: 50 }}
                delay={0.8 + idx * 0.125}
                transition={{ duration: 0.5 }}
              >
                <Card className='h-fit border-0 bg-transparent bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]! backdrop-blur-lg'>
                  <CardContent className='flex flex-col gap-4'>
                    <div className='space-y-3'>
                      <div className='flex items-center gap-3'>
                        <div className='flex size-10 items-center justify-center rounded-sm bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'>
                          {plan.icon}
                        </div>
                        <h3 className='text-3xl font-semibold'>{plan.name}</h3>
                      </div>
                      <p className='opacity-70'>{plan.description}</p>
                    </div>

                    <div className='flex gap-1'>
                      <span className='text-lg font-medium text-white'>$</span>
                      <NumberTicker value={currentPrice} className='text-5xl font-bold' />
                      <span className='self-end text-lg text-white/70'>/{isAnnual ? 'year' : 'month'}</span>
                    </div>

                    {plan.isPopular ? (
                      <NeuralButton size='lg'>{plan.buttonText}</NeuralButton>
                    ) : (
                      <GlassButton size='lg'>{plan.buttonText}</GlassButton>
                    )}
                    <Separator className='bg-white/50' />

                    <div className='flex flex-col gap-1.5'>
                      <h4 className='mb-1.5 text-xl font-medium'>Features</h4>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className='flex items-center gap-2 py-1'>
                          <div className='size-2 rounded-full bg-white'></div>
                          <p className='opacity-70'>{feature}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionPreset>
            )
          })}

          <MotionPreset
            fade
            slide={{ direction: 'left', offset: 100 }}
            delay={0.5}
            transition={{ duration: 0.5 }}
            className='absolute top-1/2 left-1/2 -z-1 w-full -translate-1/2'
          >
            <img
              src='/images/bg-glow.webp'
              alt='Background'
              className='object-full mb-60 size-full h-80 max-w-300 opacity-30'
            />
          </MotionPreset>
        </div>
      </div>
    </section>
  )
}

export default Pricing
