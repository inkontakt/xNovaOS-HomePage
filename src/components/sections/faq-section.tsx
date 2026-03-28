import FAQ from '@/components/blocks/faq/faq'

export const faqItems = [
  {
    question: 'What is Neural and how does it work?',
    answer:
      'Neural is an AI-powered automation platform that helps businesses streamline their workflows using intelligent chatbots and AI agents. It connects to your existing tools, learns from interactions, and automates repetitive tasks like customer support, lead qualification, and data processing - all without requiring any coding skills.'
  },
  {
    question: 'Which AI models does Neural support?',
    answer:
      'Neural integrates with leading AI models including ChatGPT (GPT-3.5 and GPT-4), Claude (Anthropic), Grok, and DeepSeek. You can switch between models based on your needs, or use multiple models simultaneously for different tasks to optimize performance and cost.'
  },
  {
    question: 'Is there a free plan available?',
    answer:
      "Yes! Our Free plan includes 1 AI chatbot with 100 conversations per month, basic analytics, and email support. It's perfect for testing Neural and small projects. You can upgrade anytime as your needs grow, with no credit card required to start."
  },
  {
    question: 'How secure is my data with Neural?',
    answer:
      "We take security seriously. All data is encrypted with bank-level 256-bit SSL encryption both in transit and at rest. We never train AI models on your private data, and we're compliant with GDPR and SOC 2 standards. Your conversations and business information remain completely confidential."
  },
  {
    question: 'Can I integrate Neural with my existing tools?',
    answer:
      'Absolutely! Neural integrates seamlessly with popular platforms like Slack, Zapier, HubSpot, Salesforce, and many more. Our easy-to-use API and pre-built connectors let you set up integrations in minutes. If you need a custom integration, our Enterprise plan includes dedicated support.'
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'All plans include email support with responses within 24 hours. Premium and Enterprise plans get priority support with faster response times, live chat access, and dedicated account managers. We also provide comprehensive documentation, video tutorials, and a community forum for peer-to-peer help.'
  }
]

const FAQSection = () => {
  return <FAQ faqItems={faqItems} />
}

export default FAQSection
