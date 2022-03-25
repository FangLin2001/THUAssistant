module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646969312839, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.root = exports.parseHTML = exports.merge = exports.contains = void 0;
var tslib_1 = require("tslib");
/**
 * Types used in signatures of Cheerio methods.
 *
 * @category Cheerio
 */
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./load"), exports);
var load_1 = require("./load");
/**
 * The default cheerio instance.
 *
 * @deprecated Use the function returned by `load` instead.
 */
exports.default = load_1.load([]);
var staticMethods = tslib_1.__importStar(require("./static"));
/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('<div><p></p></div>');
 *
 * $.contains($('div').get(0), $('p').get(0));
 * //=> true
 *
 * $.contains($('p').get(0), $('div').get(0));
 * //=> false
 * ```
 *
 * @returns {boolean}
 */
exports.contains = staticMethods.contains;
/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 *
 * $.merge([1, 2], [3, 4]);
 * //=> [1, 2, 3, 4]
 * ```
 */
exports.merge = staticMethods.merge;
/**
 * In order to promote consistency with the jQuery library, users are encouraged
 * to instead use the static method of the same name as it is defined on the
 * "loaded" Cheerio factory function.
 *
 * @deprecated See {@link static/parseHTML}.
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 * $.parseHTML('<b>markup</b>');
 * ```
 */
exports.parseHTML = staticMethods.parseHTML;
/**
 * Users seeking to access the top-level element of a parsed document should
 * instead use the `root` static method of a "loaded" Cheerio function.
 *
 * @deprecated
 * @example
 *
 * ```js
 * const $ = cheerio.load('');
 * $.root();
 * ```
 */
exports.root = staticMethods.root;

}, function(modId) {var map = {"./types":1646969312840,"./load":1646969312841,"./static":1646969312843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312840, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312841, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
var tslib_1 = require("tslib");
var options_1 = tslib_1.__importStar(require("./options"));
var staticMethods = tslib_1.__importStar(require("./static"));
var cheerio_1 = require("./cheerio");
var parse_1 = tslib_1.__importDefault(require("./parse"));
/**
 * Create a querying function, bound to a document created from the provided
 * markup. Note that similar to web browser contexts, this operation may
 * introduce `<html>`, `<head>`, and `<body>` elements; set `isDocument` to
 * `false` to switch to fragment mode and disable this.
 *
 * @param content - Markup to be loaded.
 * @param options - Options for the created instance.
 * @param isDocument - Allows parser to be switched to fragment mode.
 * @returns The loaded document.
 * @see {@link https://cheerio.js.org#loading} for additional usage information.
 */
function load(content, options, isDocument) {
    if (isDocument === void 0) { isDocument = true; }
    if (content == null) {
        throw new Error('cheerio.load() expects a string');
    }
    var internalOpts = tslib_1.__assign(tslib_1.__assign({}, options_1.default), options_1.flatten(options));
    var root = parse_1.default(content, internalOpts, isDocument);
    /** Create an extended class here, so that extensions only live on one instance. */
    var LoadedCheerio = /** @class */ (function (_super) {
        tslib_1.__extends(LoadedCheerio, _super);
        function LoadedCheerio() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return LoadedCheerio;
    }(cheerio_1.Cheerio));
    function initialize(selector, context, r, opts) {
        if (r === void 0) { r = root; }
        return new LoadedCheerio(selector, context, r, tslib_1.__assign(tslib_1.__assign({}, internalOpts), options_1.flatten(opts)));
    }
    // Add in static methods & properties
    Object.assign(initialize, staticMethods, {
        load: load,
        // `_root` and `_options` are used in static methods.
        _root: root,
        _options: internalOpts,
        // Add `fn` for plugins
        fn: LoadedCheerio.prototype,
        // Add the prototype here to maintain `instanceof` behavior.
        prototype: LoadedCheerio.prototype,
    });
    return initialize;
}
exports.load = load;

}, function(modId) { var map = {"./options":1646969312842,"./static":1646969312843,"./cheerio":1646969312846,"./parse":1646969312847}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312842, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
var tslib_1 = require("tslib");
var defaultOpts = {
    xml: false,
    decodeEntities: true,
};
/** Cheerio default options. */
exports.default = defaultOpts;
var xmlModeDefault = {
    _useHtmlParser2: true,
    xmlMode: true,
};
function flatten(options) {
    return (options === null || options === void 0 ? void 0 : options.xml)
        ? typeof options.xml === 'boolean'
            ? xmlModeDefault
            : tslib_1.__assign(tslib_1.__assign({}, xmlModeDefault), options.xml)
        : options !== null && options !== void 0 ? options : undefined;
}
exports.flatten = flatten;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312843, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = exports.contains = exports.root = exports.parseHTML = exports.text = exports.xml = exports.html = void 0;
var tslib_1 = require("tslib");
var options_1 = tslib_1.__importStar(require("./options"));
var cheerio_select_1 = require("cheerio-select");
var htmlparser2_1 = require("htmlparser2");
var parse5_adapter_1 = require("./parsers/parse5-adapter");
var htmlparser2_adapter_1 = require("./parsers/htmlparser2-adapter");
/**
 * Helper function to render a DOM.
 *
 * @param that - Cheerio instance to render.
 * @param dom - The DOM to render. Defaults to `that`'s root.
 * @param options - Options for rendering.
 * @returns The rendered document.
 */
function render(that, dom, options) {
    var _a;
    var toRender = dom
        ? typeof dom === 'string'
            ? cheerio_select_1.select(dom, (_a = that === null || that === void 0 ? void 0 : that._root) !== null && _a !== void 0 ? _a : [], options)
            : dom
        : that === null || that === void 0 ? void 0 : that._root.children;
    if (!toRender)
        return '';
    return options.xmlMode || options._useHtmlParser2
        ? htmlparser2_adapter_1.render(toRender, options)
        : parse5_adapter_1.render(toRender);
}
/**
 * Checks if a passed object is an options object.
 *
 * @param dom - Object to check if it is an options object.
 * @returns Whether the object is an options object.
 */
function isOptions(dom) {
    return (typeof dom === 'object' &&
        dom != null &&
        !('length' in dom) &&
        !('type' in dom));
}
function html(dom, options) {
    /*
     * Be flexible about parameters, sometimes we call html(),
     * with options as only parameter
     * check dom argument for dom element specific properties
     * assume there is no 'length' or 'type' properties in the options object
     */
    if (!options && isOptions(dom)) {
        options = dom;
        dom = undefined;
    }
    /*
     * Sometimes `$.html()` is used without preloading html,
     * so fallback non-existing options to the default ones.
     */
    var opts = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, options_1.default), (this ? this._options : {})), options_1.flatten(options !== null && options !== void 0 ? options : {}));
    return render(this || undefined, dom, opts);
}
exports.html = html;
/**
 * Render the document as XML.
 *
 * @param dom - Element to render.
 * @returns THe rendered document.
 */
function xml(dom) {
    var options = tslib_1.__assign(tslib_1.__assign({}, this._options), { xmlMode: true });
    return render(this, dom, options);
}
exports.xml = xml;
/**
 * Render the document as text.
 *
 * @param elements - Elements to render.
 * @returns The rendered document.
 */
function text(elements) {
    var elems = elements ? elements : this ? this.root() : [];
    var ret = '';
    for (var i = 0; i < elems.length; i++) {
        var elem = elems[i];
        if (htmlparser2_1.DomUtils.isText(elem))
            ret += elem.data;
        else if (htmlparser2_1.DomUtils.hasChildren(elem) &&
            elem.type !== htmlparser2_1.ElementType.Comment &&
            elem.type !== htmlparser2_1.ElementType.Script &&
            elem.type !== htmlparser2_1.ElementType.Style) {
            ret += text(elem.children);
        }
    }
    return ret;
}
exports.text = text;
function parseHTML(data, context, keepScripts) {
    if (keepScripts === void 0) { keepScripts = typeof context === 'boolean' ? context : false; }
    if (!data || typeof data !== 'string') {
        return null;
    }
    if (typeof context === 'boolean') {
        keepScripts = context;
    }
    var parsed = this.load(data, options_1.default, false);
    if (!keepScripts) {
        parsed('script').remove();
    }
    /*
     * The `children` array is used by Cheerio internally to group elements that
     * share the same parents. When nodes created through `parseHTML` are
     * inserted into previously-existing DOM structures, they will be removed
     * from the `children` array. The results of `parseHTML` should remain
     * constant across these operations, so a shallow copy should be returned.
     */
    return parsed.root()[0].children.slice();
}
exports.parseHTML = parseHTML;
/**
 * Sometimes you need to work with the top-level root element. To query it, you
 * can use `$.root()`.
 *
 * @example
 *
 * ```js
 * $.root().append('<ul id="vegetables"></ul>').html();
 * //=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
 * ```
 *
 * @returns Cheerio instance wrapping the root node.
 * @alias Cheerio.root
 */
function root() {
    return this(this._root);
}
exports.root = root;
/**
 * Checks to see if the `contained` DOM element is a descendant of the
 * `container` DOM element.
 *
 * @param container - Potential parent node.
 * @param contained - Potential child node.
 * @returns Indicates if the nodes contain one another.
 * @alias Cheerio.contains
 * @see {@link https://api.jquery.com/jQuery.contains/}
 */
function contains(container, contained) {
    // According to the jQuery API, an element does not "contain" itself
    if (contained === container) {
        return false;
    }
    /*
     * Step up the descendants, stopping when the root element is reached
     * (signaled by `.parent` returning a reference to the same object)
     */
    var next = contained;
    while (next && next !== next.parent) {
        next = next.parent;
        if (next === container) {
            return true;
        }
    }
    return false;
}
exports.contains = contains;
/**
 * $.merge().
 *
 * @param arr1 - First array.
 * @param arr2 - Second array.
 * @returns `arr1`, with elements of `arr2` inserted.
 * @alias Cheerio.merge
 * @see {@link https://api.jquery.com/jQuery.merge/}
 */
function merge(arr1, arr2) {
    if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
    }
    var newLength = arr1.length;
    var len = +arr2.length;
    for (var i = 0; i < len; i++) {
        arr1[newLength++] = arr2[i];
    }
    arr1.length = newLength;
    return arr1;
}
exports.merge = merge;
/**
 * @param item - Item to check.
 * @returns Indicates if the item is array-like.
 */
function isArrayLike(item) {
    if (Array.isArray(item)) {
        return true;
    }
    if (typeof item !== 'object' ||
        !Object.prototype.hasOwnProperty.call(item, 'length') ||
        typeof item.length !== 'number' ||
        item.length < 0) {
        return false;
    }
    for (var i = 0; i < item.length; i++) {
        if (!(i in item)) {
            return false;
        }
    }
    return true;
}

}, function(modId) { var map = {"./options":1646969312842,"./parsers/parse5-adapter":1646969312844,"./parsers/htmlparser2-adapter":1646969312845}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312844, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.parse = void 0;
var tslib_1 = require("tslib");
var domhandler_1 = require("domhandler");
var parse5_1 = require("parse5");
var parse5_htmlparser2_tree_adapter_1 = tslib_1.__importDefault(require("parse5-htmlparser2-tree-adapter"));
function parse(content, options, isDocument) {
    var opts = {
        scriptingEnabled: typeof options.scriptingEnabled === 'boolean'
            ? options.scriptingEnabled
            : true,
        treeAdapter: parse5_htmlparser2_tree_adapter_1.default,
        sourceCodeLocationInfo: options.sourceCodeLocationInfo,
    };
    var context = options.context;
    // @ts-expect-error The tree adapter unfortunately doesn't return the exact types.
    return isDocument
        ? parse5_1.parse(content, opts)
        : // @ts-expect-error Same issue again.
            parse5_1.parseFragment(context, content, opts);
}
exports.parse = parse;
function render(dom) {
    var _a;
    /*
     * `dom-serializer` passes over the special "root" node and renders the
     * node's children in its place. To mimic this behavior with `parse5`, an
     * equivalent operation must be applied to the input array.
     */
    var nodes = 'length' in dom ? dom : [dom];
    for (var index = 0; index < nodes.length; index += 1) {
        var node = nodes[index];
        if (domhandler_1.isDocument(node)) {
            (_a = Array.prototype.splice).call.apply(_a, tslib_1.__spreadArray([nodes, index, 1], node.children));
        }
    }
    // @ts-expect-error Types don't align here either.
    return parse5_1.serialize({ children: nodes }, { treeAdapter: parse5_htmlparser2_tree_adapter_1.default });
}
exports.render = render;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312845, function(require, module, exports) {

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = exports.parse = void 0;
var htmlparser2_1 = require("htmlparser2");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return htmlparser2_1.parseDocument; } });
var dom_serializer_1 = require("dom-serializer");
Object.defineProperty(exports, "render", { enumerable: true, get: function () { return __importDefault(dom_serializer_1).default; } });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312846, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheerio = void 0;
var tslib_1 = require("tslib");
var parse_1 = tslib_1.__importDefault(require("./parse"));
var options_1 = tslib_1.__importDefault(require("./options"));
var utils_1 = require("./utils");
var Attributes = tslib_1.__importStar(require("./api/attributes"));
var Traversing = tslib_1.__importStar(require("./api/traversing"));
var Manipulation = tslib_1.__importStar(require("./api/manipulation"));
var Css = tslib_1.__importStar(require("./api/css"));
var Forms = tslib_1.__importStar(require("./api/forms"));
var Cheerio = /** @class */ (function () {
    /**
     * Instance of cheerio. Methods are specified in the modules. Usage of this
     * constructor is not recommended. Please use $.load instead.
     *
     * @private
     * @param selector - The new selection.
     * @param context - Context of the selection.
     * @param root - Sets the root node.
     * @param options - Options for the instance.
     */
    function Cheerio(selector, context, root, options) {
        var _this = this;
        if (options === void 0) { options = options_1.default; }
        this.length = 0;
        this.options = options;
        // $(), $(null), $(undefined), $(false)
        if (!selector)
            return this;
        if (root) {
            if (typeof root === 'string')
                root = parse_1.default(root, this.options, false);
            this._root = new this.constructor(root, null, null, this.options);
            // Add a cyclic reference, so that calling methods on `_root` never fails.
            this._root._root = this._root;
        }
        // $($)
        if (utils_1.isCheerio(selector))
            return selector;
        var elements = typeof selector === 'string' && utils_1.isHtml(selector)
            ? // $(<html>)
                parse_1.default(selector, this.options, false).children
            : isNode(selector)
                ? // $(dom)
                    [selector]
                : Array.isArray(selector)
                    ? // $([dom])
                        selector
                    : null;
        if (elements) {
            elements.forEach(function (elem, idx) {
                _this[idx] = elem;
            });
            this.length = elements.length;
            return this;
        }
        // We know that our selector is a string now.
        var search = selector;
        var searchContext = !context
            ? // If we don't have a context, maybe we have a root, from loading
                this._root
            : typeof context === 'string'
                ? utils_1.isHtml(context)
                    ? // $('li', '<ul>...</ul>')
                        this._make(parse_1.default(context, this.options, false))
                    : // $('li', 'ul')
                        ((search = context + " " + search), this._root)
                : utils_1.isCheerio(context)
                    ? // $('li', $)
                        context
                    : // $('li', node), $('li', [nodes])
                        this._make(context);
        // If we still don't have a context, return
        if (!searchContext)
            return this;
        /*
         * #id, .class, tag
         */
        // @ts-expect-error No good way to type this — we will always return `Cheerio<Element>` here.
        return searchContext.find(search);
    }
    /**
     * Make a cheerio object.
     *
     * @private
     * @param dom - The contents of the new object.
     * @param context - The context of the new object.
     * @returns The new cheerio object.
     */
    Cheerio.prototype._make = function (dom, context) {
        var cheerio = new this.constructor(dom, context, this._root, this.options);
        cheerio.prevObject = this;
        return cheerio;
    };
    return Cheerio;
}());
exports.Cheerio = Cheerio;
/** Set a signature of the object. */
Cheerio.prototype.cheerio = '[cheerio object]';
/*
 * Make cheerio an array-like object
 */
Cheerio.prototype.splice = Array.prototype.splice;
// Support for (const element of $(...)) iteration:
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// Plug in the API
Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);
function isNode(obj) {
    return (!!obj.name ||
        obj.type === 'root' ||
        obj.type === 'text' ||
        obj.type === 'comment');
}

}, function(modId) { var map = {"./parse":1646969312847,"./options":1646969312842,"./utils":1646969312848,"./api/attributes":1646969312849,"./api/traversing":1646969312850,"./api/manipulation":1646969312851,"./api/css":1646969312852,"./api/forms":1646969312853}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312847, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.update = void 0;
var htmlparser2_1 = require("htmlparser2");
var htmlparser2_adapter_1 = require("./parsers/htmlparser2-adapter");
var parse5_adapter_1 = require("./parsers/parse5-adapter");
var domhandler_1 = require("domhandler");
/*
 * Parser
 */
function parse(content, options, isDocument) {
    if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
        content = content.toString();
    }
    if (typeof content === 'string') {
        return options.xmlMode || options._useHtmlParser2
            ? htmlparser2_adapter_1.parse(content, options)
            : parse5_adapter_1.parse(content, options, isDocument);
    }
    var doc = content;
    if (!Array.isArray(doc) && domhandler_1.isDocument(doc)) {
        // If `doc` is already a root, just return it
        return doc;
    }
    // Add conent to new root element
    var root = new domhandler_1.Document([]);
    // Update the DOM using the root
    update(doc, root);
    return root;
}
exports.default = parse;
/**
 * Update the dom structure, for one changed layer.
 *
 * @param newChilds - The new children.
 * @param parent - The new parent.
 * @returns The parent node.
 */
function update(newChilds, parent) {
    // Normalize
    var arr = Array.isArray(newChilds) ? newChilds : [newChilds];
    // Update parent
    if (parent) {
        parent.children = arr;
    }
    else {
        parent = null;
    }
    // Update neighbors
    for (var i = 0; i < arr.length; i++) {
        var node = arr[i];
        // Cleanly remove existing nodes from their previous structures.
        if (node.parent && node.parent.children !== arr) {
            htmlparser2_1.DomUtils.removeElement(node);
        }
        if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
        }
        else {
            node.prev = node.next = null;
        }
        node.parent = parent;
    }
    return parent;
}
exports.update = update;

}, function(modId) { var map = {"./parsers/htmlparser2-adapter":1646969312845,"./parsers/parse5-adapter":1646969312844}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312848, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isHtml = exports.cloneDom = exports.domEach = exports.cssCase = exports.camelCase = exports.isCheerio = exports.isTag = void 0;
var htmlparser2_1 = require("htmlparser2");
var domhandler_1 = require("domhandler");
/**
 * Check if the DOM element is a tag.
 *
 * `isTag(type)` includes `<script>` and `<style>` tags.
 *
 * @private
 * @category Utils
 * @param type - DOM node to check.
 * @returns Whether the node is a tag.
 */
exports.isTag = htmlparser2_1.DomUtils.isTag;
/**
 * Checks if an object is a Cheerio instance.
 *
 * @category Utils
 * @param maybeCheerio - The object to check.
 * @returns Whether the object is a Cheerio instance.
 */
function isCheerio(maybeCheerio) {
    return maybeCheerio.cheerio != null;
}
exports.isCheerio = isCheerio;
/**
 * Convert a string to camel case notation.
 *
 * @private
 * @category Utils
 * @param str - String to be converted.
 * @returns String in camel case notation.
 */
function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_, x) { return x.toUpperCase(); });
}
exports.camelCase = camelCase;
/**
 * Convert a string from camel case to "CSS case", where word boundaries are
 * described by hyphens ("-") and all characters are lower-case.
 *
 * @private
 * @category Utils
 * @param str - String to be converted.
 * @returns String in "CSS case".
 */
function cssCase(str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
}
exports.cssCase = cssCase;
/**
 * Iterate over each DOM element without creating intermediary Cheerio instances.
 *
 * This is indented for use internally to avoid otherwise unnecessary memory
 * pressure introduced by _make.
 *
 * @category Utils
 * @param array - Array to iterate over.
 * @param fn - Function to call.
 * @returns The original instance.
 */
function domEach(array, fn) {
    var len = array.length;
    for (var i = 0; i < len; i++)
        fn(array[i], i);
    return array;
}
exports.domEach = domEach;
/**
 * Create a deep copy of the given DOM structure. Sets the parents of the copies
 * of the passed nodes to `null`.
 *
 * @private
 * @category Utils
 * @param dom - The htmlparser2-compliant DOM structure.
 * @returns - The cloned DOM.
 */
function cloneDom(dom) {
    var clone = 'length' in dom
        ? Array.prototype.map.call(dom, function (el) { return domhandler_1.cloneNode(el, true); })
        : [domhandler_1.cloneNode(dom, true)];
    // Add a root node around the cloned nodes
    var root = new domhandler_1.Document(clone);
    clone.forEach(function (node) {
        node.parent = root;
    });
    return clone;
}
exports.cloneDom = cloneDom;
/**
 * A simple way to check for HTML strings. Tests for a `<` within a string,
 * immediate followed by a letter and eventually followed by a `>`.
 *
 * @private
 */
var quickExpr = /<[a-zA-Z][^]*>/;
/**
 * Check if string is HTML.
 *
 * @private
 * @category Utils
 * @param str - String to check.
 * @returns Indicates if `str` is HTML.
 */
function isHtml(str) {
    // Run the regex
    return quickExpr.test(str);
}
exports.isHtml = isHtml;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312849, function(require, module, exports) {

/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleClass = exports.removeClass = exports.addClass = exports.hasClass = exports.removeAttr = exports.val = exports.data = exports.prop = exports.attr = void 0;
var static_1 = require("../static");
var utils_1 = require("../utils");
var hasOwn = Object.prototype.hasOwnProperty;
var rspace = /\s+/;
var dataAttrPrefix = 'data-';
/*
 * Lookup table for coercing string data-* attributes to their corresponding
 * JavaScript primitives
 */
var primitives = {
    null: null,
    true: true,
    false: false,
};
// Attributes that are booleans
var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
// Matches strings that look like JSON objects or arrays
var rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name, xmlMode) {
    var _a;
    if (!elem || !utils_1.isTag(elem))
        return undefined;
    (_a = elem.attribs) !== null && _a !== void 0 ? _a : (elem.attribs = {});
    // Return the entire attribs object if no attribute specified
    if (!name) {
        return elem.attribs;
    }
    if (hasOwn.call(elem.attribs, name)) {
        // Get the (decoded) attribute
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
    }
    // Mimic the DOM and return text content as value for `option's`
    if (elem.name === 'option' && name === 'value') {
        return static_1.text(elem.children);
    }
    // Mimic DOM with default value for radios/checkboxes
    if (elem.name === 'input' &&
        (elem.attribs.type === 'radio' || elem.attribs.type === 'checkbox') &&
        name === 'value') {
        return 'on';
    }
    return undefined;
}
/**
 * Sets the value of an attribute. The attribute will be deleted if the value is `null`.
 *
 * @private
 * @param el - The element to set the attribute on.
 * @param name - The attribute's name.
 * @param value - The attribute's value.
 */
function setAttr(el, name, value) {
    if (value === null) {
        removeAttribute(el, name);
    }
    else {
        el.attribs[name] = "" + value;
    }
}
function attr(name, value) {
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name !== 'string') {
                {
                    throw new Error('Bad combination of arguments.');
                }
            }
            return utils_1.domEach(this, function (el, i) {
                if (utils_1.isTag(el))
                    setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
        }
        return utils_1.domEach(this, function (el) {
            if (!utils_1.isTag(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach(function (objName) {
                    var objValue = name[objName];
                    setAttr(el, objName, objValue);
                });
            }
            else {
                setAttr(el, name, value);
            }
        });
    }
    return arguments.length > 1
        ? this
        : getAttr(this[0], name, this.options.xmlMode);
}
exports.attr = attr;
/**
 * Gets a node's prop.
 *
 * @private
 * @category Attributes
 * @param el - Elenent to get the prop of.
 * @param name - Name of the prop.
 * @returns The prop's value.
 */
function getProp(el, name, xmlMode) {
    if (!el || !utils_1.isTag(el))
        return;
    return name in el
        ? // @ts-expect-error TS doesn't like us accessing the value directly here.
            el[name]
        : !xmlMode && rboolean.test(name)
            ? getAttr(el, name, false) !== undefined
            : getAttr(el, name, xmlMode);
}
/**
 * Sets the value of a prop.
 *
 * @private
 * @param el - The element to set the prop on.
 * @param name - The prop's name.
 * @param value - The prop's value.
 */
function setProp(el, name, value, xmlMode) {
    if (name in el) {
        // @ts-expect-error Overriding value
        el[name] = value;
    }
    else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? (value ? '' : null) : "" + value);
    }
}
function prop(name, value) {
    var _this = this;
    if (typeof name === 'string' && value === undefined) {
        switch (name) {
            case 'style': {
                var property_1 = this.css();
                var keys = Object.keys(property_1);
                keys.forEach(function (p, i) {
                    property_1[i] = p;
                });
                property_1.length = keys.length;
                return property_1;
            }
            case 'tagName':
            case 'nodeName': {
                var el = this[0];
                return utils_1.isTag(el) ? el.name.toUpperCase() : undefined;
            }
            case 'outerHTML':
                return this.clone().wrap('<container />').parent().html();
            case 'innerHTML':
                return this.html();
            default:
                return getProp(this[0], name, this.options.xmlMode);
        }
    }
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name === 'object') {
                throw new Error('Bad combination of arguments.');
            }
            return utils_1.domEach(this, function (el, i) {
                if (utils_1.isTag(el))
                    setProp(el, name, value.call(el, i, getProp(el, name, _this.options.xmlMode)), _this.options.xmlMode);
            });
        }
        return utils_1.domEach(this, function (el) {
            if (!utils_1.isTag(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach(function (key) {
                    var val = name[key];
                    setProp(el, key, val, _this.options.xmlMode);
                });
            }
            else {
                setProp(el, name, value, _this.options.xmlMode);
            }
        });
    }
    return undefined;
}
exports.prop = prop;
/**
 * Sets the value of a data attribute.
 *
 * @private
 * @param el - The element to set the data attribute on.
 * @param name - The data attribute's name.
 * @param value - The data attribute's value.
 */
function setData(el, name, value) {
    var _a;
    var elem = el;
    (_a = elem.data) !== null && _a !== void 0 ? _a : (elem.data = {});
    if (typeof name === 'object')
        Object.assign(elem.data, name);
    else if (typeof name === 'string' && value !== undefined) {
        elem.data[name] = value;
    }
}
/**
 * Read the specified attribute from the equivalent HTML5 `data-*` attribute,
 * and (if present) cache the value in the node's internal data store. If no
 * attribute name is specified, read *all* HTML5 `data-*` attributes in this manner.
 *
 * @private
 * @category Attributes
 * @param el - Elenent to get the data attribute of.
 * @param name - Name of the data attribute.
 * @returns The data attribute's value, or a map with all of the data attribute.
 */
function readData(el, name) {
    var domNames;
    var jsNames;
    var value;
    if (name == null) {
        domNames = Object.keys(el.attribs).filter(function (attrName) {
            return attrName.startsWith(dataAttrPrefix);
        });
        jsNames = domNames.map(function (domName) {
            return utils_1.camelCase(domName.slice(dataAttrPrefix.length));
        });
    }
    else {
        domNames = [dataAttrPrefix + utils_1.cssCase(name)];
        jsNames = [name];
    }
    for (var idx = 0; idx < domNames.length; ++idx) {
        var domName = domNames[idx];
        var jsName = jsNames[idx];
        if (hasOwn.call(el.attribs, domName) &&
            !hasOwn.call(el.data, jsName)) {
            value = el.attribs[domName];
            if (hasOwn.call(primitives, value)) {
                value = primitives[value];
            }
            else if (value === String(Number(value))) {
                value = Number(value);
            }
            else if (rbrace.test(value)) {
                try {
                    value = JSON.parse(value);
                }
                catch (e) {
                    /* Ignore */
                }
            }
            el.data[jsName] = value;
        }
    }
    return name == null ? el.data : value;
}
function data(name, value) {
    var _a;
    var elem = this[0];
    if (!elem || !utils_1.isTag(elem))
        return;
    var dataEl = elem;
    (_a = dataEl.data) !== null && _a !== void 0 ? _a : (dataEl.data = {});
    // Return the entire data object if no data specified
    if (!name) {
        return readData(dataEl);
    }
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        utils_1.domEach(this, function (el) {
            if (utils_1.isTag(el))
                if (typeof name === 'object')
                    setData(el, name);
                else
                    setData(el, name, value);
        });
        return this;
    }
    if (hasOwn.call(dataEl.data, name)) {
        return dataEl.data[name];
    }
    return readData(dataEl, name);
}
exports.data = data;
function val(value) {
    var querying = arguments.length === 0;
    var element = this[0];
    if (!element || !utils_1.isTag(element))
        return querying ? undefined : this;
    switch (element.name) {
        case 'textarea':
            return this.text(value);
        case 'select': {
            var option = this.find('option:selected');
            if (!querying) {
                if (this.attr('multiple') == null && typeof value === 'object') {
                    return this;
                }
                this.find('option').removeAttr('selected');
                var values = typeof value !== 'object' ? [value] : value;
                for (var i = 0; i < values.length; i++) {
                    this.find("option[value=\"" + values[i] + "\"]").attr('selected', '');
                }
                return this;
            }
            return this.attr('multiple')
                ? option.toArray().map(function (el) { return static_1.text(el.children); })
                : option.attr('value');
        }
        case 'input':
        case 'option':
            return querying
                ? this.attr('value')
                : this.attr('value', value);
    }
    return undefined;
}
exports.val = val;
/**
 * Remove an attribute.
 *
 * @private
 * @param elem - Node to remove attribute from.
 * @param name - Name of the attribute to remove.
 */
function removeAttribute(elem, name) {
    if (!elem.attribs || !hasOwn.call(elem.attribs, name))
        return;
    delete elem.attribs[name];
}
/**
 * Splits a space-separated list of names to individual names.
 *
 * @category Attributes
 * @param names - Names to split.
 * @returns - Split names.
 */
function splitNames(names) {
    return names ? names.trim().split(rspace) : [];
}
/**
 * Method for removing attributes by `name`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeAttr('class').html();
 * //=> <li>Pear</li>
 *
 * $('.apple').attr('id', 'favorite');
 * $('.apple').removeAttr('id class').html();
 * //=> <li>Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeAttr/}
 */
function removeAttr(name) {
    var attrNames = splitNames(name);
    var _loop_1 = function (i) {
        utils_1.domEach(this_1, function (elem) {
            if (utils_1.isTag(elem))
                removeAttribute(elem, attrNames[i]);
        });
    };
    var this_1 = this;
    for (var i = 0; i < attrNames.length; i++) {
        _loop_1(i);
    }
    return this;
}
exports.removeAttr = removeAttr;
/**
 * Check to see if *any* of the matched elements have the given `className`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').hasClass('pear');
 * //=> true
 *
 * $('apple').hasClass('fruit');
 * //=> false
 *
 * $('li').hasClass('pear');
 * //=> true
 * ```
 *
 * @param className - Name of the class.
 * @returns Indicates if an element has the given `className`.
 * @see {@link https://api.jquery.com/hasClass/}
 */
function hasClass(className) {
    return this.toArray().some(function (elem) {
        var clazz = utils_1.isTag(elem) && elem.attribs.class;
        var idx = -1;
        if (clazz && className.length) {
            while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
                var end = idx + className.length;
                if ((idx === 0 || rspace.test(clazz[idx - 1])) &&
                    (end === clazz.length || rspace.test(clazz[end]))) {
                    return true;
                }
            }
        }
        return false;
    });
}
exports.hasClass = hasClass;
/**
 * Adds class(es) to all of the matched elements. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').addClass('fruit').html();
 * //=> <li class="pear fruit">Pear</li>
 *
 * $('.apple').addClass('fruit red').html();
 * //=> <li class="apple fruit red">Apple</li>
 * ```
 *
 * @param value - Name of new class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/addClass/}
 */
function addClass(value) {
    // Support functions
    if (typeof value === 'function') {
        return utils_1.domEach(this, function (el, i) {
            if (utils_1.isTag(el)) {
                var className = el.attribs.class || '';
                addClass.call([el], value.call(el, i, className));
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    var classNames = value.split(rspace);
    var numElements = this.length;
    for (var i = 0; i < numElements; i++) {
        var el = this[i];
        // If selected element isn't a tag, move on
        if (!utils_1.isTag(el))
            continue;
        // If we don't already have classes — always set xmlMode to false here, as it doesn't matter for classes
        var className = getAttr(el, 'class', false);
        if (!className) {
            setAttr(el, 'class', classNames.join(' ').trim());
        }
        else {
            var setClass = " " + className + " ";
            // Check if class already exists
            for (var j = 0; j < classNames.length; j++) {
                var appendClass = classNames[j] + " ";
                if (!setClass.includes(" " + appendClass))
                    setClass += appendClass;
            }
            setAttr(el, 'class', setClass.trim());
        }
    }
    return this;
}
exports.addClass = addClass;
/**
 * Removes one or more space-separated classes from the selected elements. If no
 * `className` is defined, all classes will be removed. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeClass('pear').html();
 * //=> <li class="">Pear</li>
 *
 * $('.apple').addClass('red').removeClass().html();
 * //=> <li class="">Apple</li>
 * ```
 *
 * @param name - Name of the class. If not specified, removes all elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeClass/}
 */
function removeClass(name) {
    // Handle if value is a function
    if (typeof name === 'function') {
        return utils_1.domEach(this, function (el, i) {
            if (utils_1.isTag(el))
                removeClass.call([el], name.call(el, i, el.attribs.class || ''));
        });
    }
    var classes = splitNames(name);
    var numClasses = classes.length;
    var removeAll = arguments.length === 0;
    return utils_1.domEach(this, function (el) {
        if (!utils_1.isTag(el))
            return;
        if (removeAll) {
            // Short circuit the remove all case as this is the nice one
            el.attribs.class = '';
        }
        else {
            var elClasses = splitNames(el.attribs.class);
            var changed = false;
            for (var j = 0; j < numClasses; j++) {
                var index = elClasses.indexOf(classes[j]);
                if (index >= 0) {
                    elClasses.splice(index, 1);
                    changed = true;
                    /*
                     * We have to do another pass to ensure that there are not duplicate
                     * classes listed
                     */
                    j--;
                }
            }
            if (changed) {
                el.attribs.class = elClasses.join(' ');
            }
        }
    });
}
exports.removeClass = removeClass;
/**
 * Add or remove class(es) from the matched elements, depending on either the
 * class's presence or the value of the switch argument. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple.green').toggleClass('fruit green red').html();
 * //=> <li class="apple fruit red">Apple</li>
 *
 * $('.apple.green').toggleClass('fruit green red', true).html();
 * //=> <li class="apple green fruit red">Apple</li>
 * ```
 *
 * @param value - Name of the class. Can also be a function.
 * @param stateVal - If specified the state of the class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/toggleClass/}
 */
function toggleClass(value, stateVal) {
    // Support functions
    if (typeof value === 'function') {
        return utils_1.domEach(this, function (el, i) {
            if (utils_1.isTag(el)) {
                toggleClass.call([el], value.call(el, i, el.attribs.class || '', stateVal), stateVal);
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    var classNames = value.split(rspace);
    var numClasses = classNames.length;
    var state = typeof stateVal === 'boolean' ? (stateVal ? 1 : -1) : 0;
    var numElements = this.length;
    for (var i = 0; i < numElements; i++) {
        var el = this[i];
        // If selected element isn't a tag, move on
        if (!utils_1.isTag(el))
            continue;
        var elementClasses = splitNames(el.attribs.class);
        // Check if class already exists
        for (var j = 0; j < numClasses; j++) {
            // Check if the class name is currently defined
            var index = elementClasses.indexOf(classNames[j]);
            // Add if stateValue === true or we are toggling and there is no value
            if (state >= 0 && index < 0) {
                elementClasses.push(classNames[j]);
            }
            else if (state <= 0 && index >= 0) {
                // Otherwise remove but only if the item exists
                elementClasses.splice(index, 1);
            }
        }
        el.attribs.class = elementClasses.join(' ');
    }
    return this;
}
exports.toggleClass = toggleClass;

}, function(modId) { var map = {"../static":1646969312843,"../utils":1646969312848}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312850, function(require, module, exports) {

/**
 * Methods for traversing the DOM structure.
 *
 * @module cheerio/traversing
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBack = exports.add = exports.end = exports.slice = exports.index = exports.toArray = exports.get = exports.eq = exports.last = exports.first = exports.has = exports.not = exports.is = exports.filterArray = exports.filter = exports.map = exports.each = exports.contents = exports.children = exports.siblings = exports.prevUntil = exports.prevAll = exports.prev = exports.nextUntil = exports.nextAll = exports.next = exports.closest = exports.parentsUntil = exports.parents = exports.parent = exports.find = void 0;
var tslib_1 = require("tslib");
var domhandler_1 = require("domhandler");
var select = tslib_1.__importStar(require("cheerio-select"));
var utils_1 = require("../utils");
var static_1 = require("../static");
var htmlparser2_1 = require("htmlparser2");
var uniqueSort = htmlparser2_1.DomUtils.uniqueSort;
var reSiblingSelector = /^\s*[~+]/;
/**
 * Get the descendants of each element in the current set of matched elements,
 * filtered by a selector, jQuery object, or element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').find('li').length;
 * //=> 3
 * $('#fruits').find($('.apple')).length;
 * //=> 1
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The found elements.
 * @see {@link https://api.jquery.com/find/}
 */
function find(selectorOrHaystack) {
    var _a;
    if (!selectorOrHaystack) {
        return this._make([]);
    }
    var context = this.toArray();
    if (typeof selectorOrHaystack !== 'string') {
        var haystack = utils_1.isCheerio(selectorOrHaystack)
            ? selectorOrHaystack.toArray()
            : [selectorOrHaystack];
        return this._make(haystack.filter(function (elem) { return context.some(function (node) { return static_1.contains(node, elem); }); }));
    }
    var elems = reSiblingSelector.test(selectorOrHaystack)
        ? context
        : this.children().toArray();
    var options = {
        context: context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        xmlMode: this.options.xmlMode,
    };
    return this._make(select.select(selectorOrHaystack, elems, options));
}
exports.find = find;
/**
 * Creates a matcher, using a particular mapping function. Matchers provide a
 * function that finds elements using a generating function, supporting filtering.
 *
 * @private
 * @param matchMap - Mapping function.
 * @returns - Function for wrapping generating functions.
 */
function _getMatcher(matchMap) {
    return function (fn) {
        var postFns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            postFns[_i - 1] = arguments[_i];
        }
        return function (selector) {
            var _a;
            var matched = matchMap(fn, this);
            if (selector) {
                matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(
            // Post processing is only necessary if there is more than one element.
            this.length > 1 && matched.length > 1
                ? postFns.reduce(function (elems, fn) { return fn(elems); }, matched)
                : matched);
        };
    };
}
/** Matcher that adds multiple elements for each entry in the input. */
var _matcher = _getMatcher(function (fn, elems) {
    var _a;
    var ret = [];
    for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        ret.push(value);
    }
    return (_a = new Array()).concat.apply(_a, ret);
});
/** Matcher that adds at most one element for each entry in the input. */
var _singleMatcher = _getMatcher(function (fn, elems) {
    var ret = [];
    for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        if (value !== null) {
            ret.push(value);
        }
    }
    return ret;
});
/**
 * Matcher that supports traversing until a condition is met.
 *
 * @returns A function usable for `*Until` methods.
 */
function _matchUntil(nextElem) {
    var postFns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        postFns[_i - 1] = arguments[_i];
    }
    // We use a variable here that is used from within the matcher.
    var matches = null;
    var innerMatcher = _getMatcher(function (nextElem, elems) {
        var matched = [];
        utils_1.domEach(elems, function (elem) {
            for (var next_1; (next_1 = nextElem(elem)); elem = next_1) {
                // FIXME: `matched` might contain duplicates here and the index is too large.
                if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length))
                    break;
                matched.push(next_1);
            }
        });
        return matched;
    }).apply(void 0, tslib_1.__spreadArray([nextElem], postFns));
    return function (selector, filterSelector) {
        var _this = this;
        // Override `matches` variable with the new target.
        matches =
            typeof selector === 'string'
                ? function (elem) { return select.is(elem, selector, _this.options); }
                : selector
                    ? getFilterFn(selector)
                    : null;
        var ret = innerMatcher.call(this, filterSelector);
        // Set `matches` to `null`, so we don't waste memory.
        matches = null;
        return ret;
    };
}
function _removeDuplicates(elems) {
    return Array.from(new Set(elems));
}
/**
 * Get the parent of each element in the current set of matched elements,
 * optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').parent().attr('id');
 * //=> fruits
 * ```
 *
 * @param selector - If specified filter for parent.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parent/}
 */
exports.parent = _singleMatcher(function (_a) {
    var parent = _a.parent;
    return (parent && !domhandler_1.isDocument(parent) ? parent : null);
}, _removeDuplicates);
/**
 * Get a set of parents filtered by `selector` of each element in the current
 * set of match elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parents().length;
 * //=> 2
 * $('.orange').parents('#fruits').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parents/}
 */
exports.parents = _matcher(function (elem) {
    var matched = [];
    while (elem.parent && !domhandler_1.isDocument(elem.parent)) {
        matched.push(elem.parent);
        elem = elem.parent;
    }
    return matched;
}, uniqueSort, function (elems) { return elems.reverse(); });
/**
 * Get the ancestors of each element in the current set of matched elements, up
 * to but not including the element matched by the selector, DOM node, or cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parentsUntil('#food').length;
 * //=> 1
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - Optional filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parentsUntil/}
 */
exports.parentsUntil = _matchUntil(function (_a) {
    var parent = _a.parent;
    return (parent && !domhandler_1.isDocument(parent) ? parent : null);
}, uniqueSort, function (elems) { return elems.reverse(); });
/**
 * For each element in the set, get the first element that matches the selector
 * by testing the element itself and traversing up through its ancestors in the DOM tree.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').closest();
 * //=> []
 *
 * $('.orange').closest('.apple');
 * // => []
 *
 * $('.orange').closest('li');
 * //=> [<li class="orange">Orange</li>]
 *
 * $('.orange').closest('#fruits');
 * //=> [<ul id="fruits"> ... </ul>]
 * ```
 *
 * @param selector - Selector for the element to find.
 * @returns The closest nodes.
 * @see {@link https://api.jquery.com/closest/}
 */
function closest(selector) {
    var _this = this;
    var set = [];
    if (!selector) {
        return this._make(set);
    }
    utils_1.domEach(this, function (elem) {
        var _a;
        while (elem && elem.type !== 'root') {
            if (!selector ||
                filterArray([elem], selector, _this.options.xmlMode, (_a = _this._root) === null || _a === void 0 ? void 0 : _a[0])
                    .length) {
                // Do not add duplicate elements to the set
                if (elem && !set.includes(elem)) {
                    set.push(elem);
                }
                break;
            }
            elem = elem.parent;
        }
    });
    return this._make(set);
}
exports.closest = closest;
/**
 * Gets the next sibling of the first selected element, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').next().hasClass('orange');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for sibling.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/next/}
 */
exports.next = _singleMatcher(function (elem) { return htmlparser2_1.DomUtils.nextElementSibling(elem); });
/**
 * Gets all the following siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextAll();
 * //=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
 * $('.apple').nextAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextAll/}
 */
exports.nextAll = _matcher(function (elem) {
    var matched = [];
    while (elem.next) {
        elem = elem.next;
        if (utils_1.isTag(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the following siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextUntil('.pear');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextUntil/}
 */
exports.nextUntil = _matchUntil(function (el) { return htmlparser2_1.DomUtils.nextElementSibling(el); }, _removeDuplicates);
/**
 * Gets the previous sibling of the first selected element optionally filtered
 * by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').prev().hasClass('apple');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prev/}
 */
exports.prev = _singleMatcher(function (elem) { return htmlparser2_1.DomUtils.prevElementSibling(elem); });
/**
 * Gets all the preceding siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevAll();
 * //=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
 *
 * $('.pear').prevAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevAll/}
 */
exports.prevAll = _matcher(function (elem) {
    var matched = [];
    while (elem.prev) {
        elem = elem.prev;
        if (utils_1.isTag(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the preceding siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevUntil('.apple');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevUntil/}
 */
exports.prevUntil = _matchUntil(function (el) { return htmlparser2_1.DomUtils.prevElementSibling(el); }, _removeDuplicates);
/**
 * Get the siblings of each element (excluding the element) in the set of
 * matched elements, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').siblings().length;
 * //=> 2
 *
 * $('.pear').siblings('.orange').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The siblings.
 * @see {@link https://api.jquery.com/siblings/}
 */
exports.siblings = _matcher(function (elem) {
    return htmlparser2_1.DomUtils.getSiblings(elem).filter(function (el) { return utils_1.isTag(el) && el !== elem; });
}, uniqueSort);
/**
 * Gets the children of the first selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().length;
 * //=> 3
 *
 * $('#fruits').children('.pear').text();
 * //=> Pear
 * ```
 *
 * @param selector - If specified filter for children.
 * @returns The children.
 * @see {@link https://api.jquery.com/children/}
 */
exports.children = _matcher(function (elem) { return htmlparser2_1.DomUtils.getChildren(elem).filter(utils_1.isTag); }, _removeDuplicates);
/**
 * Gets the children of each element in the set of matched elements, including
 * text and comment nodes.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').contents().length;
 * //=> 3
 * ```
 *
 * @returns The children.
 * @see {@link https://api.jquery.com/contents/}
 */
function contents() {
    var elems = this.toArray().reduce(function (newElems, elem) {
        return domhandler_1.hasChildren(elem) ? newElems.concat(elem.children) : newElems;
    }, []);
    return this._make(elems);
}
exports.contents = contents;
/**
 * Iterates over a cheerio object, executing a function for each matched
 * element. When the callback is fired, the function is fired in the context of
 * the DOM element, so `this` refers to the current element, which is equivalent
 * to the function parameter `element`. To break out of the `each` loop early,
 * return with `false`.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * const fruits = [];
 *
 * $('li').each(function (i, elem) {
 *   fruits[i] = $(this).text();
 * });
 *
 * fruits.join(', ');
 * //=> Apple, Orange, Pear
 * ```
 *
 * @param fn - Function to execute.
 * @returns The instance itself, useful for chaining.
 * @see {@link https://api.jquery.com/each/}
 */
function each(fn) {
    var i = 0;
    var len = this.length;
    while (i < len && fn.call(this[i], i, this[i]) !== false)
        ++i;
    return this;
}
exports.each = each;
/**
 * Pass each element in the current matched set through a function, producing a
 * new Cheerio object containing the return values. The function can return an
 * individual data item or an array of data items to be inserted into the
 * resulting set. If an array is returned, the elements inside the array are
 * inserted into the set. If the function returns null or undefined, no element
 * will be inserted.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li')
 *   .map(function (i, el) {
 *     // this === el
 *     return $(this).text();
 *   })
 *   .toArray()
 *   .join(' ');
 * //=> "apple orange pear"
 * ```
 *
 * @param fn - Function to execute.
 * @returns The mapped elements, wrapped in a Cheerio collection.
 * @see {@link https://api.jquery.com/map/}
 */
function map(fn) {
    var elems = [];
    for (var i = 0; i < this.length; i++) {
        var el = this[i];
        var val = fn.call(el, i, el);
        if (val != null) {
            elems = elems.concat(val);
        }
    }
    return this._make(elems);
}
exports.map = map;
/**
 * Creates a function to test if a filter is matched.
 *
 * @param match - A filter.
 * @returns A function that determines if a filter has been matched.
 */
function getFilterFn(match) {
    if (typeof match === 'function') {
        return function (el, i) { return match.call(el, i, el); };
    }
    if (utils_1.isCheerio(match)) {
        return function (el) { return Array.prototype.includes.call(match, el); };
    }
    return function (el) {
        return match === el;
    };
}
function filter(match) {
    var _a;
    return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
}
exports.filter = filter;
function filterArray(nodes, match, xmlMode, root) {
    return typeof match === 'string'
        ? select.filter(match, nodes, { xmlMode: xmlMode, root: root })
        : nodes.filter(getFilterFn(match));
}
exports.filterArray = filterArray;
/**
 * Checks the current list of elements and returns `true` if *any* of the
 * elements match the selector. If using an element or Cheerio selection,
 * returns `true` if *any* of the elements match. If using a predicate function,
 * the function is executed in the context of the selected element, so `this`
 * refers to the current element.
 *
 * @category Attributes
 * @param selector - Selector for the selection.
 * @returns Whether or not the selector matches an element of the instance.
 * @see {@link https://api.jquery.com/is/}
 */
function is(selector) {
    var nodes = this.toArray();
    return typeof selector === 'string'
        ? select.some(nodes.filter(utils_1.isTag), selector, this.options)
        : selector
            ? nodes.some(getFilterFn(selector))
            : false;
}
exports.is = is;
/**
 * Remove elements from the set of matched elements. Given a Cheerio object that
 * represents a set of DOM elements, the `.not()` method constructs a new
 * Cheerio object from a subset of the matching elements. The supplied selector
 * is tested against each element; the elements that don't match the selector
 * will be included in the result.
 *
 * The `.not()` method can take a function as its argument in the same way that
 * `.filter()` does. Elements for which the function returns `true` are excluded
 * from the filtered set; all other elements are included.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('li').not('.apple').length;
 * //=> 2
 * ```
 *
 * @example <caption>Function</caption>
 *
 * ```js
 * $('li').not(function (i, el) {
 *   // this === el
 *   return $(this).attr('class') === 'orange';
 * }).length; //=> 2
 * ```
 *
 * @param match - Value to look for, following the rules above.
 * @param container - Optional node to filter instead.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/not/}
 */
function not(match) {
    var nodes = this.toArray();
    if (typeof match === 'string') {
        var matches_1 = new Set(select.filter(match, nodes, this.options));
        nodes = nodes.filter(function (el) { return !matches_1.has(el); });
    }
    else {
        var filterFn_1 = getFilterFn(match);
        nodes = nodes.filter(function (el, i) { return !filterFn_1(el, i); });
    }
    return this._make(nodes);
}
exports.not = not;
/**
 * Filters the set of matched elements to only those which have the given DOM
 * element as a descendant or which have a descendant that matches the given
 * selector. Equivalent to `.filter(':has(selector)')`.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('ul').has('.pear').attr('id');
 * //=> fruits
 * ```
 *
 * @example <caption>Element</caption>
 *
 * ```js
 * $('ul').has($('.pear')[0]).attr('id');
 * //=> fruits
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/has/}
 */
function has(selectorOrHaystack) {
    var _this = this;
    return this.filter(typeof selectorOrHaystack === 'string'
        ? // Using the `:has` selector here short-circuits searches.
            ":has(" + selectorOrHaystack + ")"
        : function (_, el) { return _this._make(el).find(selectorOrHaystack).length > 0; });
}
exports.has = has;
/**
 * Will select the first element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().first().text();
 * //=> Apple
 * ```
 *
 * @returns The first element.
 * @see {@link https://api.jquery.com/first/}
 */
function first() {
    return this.length > 1 ? this._make(this[0]) : this;
}
exports.first = first;
/**
 * Will select the last element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().last().text();
 * //=> Pear
 * ```
 *
 * @returns The last element.
 * @see {@link https://api.jquery.com/last/}
 */
function last() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
exports.last = last;
/**
 * Reduce the set of matched elements to the one at the specified index. Use
 * `.eq(-i)` to count backwards from the last selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).text();
 * //=> Apple
 *
 * $('li').eq(-1).text();
 * //=> Pear
 * ```
 *
 * @param i - Index of the element to select.
 * @returns The element at the `i`th position.
 * @see {@link https://api.jquery.com/eq/}
 */
function eq(i) {
    var _a;
    i = +i;
    // Use the first identity optimization if possible
    if (i === 0 && this.length <= 1)
        return this;
    if (i < 0)
        i = this.length + i;
    return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
}
exports.eq = eq;
function get(i) {
    if (i == null) {
        return this.toArray();
    }
    return this[i < 0 ? this.length + i : i];
}
exports.get = get;
/**
 * Retrieve all the DOM elements contained in the jQuery set as an array.
 *
 * @example
 *
 * ```js
 * $('li').toArray();
 * //=> [ {...}, {...}, {...} ]
 * ```
 *
 * @returns The contained items.
 */
function toArray() {
    return Array.prototype.slice.call(this);
}
exports.toArray = toArray;
/**
 * Search for a given element from among the matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').index();
 * //=> 2 $('.orange').index('li');
 * //=> 1
 * $('.apple').index($('#fruit, li'));
 * //=> 1
 * ```
 *
 * @param selectorOrNeedle - Element to look for.
 * @returns The index of the element.
 * @see {@link https://api.jquery.com/index/}
 */
function index(selectorOrNeedle) {
    var $haystack;
    var needle;
    if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
    }
    else if (typeof selectorOrNeedle === 'string') {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
    }
    else {
        $haystack = this;
        needle = utils_1.isCheerio(selectorOrNeedle)
            ? selectorOrNeedle[0]
            : selectorOrNeedle;
    }
    return Array.prototype.indexOf.call($haystack, needle);
}
exports.index = index;
/**
 * Gets the elements matching the specified range (0-based position).
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').slice(1).eq(0).text();
 * //=> 'Orange'
 *
 * $('li').slice(1, 2).length;
 * //=> 1
 * ```
 *
 * @param start - An position at which the elements begin to be selected. If
 *   negative, it indicates an offset from the end of the set.
 * @param end - An position at which the elements stop being selected. If
 *   negative, it indicates an offset from the end of the set. If omitted, the
 *   range continues until the end of the set.
 * @returns The elements matching the specified range.
 * @see {@link https://api.jquery.com/slice/}
 */
function slice(start, end) {
    return this._make(Array.prototype.slice.call(this, start, end));
}
exports.slice = slice;
/**
 * End the most recent filtering operation in the current chain and return the
 * set of matched elements to its previous state.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).end().length;
 * //=> 3
 * ```
 *
 * @returns The previous state of the set of matched elements.
 * @see {@link https://api.jquery.com/end/}
 */
function end() {
    var _a;
    return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
}
exports.end = end;
/**
 * Add elements to the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').add('.orange').length;
 * //=> 2
 * ```
 *
 * @param other - Elements to add.
 * @param context - Optionally the context of the new selection.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/add/}
 */
function add(other, context) {
    var selection = this._make(other, context);
    var contents = uniqueSort(tslib_1.__spreadArray(tslib_1.__spreadArray([], this.get()), selection.get()));
    return this._make(contents);
}
exports.add = add;
/**
 * Add the previous set of elements on the stack to the current set, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).addBack('.orange').length;
 * //=> 2
 * ```
 *
 * @param selector - Selector for the elements to add.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/addBack/}
 */
function addBack(selector) {
    return this.prevObject
        ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject)
        : this;
}
exports.addBack = addBack;

}, function(modId) { var map = {"../utils":1646969312848,"../static":1646969312843}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312851, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.clone = exports.text = exports.toString = exports.html = exports.empty = exports.replaceWith = exports.remove = exports.insertBefore = exports.before = exports.insertAfter = exports.after = exports.wrapAll = exports.unwrap = exports.wrapInner = exports.wrap = exports.prepend = exports.append = exports.prependTo = exports.appendTo = exports._makeDomArray = void 0;
var tslib_1 = require("tslib");
var domhandler_1 = require("domhandler");
/**
 * Methods for modifying the DOM structure.
 *
 * @module cheerio/manipulation
 */
var domhandler_2 = require("domhandler");
var parse_1 = tslib_1.__importStar(require("../parse"));
var static_1 = require("../static");
var utils_1 = require("../utils");
var htmlparser2_1 = require("htmlparser2");
/**
 * Create an array of nodes, recursing into arrays and parsing strings if necessary.
 *
 * @private
 * @category Manipulation
 * @param elem - Elements to make an array of.
 * @param clone - Optionally clone nodes.
 * @returns The array of nodes.
 */
function _makeDomArray(elem, clone) {
    var _this = this;
    if (elem == null) {
        return [];
    }
    if (utils_1.isCheerio(elem)) {
        return clone ? utils_1.cloneDom(elem.get()) : elem.get();
    }
    if (Array.isArray(elem)) {
        return elem.reduce(function (newElems, el) { return newElems.concat(_this._makeDomArray(el, clone)); }, []);
    }
    if (typeof elem === 'string') {
        return parse_1.default(elem, this.options, false).children;
    }
    return clone ? utils_1.cloneDom([elem]) : [elem];
}
exports._makeDomArray = _makeDomArray;
function _insert(concatenator) {
    return function () {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return utils_1.domEach(this, function (el, i) {
            if (!domhandler_1.hasChildren(el))
                return;
            var domSrc = typeof elems[0] === 'function'
                ? elems[0].call(el, i, static_1.html(el.children))
                : elems;
            var dom = _this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
        });
    };
}
/**
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @private
 * @category Manipulation
 * @param array - Target array to splice.
 * @param spliceIdx - Index at which to begin changing the array.
 * @param spliceCount - Number of elements to remove from the array.
 * @param newElems - Elements to insert into the array.
 * @param parent - The parent of the node.
 * @returns The spliced array.
 */
function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
    var _a, _b;
    var spliceArgs = tslib_1.__spreadArray([
        spliceIdx,
        spliceCount
    ], newElems);
    var prev = array[spliceIdx - 1] || null;
    var next = array[spliceIdx + spliceCount] || null;
    /*
     * Before splicing in new elements, ensure they do not already appear in the
     * current array.
     */
    for (var idx = 0; idx < newElems.length; ++idx) {
        var node = newElems[idx];
        var oldParent = node.parent;
        if (oldParent) {
            var prevIdx = oldParent.children.indexOf(newElems[idx]);
            if (prevIdx > -1) {
                oldParent.children.splice(prevIdx, 1);
                if (parent === oldParent && spliceIdx > prevIdx) {
                    spliceArgs[0]--;
                }
            }
        }
        node.parent = parent;
        if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = newElems[idx - 1] || prev;
        node.next = newElems[idx + 1] || next;
    }
    if (prev) {
        prev.next = newElems[0];
    }
    if (next) {
        next.prev = newElems[newElems.length - 1];
    }
    return array.splice.apply(array, spliceArgs);
}
/**
 * Insert every element in the set of matched elements to the end of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').appendTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to append elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/appendTo/}
 */
function appendTo(target) {
    var appendTarget = utils_1.isCheerio(target) ? target : this._make(target);
    appendTarget.append(this);
    return this;
}
exports.appendTo = appendTo;
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').prependTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to prepend elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/prependTo/}
 */
function prependTo(target) {
    var prependTarget = utils_1.isCheerio(target) ? target : this._make(target);
    prependTarget.prepend(this);
    return this;
}
exports.prependTo = prependTo;
/**
 * Inserts content as the *last* child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').append('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/append/}
 */
exports.append = _insert(function (dom, children, parent) {
    uniqueSplice(children, children.length, 0, dom, parent);
});
/**
 * Inserts content as the *first* child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').prepend('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/prepend/}
 */
exports.prepend = _insert(function (dom, children, parent) {
    uniqueSplice(children, 0, 0, dom, parent);
});
function _wrap(insert) {
    return function (wrapper) {
        var lastIdx = this.length - 1;
        var lastParent = this.parents().last();
        for (var i = 0; i < this.length; i++) {
            var el = this[i];
            var wrap_1 = typeof wrapper === 'function'
                ? wrapper.call(el, i, el)
                : typeof wrapper === 'string' && !utils_1.isHtml(wrapper)
                    ? lastParent.find(wrapper).clone()
                    : wrapper;
            var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];
            if (!wrapperDom || !htmlparser2_1.DomUtils.hasChildren(wrapperDom))
                continue;
            var elInsertLocation = wrapperDom;
            /*
             * Find the deepest child. Only consider the first tag child of each node
             * (ignore text); stop if no children are found.
             */
            var j = 0;
            while (j < elInsertLocation.children.length) {
                var child = elInsertLocation.children[j];
                if (utils_1.isTag(child)) {
                    elInsertLocation = child;
                    j = 0;
                }
                else {
                    j++;
                }
            }
            insert(el, elInsertLocation, [wrapperDom]);
        }
        return this;
    };
}
/**
 * The .wrap() function can take any string or object that could be passed to
 * the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. A
 * copy of this structure will be wrapped around each of the elements in the set
 * of matched elements. This method returns the original set of elements for
 * chaining purposes.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrap(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <div class="red-fruit">
 * //      <li class="apple">Apple</li>
 * //     </div>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrap(healthy);
 *
 * //=> <ul id="fruits">
 * //     <div class="healthy">
 * //       <li class="apple">Apple</li>
 * //     </div>
 * //     <div class="healthy">
 * //       <li class="orange">Orange</li>
 * //     </div>
 * //     <div class="healthy">
 * //        <li class="plum">Plum</li>
 * //     </div>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around each element in the selection.
 * @see {@link https://api.jquery.com/wrap/}
 */
exports.wrap = _wrap(function (el, elInsertLocation, wrapperDom) {
    var parent = el.parent;
    if (!parent)
        return;
    var siblings = parent.children;
    var index = siblings.indexOf(el);
    parse_1.update([el], elInsertLocation);
    /*
     * The previous operation removed the current element from the `siblings`
     * array, so the `dom` array can be inserted without removing any
     * additional elements.
     */
    uniqueSplice(siblings, index, 0, wrapperDom, parent);
});
/**
 * The .wrapInner() function can take any string or object that could be passed
 * to the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around the content of each of the elements in the
 * set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrapInner(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="red-fruit">Apple</div>
 * //     </li>
 * //     <li class="orange">Orange</li>
 * //     <li class="pear">Pear</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrapInner(healthy);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="healthy">Apple</div>
 * //     </li>
 * //     <li class="orange">
 * //       <div class="healthy">Orange</div>
 * //     </li>
 * //     <li class="pear">
 * //       <div class="healthy">Pear</div>
 * //     </li>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around the content of each element
 *   in the selection.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/wrapInner/}
 */
exports.wrapInner = _wrap(function (el, elInsertLocation, wrapperDom) {
    if (!domhandler_1.hasChildren(el))
        return;
    parse_1.update(el.children, elInsertLocation);
    parse_1.update(wrapperDom, el);
});
/**
 * The .unwrap() function, removes the parents of the set of matched elements
 * from the DOM, leaving the matched elements in their place.
 *
 * @category Manipulation
 * @example <caption>without selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <div><p>Hello</p></div>\n  <div><p>World</p></div>\n</div>'
 * );
 * $('#test p').unwrap();
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @example <caption>with selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <p>Hello</p>\n  <b><p>World</p></b>\n</div>'
 * );
 * $('#test p').unwrap('b');
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @param selector - A selector to check the parent element against. If an
 *   element's parent does not match the selector, the element won't be unwrapped.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/unwrap/}
 */
function unwrap(selector) {
    var _this = this;
    this.parent(selector)
        .not('body')
        .each(function (_, el) {
        _this._make(el).replaceWith(el.children);
    });
    return this;
}
exports.unwrap = unwrap;
/**
 * The .wrapAll() function can take any string or object that could be passed to
 * the $() function to specify a DOM structure. This structure may be nested
 * several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around all of the elements in the set of matched
 * elements, as a single group.
 *
 * @category Manipulation
 * @example <caption>With markup passed to `wrapAll`</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div class="container"><div class="inner">First</div><div class="inner">Second</div></div>'
 * );
 * $('.inner').wrapAll("<div class='new'></div>");
 *
 * //=> <div class="container">
 * //     <div class='new'>
 * //       <div class="inner">First</div>
 * //       <div class="inner">Second</div>
 * //     </div>
 * //   </div>
 * ```
 *
 * @example <caption>With an existing cheerio instance</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<span>Span 1</span><strong>Strong</strong><span>Span 2</span>'
 * );
 * const wrap = $('<div><p><em><b></b></em></p></div>');
 * $('span').wrapAll(wrap);
 *
 * //=> <div>
 * //     <p>
 * //       <em>
 * //         <b>
 * //           <span>Span 1</span>
 * //           <span>Span 2</span>
 * //         </b>
 * //       </em>
 * //     </p>
 * //   </div>
 * //   <strong>Strong</strong>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around all matched elements in the
 *   selection.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/wrapAll/}
 */
function wrapAll(wrapper) {
    var el = this[0];
    if (el) {
        var wrap_2 = this._make(typeof wrapper === 'function' ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        // If html is given as wrapper, wrap may contain text elements
        var elInsertLocation = void 0;
        for (var i = 0; i < wrap_2.length; i++) {
            if (wrap_2[i].type === 'tag')
                elInsertLocation = wrap_2[i];
        }
        var j = 0;
        /*
         * Find the deepest child. Only consider the first tag child of each node
         * (ignore text); stop if no children are found.
         */
        while (elInsertLocation && j < elInsertLocation.children.length) {
            var child = elInsertLocation.children[j];
            if (child.type === 'tag') {
                elInsertLocation = child;
                j = 0;
            }
            else {
                j++;
            }
        }
        if (elInsertLocation)
            this._make(elInsertLocation).append(this);
    }
    return this;
}
exports.wrapAll = wrapAll;
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content next to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').after('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert after each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/after/}
 */
function after() {
    var _this = this;
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
    }
    var lastIdx = this.length - 1;
    return utils_1.domEach(this, function (el, i) {
        var parent = el.parent;
        if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        var domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, static_1.html(el.children))
            : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        // Add element after `this` element
        uniqueSplice(siblings, index + 1, 0, dom, parent);
    });
}
exports.after = after;
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements after the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertAfter('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements after.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertAfter/}
 */
function insertAfter(target) {
    var _this = this;
    if (typeof target === 'string') {
        target = this._make(target);
    }
    this.remove();
    var clones = [];
    this._makeDomArray(target).forEach(function (el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
    });
    return this._make(clones);
}
exports.insertAfter = insertAfter;
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content previous to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').before('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert before each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/before/}
 */
function before() {
    var _this = this;
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
    }
    var lastIdx = this.length - 1;
    return utils_1.domEach(this, function (el, i) {
        var parent = el.parent;
        if (!htmlparser2_1.DomUtils.hasChildren(el) || !parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        var domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, static_1.html(el.children))
            : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        // Add element before `el` element
        uniqueSplice(siblings, index, 0, dom, parent);
    });
}
exports.before = before;
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements before the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertBefore('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements before.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertBefore/}
 */
function insertBefore(target) {
    var _this = this;
    var targetArr = this._make(target);
    this.remove();
    var clones = [];
    utils_1.domEach(targetArr, function (el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
    });
    return this._make(clones);
}
exports.insertBefore = insertBefore;
/**
 * Removes the set of matched elements from the DOM and all their children.
 * `selector` filters the set of matched elements to be removed.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.pear').remove();
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //    </ul>
 * ```
 *
 * @param selector - Optional selector for elements to remove.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/remove/}
 */
function remove(selector) {
    // Filter if we have selector
    var elems = selector ? this.filter(selector) : this;
    utils_1.domEach(elems, function (el) {
        htmlparser2_1.DomUtils.removeElement(el);
        el.prev = el.next = el.parent = null;
    });
    return this;
}
exports.remove = remove;
/**
 * Replaces matched elements with `content`.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const plum = $('<li class="plum">Plum</li>');
 * $('.pear').replaceWith(plum);
 * $.html();
 * //=> <ul id="fruits">
 * //     <li class="apple">Apple</li>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 * ```
 *
 * @param content - Replacement for matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/replaceWith/}
 */
function replaceWith(content) {
    var _this = this;
    return utils_1.domEach(this, function (el, i) {
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var cont = typeof content === 'function' ? content.call(el, i, el) : content;
        var dom = _this._makeDomArray(cont);
        /*
         * In the case that `dom` contains nodes that already exist in other
         * structures, ensure those nodes are properly removed.
         */
        parse_1.update(dom, null);
        var index = siblings.indexOf(el);
        // Completely remove old element
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
        }
    });
}
exports.replaceWith = replaceWith;
/**
 * Empties an element, removing all its children.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').empty();
 * $.html();
 * //=>  <ul id="fruits"></ul>
 * ```
 *
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/empty/}
 */
function empty() {
    return utils_1.domEach(this, function (el) {
        if (!htmlparser2_1.DomUtils.hasChildren(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        el.children.length = 0;
    });
}
exports.empty = empty;
function html(str) {
    if (str === undefined) {
        var el = this[0];
        if (!el || !htmlparser2_1.DomUtils.hasChildren(el))
            return null;
        return static_1.html(el.children, this.options);
    }
    // Keep main options unchanged
    var opts = tslib_1.__assign(tslib_1.__assign({}, this.options), { context: null });
    return utils_1.domEach(this, function (el) {
        if (!htmlparser2_1.DomUtils.hasChildren(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        opts.context = el;
        var content = utils_1.isCheerio(str)
            ? str.toArray()
            : parse_1.default("" + str, opts, false).children;
        parse_1.update(content, el);
    });
}
exports.html = html;
/**
 * Turns the collection to a string. Alias for `.html()`.
 *
 * @category Manipulation
 * @returns The rendered document.
 */
function toString() {
    return static_1.html(this, this.options);
}
exports.toString = toString;
function text(str) {
    var _this = this;
    // If `str` is undefined, act as a "getter"
    if (str === undefined) {
        return static_1.text(this);
    }
    if (typeof str === 'function') {
        // Function support
        return utils_1.domEach(this, function (el, i) {
            text.call(_this._make(el), str.call(el, i, static_1.text([el])));
        });
    }
    // Append text node to each selected elements
    return utils_1.domEach(this, function (el) {
        if (!htmlparser2_1.DomUtils.hasChildren(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        var textNode = new domhandler_2.Text(str);
        parse_1.update(textNode, el);
    });
}
exports.text = text;
/**
 * Clone the cheerio object.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const moreFruit = $('#fruits').clone();
 * ```
 *
 * @returns The cloned object.
 * @see {@link https://api.jquery.com/clone/}
 */
function clone() {
    return this._make(utils_1.cloneDom(this.get()));
}
exports.clone = clone;

}, function(modId) { var map = {"../parse":1646969312847,"../static":1646969312843,"../utils":1646969312848}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312852, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.css = void 0;
var utils_1 = require("../utils");
function css(prop, val) {
    if ((prop != null && val != null) ||
        // When `prop` is a "plain" object
        (typeof prop === 'object' && !Array.isArray(prop))) {
        return utils_1.domEach(this, function (el, i) {
            if (utils_1.isTag(el)) {
                // `prop` can't be an array here anymore.
                setCss(el, prop, val, i);
            }
        });
    }
    return getCss(this[0], prop);
}
exports.css = css;
/**
 * Set styles of all elements.
 *
 * @private
 * @param el - Element to set style of.
 * @param prop - Name of property.
 * @param value - Value to set property to.
 * @param idx - Optional index within the selection.
 */
function setCss(el, prop, value, idx) {
    if (typeof prop === 'string') {
        var styles = getCss(el);
        var val = typeof value === 'function' ? value.call(el, idx, styles[prop]) : value;
        if (val === '') {
            delete styles[prop];
        }
        else if (val != null) {
            styles[prop] = val;
        }
        el.attribs.style = stringify(styles);
    }
    else if (typeof prop === 'object') {
        Object.keys(prop).forEach(function (k, i) {
            setCss(el, k, prop[k], i);
        });
    }
}
function getCss(el, prop) {
    if (!el || !utils_1.isTag(el))
        return;
    var styles = parse(el.attribs.style);
    if (typeof prop === 'string') {
        return styles[prop];
    }
    if (Array.isArray(prop)) {
        var newStyles_1 = {};
        prop.forEach(function (item) {
            if (styles[item] != null) {
                newStyles_1[item] = styles[item];
            }
        });
        return newStyles_1;
    }
    return styles;
}
/**
 * Stringify `obj` to styles.
 *
 * @private
 * @category CSS
 * @param obj - Object to stringify.
 * @returns The serialized styles.
 */
function stringify(obj) {
    return Object.keys(obj).reduce(function (str, prop) { return "" + str + (str ? ' ' : '') + prop + ": " + obj[prop] + ";"; }, '');
}
/**
 * Parse `styles`.
 *
 * @private
 * @category CSS
 * @param styles - Styles to be parsed.
 * @returns The parsed styles.
 */
function parse(styles) {
    styles = (styles || '').trim();
    if (!styles)
        return {};
    return styles.split(';').reduce(function (obj, str) {
        var n = str.indexOf(':');
        // Skip if there is no :, or if it is the first/last character
        if (n < 1 || n === str.length - 1)
            return obj;
        obj[str.slice(0, n).trim()] = str.slice(n + 1).trim();
        return obj;
    }, {});
}

}, function(modId) { var map = {"../utils":1646969312848}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1646969312853, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeArray = exports.serialize = void 0;
var utils_1 = require("../utils");
/*
 * https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
 * https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
 */
var submittableSelector = 'input,select,textarea,keygen';
var r20 = /%20/g;
var rCRLF = /\r?\n/g;
/**
 * Encode a set of form elements as a string for submission.
 *
 * @category Forms
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serialize/}
 */
function serialize() {
    // Convert form elements into name/value objects
    var arr = this.serializeArray();
    // Serialize each element into a key/value string
    var retArr = arr.map(function (data) {
        return encodeURIComponent(data.name) + "=" + encodeURIComponent(data.value);
    });
    // Return the resulting serialization
    return retArr.join('&').replace(r20, '+');
}
exports.serialize = serialize;
/**
 * Encode a set of form elements as an array of names and values.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serializeArray();
 * //=> [ { name: 'foo', value: 'bar' } ]
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serializeArray/}
 */
function serializeArray() {
    var _this = this;
    // Resolve all form elements from either forms or collections of form elements
    return this.map(function (_, elem) {
        var $elem = _this._make(elem);
        if (utils_1.isTag(elem) && elem.name === 'form') {
            return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
    })
        .filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled' +
        // And cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
        ':not(:submit, :button, :image, :reset, :file)' +
        // And are either checked/don't have a checkable state
        ':matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
    )
        .map(function (_, elem) {
        var _a;
        var $elem = _this._make(elem);
        var name = $elem.attr('name'); // We have filtered for elements with a name before.
        // If there is no value set (e.g. `undefined`, `null`), then default value to empty
        var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : '';
        // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs
        if (Array.isArray(value)) {
            return value.map(function (val) {
                /*
                 * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
                 * These can occur inside of `<textarea>'s`
                 */
                return ({ name: name, value: val.replace(rCRLF, '\r\n') });
            });
        }
        // Otherwise (e.g. `<input type="text">`, return only one key/value pair
        return { name: name, value: value.replace(rCRLF, '\r\n') };
    })
        .toArray();
}
exports.serializeArray = serializeArray;

}, function(modId) { var map = {"../utils":1646969312848}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646969312839);
})()
//miniprogram-npm-outsideDeps=["tslib","cheerio-select","htmlparser2","domhandler","parse5","parse5-htmlparser2-tree-adapter","dom-serializer"]
//# sourceMappingURL=index.js.map