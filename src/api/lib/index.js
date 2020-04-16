/* used this link to transpile the modern js to vanilla js using babel: https://babeljs.io/repl */
Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); }  return left instanceof right;  }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) {descriptor.writable = true;} Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) {_defineProperties(Constructor.prototype, protoProps);} if (staticProps) {_defineProperties(Constructor, staticProps);} return Constructor; }

let DataApiInterface = /*#__PURE__*/function () {
  /* get the raw data from api */
  function DataApiInterface(rawData) {
    _classCallCheck(this, DataApiInterface);

    this.rawData = rawData.data;
  }

  _createClass(DataApiInterface, [{
    key: 'mapIntoObject',
    value: function mapIntoObject(arr) {
      return arr.reduce((acc, curr) => {
        /* make an object with id as a key and the whole object as its value */
        acc[curr.id] = curr;
        return acc;
      }, {});
    }
  }, {
    key: 'getArticles',
    value: function getArticles() {
      return this.mapIntoObject(this.rawData.articles);
    }
  }, {
    key: 'getAuthors',
    value: function getAuthors() {
      return this.mapIntoObject(this.rawData.authors);
    }
  }]);

  return DataApiInterface;
}();

exports.default = DataApiInterface;

/* before transpile into pure js the code below */
// export default class DataApiInterface {
//   /* get the raw data from api */
//   constructor(rawData) {
//     this.rawData = rawData.data;
//   }
//
//   mapIntoObject(arr) {
//     return arr.reduce((acc, curr) => {
//       /* make an object with id as a key and the whole object as its value */
//       acc[curr.id] = curr;
//
//       return acc;
//     }, {});
//   }
//
//   getArticles() {
//     return this.mapIntoObject(this.rawData.articles);
//   }
//   getAuthors() {
//     return this.mapIntoObject(this.rawData.authors);
//   }
// }
