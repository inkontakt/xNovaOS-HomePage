import { useState, useEffect } from 'react'

import { HeroNavigation, HeroNavigationSmallScreen, type Navigation } from '@/components/layout/hero-navigation'

import { NeuralButton } from '@/components/ui/neural-button'

import { cn } from '@/lib/utils'

import Neural from '@/assets/svg/neural'

type HeaderProps = {
  navigationData: Navigation[]
  className?: string
}

const Header = ({ navigationData, className }: HeaderProps) => {
  const [currentPathname, setCurrentPathname] = useState('/')

  useEffect(() => {
    // Set initial pathname
    // eslint-disable-next-line
    setCurrentPathname(window.location.pathname)

    // Update pathname on navigation (for client-side routing)
    const handleLocationChange = () => {
      setCurrentPathname(window.location.pathname)
    }

    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleLocationChange)

    // Listen for astro:page-load (Astro's client-side navigation)
    document.addEventListener('astro:page-load', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      document.removeEventListener('astro:page-load', handleLocationChange)
    }

    // setCurrentPathname is stable and doesn't need to be in deps
  }, [])

  return (
    <header className={cn('fixed top-0 left-1/2 z-50 flex w-full -translate-x-1/2 justify-center', className)}>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div
          className={cn(
            'relative mt-6 inline-flex w-full items-center justify-between gap-5 rounded-xl px-8 py-3 sm:mt-11',
            'before:shadow-[inset_-0.4px_-0.4px_0.5px_0_#fff,inset_0.4px_0.4px_0.5px_0_#fff]',
            'before:absolute before:inset-0 before:-z-1 before:size-full before:rounded-xl before:bg-linear-to-r before:from-white/25 before:to-white/15 before:backdrop-blur-lg'
          )}
        >
          {/* Logo */}
          <a href='/' className='flex items-center gap-3'>
            <Neural />
            <span className='text-xl font-semibold text-white'>Neural</span>
          </a>
          {/* Navigation */}

          <HeroNavigation
            navigationData={navigationData}
            navigationClassName='max-md:hidden'
            currentPathname={currentPathname}
          />

          <NeuralButton size='lg' className='max-md:hidden' asChild>
            <a href='/login'>Login</a>
          </NeuralButton>

          {/* Navigation for small screens */}
          <div className='flex gap-4 md:hidden'>
            <NeuralButton size='lg'>
              {' '}
              <a href='/login'>Login</a>
            </NeuralButton>

            <HeroNavigationSmallScreen
              navigationData={navigationData}
              screenSize={767}
              triggerClassName='md:hidden'
              currentPathname={currentPathname}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
