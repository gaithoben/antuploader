"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DraggerProps", {
  enumerable: true,
  get: function get() {
    return _Dragger.DraggerProps;
  }
});
exports.default = void 0;

var _Upload = _interopRequireDefault(require("./Upload"));

var _Dragger = _interopRequireWildcard(require("./Dragger"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Upload.default.Dragger = _Dragger.default;
var _default = _Upload.default;
exports.default = _default;
//# sourceMappingURL=index.js.map