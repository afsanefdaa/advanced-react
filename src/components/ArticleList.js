import React from 'react';
import Article from './Article';

const ArticleList = ({articles}) => {
  return (
    <div>
      {
        Object.values(articles).map(item =>
          <Article
            key={item.id}
            article={item}
          />
        )
      }
    </div>
  );
};

export default ArticleList;
