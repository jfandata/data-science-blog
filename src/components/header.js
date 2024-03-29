import React from 'react'
// import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <header className={headerStyles.header}>
            {/* <h1>
                <Link className={headerStyles.title} to="/">
                    {data.site.siteMetadata.title}
                </Link>
            </h1> */}
            <center>
            <h1>
                <strong>Novice.</strong>  
                <br></br>
                <strong>Practice.</strong>
                <br></br>
                <strong>Mastered!</strong>
            </h1>
            </center>
        </header>
    )
}

export default Header