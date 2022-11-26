import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoTangGiamFS extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h3>Ví dụ 1: Tăng-giảm fontsize</h3>
                <p style={{ fontSize: this.props.fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta saepe aliquid incidunt eaque temporibus molestias magnam blanditiis. Veniam facere officiis repellat nam in natus iste consequuntur, aspernatur voluptatem quidem quod.</p>
                <button className='btn btn-success mx-2' onClick={() => {
                    const action = {
                        //state nào thì setState thay đổi component đó, nên trong Store chứa nhiều state thì cần type để phân biệt
                        type: 'TANG_GIAM_FONTSIZE',
                        payload: 1 //Dữ liệu gửi lên redux
                    };
                    // console.log(action)
                    this.props.dispatch(action)
                }}>+</button>
                <button className='btn btn-danger mx-2' onClick={() => {
                    const action = {
                        type: 'TANG_GIAM_FONTSIZE',
                        payload: -1
                    };
                    this.props.dispatch(action)
                }}>-</button>
            </div>
        )
    }
}


//Cách 1:
// const mapStateToProps = (state) => {
//     return {
//         fSize: state.fontSize
//     }
// }

//Cách 2:
const mapStateToProps = (state) => ({
    fSize: state.fontSize
})


//Khái niệm HOC: function()()
const ComponentRedux = connect(mapStateToProps)(DemoTangGiamFS)
export default ComponentRedux //tạo kết nối với redux