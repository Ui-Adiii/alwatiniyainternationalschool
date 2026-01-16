import React from 'react'
import Hero from './Hero'
import Features from './Feature'
import About from './About'
import Contact from './Contact'
import GalleryPhoto from './GalleryPhotos'
import SpinnerButton from '../components/SpinnerButton'

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <GalleryPhoto heading={true} />
      <About />
      <Contact />
  {/* <SpinnerButton /> */}
    </>
  )
}

export default Home