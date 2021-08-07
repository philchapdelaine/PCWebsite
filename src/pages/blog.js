import React from "react"
import PageLayout from "../components/pagelayout"
import * as blogStyles from './blog.module.scss'

import { Link, graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              } fields {
                slug
              }
            }
          }
        }
      }
    `)
  return (
    <PageLayout>
      <h1>Blog</h1>
        <ol className={blogStyles.posts}>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li className={blogStyles.post}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
              </li>
            )
          })}
        </ol>
    </PageLayout>
  )
}

export default BlogPage
