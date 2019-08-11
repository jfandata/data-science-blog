import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About US</h1>
            <br></br>
            <p>Novice.Practice.Mastered! is a data science learning blog.</p>
            <p>Docendo discimus! The best way to learn is to teach.</p>
            <p>This learning blog is the collaborative effort of students from the Washington University St. Louis Data Analytics Certification, cohort September 2018.</p>
            
        </Layout>
    )
}

export default AboutPage