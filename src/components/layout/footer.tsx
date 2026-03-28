import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { PrimaryOrionButton } from '@/components/ui/orion-button'

import Logo from '@/components/logo'

type FooterLink = {
  title: string
  href: string
}

type FooterSection = {
  title: string
  links: FooterLink[]
}

const footerData: FooterSection[] = [
  {
    title: 'Pages',
    links: [
      { title: 'Features', href: '/#features' },
      { title: 'Use cases', href: '/#use-cases' },
      { title: 'Testimonials', href: '/#testimonials' },
      { title: 'Pricing', href: '/#pricing' },
      { title: 'App Integration', href: '/app-integration' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '#' },
      { title: 'Careers', href: '#' },
      { title: 'News', href: '#' },
      { title: 'Media kit', href: '#' },
      { title: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Help Center', href: '#' },
      { title: 'Tutorials', href: '#' },
      { title: 'Api Docs', href: '#' },
      { title: 'Community', href: '#' },
      { title: 'Support', href: '#' }
    ]
  },
  {
    title: 'Social',
    links: [
      { title: 'X', href: '#' },
      { title: 'LinkedIn', href: '#' },
      { title: 'Facebook', href: '#' },
      { title: 'Github', href: '#' },
      { title: 'Product Hunt', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { title: 'Terms of Service', href: '#' },
      { title: 'Privacy Policy', href: '#' },
      { title: 'Cookie Policy', href: '#' },
      { title: 'Licenses', href: '#' },
      { title: 'Security', href: '#' },
      { title: 'Accessibility', href: '#' }
    ]
  }
]

const Footer = ({ newsletter = true }: { newsletter?: boolean }) => {
  return (
    <>
      <Separator />

      <footer className='px-4 sm:px-6 lg:px-8'>
        <div className='mx-auto max-w-7xl space-y-8 border-x px-4 py-8 sm:px-6 sm:py-16 md:py-24 lg:px-8'>
          {newsletter && (
            <div className='grid grid-cols-1 items-center gap-4 lg:grid-cols-5 xl:gap-24'>
              <div className='col-span-1 space-y-2 lg:col-span-3'>
                <h6 className='text-2xl font-semibold'>Subscribe to our newsletter</h6>
                <p className='text-muted-foreground'>
                  Stay in the loop with the latest updates on AI productivity, automation tips, and new features.{' '}
                  <br className='hidden lg:block' />
                  One email a week no spam, just smart insights.
                </p>
              </div>
              <div className='col-span-1 lg:col-span-2'>
                <div className='flex justify-start gap-3 lg:justify-end'>
                  <Input type='email' placeholder='Your Email' className='h-10 max-w-70' />
                  <PrimaryOrionButton size='lg' className='rounded-lg'>
                    Subscribe
                  </PrimaryOrionButton>
                </div>
              </div>
            </div>
          )}

          <div className='grid grid-flow-row grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5'>
            {footerData.map((section, index) => (
              <div key={index} className='flex flex-col gap-5'>
                <div className='text-lg font-medium'>{section.title}</div>
                <ul className='text-muted-foreground space-y-3'>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className='text-muted-foreground hover:text-foreground transition-colors duration-300'
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className='mx-auto max-w-7xl border-x'>
          <Separator />
          <div className='mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 p-4 sm:px-6 lg:px-8'>
            <a href='/#home'>
              <Logo />
            </a>
            <p className='text-muted-foreground font-light'>
              {`©${new Date().getFullYear()}`}{' '}
              <a href='/#home' className='link-animated'>
                Orion
              </a>
              , Made with passion and creativity.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
