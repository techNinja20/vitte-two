const ProductCard = (props) => {

  const {title,description,price,image} = props


  return (

    
    <div
      style={{
        backgroundColor: "skyblue",
        borderRadius: "0.5rem",
        boxShadow: "-1px 1px 5px gray",
        overflow: "hidden",
        padding: "1rem",
        color: "whitesmoke",
      }}
    >
      <img
        src={image}
        alt=""
        style={{
          width: "15rem",
          height: "30vh",
          display: "flex",
          justifySelf: "center",
          objectFit: "contain",
        }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Title: {title} </h2>
        <p>Description: {description}</p>
      </div>
      <p style={{ paddingTop: "1rem" }}>${price}</p>
    </div>
  )
}

export default ProductCard
