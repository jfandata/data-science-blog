import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'


const TagsPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
    `)

    return (
        <Layout>
            <Head title="Tags" />
            <h1>Tags</h1>
            <ul>
                {data.allMarkdownRemark.group.map((tag) => {
                    return (
                        <li key={tag.fieldValue}>
                            <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
                                {tag.fieldValue}</Link> ({tag.totalCount})
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
//                           slug: PropTypes.string.isRequired,
//                         }),
//                     }),
//                 }).isRequired
//             ),
//         }),
//     }),
// }

export default TagsPage