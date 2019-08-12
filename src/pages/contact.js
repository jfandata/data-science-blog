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
                <li>Say Hi, 你好 or find <strong>Jie F.</strong> on <a href="https://twitter.com/jfstl1" target="_blank"><strong>twitter</strong></a></li>
                <li>Say Hi or find <strong>Martin C.</strong> on <a href="/contact" target="_blank"><strong>twitter</strong></a></li>
                <li>Say Hi or find <strong>Maria J.</strong> on <a href="/contact" target="_blank"><strong>twitter</strong></a></li>
                <li>Say Hi or find <strong>Sohini P.</strong> on <a href="/contact" target="_blank"><strong>twitter</strong></a></li>
                <li>Say Hi or find <strong>Sunitha R.</strong> on <a href="/contact" target="_blank"><strong>twitter</strong></a></li>
            </ul>
        </Layout>
    )
}

export default ContactPage