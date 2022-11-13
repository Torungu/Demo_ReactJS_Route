import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { thumbnail, title, description, price } = this.props.product
        return (
            <div className='card' style={{ width: '100%', height: '100%' }}>
                <img src={thumbnail} alt={title} className='card-img' height={250} />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{price} $</p>
                    <p className="card-text">{description.length > 50 ? description.substring(0, 50) + '...' : description}</p>
                    <button className="btn btn-success">Details</button>
                </div>
            </div>
        )
    }
}
