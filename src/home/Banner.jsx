import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom'
import SelectedCategory from '../components/SelectedCategory'


const title = (<h2>Search Your One From <span>Thousend</span> Of Products </h2>)
const desc = "We have largest collection of products"

const bannerList = [
  {
    iconName:"icofont-users-alt-4",
    text:"1.5 Million Customers ",
  },
  {
    iconName:"icofont-notification",
    text:"More then 2000 Marchent",
  },
  {
    iconName:"icofont-users-globe",
    text:"Buy Anything Obline",
  },
];
  


const Banner = () => {

  const [searchProduct,setSearchProduct] = useState("");
  const [filterProduct,setFilterProduct] = useState(productData);

  const handleSearch = e =>{

    const serachTerm = e.target.value;
    setSearchProduct(serachTerm);

    const filtered = productData.filter((product) => product.name.toLowerCase().includes(serachTerm.toLowerCase()));

    setFilterProduct(filtered);

  }
 

  return (
    <div className='banner-section style-4'>
      <div className='container'>
        <div className='banner-content'>
            {title} 

            <form>
              <SelectedCategory select={"all"}/>
              <input type='text' name='search' id='search' placeholder='search your product' value={searchProduct} onChange={handleSearch}/>
              <button type='submit'>
                <i className='icofont-search'></i>
              </button>
            </form>
            <p>{desc}</p>
               {/* search and filter products */}
            <ul className='lab-ul'>
              {
                searchProduct && filterProduct.map((product,i) => <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>)
              }

            </ul>
        </div>
      </div>
    </div>
  )
}

export default Banner
