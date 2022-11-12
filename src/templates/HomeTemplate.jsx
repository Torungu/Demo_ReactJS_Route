import React, { Component } from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default class HomeTemplate extends Component {
    render() {
        return (
            //Sử dụng outlet để import các file trong <Route></Route>
            <div>

                <Header />
                <div style={{ minHeight: 650 }}>
                    <Outlet />
                </div>
                <footer className='text-center p-5 bg-dark text-white'>Safe Trip !!</footer>
            </div>
        )
    }
}
