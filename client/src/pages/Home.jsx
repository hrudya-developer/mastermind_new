import { lazy, Suspense } from "react";

// import Cards from '@/components/layout/Cards'
// import EnquiryForm1 from '@/components/layout/EnquiryForm1'
// import ExploreCourses from '@/components/layout/ExploreCourses'
// import Footer from '@/components/layout/Footer'
import Hero from '@/components/layout/Hero'
// import LearningApp from '@/components/layout/LearningApp'
import Navbar from '@/components/layout/Navbar'
// import Testimonials from '@/components/layout/Testimonials'
import Topbar from '@/components/layout/Topbar'
// import TopScrollingText from '@/components/layout/TopScrollingText'

const Cards = lazy(() => import('@/components/layout/Cards'));
const ExploreCourses = lazy(() => import('@/components/layout/ExploreCourses'));
const Testimonials = lazy(() => import('@/components/layout/Testimonials'));
const LearningApp = lazy(() => import('@/components/layout/LearningApp'));
const EnquiryForm1 = lazy(() => import('@/components/layout/EnquiryForm1'));
const Footer = lazy(() => import('@/components/layout/Footer'));











const Home = () => {
  return (
    <>
    
    <Navbar />
    <Hero />
    <Topbar />
     <Suspense fallback={<div className="h-40"></div>}>
     <div id="about" className="scroll-mt-28">
        <Cards />
        </div>
      </Suspense>

      {/* <Suspense fallback={<div className="h-40"></div>}>
      <div id="courses" className="scroll-mt-28">
        <ExploreCourses />
        </div>
      </Suspense> */}

      <Suspense fallback={<div className="h-40"></div>}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-40"></div>}>
        <LearningApp />
      </Suspense>

      <Suspense fallback={<div className="h-40"></div>}>
      <div id="contactForm" className="scroll-mt-28">
        <EnquiryForm1 /></div>
      </Suspense>

      <Suspense fallback={<div className="h-40"></div>}>
        <Footer />
      </Suspense>



    {/* <Cards />
    <ExploreCourses />
    <Testimonials />
    <LearningApp />
    <EnquiryForm1 />
    <Footer />
     */}
    
    </>
  )
}

export default Home