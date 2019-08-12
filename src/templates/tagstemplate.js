import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from '../pages/blog.module.scss'

export const query = graphql`
    query ($tag: String!) {
        allMarkdownRemark (
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: {tags: { in: [$tag] }}}
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        author
                        date (formatString: "MMMM DD, YYYY")
                        tags
                    }
                    excerpt (pruneLength: 200)
                    timeToRead
                }
            }
        }
    }
`

const Tags = ({ pageContext, data }) => {
    const { tag } = pageContext
    const { edges, totalCount } = data.allMarkdownRemark
    const tagHeader = `${totalCount} post${
        totalCount === 1 ? "":"s"
    } tagged with "${tag}"`
    return (
        <Layout>
            <Head title={tag} />
            <h2>Tag - {tag}</h2>
            <p>{tagHeader} (See <Link to="/tags">all tags</Link>)</p>
            <ul className={blogStyles.posts}>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    const { author } = node.frontmatter
                    const { date } = node.frontmatter
                    const { timeToRead } = node
                    const { excerpt } = node
                    return (
                        <li key={slug} className={blogStyles.post}>
                            <Link to={`/blog/${slug}`}>
                            <h2>
                            {title}
                            </h2>
                            <p>By {author} - {timeToRead} Min Read - {date}</p>
                            <p>{excerpt}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
    )
}
// Tags.PropTypes = {
//     pageContext: PropTypes.shape({
//         tag: PropTypes.string.isRequired,
//     }),
//     data: PropTypes.shape({
//         allMarkdownRemark: PropTypes.shape({
//             totalCount: PropTypes.number.isRequired,
//             edges: PropTypes.arrayOf(
//                 PropTypes.shape({
//                     node: PropTypes.shape({
//                         frontmatter: PropTypes.shape({
//                             title: PropTypes.string.isRequired,
//                         }),
//                         fields: PropTypes.shape({
//                             slug: PropTypes.string.isRequired,
//                         }),
//                     }),
//                 }).isRequired
//             ),
//         }),
//     }),
// }

export default Tags