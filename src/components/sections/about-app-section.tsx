import AboutApp from '@/components/blocks/about-app/about-app'

const aboutAppData = [
  {
    title: 'Unlock the Power of AI with Our Leading Features',
    description:
      'Revolutionize your approach to productivity with cutting-edge AI tools designed for efficiency and simplicity.',
    features: [
      {
        title: 'Advanced Analytics',
        description:
          'Leverage the power of AI to analyze real-time data and uncover insights that drive informed decision-making.'
      },
      {
        title: 'Effortless User Experience',
        description:
          'Enjoy a sleek, intuitive interface that lets you navigate complex AI tools with ease, saving you time and effort.'
      }
    ],
    image: '/images/about-app/image-01.webp',
    imageAlt: 'AI Neural Interface Dashboard'
  },
  {
    title: 'Empower Your Workflow with Our Cutting-Edge AI Features',
    description: 'Real-Time Insights: Gain actionable, up-to-the-minute insights that help you make data-driven',
    features: [
      {
        title: 'Real-Time Market Insights',
        description: 'Make informed decisions with up-to-the-minute financial data'
      },
      {
        title: 'Intuitive Design',
        description: 'Make informed decisions with up-to-the-minute financial data'
      },
      {
        title: 'Seamless',
        description: 'Enjoy fast, secure entry with our hassle-free login experience'
      }
    ],
    image: '/images/about-app/image-02.webp',
    imageAlt: 'AI Chat Interface'
  }
]

const AboutAppSection = () => {
  return <AboutApp aboutAppData={aboutAppData} />
}

export default AboutAppSection
