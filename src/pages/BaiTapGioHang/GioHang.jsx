import React, { Component } from 'react'

export default class GioHang extends Component {
    render() {
        const { gioHang, xoaGioHang, tangSP, giamSP } = this.props
        return (
            <div>
                <div className="card mt-2">
                    <div className="card-header">Giỏ Hàng</div>
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Mã sp</th>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Giá Bán</th>
                                    <th>Số lượng</th>
                                    <th>Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <tr>
                                    <td>1</td>
                                    <td>
                                        <img src='https://picsum.photos/200/200' width={50} height={50} />
                                    </td>
                                    <td>IPhone</td>
                                    <td>1.000 $</td>
                                    <td>
                                        <button className="btn btn-dark mx-2">+</button>
                                        1
                                        <button className="btn btn-dark mx-2">-</button>
                                    </td>
                                    <td>1000 $</td>
                                    <td>
                                        <button className="btn btn-danger">Xóa</button>
                                    </td>
                                </tr> */}
                                {gioHang.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.maSP}</td>
                                        <td>
                                            <img src={item.hinhAnh} width={50} height={50} />
                                        </td>
                                        <td>{item.tenSP}</td>
                                        <td>{item.giaBan.toLocaleString()} VNĐ</td>
                                        <td>
                                            <button className="btn btn-dark mx-2" onClick={() => {
                                                tangSP(item.maSP, item.soLuong)
                                            }}>+</button>
                                            {item.soLuong}
                                            <button className="btn btn-dark mx-2" onClick={() => {
                                                giamSP(item.maSP, item.soLuong)
                                            }}>-</button>
                                        </td>
                                        <td>{(item.giaBan * item.soLuong).toLocaleString()} VNĐ</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => { xoaGioHang(item.maSP) }}>Xóa</button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
