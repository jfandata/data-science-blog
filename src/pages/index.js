import React from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'

import IndexLayout from '../components/indexlayout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
                limit: 5
                sort: {
                    fields: [frontmatter___date]
                    order: DESC
                }
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            author
                            date (formatString: "MMMM DD, YYYY")
                            tags
                        }
                        timeToRead
                        excerpt (
                            format: PLAIN
                            pruneLength: 200
                            truncate: true
                            )
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)


    return (
        <IndexLayout>
            <Head title="Home" />
            <h3><center>Latest Blog Posts</center></h3>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>By {edge.node.frontmatter.author} - {edge.node.timeToRead} Min Read - {edge.node.frontmatter.date} - Category: {edge.node.frontmatter.tags}</p>
                            <p>{edge.node.excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </IndexLayout>
    )
}

export default IndexPage
