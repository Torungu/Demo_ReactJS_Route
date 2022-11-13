import React, { Component } from 'react'
import ProductItem from '../StoreAPI/ProductItem'

export default class ProductList extends Component {
    render() {
        return (
            <div className="row">
                {this.props.products.map((product) => {
                    return (
                        <div key={product.id} className='col-4 mb-4'>
                            <ProductItem product={product} />
                        </div>
                    )
                })}
                {this.props.category}
            </div>
        )
    }
}
