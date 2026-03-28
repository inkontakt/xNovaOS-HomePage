import CTA from '@/components/blocks/cta-section/cta-section'

const ctaStats = [
  {
    number: 100,
    suffix: '+',
    description: 'Businesses are automating workflows to improve efficiency and productivity.'
  },
  {
    number: 1,
    pointNumber: 42,
    suffix: 'Million+',
    description: 'Tasks executed automatically every week without any issues.'
  },
  {
    number: 98,
    suffix: '%',
    description: 'Significant reduction in manual admin time per user achieved.'
  }
]

const CTASection = () => {
  return <CTA stats={ctaStats} />
}

export default CTASection
