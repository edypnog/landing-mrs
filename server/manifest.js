export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Dn7I6rgo.js",app:"_app/immutable/entry/app.C2AJlPz-.js",imports:["_app/immutable/entry/start.Dn7I6rgo.js","_app/immutable/chunks/Ben-q2tz.js","_app/immutable/chunks/BmNPPdjp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/mDlNlfvD.js","_app/immutable/entry/app.C2AJlPz-.js","_app/immutable/chunks/BmNPPdjp.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DIzMHyKT.js","_app/immutable/chunks/BubHv5cm.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/BjEysSMN.js","_app/immutable/chunks/mDlNlfvD.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
