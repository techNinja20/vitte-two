import ProductCard from "../components/ProductCard"
import { allProducts } from "../data/data"
import "../css/product.css"

const ProductPage = () => {
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h1 style={{ textAlign: "center", color: "skyblue" }}>All Products</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "2rem",
          }}
        >
          {allProducts.map((data) => (
            <div className="card">
              <div className="card-img" >
                <img src={data.image} alt="" />
              </div>
              <div className="card-details">
                <h2>Title: {data.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "2rem",
          }}
        >
          {allProducts.length <= 0 ? (
            <div>No products found</div>
          ) : (
            allProducts.map((ele, i) => (
              // <ProductCard title={ele.title} img={ele.img} price={ele.price} desc={ele.desc} />
              <ProductCard {...ele} key={ele.id || i} />
            ))
          )}
        </div> */}
      </div>
    </>
  )
}

export default ProductPage
