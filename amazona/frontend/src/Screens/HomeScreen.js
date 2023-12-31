import data from '../data';
function HomeScreen(props) {
  return (
    <>
      <div>Home</div>
      <ul className="products">
        {data.products.map((product) => (
          <li>
            <div className="product">
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
              <div className="product-name">
                <a href="product.html">{product.name}</a>
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.category}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating}Stars{product.numReviews}reviews
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default HomeScreen;
