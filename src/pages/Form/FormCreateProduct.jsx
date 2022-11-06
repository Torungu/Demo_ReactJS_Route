import React, { Component } from 'react'

export default class FormCreateProduct extends Component {

    //Lấy dữ liệu thông qua state, setState ở trong input
    state = {
        values: {
            id: '',
            name: '',
            price: 0,
            productType: false,
            image: '',
            description: ''
        },
        errors: {
            id: '',
            name: '',
            price: '',
            image: '',
            description: ''
        },
        valid: true,

    }

    handleInputChange = (e) => {
        let { id, value } = e.target

        //Gán cho 1 biến mới, khi thay đổi biến đó thì nó setState lại vào Object ở trong state. Sử dụng cách này để mà modify đc những keyword trong object của state

        //attribute: là thược tính tự mình thêm vào
        //Cách 1: Phải thêm data-regex vô thẻ selector
        let dataAttrRegex = e.target.getAttribute('data-regex');

        //Cách 2:Phải thêm data-type vô thẻ selector
        let type = e.target.getAttribute('data-type');
        // console.log(dataAttrRegex)

        //Xử lý Values
        let newValues = this.state.values
        newValues[id] = value

        //Xử lý Errors
        let newErrors = this.state.errors
        let messErrors = '';
        if (value.trim() === '') {
            messErrors = id + ' cannot be blank'
        } else {
            //Cách 1:
            // if (dataAttrRegex) {
            //     let regex = new RegExp(dataAttrRegex)
            //     console.log(regex)
            //     if (!regex.test(value)) {
            //         messErrors = id + ' is invalid'
            //     }
            // }

            //Cách 2:
            if (type === 'number') {
                let regexNumber = /^\d+$/
                if (!regexNumber.test(value)) {
                    messErrors = id + ' is invalid'
                }
            }
        }

        newErrors[id] = messErrors

        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
            let valid = this.checkValid()
            this.setState({
                valid: valid
            })
        })


        //Cách DOM LẤY ID VÀ VALUE
        // let { id, value } = e.target
        // console.log(id, value)
        // this.setState({
        //     [id]: value//Lấy keyword
        // })
    }

    checkValid = () => {
        //form hợp lệ khi value !==0 và errors=''
        let { values, errors } = this.state;
        for (let key in errors) {
            if (errors[key] !== '' || values[key] === '') {
                return false
            }
        }
        return true;
    }


    //Tránh form làm load lại trang
    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.checkValid()) {
            return;//Dừng hàm không submit
        }
    }

    render() {
        const error = this.state.errors
        return (
            <form className='container' onSubmit={this.handleSubmit}>
                <h3>Create Product</h3>
                <div className="card">
                    <p className="card-header text-light bg-dark">
                        Product Info
                    </p>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <p className='m-0'>Id</p>
                                    <input type="text" className='form-control mb-3' id='id' name='id' onInput={this.handleInputChange} />
                                    {error.id !== '' && <div className="alert alert-danger mt-2">{error.id}</div>}
                                    <p className='m-0'>Name</p>
                                    <input type="text" className='form-control mb-3' id='name' name='name' onInput={this.handleInputChange} />
                                    {error.name !== '' && <div className="alert alert-danger mt-2">{error.name}</div>}
                                    <p className='m-0'>Price</p>
                                    <input data-type='number' data-regex="^\d+$" type="text" className='form-control mb-3' id='price' name='price' onInput={this.handleInputChange} />
                                    {/* Sử dụng toán tử 3 ngôi để setup thẻ errors */}
                                    {error.price !== '' && <div className="alert alert-danger mt-2">{error.price}</div>}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p className='m-0'>Image</p>
                                    <input type="text" className='form-control mb-3' id='image' name='image' onInput={this.handleInputChange} />
                                    {error.image !== '' && <div className="alert alert-danger mt-2">{error.image}</div>}
                                    <p className='m-0'>ProductType</p>
                                    <select className='form-control mb-3' id="productType" onInput={this.handleInputChange}>
                                        <option value={'phone'}>phone</option>
                                        <option value={'tablet'}>tablet</option>
                                        <option value={'laptop'}>laptop</option>
                                    </select>
                                    <p className='m-0'>Description</p>
                                    <input type="text" className='form-control mb-3' id='description' name='description' onInput={this.handleInputChange} />
                                    {error.description !== '' && <div className="alert alert-danger mt-2">{error.description}</div>}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" disabled={!this.state.valid}>Create</button>
                        {/* <button className="btn btn-success mx-3">Update</button> */}
                    </div>
                </div>
            </form >
        )
    }
}


//CALLBACK Function: phân biệt giữ việc nhận tham số và được lấy tham số trong việc sử dụng callback function