import React, { useContext, useEffect, useState } from 'react'
import {BsCart3, BsPersonCircle} from 'react-icons/bs'
import {FcSearch} from 'react-icons/fc'
import {FaBars, FaTimes} from 'react-icons/fa'
import '../styles/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { GeneralContext } from '../context/GeneralContext'
import {ImCancelCircle} from 'react-icons/im'
import axios from 'axios'

const Navbar = () => {

  const navigate = useNavigate();

  const usertype = localStorage.getItem('userType');
  const username = localStorage.getItem('username');

  const {cartCount, logout} = useContext(GeneralContext);

  const [productSearch, setProductSearch] = useState('');
  const [noResult, setNoResult] = useState(false);
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(()=>{
    fetchData();
  }, [])

  const fetchData = async() =>{
    await axios.get('http://localhost:6001/fetch-categories').then(
      (response)=>{
        setCategories(response.data);
      }
    )
  }

  const handleSearch = () =>{
    if (categories.includes(productSearch)){
      navigate(`/category/${productSearch}`);
    }else{
      setNoResult(true);
    }
  }

  return (
    <>
      {/* user navbar */}
      {!usertype ? (
        <div className="navbar">
          <div className="navbar-left">
            <h3 onClick={()=> navigate('')}>
              <span className="shopx-logo">shopez</span>
            </h3>
            <div className="category-dropdown" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
              <FaBars className="category-icon" />
              <span>Categories</span>
              {showCategories && (
                <div className="category-menu">
                  {categories.map((category, index) => (
                    <div key={index} className="category-item" onClick={() => navigate(`/category/${category}`)}>
                      {category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="nav-content">
            <div className="nav-search">
              <input 
                type="text" 
                name="nav-search" 
                id="nav-search" 
                placeholder='Search for products, brands and more' 
                onChange={(e)=>setProductSearch(e.target.value)} 
              />
              <FcSearch className="nav-search-icon" onClick={handleSearch} />
              {noResult && (
                <div className='search-result-data'>
                  No items found.... try searching for Electronics, mobiles, Groceries, etc., 
                  <ImCancelCircle className='search-result-data-close-btn' onClick={()=> setNoResult(false)} />
                </div>
              )}
            </div>

            <button className='login-btn' onClick={()=> navigate('/auth')}>Login</button>
          </div>
        </div>
      ) : (
        <>
          {usertype === 'customer' ? (
            <div className="navbar">
              <div className="navbar-left">
                <h3 onClick={()=> navigate('')}>
                  <span className="shopx-logo">shopez</span>
                </h3>
                <div className="category-dropdown" onMouseEnter={() => setShowCategories(true)} onMouseLeave={() => setShowCategories(false)}>
                  <FaBars className="category-icon" />
                  <span>Categories</span>
                  {showCategories && (
                    <div className="category-menu">
                      {categories.map((category, index) => (
                        <div key={index} className="category-item" onClick={() => navigate(`/category/${category}`)}>
                          {category}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="nav-content">
                <div className="nav-search">
                  <input 
                    type="text" 
                    name="nav-search" 
                    id="nav-search" 
                    placeholder='Search for products, brands and more' 
                    onChange={(e)=>setProductSearch(e.target.value)} 
                  />
                  <FcSearch className="nav-search-icon" onClick={handleSearch} />
                  {noResult && (
                    <div className='search-result-data'>
                      No items found.... try searching for Electronics, mobiles, Groceries, etc., 
                      <ImCancelCircle className='search-result-data-close-btn' onClick={()=> setNoResult(false)} />
                    </div>
                  )}
                </div>

                <div className='nav-content-icons'>
                  <div className="nav-profile" onClick={()=> navigate('/profile')}>
                    <BsPersonCircle className='navbar-icons' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile" />
                    <p>{username}</p>
                  </div>
                  <div className="nav-cart" onClick={()=> navigate('/cart')}>
                    <BsCart3 className='navbar-icons' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cart" />
                    <div className="cart-count">{cartCount}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-admin">
              <h3 onClick={()=> navigate('/admin')}>shopez (admin)</h3>
              
              <ul>
                <li onClick={()=> navigate('/admin')}>Home</li>
                <li onClick={()=> navigate('/all-users')}>Users</li>
                <li onClick={()=> navigate('/all-orders')}>Orders</li>
                <li onClick={()=> navigate('/all-products')}>Products</li>
                <li onClick={()=> navigate('/new-product')}>New Product</li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Navbar
