import React, { Component } from 'react';
import GioHang from './GioHang'
import DanhSachSanPham from './DanhSachSanPham'

export default class BaiTapGioHang extends Component {
    state = {
        gioHang: [{
            maSP: 1, tenSP: "VinSmart Live", giaBan: 5700000, hinhAnh: "./img/vsphone.jpg", soLuong: 2
        },]
    }

    themGioHang = (spClick) => {
        const spGioHang = { ...spClick, soLuong: 1 };

        //Xử lý khi bấm thì vào giỏ hàng
        let gioHang = this.state.gioHang;
        let spCheck = gioHang.find(sp => sp.maSP === spClick.maSP)
        if (spCheck) {
            spCheck.soLuong++
        }
        else {
            gioHang.push(spGioHang)
        }

        //Cập nhật giỏ hàn
        this.setState({
            gioHang: gioHang
        })
    }

    xoaGioHang = (maSPClick) => {
        // let gioHang = this.state.gioHang;
        // let maSPDel = gioHang.findIndex(sp => sp.maSP === maSPClick)

        // if (maSPDel !== -1) { gioHang.splice(maSPDel, 1) }
        // this.setState({
        //     gioHang: gioHang
        // })

        //Cách 2:
        this.setState({
            gioHang: this.state.gioHang.filter(sp => sp.maSP !== maSPClick)
        })
    }

    tangSP = (maSP, soLuong) => {
        // console.log(maSP, soLuong)
        let gioHang = this.state.gioHang
        let spCheck = gioHang.find(sp => sp.maSP === maSP)
        if (spCheck) {
            spCheck.soLuong = soLuong + 1;
        }
        this.setState({
            gioHang: gioHang
        })
    }

    giamSP = (maSP, soLuong) => {
        // console.log(maSP, soLuong)
        let gioHang = this.state.gioHang
        let spCheck = gioHang.find(sp => sp.maSP === maSP)
        if (spCheck) {
            spCheck.soLuong = soLuong - 1;
            if (spCheck.soLuong <= 0) {
                if (window.confirm('Bạn muốn xóa sản phẩm không ?')) {
                    this.xoaGioHang(maSP);
                    return;
                }
                spCheck.soLuong = soLuong - 1;
                return;
            }
        }
        this.setState({
            gioHang: gioHang
        })
    }

    render() {
        return (
            <div className='container mb-5'>
                <GioHang gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang} tangSP={this.tangSP} giamSP={this.giamSP} />
                <DanhSachSanPham themGioHang={this.themGioHang} />
            </div>
        )
    }
}
