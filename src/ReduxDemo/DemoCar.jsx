//rcredux, xóa export và mapDispatchToProps: sử dụng cách khác nên chưa cần
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoCar extends Component {
    changeClr = (Clr) => {
        let newImg = `./img/${Clr}-car.jpg`
        const action = {
            type: 'CHANGE_COLOR',
            payload: newImg
        };
        this.props.dispatch(action)
    }

    render() {
        console.log(this.props)
        let { imgSrc } = this.props
        return (
            <div>
                <hr />
                <h3>Ví dụ 2: Chọn màu cho xe</h3>
                <div className="row">
                    <div className="col-6">
                        <img src={imgSrc} className='w-100' alt="..." />
                    </div>
                    <div className="col-6">
                        <div className="btn btn-danger mx-2" onClick={() => {
                            this.changeClr('red')
                        }}>Red</div>
                        <div className="btn btn-secondary mx-2" onClick={() => {
                            this.changeClr('steel')
                        }}>Steel</div>
                        <div className="btn btn-dark mx-2" onClick={() => {
                            this.changeClr('black')
                        }}>Black</div>
                        <div className="btn btn-light mx-2" onClick={() => {
                            this.changeClr('silver')
                        }}>Silver</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    imgSrc: state.imgSrc
})

export default connect(mapStateToProps)(DemoCar)