'use client'

import { useState } from 'react'

import { EyeIcon, EyeOffIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { NeuralButton } from '@/components/ui/neural-button'

const ResetPasswordForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)

  return (
    <form
      className='space-y-4'
      onSubmit={e => {
        e.preventDefault()
        window.location.href = '/'
      }}
    >
      {/* Password */}
      <div className='w-full space-y-1'>
        <Label className='leading-5' htmlFor='password'>
          New Password*
        </Label>
        <div className='relative'>
          <Input
            id='password'
            type={isPasswordVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='rounded-xl border-white/15 bg-white/5 pr-9 placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none focus-visible:border-sky-500/50 focus-visible:ring-1 focus-visible:ring-sky-500/50'
          />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsPasswordVisible(prevState => !prevState)}
            className='focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none text-white/70 hover:bg-transparent hover:text-white'
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className='sr-only'>{isPasswordVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      {/* Confirm Password */}
      <div className='w-full space-y-1'>
        <Label className='leading-5' htmlFor='confirmPassword'>
          Confirm Password*
        </Label>
        <div className='relative'>
          <Input
            id='confirmPassword'
            type={isConfirmPasswordVisible ? 'text' : 'password'}
            placeholder='••••••••••••••••'
            className='rounded-xl border-white/15 bg-white/5 pr-9 placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none focus-visible:border-sky-500/50 focus-visible:ring-1 focus-visible:ring-sky-500/50'
          />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsConfirmPasswordVisible(prevState => !prevState)}
            className='focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none text-white/70 hover:bg-transparent hover:text-white'
          >
            {isConfirmPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
            <span className='sr-only'>{isConfirmPasswordVisible ? 'Hide password' : 'Show password'}</span>
          </Button>
        </div>
      </div>

      <NeuralButton className='w-full' type='submit'>
        Set New Password
      </NeuralButton>
    </form>
  )
}

export default ResetPasswordForm
