import { Flower2Icon, SproutIcon, TreePalmIcon } from 'lucide-react'
import Pricing from '@/components/blocks/pricing/pricing'

export const plans = [
  {
    name: 'Free',
    monthlyPrice: 0,
    annualPrice: 0,
    icon: <SproutIcon className='size-6 shrink-0 text-white' />,
    description: 'Recommended for small projects or startups.',
    buttonText: 'Free plan',
    features: [
      'For 1 User Limit',
      'Access to AI-powered basic features',
      'Limited usage',
      'Real-time data tracking',
      'Access to limited community'
    ]
  },
  {
    name: 'Premium',
    monthlyPrice: 69,
    annualPrice: 99,
    icon: <Flower2Icon className='size-6 shrink-0 text-white' />,
    description: 'Everything in the Free Plan, plus:',
    buttonText: 'Purchase plan',
    isPopular: true,
    features: [
      'All Premium Plan features',
      'Up to 5 users',
      'Custom branding options',
      'Extended API access',
      'Monthly performance reviews',
      'Real-time data tracking and 24/7 support',
      'Access to Full community'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 159,
    annualPrice: 299,
    icon: <TreePalmIcon className='size-6 shrink-0 text-white' />,
    description: 'Includes all Premium Plan features, plus:',
    buttonText: 'Purchase plan',
    features: [
      'Custom onboarding and tailored solutions',
      'Unlimited users',
      'Monthly performance reviews',
      'Exclusive webinars and resources',
      'Real-time data tracking and 24/7 support',
      'Full integration support & real-time tracking',
      'Advanced security features and compliance',
      'Dedicated account manager',
      'Priority feature requests'
    ]
  }
]

const PricingSection = () => {
  return <Pricing plans={plans} />
}

export default PricingSection
