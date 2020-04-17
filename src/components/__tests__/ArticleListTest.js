/* snapshot test of article list */
import React from 'react';
import ArticleList from '../ArticleList';
import ShallowRenderer from 'react-test-renderer/shallow';

describe('snapshot test of article list', ()=> {
  let tree;
  /* mock props */
  const testProps = {
    articles: {
      a: { id: 'a', title: 'title a', date: 'date a', body: 'body a', authorId: 'a' },
      b: { id: 'b', title: 'title b', date: 'date b', body: 'body b', authorId: 'b' },
    },
  };

  /* create tree before each it */
  beforeEach(() => {
    /* creating a test tree */
    const renderer = new ShallowRenderer();
    renderer.render(<ArticleList {...testProps} />);
    tree = renderer.getRenderOutput();
  });

  it('should render correctly', () => {
    /* test tree should match with the main one */
    expect(tree).toMatchSnapshot();
  });

  it('should have correct children', () => {
    /* other checking */
    expect(tree.props.children.length).toBe(2);
  });
});
