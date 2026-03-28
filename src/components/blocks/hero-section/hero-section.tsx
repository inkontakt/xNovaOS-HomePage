'use client'

import { useState, useRef, useEffect } from 'react'

import { ArrowRightIcon, EllipsisIcon, PhoneIcon, PaperclipIcon, MicIcon, SendIcon, UserIcon } from 'lucide-react'

import { MotionPreset } from '@/components/ui/motion-preset'
import { BorderBeam } from '@/components/ui/border-beam'
import { NeuralButton } from '@/components/ui/neural-button'
import { GlassButton } from '@/components/ui/glass-button'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import Neural from '@/assets/svg/neural'

import { cn } from '@/lib/utils'

type Message = {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: string
}

const HeroSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! 👋 Welcome to AI Neural. How can I assist you with your automation needs today?',
      sender: 'ai',
      timestamp: '2:34 PM'
    },
    {
      id: 2,
      text: 'Can you help me streamline my workflow automation?',
      sender: 'user',
      timestamp: '2:35 PM'
    }
  ])

  const [inputValue, setInputValue] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const revealImgRef = useRef<HTMLImageElement>(null)

  // Auto-scroll to latest message within chat container only
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages.length])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: 'Thanks for your message! This is an automated response. I can help you automate your customer support workflows.',
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
      }

      setMessages(prev => [...prev, aiMessage])
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section
      id='home'
      className='relative flex-1 pt-22 pb-11 sm:pt-27'
      style={
        {
          '--mx': '-9999px',
          '--my': '-9999px',
          '--mask-size': '500px'
        } as React.CSSProperties
      }
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const el = revealImgRef.current

        if (el) {
          el.style.setProperty('--mx', `${x}px`)
          el.style.setProperty('--my', `${y}px`)
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current

        if (el) {
          el.style.setProperty('--mx', '-9999px')
          el.style.setProperty('--my', '-9999px')
        }
      }}
      aria-label='Hero section'
    >
      <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='relative z-2 max-w-4xl space-y-4 py-12 sm:py-16 lg:py-24'>
          <MotionPreset fade slide transition={{ duration: 0.5 }}>
            <Badge className='relative border border-[#18C1FF]/40 bg-gray-950 px-3 py-1 font-normal text-white'>
              ⚡ Supercharge Your AI Workflows
              <BorderBeam colorFrom='var(--color-sky-500)' colorTo='var(--color-sky-500)' size={35} duration={8} />
            </Badge>
          </MotionPreset>

          <MotionPreset
            component='h1'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.3}
            className='w-full max-w-xl text-3xl leading-[1.29167] font-bold text-white sm:text-4xl lg:text-5xl'
          >
            Automate Everything with Smart{' '}
            <span className='before:to-gree-400/5 relative text-sky-500 before:absolute before:top-1/2 before:left-1/2 before:h-20 before:w-60 before:-translate-1/2 before:rounded-[50%] before:bg-radial before:from-sky-400/50 before:mix-blend-plus-lighter before:blur-lg'>
              AI Neural.
            </span>
          </MotionPreset>
          <MotionPreset fade slide={{ offset: 50 }} blur transition={{ duration: 0.5 }} delay={0.5}>
            <p className='max-w-3xl text-xl text-white/70'>
              Build, connect, and automate your workflows effortlessly with intelligent agents designed to think, act,
              and deliver results
            </p>
          </MotionPreset>
          <MotionPreset
            component='div'
            fade
            slide={{ offset: 50 }}
            blur
            transition={{ duration: 0.5 }}
            delay={0.7}
            className='flex flex-wrap gap-4 max-[420px]:flex-col min-[420px]:items-center'
          >
            <NeuralButton asChild size='lg'>
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

        <MotionPreset
          fade
          slide={{ direction: 'down', offset: 10 }}
          transition={{ duration: 0.5 }}
          delay={0.1}
          className='relative'
        >
          <div
            className={cn(
              'absolute aspect-[1.067842] max-w-none mix-blend-lighten max-md:hidden',
              'md:bottom-[-26.6%] md:w-340 md:max-[844px]:left-[-257px]',

              'min-[845px]:max-[927px]:left-[-194px]',
              'min-[927px]:max-[1000px]:left-[-100px]',
              'lg:bottom-[-49%] lg:w-400 lg:max-[1100px]:left-[-230px]',
              'min-[1100px]:max-[1200px]:left-[-108px] min-[1200px]:max-[1280px]:left-[-6px]',
              'xl:bottom-[-48.5%] xl:left-[5.5%]'
            )}
          >
            <video
              className='absolute h-full w-full'
              width='1920'
              height='1438'
              autoPlay
              loop
              playsInline
              muted
              style={{ opacity: 1 }}
            >
              <source src='/video/huly-video.webm' type='video/webm' />
              <source src='/video/huly-video.mp4' type='video/mp4' />
            </video>
          </div>
          <div
            className={cn(
              'relative z-1 h-125 rounded-[17px] bg-linear-to-b from-sky-500/25 to-[#350084]/30 px-7 py-9 shadow-[inset_0.4px_0.4px_0.5px_0_#fff,inset_-0.4px_-0.4px_0.5px_0_var(--color-purple-500)] backdrop-blur-md',

              'max-sm:w-full min-[845px]:max-[927px]:w-196 min-[927px]:max-[1000px]:w-219 min-[1000px]:max-lg:w-219 md:max-[844px]:w-181',

              'min-[1100px]:max-[1200px]:w-260 min-[1200px]:max-[1280px]:w-286 lg:max-[1100px]:w-230',

              'xl:w-full xl:max-w-7xl',

              //before - top left glow
              'before:absolute before:top-0 before:left-0 before:-z-1 before:size-87 before:-translate-x-1/4 before:-translate-y-1/4 before:rounded-full before:bg-sky-400/40 before:blur-[120px]',

              //after - bottom right glow
              'after:absolute after:right-0 after:bottom-0 after:-z-1 after:size-87 after:translate-x-1/4 after:translate-y-1/4 after:rounded-full after:bg-purple-600/40 after:blur-[70px]'
            )}
          >
            <div className='flex size-full flex-col gap-5 overflow-hidden rounded-[25px] border-2 border-[#00B8DB]/20 bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 shadow-[0_26px_53px_-12px_color-mix(in_oklab,var(--color-sky-400)_10%,transparent)]'>
              <div className='flex items-center justify-between border-b border-white/10 bg-[linear-gradient(90deg,rgba(0,44,34,0.50)_0%,rgba(5,51,69,0.50)_100%)] px-6.25 py-4.5'>
                <div className='flex items-center gap-3'>
                  <div className='relative w-fit'>
                    <div className='flex size-10.5 items-center justify-center rounded-full bg-linear-135 from-[#18C1FF] to-[#0054DB]'>
                      <Neural className='size-5' />
                    </div>
                    <span className='absolute -right-0.5 -bottom-0.5 size-3 rounded-full border-2 border-[#0F172B] bg-green-300'>
                      <span className='sr-only'>Busy</span>
                    </span>
                  </div>
                  <div>
                    <p className='text-lg text-white uppercase'>AI Assistant</p>
                    <p className='flex items-center gap-1 text-xs text-green-500'>
                      <span className='block size-2 shrink-0 rounded-full bg-green-700'></span>Online
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Button
                    size='icon'
                    className='group rounded-xl border border-white/10 bg-white/5 bg-clip-padding text-white hover:bg-white/10 max-sm:hidden'
                  >
                    <PhoneIcon className='size-4.5 stroke-2 transition-transform duration-300 group-hover:scale-105' />
                  </Button>
                  <Button
                    size='icon'
                    className='group rounded-xl border border-white/10 bg-white/5 bg-clip-padding text-white hover:bg-white/10'
                  >
                    <EllipsisIcon className='size-4.5 stroke-2 transition-transform duration-300 group-hover:scale-105' />
                  </Button>
                </div>
              </div>
              <div
                ref={chatContainerRef}
                className='hover:[&::-webkit-scrollbar-thumb]:bg-secondary/80 h-100 grow overflow-x-hidden overflow-y-auto scroll-smooth p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500/60 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent'
              >
                {/* Chat Messages */}
                <div className='flex flex-col gap-4'>
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={cn('flex items-start gap-3', message.sender === 'user' && 'flex-row-reverse')}
                    >
                      <div className='flex size-8.5 shrink-0 items-center justify-center rounded-full bg-linear-135 from-[#18C1FF] to-[#0054DB]'>
                        {message.sender === 'ai' ? (
                          <Neural className='size-5' />
                        ) : (
                          <UserIcon className='size-5 text-white' />
                        )}
                      </div>
                      <div className={cn('flex flex-col gap-1', message.sender === 'user' && 'items-end')}>
                        <div
                          className={cn(
                            'max-w-md rounded-2xl px-4 py-2.5 text-sm',
                            message.sender === 'ai'
                              ? 'border border-[#00B8DB]/30 bg-linear-135 from-teal-900/40 to-cyan-900/40 text-white'
                              : 'bg-linear-135 from-[#18C1FF] to-[#0054DB] text-white'
                          )}
                        >
                          {message.text}
                        </div>
                        <span className='text-xs text-white/40'>{message.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex items-center gap-3 border-t border-white/10 bg-[linear-gradient(90deg,rgba(15,23,43,0.50)_0%,rgba(29,41,61,0.50)_100%)] px-[1.5625rem] py-4.5'>
                <Button
                  size='icon'
                  className='size-13.5 shrink-0 rounded-xl border border-white/10 bg-white/5 bg-clip-padding text-white hover:bg-white/10 max-sm:hidden'
                >
                  <PaperclipIcon className='size-4.5 stroke-2' />
                </Button>
                <div className='relative flex-1'>
                  <input
                    type='text'
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder='Type your message...'
                    className='h-13.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none'
                  />
                </div>
                <Button
                  size='icon'
                  className='size-13.5 shrink-0 rounded-xl border border-white/10 bg-white/5 bg-clip-padding text-white hover:bg-white/10 max-sm:hidden'
                >
                  <MicIcon className='size-4.5 stroke-2' />
                </Button>
                <Button
                  size='icon'
                  onClick={handleSend}
                  className='size-13.5 shrink-0 rounded-xl bg-linear-135 from-[#18C1FF] to-[#0054DB] text-white hover:bg-linear-160'
                >
                  <SendIcon className='size-4.5 stroke-2' />
                </Button>
              </div>
            </div>
          </div>
        </MotionPreset>

        {/* Backgound Image Reavel on hover  */}
        <div className='pointer-events-none absolute inset-0 z-0'>
          <img
            src='/images/hero/hero-background.webp'
            alt=''
            className='absolute top-0 left-1/2 w-full -translate-x-1/2 opacity-0 mix-blend-lighten'
          />

          <div
            ref={revealImgRef}
            className='relative h-full mix-blend-overlay'
            style={{
              clipPath: 'circle(var(--mask-size) at var(--mx) var(--my))'
            }}
          >
            <img
              src='/images/hero/hero-background.webp'
              alt=''
              className='absolute top-0 left-1/2 w-full -translate-x-1/2 opacity-8'
              style={
                {
                  maskImage: 'radial-gradient(var(--mask-size) at var(--mx) var(--my), black 20%, transparent)',
                  WebkitMaskImage: 'radial-gradient(var(--mask-size) at var(--mx) var(--my), black 20%, transparent)'
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
