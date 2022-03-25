module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1646969312968, function(require, module, exports) {
var tough = require('tough-cookie-no-native');
var denodeify = require('es6-denodeify')(Promise);

class IsomorphicFetch {
	constructor(fetch = window.fetch, jar = new tough.CookieJar()) {
		this.fetch = fetch;
		this.jar = jar;

		this.getCookieString = denodeify(jar.getCookieString.bind(jar));
		this.setCookie = denodeify(jar.setCookie.bind(jar));

		return this.makeRequest.bind(this);
	}
	makeRequest(url, options = {}) {
		options.credentials = 'include'; // Include cookies (only) in the browser
		options.redirect = 'manual'; // Intercept redirects (only) in node

		return new Promise((resolve, reject) => {
			this.getCookieString(url)
			.then(cookie => {
				if (!options.headers) {
					options.headers = {};
				}

				if (typeof window === 'undefined') { // Don't include cookie header if browser / react native environment
					options.headers.Cookie = cookie;
				}

				options.headers = this.normalizeHeaders(options.headers);
				return this.fetch(url, options);
			})
			.then(response => {
				var cookies = [(response.headers.get('Set-Cookie') || '')].filter(Boolean);
				if (!cookies.length) {
					return [response];
				}
				var saveAllCookies = cookies.map(cookie => this.setCookie(cookie, url));
				return Promise.all([
					response,
					Promise.all(saveAllCookies)
				]);
			})
			.then(afterSaved => {
				var [response] = afterSaved;
				var redirect = response.headers.get('Location');
				var optionsToCarry = this.getOptionsToCarry(options);
				if (redirect) {
					return this.makeRequest(redirect, optionsToCarry);
				}
				return response;
			})
			.then(resolve)
			.catch(reject);
		});
	}
	normalizeHeaders(headers) {
		var keys = Object.keys(headers);
		for (var i = 0; i < keys.length; i++) {
			let key = keys[i];
			let lowercasedKey = key.toLowerCase();
			if (!headers[lowercasedKey]) {
				headers[lowercasedKey] = headers[key];
				delete headers[key];
			}
		}
		return headers;
	}
	getOptionsToCarry(options) {
		var headers = {};
		if (options.headers['user-agent']) {
			headers['user-agent'] = options.headers['user-agent'];
		}
		return {
			headers
		};
	}
}

module.exports = IsomorphicFetch;

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1646969312968);
})()
//miniprogram-npm-outsideDeps=["tough-cookie-no-native","es6-denodeify"]
//# sourceMappingURL=index.js.map