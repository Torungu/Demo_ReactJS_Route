import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        const { prod, themGioHang } = this.props
        return (
            <div className="card">
                <img src={prod.hinhAnh} alt="..." className='w-100' height={350} style={{ objectFit: 'cover' }} />
                <div className="card-body">
                    <h3>{prod.tenSP}</h3>
                    <p>{prod.giaBan.toLocaleString()} VNĐ</p>
                    <button className="btn btn-danger" onClick={() => { themGioHang(prod) }}>Thêm Giỏ Hàng <i className="fa fa-cart-plus"></i></button>
                </div>
            </div>
        )
    }
}
