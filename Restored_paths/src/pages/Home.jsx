import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <>
      <Carousel />
      <section aria-labelledby="home-title">
        <div style={{maxWidth:900,margin:'0 auto'}}>
          <div className="home-heart-balloons" aria-hidden="true">
            <span className="home-heart home-hb1">❤</span>
            <span className="home-heart home-hb2">❤</span>
            <span className="home-heart home-hb3">❤</span>
            <span className="home-heart home-hb4">❤</span>
          </div>
          <div className="content-panel">
            <h1 id="home-title">Restoring Paths</h1>
            <p style={{color:'#444',fontSize:'1.05rem'}}>We provide supervised family visits in a safe, neutral environment approved by the courts. Our goal is to make visits calm, structured and focused on the child's wellbeing.</p>
            <h2>What is Supervised Visitation?</h2>
            <p>
              A supervised Visitation is contact between a non-custodial party and one or more children in the presence of a neutral third person. A Supervised Monitor is there to keep your child safe and everyone involved in the visits and are kept reasonably safe and protected. We will be present at all times during the visit and will be able to hear all conversation of the child and noncustodial parent. We will be paying close attention to the children’s behavior. If necessary, the monitor may interrupt or end a visit if the visit has become unsafe.
            </p>
            <p><a href="mailto:restoringpathsmonitor@gmail.com">Email to request an appointment</a> or call <a href="tel:19097440025">(909) 744-0025</a>.</p>
          </div>
        </div>
      </section>
    </>
  )
}
