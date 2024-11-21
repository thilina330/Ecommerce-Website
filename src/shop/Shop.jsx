import React from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";



const showResults = "Showing 01 -12 of 139 Results";

const Shop = () => {

    const [GridList, setGridList] = React.useState(true);
    const [products, setProducts] = React.useState(Data);

    // pageination
    const [currentPage, setCurrentPage] = React.useState(1);
    const [productsPerPage] = React.useState(12);

    // get current products
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  // filter products base on category

  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const menuItems = [...new Set(Data.map((item) => item.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) =>{
      return newVal.category === curcat;
    })

    setSelectedCategory(curcat);
    setProducts(newItem);
  }

    
    

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="shop" />

      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>

                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                   <p>{showResults}</p>
                   <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                        <a className="grid" onClick={() => setGridList(!GridList)}>
                            <i className="icofont-ghost"></i>
                        </a>
                        <a className="list" onClick={() => setGridList(!GridList)}>
                            <i className="icofont-listine-dots"></i>
                        </a>
                   </div>
                </div>

                {/* products cards */}
                <div>
                    <ProductCards GridList={GridList} products={currentProducts}/>
                </div>

                {/* pagination */}
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                    activepage={currentPage}
                />
                
              </article>
            </div>
            <div className="col-lg-4 col-12">
                <aside>
                  <Search products={products} GridList={GridList}/>
                  <ShopCategory
                   filterItem={filterItem}
                   setItems={setProducts}
                    menuItems={menuItems}
                    setProducts={setProducts}
                    selectedCategory={selectedCategory}
                  />
                </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
