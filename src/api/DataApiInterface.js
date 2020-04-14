export default class DataApiInterface {
  /* get the raw data from api */
  constructor(rawData) {
    this.rawData = rawData;
  }

  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      /* make an object with id as a key and the whole object as its value */
      acc[curr.id] = curr;

      return acc;
    }, {});
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }
}
