import React from 'react'
import Hero from './Hero'
import Features from './Feature'
import About from './About'
import Contact from './Contact'
import GalleryPhoto from './GalleryPhotos'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />

      <GalleryPhoto heading={true} />
      <About />
      <Contact />

    </>
  )
}

export default Home