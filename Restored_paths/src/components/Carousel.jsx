import React, { useEffect, useState } from 'react'

export default function Carousel({ images, interval = 4500 }){
  const unsplashFallback = [
    'https://source.unsplash.com/1600x900/?parent,child&sig=1',
    'https://source.unsplash.com/1600x900/?family,park&sig=2',
    'https://source.unsplash.com/1600x900/?mother,child&sig=3'
  ]

  const localCandidates = [
    '/src/assets/slide1.jpg',
    '/src/assets/slide2.jpg',
    '/src/assets/slide3.jpg',
    '/src/assets/slide4.jpg'
  ]

  const [index, setIndex] = useState(0)
  const [imagesList, setImagesList] = useState(images || [])

  // try to detect local images; fall back to provided images or unsplash
  useEffect(()=>{
    let mounted = true
    const checks = localCandidates.map(async (url)=>{
      try{
        const res = await fetch(url, { method: 'HEAD' })
        if(res.ok) return url
      }catch(e){ }
      return null
    })
    Promise.all(checks).then(results=>{
      if(!mounted) return
      const found = results.filter(Boolean)
      if(images && images.length) setImagesList(images)
      else if(found.length) setImagesList(found)
      else setImagesList(unsplashFallback)
    })
    return ()=>{ mounted = false }
  },[images])

  useEffect(()=>{
    if(!imagesList || imagesList.length===0) return
    const id = setInterval(()=>{
      setIndex(i => (i + 1) % imagesList.length)
    }, interval)
    return ()=> clearInterval(id)
  },[interval, imagesList])

  const prev = () => setIndex(i => (i - 1 + imagesList.length) % imagesList.length)
  const next = () => setIndex(i => (i + 1) % imagesList.length)

  return (
    <div className="hero" role="region" aria-label="Photo slideshow">
      {(imagesList || []).map((src, i) => (
        <img
          key={i}
          className={`slide ${i===index ? 'active' : ''}`}
          src={src}
          alt=""
          aria-hidden={i===index? 'false':'true'}
        />
      ))}

      <div className="carousel-controls" aria-hidden="false">
        <button className="carousel-arrow prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="carousel-arrow next" onClick={next} aria-label="Next slide">›</button>
      </div>
    </div>
  )
}
