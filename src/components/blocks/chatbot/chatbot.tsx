'use client'

// React Imports
import { useState, useRef, useEffect } from 'react'

import {
  PanelLeftCloseIcon,
  LanguagesIcon,
  UserRoundIcon,
  BadgeDollarSignIcon,
  MessagesSquareIcon,
  ChartColumnStackedIcon,
  GlobeIcon,
  SendIcon,
  SettingsIcon
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

import { MotionPreset } from '@/components/ui/motion-preset'

import Neural from '@/assets/svg/neural'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Message = {
  id: number
  text: string
  sender: 'user' | 'ai'
  timestamp: string
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'I need help with automating customer support',
      sender: 'user',
      timestamp: '2:34 PM'
    },
    {
      id: 2,
      text: 'Hello! 👋 How can I help you today?',
      sender: 'ai',
      timestamp: '2:34 PM'
    },
    {
      id: 3,
      text: 'I Want Know Why shadcn/studio is better than every one...',
      sender: 'user',
      timestamp: '2:35 PM'
    },
    {
      id: 4,
      text: '🚀 700+ customizable blocks and templates — from landing pages to dashboards — that save time and help you ship polished UIs',
      sender: 'ai',
      timestamp: '2:36 PM'
    }
  ])

  const [inputValue, setInputValue] = useState('')
  const chatContainerRef = useRef<HTMLDivElement>(null)

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
        text: 'Thanks for your message! This is an automated response. I can help you with your queries about our platform.',
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
    <section id='chatbot' className='relative py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <MotionPreset fade blur slide={{ direction: 'up', offset: 50 }} transition={{ duration: 0.5 }}>
            <Badge className='border-white/40 text-sm font-normal text-white' variant='outline'>
              Next-Gen Chatbot Platform
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
            Everything You Need in One AI Chat Platform
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
            From smart automation to deep insights — discover what makes our AI chatbot stand out.
          </MotionPreset>
        </div>

        {/* Chatbot */}
        <MotionPreset
          fade
          blur
          delay={0.6}
          transition={{ duration: 0.5 }}
          className='flex h-190 gap-3.5 rounded-3xl border-2 border-[#00B8DB]/20 bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 p-3.5'
        >
          {/* Sidebar */}
          <div className='flex size-full max-w-70 flex-col rounded-3xl border-2 border-[#00B8DB]/20 bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 max-md:hidden'>
            <div className='flex items-center gap-2 border-b-2 border-[#00B8DB]/20 p-6 text-white'>
              <div className='flex size-8 shrink-0 items-center justify-center rounded-full bg-linear-135 from-[#18C1FF] to-[#056BE3]'>
                <Neural className='size-4' />
              </div>
              <span className='grow'>AI Neural</span>
              <Button className='h-auto cursor-pointer p-0! [&_svg]:size-5!' variant='link'>
                <PanelLeftCloseIcon className='text-white' />
              </Button>
            </div>

            <div className='h-full space-y-2 overflow-y-auto *:px-4 *:py-2'>
              <div className='text-white *:flex *:cursor-pointer *:items-center *:gap-2 *:rounded-lg *:p-2 *:hover:bg-white/5'>
                <div>
                  <ChartColumnStackedIcon className='size-4' />
                  Dashboard
                </div>
                <div>
                  <UserRoundIcon className='size-4' />
                  Your account
                </div>
              </div>
              <div>
                <Button className='w-full border border-white/15 bg-transparent text-white hover:bg-white/5'>
                  <MessagesSquareIcon />
                  New Chat
                </Button>
              </div>
              <div className='text-white *:flex *:cursor-pointer *:items-center *:gap-2 *:rounded-lg *:p-2 *:hover:bg-white/5'>
                <div>
                  <ChartColumnStackedIcon className='size-4' />
                  Shadcn Studio Overview
                </div>
                <div>
                  <LanguagesIcon className='size-4' />
                  UI Theming Tips
                </div>
                <div>
                  <SettingsIcon className='size-4' />
                  Customization Guide
                </div>
              </div>
            </div>
            <div className='mt-auto space-y-2.5 px-4 py-6'>
              <div className='space-y-2.5 text-white *:flex *:cursor-pointer *:items-center *:gap-2 *:rounded-lg *:p-2 *:hover:bg-white/5'>
                <div>
                  <LanguagesIcon className='size-4' />
                  Language
                </div>
                <div>
                  <BadgeDollarSignIcon className='size-4' />
                  Upgrade To Pro
                </div>
                <div>
                  <UserRoundIcon className='size-4' />
                  Your account
                </div>
              </div>
              <Button className='w-full border border-white/15 bg-white/5 text-white hover:bg-white/15!'>
                Log Out
              </Button>
            </div>
          </div>

          {/* Chat Section */}
          <div className='flex h-full grow flex-col justify-end gap-3.5'>
            <div
              ref={chatContainerRef}
              className='hover:[&::-webkit-scrollbar-thumb]:bg-secondary/80 flex min-h-0 grow flex-col-reverse overflow-x-hidden overflow-y-auto scroll-smooth px-6 pb-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500/60 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent'
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
                        <UserRoundIcon className='size-5 text-white' />
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
            <div className='space-y-3.5 rounded-3xl border-2 border-[#00B8DB]/20 bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 px-4 py-3'>
              <div className='flex gap-3'>
                <Select defaultValue='gpt-4'>
                  <SelectTrigger className='h-8! w-full max-w-30 border-white/15! bg-white/5! font-medium text-white [&_svg]:text-white! [&_svg]:opacity-100!'>
                    <SelectValue placeholder='Select AI Model' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>AI Models</SelectLabel>
                      <SelectItem value='gpt-4'>GPT-4</SelectItem>
                      <SelectItem value='gpt-3.5-turbo'>GPT-3.5 Turbo</SelectItem>
                      <SelectItem value='claude-3'>Claude 3</SelectItem>
                      <SelectItem value='gemini-pro'>Gemini Pro</SelectItem>
                      <SelectItem value='llama-2'>Llama 2</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Label
                  htmlFor='search'
                  className='flex h-8 cursor-pointer items-center rounded-md border border-white/15 bg-white/5 px-3 font-medium text-white [&:has([data-state=checked])]:bg-[#00B8DB]'
                >
                  <GlobeIcon className='size-4' />
                  <Checkbox id='search' className='sr-only' />
                </Label>
              </div>
              <Textarea
                className='max-h-30 min-h-auto max-w-213! resize-none border-0 bg-transparent! text-white placeholder:text-white/50 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-500/60 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent'
                placeholder='Type your message...'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <div className='flex items-center gap-3 max-sm:justify-end'>
                <RadioGroup className='flex grow items-center gap-3 max-sm:hidden'>
                  <Label
                    htmlFor='deep-research'
                    className='flex h-7 cursor-pointer items-center rounded-md border border-white/15 bg-white/5 px-3 font-medium text-nowrap text-white [&:has([data-state=checked])]:bg-[#00B8DB]'
                  >
                    Deep Research
                    <RadioGroupItem value='deep-research' className='sr-only' id='deep-research' />
                  </Label>
                  <Label
                    htmlFor='data-analyses'
                    className='flex h-7 cursor-pointer items-center rounded-md border border-white/15 bg-white/5 px-3 font-medium text-nowrap text-white [&:has([data-state=checked])]:bg-[#00B8DB]'
                  >
                    Data Analyses
                    <RadioGroupItem value='data-analyses' className='sr-only' id='data-analyses' />
                  </Label>
                  <Label
                    htmlFor='image'
                    className='flex h-7 cursor-pointer items-center rounded-md border border-white/15 bg-white/5 px-3 font-medium text-nowrap text-white [&:has([data-state=checked])]:bg-[#00B8DB]'
                  >
                    Image
                    <RadioGroupItem value='image' className='sr-only' id='image' />
                  </Label>
                </RadioGroup>
                <Button
                  onClick={handleSend}
                  className='h-8.5 shrink-0 rounded-xl bg-linear-135 from-[#18C1FF] to-[#0054DB] text-white hover:bg-linear-160'
                >
                  <span className='md:max-lg:hidden'>Send</span>
                  <SendIcon className='size-4' />
                </Button>
              </div>
            </div>
          </div>
        </MotionPreset>
      </div>
      <MotionPreset
        fade
        blur
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute top-1/2 -right-[20%] -z-1 w-1/2 -translate-y-1/2'
      >
        <img
          src='/images/bg-glow.webp'
          alt='Background decoration'
          className='object-full size-full h-108 max-w-250 rotate-120'
        />
      </MotionPreset>
      <MotionPreset
        fade
        blur
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute top-1/2 -left-[20%] -z-1 w-1/2 -translate-y-1/2'
      >
        <img
          src='/images/bg-glow.webp'
          alt='Background decoration'
          className='object-full size-full h-108 max-w-250 -rotate-120'
        />
      </MotionPreset>
    </section>
  )
}

export default ChatBot
