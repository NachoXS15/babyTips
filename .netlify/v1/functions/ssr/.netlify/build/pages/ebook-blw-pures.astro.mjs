import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CYXvoDF4.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from '../chunks/_astro_assets_F-q3fReJ.mjs';
import { $ as $$Footer } from '../chunks/Footer_qr0tMpPN.mjs';
import { $ as $$HeaderEbook } from '../chunks/HeaderEbook_CIcCqYyp.mjs';
import { $ as $$Layout } from '../chunks/Layout_DCbv_2Y4.mjs';
export { renderers } from '../renderers.mjs';

const portada = new Proxy({"src":"/_astro/portada.Bn2ft90g.webp","width":2480,"height":3508,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/portada.webp";
							}
							
							return target[name];
						}
					});

const $$Ebook1Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="w-full flex items-center justify-center mt-10" style="font-family: Cabin;"> <div class="w-full md:w-5/6 lg:w-3/4 xl:w-3/5 px-5 flex justify-center items-center text-center md:text-start flex-col md:flex-row gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": portada, "class": "w-full m-auto md:w-1/2 lg:w-2/5 h-fit rounded", "alt": "" })} <div class="max-h-fit flex flex-col items-center lg:items-start mt-8 md:mt-0"> <h3 class="text-teal-700 text-3xl font-bold">Mini E-book BLW vs Purés</h3> <hr class="w-3/4 mt-2 mb-5 border border-teal-500"> <p>La alimentación complementaria es un paso importante en el desarrollo del bebé, y existen dos métodos principales: el Baby-Led Weaning (BLW), donde el bebé explora y se alimenta solo, y los purés tradicionales, en los que el adulto controla la textura y cantidad 🥣🍴. <br> <br> Este e-book compara ambos enfoques, detallando sus beneficios y desafíos, además de ofrecer consejos para combinarlos si se desea un enfoque más flexible. No hay una única forma correcta de hacerlo, lo importante es encontrar la opción que mejor se adapte a cada familia y respetar el ritmo del bebé en esta etapa 🥦🥰.
</p> <a href="https://drive.google.com/file/d/13_7D2sJSDaRp_fs7wUaGW_Cz_YANG_K-/view?usp=sharing" target="_blank" class="text-center mt-8 bg-teal-700 text-white text-xl w-fit px-5 h-14 rounded-lg flex justify-center items-center gap-1 hover:scale-105 active:scale-105 transition"> <svg class="w-10 h-10" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff" stroke-width="0.2"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M12.649 20.427h-0.126l-0.061 0.109-3.245 5.675h14.773l0.061-0.109 3.246-5.674h-0.373zM20.573 19.075l0.062 0.108h0.126l6.536-0.028-0.187-0.322-7.199-12.471-0.126 0-6.537 0.027 0.187 0.322zM15.445 12.789l-0.063-0.109-3.292-5.646-0.186 0.322-7.201 12.47 0.064 0.109 3.292 5.648 0.186-0.323 7.138-12.363z"></path> </g> </svg>
Descargar Gratis
</a> </div> </div> </main>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Ebook1Info.astro", void 0);

const $$EbookBlwPures = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderEbook", $$HeaderEbook, {})} ${renderComponent($$result2, "Ebook1Info", $$Ebook1Info, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/ebook-blw-pures.astro", void 0);

const $$file = "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/ebook-blw-pures.astro";
const $$url = "/ebook-blw-pures";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$EbookBlwPures,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
