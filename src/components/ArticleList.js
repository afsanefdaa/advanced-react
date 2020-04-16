import React from 'react';
import Article from './Article';

const ArticleList = ({articles, store}) => {
  return (
    <div>
      {
        Object.values(articles).map(item =>
          <Article
            key={item.id}
            article={item}
            store={store}
          />
        )
      }
    </div>
  );
};

export default ArticleList;
