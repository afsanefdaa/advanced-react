/* unit test of data interface */
import DataApiInterface from '../DataApiInterface';
import data from './../data';

const api = new DataApiInterface(data);

describe('DataApiInterface', () => {
  it('should expose articles as an object',  () => {
    const articles = api.getArticles();
    const articleId = data.data.articles[0].id;
    const articleTitle = data.data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('should expose authors as an object',  () => {
    const authors = api.getAuthors();
    const authorId = data.data.authors[0].id;
    const authorName = data.data.authors[0].firstName;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorName);
  });
});
