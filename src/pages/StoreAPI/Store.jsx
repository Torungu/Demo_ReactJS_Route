import axios from 'axios'
import React, { Component } from 'react'
import ProductFilter from '../StoreAPI/ProductFilter'
import ProductList from '../StoreAPI/ProductList'

export default class Store extends Component {
    //rconst
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            searchTerm: "",
            category: ""
        }
    }


    //Use param after "...?.."
    fecthProducts = async () => {
        let url = "https://dummyjson.com/products"
        if (this.state.searchTerm) {
            url += `/search?q=${this.state.searchTerm}`
        } else if (this.state.category) {
            url += `/category/${this.state.category}`
        }
        try {
            const reponse = await axios.get(url)
            this.setState({ products: reponse.data.products },)
            console.log(reponse.data)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fecthProducts()
    }

    //Take the children DOM to this Parent
    handleSearch = (searchTerm) => {
        this.setState({ searchTerm, category: "" })//If keyword is the same, u can type like this for shorter
    }

    hanbleCategory = (category) => {
        this.setState({ category, searchTerm: "" })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm || prevState.category !== this.state.category) {
            this.fecthProducts()
        }

    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center text-primary'>Cybersoft Store</h1>
                <div className="row">
                    <div className="col-3">
                        <ProductFilter onSearch={this.handleSearch} onCategory={this.hanbleCategory} />
                    </div>
                    <div className="col-9">
                        <ProductList products={this.state.products} />
                    </div>
                </div>
            </div >
        )
    }
}
