'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { NeuralButton } from '@/components/ui/neural-button'

const ForgotPasswordForm = () => {
  return (
    <form
      className='space-y-6'
      onSubmit={e => {
        e.preventDefault()
        window.location.href = '/reset-password'
      }}
    >
      {/* Email */}
      <div className='space-y-1'>
        <Label className='leading-5' htmlFor='userEmail'>
          Email address*
        </Label>
        <Input
          type='email'
          id='userEmail'
          placeholder='Enter your email address'
          className='rounded-xl border-white/15 bg-white/5 pr-9 placeholder:text-white/50 focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 focus:outline-none focus-visible:border-sky-500/50 focus-visible:ring-1 focus-visible:ring-sky-500/50'
        />
      </div>
      <NeuralButton className='w-full' type='submit'>
        Reset Password
      </NeuralButton>
    </form>
  )
}

export default ForgotPasswordForm
