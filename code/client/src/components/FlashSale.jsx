import React from 'react'
import '../styles/FlashSale.css';
import { useNavigate } from 'react-router-dom';

const FlashSale = () => {
  const navigate = useNavigate();

  const flashSaleProducts = [
    {
      id: 1,
      name: 'Samsung Galaxy M34',
      description: '6GB RAM, 128GB Storage',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      discount: 25,
      originalPrice: 15999,
      discountedPrice: 11999
    },
    {
      id: 2,
      name: 'Nike Air Max',
      description: 'Running Shoes for Men',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400&q=80',
      discount: 40,
      originalPrice: 8999,
      discountedPrice: 5399
    },
    {
      id: 3,
      name: 'Boat Rockerz 450',
      description: 'Wireless Headphones',
      image: 'https://images.pexels.com/photos/374777/pexels-photo-374777.jpeg?auto=compress&w=400&q=80',
      discount: 35,
      originalPrice: 1999,
      discountedPrice: 1299
    },
    {
      id: 4,
      name: 'Puma T-Shirt',
      description: 'Men Solid Cotton T-Shirt',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
      discount: 50,
      originalPrice: 999,
      discountedPrice: 499
    },
    {
      id: 5,
      name: 'Mi Smart Band 6',
      description: 'Fitness Band with AMOLED Display',
      image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&w=400&q=80',
      discount: 30,
      originalPrice: 2499,
      discountedPrice: 1749
    }
  ];

  return (
    <div className="flashSaleContainer">
      <div className="flashSale-header">
        <div className="flashSale-title">
          <h3>shopez Flash Sale</h3>
          <div className="timer">
            <span>Ends in: </span>
            <span className="time-unit">02</span>:
            <span className="time-unit">45</span>:
            <span className="time-unit">30</span>
          </div>
        </div>
        <button className="view-all-btn">View All</button>
      </div>
      
      <div className="flashSale-body">
        {flashSaleProducts.map((product) => (
          <div key={product.id} className="flashSaleCard" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className="discount-badge">{product.discount}% OFF</div>
            </div>
            <div className="flashSaleCard-data">
              <h6>{product.name}</h6>
              <p>{product.description}</p>
              <div className="price-section">
                <span className="discounted-price">₹{product.discountedPrice}</span>
                <span className="original-price">₹{product.originalPrice}</span>
                <span className="discount-text">{product.discount}% off</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FlashSale
