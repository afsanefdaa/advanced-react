/* snapshot test of article list */
import React from 'react';
import ArticleList from '../ArticleList';
import renderer from 'react-test-renderer';

describe('snapshot test of article list', ()=> {
  let tree;
  /* mock props */
  const testProps = {
    articles: {
      a: { id: 'a', title: 'title a', date: 'date a', body: 'body a', authorId: 'a' },
      b: { id: 'b', title: 'title b', date: 'date b', body: 'body b', authorId: 'b' },
    },
    store: {
      lookupAuthor: jest.fn(()=> ({}))
    }
  };

  /* create tree before each it */
  beforeEach(() => {
    /* creating a test tree */
    tree = renderer.create(
      <ArticleList {...testProps} />
    ).toJSON();
  });

  it('should render correctly', () => {
    /* test tree should match with the main one */
    expect(tree).toMatchSnapshot();
  });

  it('should have correct children', () => {
    /* other checking */
    expect(tree.children.length).toBe(2);
  });
});
