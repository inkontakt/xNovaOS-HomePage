'use client'

import { ArrowUpRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { MotionPreset } from '@/components/ui/motion-preset'

import type { BlogPost } from '@/components/blog/type'

import { BorderBeam } from '@/components/ui/border-beam'
import { NeuralButton } from '@/components/ui/neural-button'

const BlogHeroSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section id='blog-hero' className='relative pb-11'>
      <div className='mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Hero Header */}
        <div className='mx-auto flex max-w-4xl flex-col items-center gap-4 self-center py-12 text-center text-white sm:py-16 lg:py-24'>
          <MotionPreset fade slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='relative border border-[#18C1FF]/40 bg-gray-950 px-3 py-1 font-normal text-white'>
              ⚡ Supercharge Your AI Workflows
              <BorderBeam colorFrom='var(--color-sky-500)' colorTo='var(--color-sky-500)' size={35} duration={8} />
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h1'
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
            className='w-full max-w-xl text-3xl leading-[1.29167] font-bold text-white sm:text-4xl lg:text-5xl'
          >
            Insights, Trends, and Use Cases in{' '}
            <span className='before:to-gree-400/5 relative text-sky-500 before:absolute before:top-1/2 before:left-1/2 before:h-20 before:w-60 before:-translate-1/2 before:rounded-[50%] before:bg-radial before:from-sky-400/50 before:mix-blend-plus-lighter before:blur-lg'>
              AI Neural.
            </span>
          </MotionPreset>
          <MotionPreset fade slide={{ direction: 'up', offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.5}>
            <p className='max-w-3xl text-xl text-white/70'>
              A closer look at how neural-based intelligence is evolving across industries.
            </p>
          </MotionPreset>
          <MotionPreset
            fade
            slide={{ direction: 'up', offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.6}
            className='max-sm:w-full'
          >
            <form
              className='gap-3 py-1 max-sm:space-y-2 sm:flex sm:flex-row md:w-sm'
              onSubmit={e => e.preventDefault()}
            >
              <Input
                type='email'
                placeholder='Your email'
                className='h-10 flex-1 overflow-hidden rounded-xl border-0 bg-linear-to-r from-white/25 to-white/15 text-base text-white! shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg placeholder:text-white/50 focus:ring-0 focus-visible:ring-0'
              />
              <NeuralButton size='lg' className='text-base max-sm:w-full' type='submit'>
                Send
              </NeuralButton>
            </form>
          </MotionPreset>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {posts.map((post, index) => (
            <MotionPreset
              key={`${post.author}-${index}`}
              fade
              slide={{ direction: 'up', offset: 50 }}
              blur
              transition={{ duration: 0.5 }}
              delay={0.7 + index * 0.15}
            >
              <a href={`/blog/${post.slug}`}>
                <Card className='group cursor-pointer border-0 bg-transparent bg-linear-to-r from-white/25 to-white/15 py-0 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg'>
                  <CardContent className='grid grid-cols-1 px-0 xl:grid-cols-2'>
                    <div className='p-6'>
                      <div className='size-full overflow-hidden rounded-xl border border-white/10 max-xl:h-60'>
                        <img
                          src={post.imageUrl}
                          alt={post.imageAlt}
                          className='size-full object-cover transition-transform duration-300 group-hover:scale-105'
                        />
                      </div>
                    </div>
                    <div className='flex flex-col justify-center gap-3 p-6'>
                      <div className='flex items-center gap-1.5 py-1'>
                        <div className='flex grow items-center gap-1.5 opacity-70'>
                          <CalendarDaysIcon className='size-5' />
                          <p>{post.pubDate}</p>
                        </div>
                      </div>

                      <h3 className='text-xl font-medium'>{post.title}</h3>

                      <p className='opacity-70'>{post.description}</p>
                      <div className='flex w-full items-center justify-between gap-1 py-1'>
                        <span className='cursor-pointer text-sm font-medium'>{post.author}</span>
                        <NeuralButton size='icon'>
                          <ArrowUpRightIcon />
                        </NeuralButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </MotionPreset>
          ))}
        </div>
      </div>
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.5}
        transition={{ duration: 0.5 }}
        className='absolute bottom-100 left-1/2 -z-1 w-full -translate-x-1/2 md:-bottom-60'
      >
        <img src='/images/bg-glow.webp' alt='Background' className='object-full mb-60 size-full h-200 max-w-500' />
      </MotionPreset>
    </section>
  )
}

export default BlogHeroSection
