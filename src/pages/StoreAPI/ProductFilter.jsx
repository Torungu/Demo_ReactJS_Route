import React, { Component } from 'react'
import axios from 'axios'

export default class ProductFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            categories: []
        }
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    fetchCategories = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products/categories")
            this.setState({ categories: response.data })
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchCategories()
    }

    render() {
        return (
            <div>
                <div className="mb-3">
                    <input type="text" className='form-control' placeholder='Search products ...' value={this.state.searchTerm} onChange={this.handleChange} />
                    <button className='btn btn-primary my-2' onClick={() => this.props.onSearch(this.state.searchTerm)} >Search</button>
                </div>
                <div className="mb-3">
                    <select className="form-control" onChange={(e) => this.props.onCategory(e.target.value)}>
                        {this.state.categories.map((category) => {
                            return <option value={category}>{category}</option>
                        })}
                    </select>
                </div>
            </div>
        )
    }
}
