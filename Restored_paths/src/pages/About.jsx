import React from 'react'
import nancyPhoto from '../assets/Facetune_.jpg'

export default function About(){
  return (
    <section aria-labelledby="about-title">
      <div className="content-panel" style={{maxWidth:900,margin:'0 auto'}}>
        <figure style={{margin:'0 0 1rem 0',textAlign:'center'}}>
          <img
            src={nancyPhoto}
            alt="Nancy Zoller"
            style={{width:'100%',maxWidth:420,height:'auto',borderRadius:'10px',boxShadow:'0 8px 22px rgba(0,0,0,0.12)'}}
          />
        </figure>
        <h1 id="about-title">About Restoring Paths</h1>
        <p><strong>Caption:</strong> Nancy Zoller; Restoring Paths Court Visitation Monitor</p>
        <p>
          With a gentle and reassuring presence, Nancy Zoller serves as a trusted court visitation monitor for families navigating complex situations. Her life experience as a grandmother, foster parent, and adoptive parent has shaped her compassionate perspective and deep respect for the needs of your children and family. Nancy&apos;s extensive experience within the California Family Court System allows her to approach each visit with professionalism and care, while maintaining a calm and supportive atmosphere. She is dedicated to helping your family feel safe, heard, and treated with dignity throughout the visitation process.
        </p>
        <h2>Schedule Your Intake With Nancy:</h2>
        <p>
          Email <a href="mailto:RestoringPathsMonitor@Gmail.com">RestoringPathsMonitor@Gmail.com</a> or Text <a href="tel:19097440025">(909) 744-0025</a>.
        </p>
      </div>
    </section>
  )
}
