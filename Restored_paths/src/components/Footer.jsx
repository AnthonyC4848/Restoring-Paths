import React from 'react'

export default function Footer(){
  return (
    <footer style={{borderTop:'1px solid #eee',padding:'2rem 1rem',textAlign:'center',color:'#666'}}>
      <div style={{maxWidth:980,margin:'0 auto'}}>
        <p style={{margin:0}}>© {new Date().getFullYear()} Restoring Paths — Supervised Family Visits</p>
        <p style={{margin:'0.25rem 0 0'}}>Call: <a href="tel:19097440025">(909) 744-0025</a> • <a href="mailto:restoringpathsmonitor@gmail.com">restoringpathsmonitor@gmail.com</a></p>
      </div>
    </footer>
  )
}
