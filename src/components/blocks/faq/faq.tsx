import { ChevronUpIcon } from 'lucide-react'

import { Accordion as AccordionPrimitive } from 'radix-ui'

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { NeuralButton } from '@/components/ui/neural-button'

import { MotionPreset } from '@/components/ui/motion-preset'
import { Card, CardContent } from '@/components/ui/card'

type FAQItem = {
  question: string
  answer: string
}

type FAQComponentProps = {
  faqItems: FAQItem[]
}

const FAQ = ({ faqItems }: FAQComponentProps) => {
  return (
    <section id='faq' className='relative z-1 overflow-hidden py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              FAQ
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
            Frequently Asked Questions
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
            Got questions? We&apos;ve got answers. Find everything you need to know about Neural.
          </MotionPreset>
        </div>
        <div className='relative grid grid-cols-1 gap-8 lg:grid-cols-2'>
          {/* Left Section - Support Card */}
          <MotionPreset fade slide={{ direction: 'left', offset: 50 }} transition={{ duration: 0.7 }}>
            <Card className='sticky top-8 border-0 bg-transparent bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'>
              <CardContent>
                {/* Decorative Elements */}

                {/* Main Content */}
                <div className='max-w-[18rem] space-y-6'>
                  <div className='space-y-2.5'>
                    <h6 className='text-xl font-medium text-white md:text-2xl'>Can’t find answers?</h6>
                    <p className='text-white/70'>We&apos;re here to help! Get in touch with our support.</p>
                  </div>
                  <NeuralButton size='lg'>
                    <a href='/register'>Get Started - Free</a>
                  </NeuralButton>
                </div>

                {/* 3D Crystal-like Element */}
                <MotionPreset
                  fade
                  slide={{ direction: 'left', offset: 100 }}
                  delay={0.5}
                  transition={{ duration: 1 }}
                  className='absolute -right-8 bottom-0 h-[80%] rotate-15 transform md:h-[150%] lg:-right-1/8 lg:h-[130%] xl:h-[150%]'
                >
                  <img
                    src='/images/faq/diamond.webp'
                    alt='Decorative Crystal'
                    className='h-full w-full object-contain'
                  />
                </MotionPreset>
              </CardContent>
            </Card>
          </MotionPreset>

          {/* Right Section - FAQ Accordion */}
          <Accordion type='single' collapsible className='space-y-5' defaultValue='item-0'>
            {faqItems.map((item, index) => (
              <MotionPreset
                key={index}
                fade
                slide={{ direction: 'up', offset: 30 }}
                delay={0.6 + index * 0.15}
                transition={{ duration: 0.6 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className='rounded-xl bg-linear-to-r from-white/25 to-white/15 px-5 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'
                >
                  <AccordionPrimitive.Header className='flex'>
                    <AccordionPrimitive.Trigger
                      data-slot='accordion-trigger'
                      className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-4 text-left text-lg font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:bg-black [&[data-state=open]>svg]:text-white'
                    >
                      {item.question}
                      <ChevronUpIcon className='pointer-events-none size-7 shrink-0 rounded-md bg-white p-1 text-black transition-all duration-200' />
                    </AccordionPrimitive.Trigger>
                  </AccordionPrimitive.Header>
                  <AccordionContent className='text-base text-white/70'>{item.answer}</AccordionContent>
                </AccordionItem>
              </MotionPreset>
            ))}
          </Accordion>
        </div>
      </div>
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.5}
        transition={{ duration: 0.5 }}
        className='absolute top-1/2 -left-[15%] -z-1 -translate-y-1/2'
      >
        <img src='/images/bg-glow.webp' alt='Background' className='object-full size-full max-w-200 -rotate-17' />
      </MotionPreset>
    </section>
  )
}

export default FAQ
