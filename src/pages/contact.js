import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h2>We'd love to hear from you!</h2>
             
            <ul className={contactStyles.ul}>
                <li>Say Hi or find <strong>.</strong> on <a href="https://twitter.com/" target="_blank"><strong>twitter</strong></a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage
