import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <>
      <Carousel />
      <section aria-labelledby="home-title">
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <h1 id="home-title">Restoring Paths</h1>
          <p style={{color:'#444',fontSize:'1.05rem'}}>We provide supervised family visits in a safe, neutral environment approved by the courts. Our goal is to make visits calm, structured and focused on the child's wellbeing.</p>
          <p><a href="mailto:restoringpathsmonitor@gmail.com">Email to request an appointment</a> or call <a href="tel:19097440025">(909) 744-0025</a>.</p>
        </div>
      </section>
    </>
  )
}
