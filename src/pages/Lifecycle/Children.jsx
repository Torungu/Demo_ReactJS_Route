import React, { Component } from 'react'

export default class Children extends Component {
    //Được chạy mỗi khi state/props thay đổi và chạy trước phương thức render
    //Nếu return về false => Không cho phép chạy phương thức render
    //Nó cho nhận 2 tham số state/props mới sau khi thay đổi
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.userId !== this.props.userId) {
            return true
        }
        return false
    }

    render() {
        console.log("Children render run")
        return (
            <div>
                <h1>Children {this.props.userId}</h1>
            </div>
        )
    }
}
