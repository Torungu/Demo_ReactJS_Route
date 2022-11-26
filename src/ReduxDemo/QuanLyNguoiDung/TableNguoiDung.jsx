import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableNguoiDung extends Component {
    render() {
        return (
            <table className='table mt-2'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>userA</td>
                        <td>123</td>
                    </tr>
                    <tr>
                        <td>userB</td>
                        <td>456</td>
                    </tr> */}
                    {this.props.arrNguoiDungReducer.map((user, index) => {
                        return <tr>
                            <td>{this}</td>
                            <td></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => ({
    arrNguoiDungReducer: state.arrNguoiDungReducer
})

export default connect(mapStateToProps)(TableNguoiDung)