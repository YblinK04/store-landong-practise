import { Suspense, lazy} from 'react'
import HeroSection from '@/sections/HeroSection';
import LoadingSpinner from '@/components/LoadingSpinner';



const ProductsShowcase = lazy(() =>  import('@/sections/ProductShowcase'))
const FeaturesSection = lazy(() => import('@/sections/FeaturesSection')); 
const ContactSection = lazy(() => import('@/sections/ContactSection'))

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <Suspense fallback={<LoadingSpinner />}>
        <ProductsShowcase />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <FeaturesSection  />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
    </>
  );
}