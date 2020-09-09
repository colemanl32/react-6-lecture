import React, { Component } from 'react'
import Loading from '../ProductList/Loading'
import { connect } from 'react-redux'
import { getProduct } from '../../ducks/productsReducer'
import './productView.css'

class ProductView extends Component {
  componentDidMount() {
    this.props.getProduct(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    return (
      <div className="container">
        {this.props.isLoading && <Loading />}
        <h1 className="product-view-name">{this.props.product.name}</h1>
        <p className="product-price">${this.props.product.price}</p>
        <p className="product-description">{this.props.product.description}</p>
        <button onClick={() => this.props.history.push('/')}>
          BACK TO PRODUCTS
        </button>
      </div>
    )
  }
}

const mapStateToProps = (reduxState) => {
  return reduxState.products
}

export default connect(mapStateToProps, { getProduct })(ProductView)
