import CTA from '@/components/blocks/cta/cta'

export const logoData = [
  {
    image: '/images/brand-logo/webflow-icon-circle.webp',
    alt: 'Webflow',
    size: 'size-15'
  },
  {
    image: '/images/brand-logo/netflix-icon-circle.webp',
    alt: 'Netflix',
    size: 'size-12'
  },
  {
    image: '/images/brand-logo/stackoverflow-icon-circle.webp',
    alt: 'Stack Overflow',
    size: 'size-12.5'
  },
  {
    image: '/images/brand-logo/shopify-icon-circle.webp',
    alt: 'Shopify',
    size: 'size-11'
  },
  {
    image: '/images/brand-logo/mailchimp-icon-circle.webp',
    alt: 'Mailchimp',
    size: 'size-9.5'
  },
  {
    image: '/images/brand-logo/paypal-icon-circle.webp',
    alt: 'PayPal',
    size: 'size-15'
  },
  {
    image: '/images/brand-logo/airbnb-icon-circle.webp',
    alt: 'Airbnb',
    size: 'size-12.5'
  },
  {
    image: '/images/brand-logo/huawei-icon-circle.webp',
    alt: 'Huawei',
    size: 'size-15'
  },
  {
    image: '/images/brand-logo/dropbox-icon-circle.webp',
    alt: 'Dropbox',
    size: 'size-15'
  }
]

const CTASection = () => {
  return <CTA logos={logoData} />
}

export default CTASection
