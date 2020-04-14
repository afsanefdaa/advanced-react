import React from 'react';
import Article from './Article';

const ArticleList = ({articles, authors}) => {
  return (
    <div>
      {
        Object.values(articles).map(item =>
          <Article
            key={item.id}
            article={item}
            author={authors[item.authorId]}
          />
        )
      }
    </div>
  );
};

export default ArticleList;
