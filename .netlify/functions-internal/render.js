const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["Welcome_bg.jpg","favicon.png","ngo-logo.png","tree.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		entry: {"file":"start-3870147b.js","js":["start-3870147b.js","chunks/index-f3cd0f61.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contactus",
				pattern: /^\/contactus\/?$/,
				names: [],
				types: [],
				path: "/contactus",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				path: "/gallery",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "members",
				pattern: /^\/members\/?$/,
				names: [],
				types: [],
				path: "/members",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "news",
				pattern: /^\/news\/?$/,
				names: [],
				types: [],
				path: "/news",
				shadow: null,
				a: [0,7],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
