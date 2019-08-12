import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark (
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
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <h2><Link to='/tags'>All Tags</Link></h2>
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.fields.slug}`}>
                            <h2>{edge.node.frontmatter.title}</h2>
                            <p>By {edge.node.frontmatter.author} - {edge.node.timeToRead} Min Read - {edge.node.frontmatter.date} - Tag: {edge.node.frontmatter.tags}</p>
                            <p>{edge.node.excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}

export default BlogPage