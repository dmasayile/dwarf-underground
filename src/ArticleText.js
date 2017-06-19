import React, { Component } from 'react';
import './ArticleText.css'
import AuthorInfo from './AuthorInfo'
import ArticleContent from './ArticleText'
import ArticleLinks from './ArticleLinks'
import Aside from './Aside'
import OtherArticles from './OtherArticles'
import ArticleTitle from './ArticleTitle'

class ArticleText extends Component {
  render() {
    return (
      <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <ArticleTitle />

            <AuthorInfo />

            <ArticleText />

            <ArticleLinks />

            
            
          </div>
          
          <Aside />

          <OtherArticles />

      </main>
    )
  }
}

export default ArticleText
