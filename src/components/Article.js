import React from 'react';
import storeProvider from './storeProvider';
import {
  FlexArticle,
  Title,
  Date,
  Author,
  Description
} from './styles';

/* the presentational component which handles the showing the data */
const Article = ({article, author}) => {
  return (
    <FlexArticle>
      <Title>{article.title}</Title>
      <Date>{article.date}</Date>
      <Author>
        <a href={author.website}>
          {`${author.firstName} ${author.lastName}`}
        </a>
      </Author>
      <Description>{article.body}</Description>
    </FlexArticle>
  );
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
}


export default storeProvider(extraProps)(Article);
