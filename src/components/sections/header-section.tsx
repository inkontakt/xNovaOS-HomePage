import { MessagesSquareIcon, UsersIcon, GitCompareIcon } from 'lucide-react'

import type { Navigation } from '@/components/layout/hero-navigation'
import Header from '@/components/layout/header'

const navigationData: Navigation[] = [
  {
    title: 'Home',
    href: '/#home'
  },
  {
    title: 'Features',
    contentClassName: '!w-70',
    items: [
      {
        title: 'Smart Conversations',
        href: '/#features',
        description: 'Design natural, engaging chat flows.',
        icon: <MessagesSquareIcon className='size-4' />
      },
      {
        title: '24/7 Customer Support',
        href: '/#about-app',
        description: 'Build brand-aligned AI personalities.',
        icon: <UsersIcon className='size-4' />
      },
      {
        title: 'Easy Integration',
        href: '/#chatbot ',
        description: 'Optimize prompts for better output.',
        icon: <GitCompareIcon className='size-4' />
      }
    ]
  },
  {
    title: 'Testimonials',
    href: '/#testimonials'
  },
  {
    title: 'Pricing',
    href: '/#pricing'
  },
  {
    title: 'Blog',
    href: '/blog'
  }
]

const HeaderSection = () => {
  return <Header navigationData={navigationData} />
}

export default HeaderSection
