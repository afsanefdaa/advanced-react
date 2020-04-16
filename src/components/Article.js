import React from 'react';
import {
  FlexArticle,
  Title,
  Date,
  Author,
  Description
} from './styles';

const Article = ({article, store}) => {
  const author = store.lookupAuthor(article.authorId);

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

export default Article;
