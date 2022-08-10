import React from 'react'
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import Categories from "../../components/Categories";
import HomeProducts from "../../components/HomeProducts";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <>
        <Navbar />
        <Carousel />
        <Categories />
        <HomeProducts />
        <Newsletter />
        <Footer />
    </>
  )
}

export default Home;