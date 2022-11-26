import React, { Component } from 'react'
import { connect } from 'react-redux'
import FormNguoiDung from './FormNguoiDung'
import TableNguoiDung from './TableNguoiDung'

class QuayLyNguoiDung extends Component {
    render() {
        return (
            <div>
                <hr />
                <h3>Ví dụ 3: Quản lý người dùng</h3>
                <FormNguoiDung />
                <TableNguoiDung />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps)(QuayLyNguoiDung)