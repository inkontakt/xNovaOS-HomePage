'use client'

import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { NeuralButton } from '@/components/ui/neural-button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const LoginForm = () => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <form
      className='space-y-4'
      onSubmit={e => {
        e.preventDefault()
        window.location.href = '/'
      }}
    >
      {/* Email */}
      <div className='space-y-1 text-white'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input
          type='email'
          id='userEmail'
          placeholder='Enter your email address'
          className='rounded-xl border-white/15 bg-white/5 placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none focus-visible:border-sky-500/50 focus-visible:ring-1 focus-visible:ring-sky-500/50'
        />
      </div>

      {/* Password */}
      <div className='w-full space-y-1 text-white'>
        <Label className='leading-5' htmlFor='password'>
          Password*
        </Label>
        <div className='relative'>
          <Input
            id='password'
            type={isVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='rounded-xl border-white/15 bg-white/5 pr-9 placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none focus-visible:border-sky-500/50 focus-visible:ring-1 focus-visible:ring-sky-500/50'
          />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsVisible(prevState => !prevState)}
            className='focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none text-white/70 hover:bg-transparent hover:text-white'
          >
            {isVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      {/* Remember Me and Forgot Password */}
      <div className='flex items-center justify-between gap-y-2'>
        <div className='flex items-center gap-3'>
          <Checkbox
            id='rememberMe'
            className='size-6 border border-white/15 bg-transparent! data-[state=checked]:border-white/15 data-[state=checked]:text-gray-100 [&_.lucide-check]:size-4'
          />
          <Label htmlFor='rememberMe' className='text-white/70'>
            {' '}
            Remember Me
          </Label>
        </div>

        <a href='/forgot-password' className='text-white hover:underline'>
          Forgot Password?
        </a>
      </div>

      <NeuralButton className='w-full' size='lg' type='submit'>
        Sign in to Neural
      </NeuralButton>
    </form>
  )
}

export default LoginForm
