import React from 'react'
import { BlogPostTemplate } from '../../templates/blog'

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    author="Tomoyuki Kashiro"
    date={entry.getIn(['data', 'date'])}
    title={entry.getIn(['data', 'title'])}
    slug={entry.getIn(['data', 'slug'])}
    html={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
  />
)

export default BlogPostPreview