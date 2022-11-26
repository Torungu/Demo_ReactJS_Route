import React, { Component } from 'react'
import DemoCar from './DemoCar'
import DemoTangGiamFS from './DemoTangGiamFS'
import QuayLyNguoiDung from './QuanLyNguoiDung/QuayLyNguoiDung'

export default class ReduxDemo extends Component {
    render() {
        return (
            <div className='container'>
                <DemoTangGiamFS />
                <DemoCar />
                <QuayLyNguoiDung />
            </div>
        )
    }
}
