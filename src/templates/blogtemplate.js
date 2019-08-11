import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug} }) {
            frontmatter {
                title
                author
                date
                tags
            }
            html
        }
    }
`

const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title}/>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>By {props.data.markdownRemark.frontmatter.author}, Published on {props.data.markdownRemark.frontmatter.date}, Tag: {props.data.markdownRemark.frontmatter.tags}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}

export default Blog