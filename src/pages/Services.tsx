import Services from '../components/Services'
import DetailedServices from '../components/DetailedServices'
import Footer from '../components/Footer'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <main className="relative pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-7xl px-6">
          </div>
        </div>
        <Services />
        <DetailedServices />
      </main>
      <Footer />
    </div>
  )
}