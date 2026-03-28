import Footer from '@/components/layout/footer'

const FooterSection = ({ newsletter = false }: { newsletter?: boolean }) => {
  return <Footer newsletter={newsletter} />
}

export default FooterSection
