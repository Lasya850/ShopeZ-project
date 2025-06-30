// Script to seed the database with realistic products in multiple categories for ShopX, using Unsplash/Pexels images
import axios from 'axios';

const products = [
  // Electronics
  {
    productName: 'Samsung Galaxy S23',
    productDescription: 'Flagship smartphone with 120Hz AMOLED display, 5G, and triple camera.',
    productMainImg: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    productCarousel: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1510557880182-3b1fcbf36d82?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    ],
    productSizes: ['128GB', '256GB', '512GB'],
    productGender: 'Unisex',
    productCategory: 'Electronics',
    productNewCategory: '',
    productPrice: 74999,
    productDiscount: 12
  },
  {
    productName: 'Sony WH-1000XM5 Headphones',
    productDescription: 'Industry-leading noise cancellation, 30 hours battery, wireless.',
    productMainImg: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    productCarousel: [
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    ],
    productSizes: ['Standard'],
    productGender: 'Unisex',
    productCategory: 'Electronics',
    productNewCategory: '',
    productPrice: 29999,
    productDiscount: 18
  },
  {
    productName: 'MacBook Air M2',
    productDescription: 'Apple M2 chip, 13.6-inch Liquid Retina display, 8GB RAM.',
    productMainImg: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    productCarousel: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    ],
    productSizes: ['256GB', '512GB', '1TB'],
    productGender: 'Unisex',
    productCategory: 'Electronics',
    productNewCategory: '',
    productPrice: 114999,
    productDiscount: 8
  },
  // Mobiles
  {
    productName: 'iPhone 15 Pro',
    productDescription: 'A17 Pro chip, 48MP camera, Titanium design.',
    productMainImg: 'https://images.unsplash.com/photo-1510557880182-3b1fcbf36d82?auto=format&fit=crop&w=400&q=80',
    productCarousel: [
      'https://images.unsplash.com/photo-1510557880182-3b1fcbf36d82?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
    ],
    productSizes: ['128GB', '256GB', '512GB'],
    productGender: 'Unisex',
    productCategory: 'mobiles',
    productNewCategory: '',
    productPrice: 149999,
    productDiscount: 5
  },
  {
    productName: 'OnePlus 11',
    productDescription: 'Hasselblad Camera, 100W charging, Snapdragon 8 Gen 2.',
    productMainImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    productCarousel: [
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1510557880182-3b1fcbf36d82?auto=format&fit=crop&w=400&q=80'
    ],
    productSizes: ['128GB', '256GB'],
    productGender: 'Unisex',
    productCategory: 'mobiles',
    productNewCategory: '',
    productPrice: 56999,
    productDiscount: 15
  },
  // Fashion
  {
    productName: 'Men Solid Slim Fit T-Shirt',
    productDescription: 'Cotton, round neck, half sleeve, available in multiple colors.',
    productMainImg: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['S', 'M', 'L', 'XL'],
    productGender: 'Men',
    productCategory: 'Fashion',
    productNewCategory: '',
    productPrice: 499,
    productDiscount: 40
  },
  {
    productName: 'Women Floral Print Kurta',
    productDescription: 'Rayon, A-line, 3/4 sleeve, ethnic wear.',
    productMainImg: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/1138903/pexels-photo-1138903.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['S', 'M', 'L', 'XL'],
    productGender: 'Women',
    productCategory: 'Fashion',
    productNewCategory: '',
    productPrice: 899,
    productDiscount: 35
  },
  {
    productName: 'Nike Air Max Running Shoes',
    productDescription: 'Comfortable running shoes with Air Max technology.',
    productMainImg: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['7', '8', '9', '10'],
    productGender: 'Unisex',
    productCategory: 'Fashion',
    productNewCategory: '',
    productPrice: 8999,
    productDiscount: 25
  },
  // Home
  {
    productName: 'Philips LED Bulb 9W',
    productDescription: 'Energy efficient, long life, cool daylight.',
    productMainImg: 'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/207924/pexels-photo-207924.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['Standard'],
    productGender: 'Unisex',
    productCategory: 'Home',
    productNewCategory: '',
    productPrice: 199,
    productDiscount: 20
  },
  {
    productName: 'Prestige Electric Pressure Cooker',
    productDescription: '5L capacity, digital display, multiple cooking modes.',
    productMainImg: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['5L'],
    productGender: 'Unisex',
    productCategory: 'Home',
    productNewCategory: '',
    productPrice: 2499,
    productDiscount: 30
  },
  // Groceries
  {
    productName: 'Aashirvaad Atta 5kg',
    productDescription: 'Whole wheat flour, 5kg pack, fresh and healthy.',
    productMainImg: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['5kg'],
    productGender: 'Unisex',
    productCategory: 'Groceries',
    productNewCategory: '',
    productPrice: 299,
    productDiscount: 10
  },
  {
    productName: 'Tata Premium Tea 500g',
    productDescription: 'Premium quality tea leaves, 500g pack.',
    productMainImg: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['500g'],
    productGender: 'Unisex',
    productCategory: 'Groceries',
    productNewCategory: '',
    productPrice: 199,
    productDiscount: 15
  },
  // Sports
  {
    productName: 'Cosco Football',
    productDescription: 'Standard size 5, synthetic, suitable for all weather.',
    productMainImg: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['5'],
    productGender: 'Unisex',
    productCategory: 'Sports-Equipment',
    productNewCategory: '',
    productPrice: 499,
    productDiscount: 25
  },
  {
    productName: 'Yonex Badminton Racket',
    productDescription: 'Professional badminton racket with graphite frame.',
    productMainImg: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&w=400&q=80',
    productCarousel: [
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&w=400&q=80',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&w=400&q=80'
    ],
    productSizes: ['Standard'],
    productGender: 'Unisex',
    productCategory: 'Sports-Equipment',
    productNewCategory: '',
    productPrice: 2999,
    productDiscount: 20
  }
];

async function seedProducts() {
  console.log('🛍️ Starting to seed ShopX database with products...');
  
  for (const product of products) {
    try {
      const res = await axios.post('http://localhost:6001/add-new-product', product);
      console.log(`✅ Added: ${product.productName} (${product.productCategory})`);
    } catch (err) {
      console.error(`❌ Error adding ${product.productName}:`, err.response?.data || err.message);
    }
  }
  
  console.log('🎉 Seeding complete! ShopX is now ready with a variety of products.');
}

seedProducts(); 