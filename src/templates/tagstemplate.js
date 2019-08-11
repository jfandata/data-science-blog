import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

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
                        date (formatString: "MM/DD/YYYY")
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
            <Head title={tag}/>
            <h1>Tag - {tag}</h1>
            <p>{tagHeader} (See <Link to="/tags">all tags</Link>)</p>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields
                    const { title } = node.frontmatter
                    return (
                        <li key={slug}>
                            <Link to={`/blog/${slug}`}>{title}</Link>
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