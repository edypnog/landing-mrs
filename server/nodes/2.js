import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BxvsV9nk.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/BmNPPdjp.js","_app/immutable/chunks/BubHv5cm.js","_app/immutable/chunks/DIzMHyKT.js","_app/immutable/chunks/BjEysSMN.js","_app/immutable/chunks/CC1pToIx.js","_app/immutable/chunks/mDlNlfvD.js"];
export const stylesheets = ["_app/immutable/assets/2.BQp-Uu_J.css"];
export const fonts = [];
