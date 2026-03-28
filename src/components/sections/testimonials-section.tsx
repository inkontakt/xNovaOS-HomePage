import Testimonials from '@/components/blocks/testimonials/testimonials'

const testimonials = [
  {
    name: 'Avery Collins',
    role: 'Head of Product',
    company: 'Neural Labs',
    avatar: '/images/avatar/avatar-1.webp',
    rating: 5,
    content: 'Neural AI landing page made our automation rollout effortless - beautiful UI and smooth onboarding.'
  },
  {
    name: 'Jordan Kim',
    role: 'CTO',
    company: 'SynapseWorks',
    avatar: '/images/avatar/avatar-2.webp',
    rating: 4.5,
    content: 'Great demo site and components. The Neural AI landing page helped us prototype our product quickly.'
  },
  {
    name: 'Priya Nair',
    role: 'Design Lead',
    company: 'PixelForge',
    avatar: '/images/avatar/avatar-3.webp',
    rating: 4.8,
    content:
      'Beautiful layouts and clear messaging - the Neural AI landing page templates accelerated our design reviews.'
  },
  {
    name: 'Liam O’Connor',
    role: 'Founder',
    company: 'AutoFlow',
    avatar: '/images/avatar/avatar-4.webp',
    rating: 5,
    content:
      'Perfect starting point for our automation UI. Neural AI landing page saved weeks of work and make it look so easy.'
  },
  {
    name: 'Sofia Martinez',
    role: 'Product Manager',
    company: 'BrightBridge',
    avatar: '/images/avatar/avatar-5.webp',
    rating: 4.7,
    content: 'Clean, responsive, and easy to customize. The Neural AI landing page is ideal for demos and user testing.'
  }
]

const avatars = [
  { src: '/images/avatar/avatar-1.webp', className: 'top-[50%] left-[8%]' },
  { src: '/images/avatar/avatar-2.webp', className: 'top-[10%] left-[18%]' },
  {
    src: '/images/avatar/avatar-3.webp',
    className: 'top-[50%] left-[28%] max-md:hidden'
  },
  { src: '/images/avatar/avatar-5.webp', className: 'top-[10%] left-[45%]' },
  { src: '/images/avatar/avatar-6.webp', className: 'bottom-15 left-[40%]' },
  {
    src: '/images/avatar/avatar-4.webp',
    className: 'bottom-15 left-[60%] max-md:hidden'
  },
  {
    src: '/images/avatar/avatar-7.webp',
    className: 'top-[37%] left-[66%] max-md:hidden'
  },
  { src: '/images/avatar/avatar-8.webp', className: 'top-[5%] left-[80%]' },
  { src: '/images/avatar/avatar-9.webp', className: 'top-[60%] left-[88%]' }
]

const TestimonialsSection = () => {
  return <Testimonials avatars={avatars} testimonials={testimonials} />
}

export default TestimonialsSection
