import React, { Component } from "react";
import ProductDataService from "../services/product.service";
import { Link } from "react-router-dom";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchProductByName = this.onChangeSearchProductByName.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.setActiveProduct.bind(this);
    this.searchProductByName = this.searchProductByName.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
      searchProductByName: ""
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangeSearchProductByName(e) {
    const searchProductByName = e.target.value;
    console.log('---searchProductByName---');
    this.setState({
      searchProductByName: searchProductByName
    });
  }

  retrieveProducts() {
    ProductDataService.getAll()
      .then(response => {
        this.setState({
          products: response.data.products.data
        });
        console.log('---product-list-data---');
        console.log(response.data.products.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }


  searchProductByName() {
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });

    ProductDataService.findByProductName(this.state.searchProductByName)
      .then(response => {
        this.setState({
          products: response.data.data
        });
        console.log('---findByProductName---');
        console.log(response.data.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchProductByName, products, currentProduct, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Product Name..."
              value={searchProductByName}
              onChange={this.onChangeSearchProductByName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchProductByName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Product Listing</h4>
          
          <p>Click on Product's to see Details...</p>

          <ul className="list-group">
            {products &&
              products.map((product, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.name}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentProduct ? (
            <div>
              <h4>-:Product Details:-</h4><br/>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentProduct.name}
              </div><br/>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentProduct.description}
              </div><br/>
              <div>
                <label>
                  <strong>Price:</strong>
                </label>{" "}
                {currentProduct.price}
              </div><br/>

              <Link
                to={"/products/" + currentProduct.id}
                className="btn btn-info"
              >
                Edit Product
              </Link>
            </div>
          ) : (
            <div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
