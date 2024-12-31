import React from 'react'
import ProductCard from './components/prodcard'
import TopPicksSection from './components/toppicsection'
import Newarrival from './components/newarrivalsofa'
import BlogSection from './components/blogsection'
import InstagramSection from './components/instagramsection'
import HeroSection from './components/hero'
import Header from './components/header'

const Home = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProductCard/>
      <TopPicksSection/>
      <Newarrival/>
      <BlogSection/>
      <InstagramSection/>
      
    </div>
  )
}

export default Home
