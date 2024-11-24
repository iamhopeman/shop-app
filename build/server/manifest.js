const manifest = (() => {
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
		client: {"start":"_app/immutable/entry/start.CtJfOQNy.js","app":"_app/immutable/entry/app.CdqjOUIH.js","imports":["_app/immutable/entry/start.CtJfOQNy.js","_app/immutable/chunks/entry.Bmxp6lam.js","_app/immutable/chunks/runtime.DUWcHzBE.js","_app/immutable/chunks/index.C5LjKNAz.js","_app/immutable/entry/app.CdqjOUIH.js","_app/immutable/chunks/runtime.DUWcHzBE.js","_app/immutable/chunks/store.Dh6s7srT.js","_app/immutable/chunks/disclose-version.Bl1fVy_4.js","_app/immutable/chunks/index-client.LqvM_n1a.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DocwThZX.js')),
			__memo(() => import('./chunks/1-B8gMP91D.js')),
			__memo(() => import('./chunks/2-DtyeFtbC.js'))
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
				id: "/api/history",
				pattern: /^\/api\/history\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-DHf1jSX1.js'))
			},
			{
				id: "/api/shopping-list",
				pattern: /^\/api\/shopping-list\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-BIfDzeTD.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
