import React from 'react'

import Header from './header'
import Menu from './menu'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const IndexLayout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <Menu />
            <div className={layoutStyles.content}>
            {props.children} 
            </div>
            <Footer />  
        </div>
    )
}

export default IndexLayout