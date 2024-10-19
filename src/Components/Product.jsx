import { Link } from "react-router-dom";

export default function Product(props) {
  let products = props.products;

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="card kard my-2  " style={{ width: "18rem" }}>
                <div className="d-flex justify-content-center">
                  <img
                    src={product.image}
                    className="card-img-top 
                   cardImg"
                    alt={product.title}
                  />
                </div>
                <div className="card-body position-relativ">
                  <h5 className="card-title" title={product.title}>
                    {product.title.length > 20
                      ? `${product.title.substring(0, 20)}`
                      : product.title}
                  </h5>
                  <p className="card-text " title={product.description}>
                    {product.description.length > 30
                      ? `${product.description.substring(0, 30)}`
                      : product.description}
                  </p>
                  <p className="card-text">
                    <span className="text-danger">Price:</span> ${product.price}{" "}
                  </p>
                  <Link
                    // onClick={showDetails}

                    to={`/products/${product.id}`}
                    className="btn btn-primary position-absolute btnCustom"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
