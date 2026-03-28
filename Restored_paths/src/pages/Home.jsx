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
            <h1 id="home-title">Restoring Paths: Riverside County Child Visitation Monitor</h1>
            <p style={{color:'#444',fontSize:'1.05rem'}}>
              Supervised family visits in a safe, neutral environment that supports your child&apos;s wellbeing and are approved by the California Family Court System.
            </p>
            <h2>What is Supervised Visitation?</h2>
            <p>
              Supervised visitation provides an opportunity for a non-custodial party to spend time with their child or children in the presence of a neutral, trained third party. The supervised monitor&apos;s role is to help ensure a safe, supportive environment for everyone involved, with a primary focus on the child&apos;s wellbeing. The monitor remains present throughout the visit, observing interactions and maintaining awareness of conversations. If a situation arises that may impact your child&apos;s safety or emotional wellbeing, the monitor may gently redirect, pause, or end the visit as needed.
            </p>
            <p>
              Restoring Paths comes to you; we provide visitation monitoring at the park, mall, in your home and other child-friendly environments in Menifee, Murrieta, Temecula, Wildomar, and French Valley. Special Needs Experience.
            </p>
            <h2>Get Started Today:</h2>
            <p>
              Email: <a href="mailto:RestoringPathsMonitor@Gmail.com">RestoringPathsMonitor@Gmail.com</a> or Text: <a href="tel:19097440025">(909) 744-0025</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
