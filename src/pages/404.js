import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Well, this is awkward...the page you are looking for doesn't exist.</h1>
            <p>Lets head <Link to="/"><strong>Home</strong></Link> and try again.</p>
        </Layout>
    )
}

export default NotFound