const path = require('path')
const _ = require('lodash')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blogtemplate.js')
    const tagTemplate = path.resolve('./src/templates/tagstemplate.js')
    const res = await graphql(`
        query {
            allMarkdownRemark (
                sort: { order: DESC, fields: [frontmatter___date] }
                limit: 2000
            ){
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                        }
                    }
                }
            }
            tagsGroup: allMarkdownRemark {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)
    
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    res.data.tagsGroup.group.forEach((tag) => {
        createPage({
            component: tagTemplate,
            path: `/tags/${_.kebabCase(tag.fieldValue)}`,
            context: {
                tag: tag.fieldValue,
            },
        })
    })
    
}