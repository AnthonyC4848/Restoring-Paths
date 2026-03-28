import React, { useEffect, useMemo, useState } from 'react'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide4 from '../assets/slide4.jpg'

export default function Carousel({ images, interval = 4500 }){
  const unsplashFallback = [
    'https://source.unsplash.com/1600x900/?parent,child&sig=1',
    'https://source.unsplash.com/1600x900/?family,park&sig=2',
    'https://source.unsplash.com/1600x900/?mother,child&sig=3'
  ]

  const localCandidates = useMemo(() => [slide1, slide2, slide4], [])

  const [index, setIndex] = useState(0)
  const [imagesList, setImagesList] = useState(images || localCandidates)

  useEffect(()=>{
    if(images && images.length) setImagesList(images)
    else if(localCandidates.length) setImagesList(localCandidates)
    else setImagesList(unsplashFallback)
  },[images, localCandidates])

  useEffect(()=>{
    if(index >= imagesList.length && imagesList.length > 0) {
      setIndex(0)
    }
  },[imagesList, index])

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

      <div className="carousel-overlay" aria-hidden="true">
        <p className="carousel-overlay-title">Supervised Family Visits</p>
      </div>

      <div className="carousel-controls" aria-hidden="false">
        <button className="carousel-arrow prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="carousel-arrow next" onClick={next} aria-label="Next slide">›</button>
      </div>
    </div>
  )
}
