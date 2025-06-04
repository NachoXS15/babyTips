import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_CYXvoDF4.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/","cacheDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/node_modules/.astro/","outDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/dist/","srcDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/","publicDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/public/","buildClientDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/dist/","buildServerDir":"file:///C:/Users/nacho/Coding/Repositorio/babyTipsSite/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/meta-conversion","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/meta-conversion\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"meta-conversion","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/meta-conversion.ts","pathname":"/api/meta-conversion","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/ebook-blw-pures.DDAWUew0.css"}],"routeData":{"route":"/ebook-blw-pures","isIndex":false,"type":"page","pattern":"^\\/ebook-blw-pures\\/?$","segments":[[{"content":"ebook-blw-pures","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ebook-blw-pures.astro","pathname":"/ebook-blw-pures","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".bounce[data-astro-cid-xanxcyom]{animation:bounce 1s infinite}@keyframes bounce{to{transform:scale(1.4)}}\n"},{"type":"external","src":"/_astro/ebook-blw-pures.DDAWUew0.css"}],"routeData":{"route":"/ebook-recetas","isIndex":false,"type":"page","pattern":"^\\/ebook-recetas\\/?$","segments":[[{"content":"ebook-recetas","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ebook-recetas.astro","pathname":"/ebook-recetas","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/ebook-blw-pures.DDAWUew0.css"},{"type":"inline","content":"h1[data-astro-cid-tvydjmbk],h2[data-astro-cid-tvydjmbk],h3[data-astro-cid-tvydjmbk]{font-family:urbana,sans-serif}\n"}],"routeData":{"route":"/recetas-cm","isIndex":false,"type":"page","pattern":"^\\/recetas-cm\\/?$","segments":[[{"content":"recetas-cm","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recetas-cm.astro","pathname":"/recetas-cm","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/ebook-blw-pures.DDAWUew0.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/ebook-blw-pures.astro",{"propagation":"none","containsHead":true}],["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/ebook-recetas.astro",{"propagation":"none","containsHead":true}],["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/recetas-cm.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/meta-conversion@_@ts":"pages/api/meta-conversion.astro.mjs","\u0000@astro-page:src/pages/ebook-blw-pures@_@astro":"pages/ebook-blw-pures.astro.mjs","\u0000@astro-page:src/pages/ebook-recetas@_@astro":"pages/ebook-recetas.astro.mjs","\u0000@astro-page:src/pages/recetas-cm@_@astro":"pages/recetas-cm.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_VPBj1VoV.mjs","C:/Users/nacho/Coding/Repositorio/babyTipsSite/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_Cb6hKMsv.mjs","C:/Users/nacho/Coding/Repositorio/babyTipsSite/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CXg3CBql.mjs","@astrojs/react/client.js":"_astro/client.Co0vMr8l.js","C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/recetas-cm.astro?astro&type=script&index=0&lang.ts":"_astro/recetas-cm.astro_astro_type_script_index_0_lang.bOUmA_6k.js","C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.bOUmA_6k.js","C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Modules.astro?astro&type=script&index=0&lang.ts":"_astro/Modules.astro_astro_type_script_index_0_lang.trXD1r6Y.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/recetas-cm.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-button\"),n=document.querySelector(\"#menu-open\");e?.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\")});"],["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-button\"),n=document.querySelector(\"#menu-open\");e?.addEventListener(\"click\",()=>{n.classList.toggle(\"hidden\")});"],["C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Modules.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{function o(e){const t=document.getElementById(`content-${e}`),n=document.getElementById(`icon-${e}`);if(!t||!n)return;const c=`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4\">\n                <path d=\"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z\" />\n            </svg>`,s=`<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" class=\"w-4 h-4\">\n                <path d=\"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z\" />\n            </svg>`;t.style.maxHeight&&t.style.maxHeight!==\"0px\"?(t.style.maxHeight=\"0\",n.innerHTML=s):(t.style.maxHeight=t.scrollHeight+\"px\",n.innerHTML=c)}document.querySelectorAll(\"[data-accordion]\").forEach(e=>{e.addEventListener(\"click\",function(){const t=this.dataset.accordion;t&&o(parseInt(t,10))})})});"]],"assets":["/_astro/babyIcon.DJ-JhKQm.webp","/_astro/books.CD3k28-H.png","/_astro/logo.D7G_IBw9.png","/_astro/chef_hat.B5ObHBuX.png","/_astro/test2.HVAV9l5D.webp","/_astro/test1.1TgZqie_.webp","/_astro/test3.1PGRSkJx.webp","/_astro/test4.D0dh6YFP.webp","/_astro/tomo2.B9Ir6AcX.webp","/_astro/tomo1.DPgSC6JX.webp","/_astro/tomo3.j7NOg1Hm.webp","/_astro/autora.B5YbNTSy.png","/_astro/tomo4.AkMH3oB_.webp","/_astro/canal.BSQRDqZo.webp","/_astro/calendar.DPAr9U11.webp","/_astro/tomo5.BvDmgGHN.webp","/_astro/grid1.dy9Enz8F.webp","/_astro/grid2.DTdtzlzE.webp","/_astro/grid3.BMX--tW9.webp","/_astro/grid4.DtQAiAVG.webp","/_astro/bg5.xssEj-5I.webp","/_astro/portada.Bn2ft90g.webp","/_astro/plato.bSrfQXIn.webp","/_astro/portada2.DwxkRu39.webp","/_astro/bg7.BbtFWayP.webp","/_astro/bg11.BVVfp8Ob.webp","/_astro/video1.Cf54MgKd.mp4","/_astro/whatsapp.D12WwBC6.png","/_astro/ebook-blw-pures.DDAWUew0.css","/logo.png","/profile.webp","/babies/01.jpeg","/babies/02.jpeg","/babies/10.jpeg","/babies/13.jpeg","/babies/14.jpeg","/babies/15.jpeg","/babies/16.jpeg","/babies/19.jpeg","/babies/21.jpeg","/babies/22.jpeg","/babies/25.jpeg","/babies/26.jpeg","/babies/27.jpeg","/babies/28.jpeg","/fonts/Bobby_Jones_Soft.otf","/index/bg10.webp","/index/bg12.webp","/index/bg8.webp","/index/bg9.webp","/_astro/client.Co0vMr8l.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"BwCL5V/H7KGfPlB1mof5R75FffiaEQvtswRCGLm2jMk=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\Users\\nacho\\Coding\\Repositorio\\babyTipsSite\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_Cb6hKMsv.mjs');

export { manifest };
