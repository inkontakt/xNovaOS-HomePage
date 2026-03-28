import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

import Neural from '@/assets/svg/neural'
import AuthLines from '@/assets/svg/auth-lines'
import ResetPasswordForm from '@/components/auth/reset-password/reset-password-form'
import { MotionPreset } from '@/components/ui/motion-preset'
import { GlassButton } from '@/components/ui/glass-button'

const ResetPasswordComponent = () => {
  return (
    <div className='relative flex h-auto min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <MotionPreset fade blur delay={0.2} transition={{ duration: 0.5 }} className='w-full max-w-md'>
        <Card className='relative overflow-hidden rounded-xl border-2 border-[#00B8DB]/20 bg-transparent bg-linear-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 pt-12 text-white'>
          <div className='pointer-events-none absolute top-0 h-52 w-full rounded-t-xl bg-linear-to-t from-transparent to-gray-950/10'></div>

          <AuthLines className='pointer-events-none absolute inset-x-0 top-0' />

          <CardHeader className='z-1 justify-center gap-6 text-center'>
            <a href='/' className='flex items-center justify-center gap-3'>
              <Neural />
              <span className='text-xl font-semibold'>Neural</span>
            </a>

            <div>
              <CardTitle className='mb-1.5 text-2xl'>Reset Password?</CardTitle>
              <CardDescription className='text-base text-white/70'>Please enter your new password.</CardDescription>
            </div>
          </CardHeader>

          <CardContent className='space-y-3'>
            <ResetPasswordForm />

            <GlassButton className='w-full' asChild>
              <a href='/login'>Back to login</a>
            </GlassButton>
          </CardContent>
        </Card>
      </MotionPreset>

      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute -bottom-[10%] -left-[25%] -z-1 w-[60%] xl:-bottom-[15%] xl:-left-[15%] xl:w-[40%]'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='-rotate-120' />
      </MotionPreset>
      <MotionPreset
        fade
        slide={{ direction: 'left', offset: 100 }}
        delay={0.3}
        transition={{ duration: 0.5 }}
        className='absolute -top-[10%] -right-[25%] -z-1 w-[60%] xl:-top-[15%] xl:-right-[15%] xl:w-[40%]'
      >
        <img src='/images/bg-glow.webp' alt='Background decoration' className='rotate-120' />
      </MotionPreset>
    </div>
  )
}

export default ResetPasswordComponent
