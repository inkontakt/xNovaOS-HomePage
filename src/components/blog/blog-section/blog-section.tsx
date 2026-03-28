import { ArrowRightIcon, CalendarDaysIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { Card, CardContent } from '@/components/ui/card'

import { MotionPreset } from '@/components/ui/motion-preset'
import { NeuralButton } from '@/components/ui/neural-button'

import type { BlogPost } from '@/components/blog/type'

const BlogSection = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <section className='relative py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:space-y-16 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Insights
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
            Insights on AI, Automation, and the Future of Work
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
            Expert insights, practical guides, and real-world use cases to help teams build smarter workflows and
            deliver better experiences with AI.
          </MotionPreset>
        </div>

        {/* Tabs and Search */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
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
                <Card className='group h-full overflow-hidden border-0 bg-transparent bg-linear-to-r from-white/25 to-white/15 text-white shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff] backdrop-blur-lg transition-all duration-300'>
                  <CardContent className='space-y-3.5'>
                    <div className='mb-6 overflow-hidden rounded-xl border border-white/10 sm:mb-12'>
                      <img
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        className='h-59.5 w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      />
                    </div>
                    <div className='flex items-center justify-between gap-1.5'>
                      <div className='flex items-center gap-1.5 opacity-70'>
                        <CalendarDaysIcon className='size-5' />
                        <span className='opacity-70'>
                          {new Date(post.pubDate ?? '').toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                          })}
                        </span>
                      </div>
                    </div>
                    <h3 className='line-clamp-2 text-lg font-medium md:text-xl'>{post.title}</h3>
                    <p className='line-clamp-2 opacity-70'>{post.description}</p>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm font-medium'>{post.author}</p>
                      <NeuralButton size='icon'>
                        <ArrowRightIcon className='size-4 -rotate-45' />
                        <span className='sr-only'>Read more: {post.title}</span>
                      </NeuralButton>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </MotionPreset>
          ))}
        </div>
      </div>

      {/* Background Decoration */}
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.9}
        transition={{ duration: 0.5 }}
        className='absolute -top-[4%] -left-[20%] -z-1 w-full opacity-50 md:w-[80%] lg:bottom-0 xl:w-1/2'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='rotate-150' />
      </MotionPreset>
      <MotionPreset
        fade
        slide={{ direction: 'right', offset: 100 }}
        delay={0.9}
        transition={{ duration: 0.5 }}
        className='absolute -right-[30%] -bottom-[10%] -z-1 w-full opacity-50 md:w-[80%] xl:w-1/2'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='rotate-150' />
      </MotionPreset>
    </section>
  )
}

export default BlogSection
