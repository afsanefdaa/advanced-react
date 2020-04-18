Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

function _instanceof(left, right) { if (right != null && typeof Symbol !== 'undefined' && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); }  return left instanceof right;  }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperties(target, props) { for (let i = 0; i < props.length; i++) { let descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) {descriptor.writable = true;} Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) {_defineProperties(Constructor.prototype, protoProps);} if (staticProps) {_defineProperties(Constructor, staticProps);} return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* before transpile into pure js the code below */
let StateApi = /*#__PURE__*/function () {
  /* get the raw data from api */
  function StateApi(rawData) {
    let _this = this;

    _classCallCheck(this, StateApi);

    _defineProperty(this, 'lookupAuthor', (authorId) => {
      return _this.data.authors[authorId];
    });

    _defineProperty(this, 'getState', () => {
      return _this.data;
    });

    _defineProperty(this, 'subscribe', (cb) => {
      _this.lastSubscriptionId++;
      _this.subscriptions[_this.lastSubscriptionId] = cb;
      return _this.lastSubscriptionId;
      /* we return so that we could use it in unsubscribe */
    });

    _defineProperty(this, 'unsubscribe', (subscriptionId) => {
      delete _this.subscriptions[subscriptionId];
    });

    _defineProperty(this, 'notifySubscribers', () => {
      Object.values(_this.subscriptions).forEach((cb) => {
        return cb();
      });
    });

    _defineProperty(this, 'mergedWithState', (stateChange) => {
      _this.data = { ..._this.data,
        ...stateChange
      };

      _this.notifySubscribers();
    });

    _defineProperty(this, 'setSearchQuery', (query) => {
      /* when we change this only the query updates we need to update the articles but as long as it is in constructor it needs subscription functions */
      _this.mergedWithState({
        query: query
      });
    });

    _defineProperty(this, 'startClock', () => {
      setInterval(() => {
        return _this.mergedWithState({
          timestamp: new Date()
        });
      }, 1000);
    });

    /* to avoid calling on and on we will call it once */
    this.data = {
      articles: this.mapIntoObject(rawData.data.articles),
      authors: this.mapIntoObject(rawData.data.authors),
      query: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  _createClass(StateApi, [{
    key: 'mapIntoObject',
    value: function mapIntoObject(arr) {
      return arr.reduce((acc, curr) => {
        /* make an object with id as a key and the whole object as its value */
        acc[curr.id] = curr;
        return acc;
      }, {});
    }
  }]);

  return StateApi;
}();

exports.default = StateApi;

/* before transpile into pure js the code below */
// export default class StateApi {
//   /* get the raw data from api */
//   constructor(rawData) {
//     /* to avoid calling on and on we will call it once */
//     this.data = {
//       articles: this.mapIntoObject(rawData.data.articles),
//       authors: this.mapIntoObject(rawData.data.authors),
//       query: '',
//       timestamp: new Date(),
//     };
//     this.subscriptions = {};
//     this.lastSubscriptionId = 0;
//   }
//   mapIntoObject(arr) {
//     return arr.reduce((acc, curr) => {
//       /* make an object with id as a key and the whole object as its value */
//       acc[curr.id] = curr;
//       return acc;
//     }, {});
//   }
//   lookupAuthor = (authorId) => {
//     return this.data.authors[authorId];
//   };
//   getState = () => {
//     return this.data;
//   };
//   subscribe = (cb) => {
//     this.lastSubscriptionId++;
//     this.subscriptions[this.lastSubscriptionId] = cb;
//     return this.lastSubscriptionId; /* we return so that we could use it in unsubscribe */
//   };
//   /* when component unmount the listener is no longer needed */
//   unsubscribe = (subscriptionId) => {
//     delete this.subscriptions[subscriptionId];
//   };
//   notifySubscribers = () => {
//     Object.values(this.subscriptions).forEach(cb => cb())
//   };
//   mergedWithState = (stateChange) => {
//     this.data = {
//       ...this.data,
//       ...stateChange,
//     };
//     this.notifySubscribers();
//   };
//   setSearchQuery = (query) => {
//     /* when we change this only the query updates we need to update the articles but as long as it is in constructor it needs subscription functions */
//     this.mergedWithState({ query });
//   };
//   startClock = () => {
//     setInterval(() => this.mergedWithState({ timestamp: new Date()}), 1000)
//   }
// }
