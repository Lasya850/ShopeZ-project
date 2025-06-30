import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import HomeBanner from '../images/home-banner-2.png'
import Products from '../components/Products'
import Footer from '../components/Footer'
import FlashSale from '../components/FlashSale'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

  const navigate = useNavigate();

  const [bannerImg, setBannerImg] = useState();

  useEffect(()=>{
    fetchBanner();
  }, [])

  const fetchBanner = async() =>{
    await axios.get('http://localhost:6001/fetch-banner').then(
      (response)=>{
        setBannerImg(response.data);
      }
    )
  }

  return (
    <div className="HomePage">
      {/* Hero Banner */}
      <div className="home-banner">
        {bannerImg ? (
          <img src={bannerImg} alt="shopez Banner" />
        ) : (
          <div className="default-banner">
            <div className="banner-content">
              <h1>Welcome to shopez</h1>
              <p>Your Ultimate Shopping Destination</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          </div>
        )}
      </div>

      {/* Flash Sale Section */}
      <div className="flash-sale-section">
        <div className="section-header">
          <h2>Flash Sale</h2>
          <p>Limited time offers</p>
        </div>
        <FlashSale />
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Explore our wide range of products</p>
        </div>
        
        <div className="home-categories-container">
          <div className="home-category-card" onClick={()=>navigate('/category/Fashion')}>
            <div className="category-image">
              <img src="https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="Fashion" />
            </div>
            <h5>Fashion</h5>
            <p>Up to 70% off</p>
          </div>

          <div className="home-category-card" onClick={()=>navigate('/category/Electronics')}>
            <div className="category-image">
              <img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="Electronics" />
            </div>
            <h5>Electronics</h5>
            <p>Up to 50% off</p>
          </div>

          <div className="home-category-card" onClick={()=>navigate('/category/mobiles')}>
            <div className="category-image">
              <img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="Mobiles" />
            </div>
            <h5>Mobiles</h5>
            <p>Up to 40% off</p>
          </div>

          <div className="home-category-card" onClick={()=>navigate('/category/Groceries')}>
            <div className="category-image">
              <img src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="Groceries" />
            </div>
            <h5>Groceries</h5>
            <p>Up to 30% off</p>
          </div>

          <div className="home-category-card" onClick={()=>navigate('/category/Sports-Equipment')}>
            <div className="category-image">
              <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&w=400&q=80" alt="Sports" />
            </div>
            <h5>Sports</h5>
            <p>Up to 60% off</p>
          </div>

          <div className="home-category-card" onClick={()=>navigate('/category/Home')}>
            <div className="category-image">
              <img src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="Home" />
            </div>
            <h5>Home</h5>
            <p>Up to 45% off</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured-products-section">
        <div className="section-header">
          <h2>Featured Products</h2>
          <p>Handpicked for you</p>
        </div>
        <Products category = 'all' />
      </div>

      <Footer />
    </div>
  )
}

export default Home