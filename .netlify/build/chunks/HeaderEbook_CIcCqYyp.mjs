import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from './astro/server_CYXvoDF4.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_F-q3fReJ.mjs';
import { l as logo } from './Layout_DCbv_2Y4.mjs';

const $$HeaderEbook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-20 py-14 flex items-center justify-center bg-slate-200" style="font-family: Cabin;"> <div class="flex items-center gap-2"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 80, "height": 80, "alt": "logo" })} <p class="text-2xl text-slate-700 font-semibold">Baby Tips</p> </div> </header>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/HeaderEbook.astro", void 0);

export { $$HeaderEbook as $ };
