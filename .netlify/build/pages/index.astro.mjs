import { c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, b as renderScript } from '../chunks/astro/server_CYXvoDF4.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { T as TrackedLink } from '../chunks/TrackedLink_DneMZM67.mjs';
import { $ as $$Footer } from '../chunks/Footer_qr0tMpPN.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_F-q3fReJ.mjs';
import { l as logo, $ as $$Layout } from '../chunks/Layout_DCbv_2Y4.mjs';
export { renderers } from '../renderers.mjs';

const $$Banner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="default-carousel" class="relative w-full"> <div class="relative overflow-hidden rounded-lg h-[550px]"> <div class="slide absolute w-full h-full"> <div${addAttribute(`background-image: url("/index/bg8.webp")`, "style")} class="absolute bg-cover bg-center flex items-center justify-center bg-teal-50 min-h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> <h2 class="text-teal-700 bg-white/75 text-center w-4/6 lg:w-1/2 bg-opacity-40 py-7 px-2 md:px-7 text-2xl md:text-4xl text-wrap lg:text-5xl">Aprende todo lo que tu bebé  necesita para una buena alimentación</h2> </div> </div> </div> </section>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Banner.astro", void 0);

const $$Bio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="bio" class="w-full h-fit mt-20 flex items-center justify-center flex-col"> <div class="w-full lg:w-4/6"> <div class="text-center"> <h2 class="text-teal-700 font-bold text-2xl">Biografía</h2> <hr class="w-5/6 m-auto my-5"> </div> <div class="flex items-center flex-col md:flex-row gap-5"> <div class="w-1/2 flex items-center gap-2 flex-col"> <div class="rounded-full w-44 h-44 bg-teal-200 border-2 border-teal-200 bg-cover bg-center"${addAttribute(`background-image: url('profile.webp');`, "style")}></div> <h3 class="text-2xl text-center">Citlalli Moctezuma</h3> </div> <p class="w-3/4 md:pr-20">
Health Coach Certificada por el IIN (Institute for Integrative
                Nutrition de Nueva York). Desarrolló un método propio llamado
                "Tu Bebé Puede Comer Solo", cuyo éxito radica en la adaptación
                del método al bebé y no del bebé al método, y también en la
                simplificación de la nutrición. <br> <br> Ha impartido conferencias ante
                el Departamento de Pediatría de la Caja Nacional de Salud en la
                Ciudad de Santa Cruz, Bolivia en 2018 y también en la
                Universidad Autónoma de Nuevo León en México. Atiende a decenas
                de familias en su consulta privada, con la gran satisfacción de
                ver a diario, a más y más bebés comiendo libres y felices.
</p> </div> </div> </section>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Bio.astro", void 0);

const video = "/_astro/video1.Cf54MgKd.mp4";

const $$Buy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="buy" class="w-full flex items-center mt-20 justify-center flex-col"> <div class="w-full md:w-4/6 text-center"> <h3 class="text-teal-700 font-bold text-2xl">Guía para Alimentación de Bebés</h3> <hr class="w-4/6 m-auto mt-2 mb-5 border-0.5 border-slate-700"> <p class="w-full md:w-4/6 px-5 m-auto text-center">Con este curso aprendrás a cómo alimentar a tu bebé, con los alimentos más nutritivos, evitar que rechace la comida, lograr que coma solo y variado, sin necesidad de pasar horas en la cocina. <br> Aprenderás conceptos de nutrición necesarios para estar seguras que estás ofreciendo alimentos sanos y las cantidades suficientes. Y también como reaccionar ante los posibles problemas que presenten con algún alimento.</p> <video${addAttribute(video, "src")} controls class="px-5 my-7 m-auto aspect-video w-[600px]"></video> <div class="w-full flex flex-col items-center gap-4"> <span class="text-teal-700 text-4xl font-bold">USD$ 49.99</span> <p>(El precio se regionalizará al momento de compra)</p> ${renderComponent($$result, "TrackedLink", TrackedLink, { "href": "https://go.hotmart.com/A87250455A?ap=fd02", "eventName": "Purchase", "target": "_blank", "className": "bg-teal-700 text-white text-xl w-3/4 md:w-1/2 h-14 rounded-lg flex justify-center items-center gap-2" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16"> <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"></path> <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"></path> </svg>
Comprar Ahora
` })} </div> </div> </section>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Buy.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full h-20 my-5 flex items-center justify-between px-5 md:px-10 lg:justify-around" style="font-family: Cabin;"> <a href="/" class="flex items-center gap-2"> ${renderComponent($$result, "Image", $$Image, { "src": logo, "width": 80, "height": 80, "alt": "logo" })} <p class="text-2xl text-slate-700 font-semibold">Baby Tips</p> </a> <nav aria-hidden class="hidden lg:flex gap-4"> <a href="#info" class="text-xl text-slate-700 hover:scale-105 transition">¿Qué aprenderás?</a> <a href="#modules" class="text-xl text-slate-700 hover:scale-105 transition">Contenido</a> <a href="#tests" class="text-xl text-slate-700 hover:scale-105 transition">Testimonios</a> <a href="#bio" class="text-xl text-slate-700 hover:scale-105 transition">Biografia</a> <a href="#contact" class="text-xl text-slate-700 hover:scale-105 transition">Contacto</a> </nav> <button id="menu-button" data-collapse-toggle="navbar-sticky" data-nav-toggle="#navbar-sticky" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </header> <div${addAttribute(`hidden lg:hidden w-full bg-semi-black absolute top-30 bg-teal-50 border z-50`, "class")} id="menu-open"> <div class="w-full bg-semi-black bg-opacity-20 h-fit z-50"> <nav class="w-full flex flex-col gap-4 p-5 font-medium"> <a href="#" class="text-xl text-slate-700 hover:scale-105 transition">¿Qué aprenderás?</a> <a href="#" class="text-xl text-slate-700 hover:scale-105 transition">Testimonios</a> <a href="#" class="text-xl text-slate-700 hover:scale-105 transition">Contenido</a> <a href="#" class="text-xl text-slate-700 hover:scale-105 transition">Biografia</a> <a href="#" class="text-xl text-slate-700 hover:scale-105 transition">Contacto</a> </nav> </div> </div> ${renderScript($$result, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Header.astro", void 0);

const bg5 = new Proxy({"src":"/_astro/bg5.xssEj-5I.webp","width":735,"height":490,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/bg5.webp";
							}
							
							return target[name];
						}
					});

const plato = new Proxy({"src":"/_astro/plato.bSrfQXIn.webp","width":735,"height":490,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/plato.webp";
							}
							
							return target[name];
						}
					});

const bg7 = new Proxy({"src":"/_astro/bg7.BbtFWayP.webp","width":735,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/bg7.webp";
							}
							
							return target[name];
						}
					});

const bg11 = new Proxy({"src":"/_astro/bg11.BVVfp8Ob.webp","width":3305,"height":2271,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/bg11.webp";
							}
							
							return target[name];
						}
					});

const $$Info = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main id="info" class="w-full flex items-center mt-20 justify-center flex-col"> <h2 class="text-center text-2xl md:text-3xl my-5 font-bold text-teal-700">¿Qué aprenderás en este curso?</h2> <hr class="w-3/5 m-auto border-0.5 border-slate-700"> <div class="w-full lg:w-5/6 xl:w-4/6 px-5 my-5 md:my-10 flex items-center justify-center flex-col"> <div class="w-full m-auto flex justify-center gap-10 flex-col md:flex-row items-center my-5"> <img${addAttribute(bg5.src, "src")} class="w-full md:w-1/2" loading="lazy" alt="bebe1"> <p class="text-slate-700 w-full md:w-1/2 md:px-10 text-xl">Te enseñaremos técnicas probadas para ayudar a tu bebé a desarrollar habilidades motoras y de coordinación mientras comen por sí mismos. Desde el uso de cucharas hasta la exploración táctil y sensorial, cada paso es importante.</p> </div> <hr class="w-4/6 m-auto my-5 border-slate-700"> <div class="flex items-center justify-center gap-10 flex-col md:flex-row my-5"> <p class="text-slate-700 w-full md:w-1/2 md:px-10 text-xl">La transición de papillas a <strong>alimentos sólidos</strong> es única para cada bebé. Nuestro curso te guiará para identificar las señales de tu bebé y ajustar el proceso de acuerdo a sus necesidades individuales.</p> <img${addAttribute(plato.src, "src")} class="w-full md:w-1/2" class="flex-shrink-0" loading="lazy" alt="bebe2"> </div> <hr class="w-4/6 m-auto my-5 border-0.2 border-slate-700"> <div class="w-full m-auto flex justify-center gap-10 flex-col md:flex-row items-center my-5"> <img${addAttribute(bg7.src, "src")} class="w-full md:w-1/2" loading="lazy" alt="bebe1"> <p class="text-slate-700 w-full md:w-1/2 md:px-10 text-xl">Aprenderás a cocinar platillos nutritivos y fáciles, que podrás ofrecer a tu bebé y a toda la familia, sin pasar horas en la cocina ni gastar una fortuna en ingredientes o alimentos especiales.</p> </div> <hr class="w-4/6 m-auto my-5 border-0.5 border-slate-700"> <div class="flex items-center justify-center gap-10 flex-col md:flex-row my-5"> <p class="text-slate-700 w-full md:w-1/2 md:px-10 text-xl">Al unirte a nuestro curso, tendrás acceso a una <strong>comunidad de padres</strong> en la misma situación. Comparte tus experiencias, obtén consejos y apoyo de otros padres que están pasando por la misma etapa.</p> <img${addAttribute(bg11.src, "src")} class="w-full md:w-1/2" loading="lazy" alt="bebe2"> </div> </div> </main>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Info.astro", void 0);

const ModulesInfo = [
  {
    id: 1,
    moduleInfo: [
      "Video 1 - ¡Bienvenidos!",
      "Video 2 - Alimentación Complementaria",
      "Video 3 - Resumen del Programa"
    ]
  },
  {
    id: 2,
    moduleInfo: [
      "Video 1 - ¿Cuándo puedo iniciar la Alimentación Complementaria?",
      "Video 2 - Papel de la Leche Materna y la Leche de Fórmula",
      "Video 3 - Recomendaciones cuando inicias la AC",
      "Video 4 - Acciones a aplicar si tu bebé no muestra interés en comer"
    ]
  },
  {
    id: 3,
    moduleInfo: [
      "Video 1 - ¿Cómo se si mi bebé come suficiente?",
      "Video 2 - Cantidades y Frecuencias",
      "Video 3 - Atoramiento y Ahogamiento",
      "Video 4 - Manejo de Alergias"
    ]
  },
  {
    id: 4,
    moduleInfo: [
      "Video 1 - Guía de Alimentos Prohibidos",
      "Video 2 - Agus y otras bebidas",
      "Video 3 - Nutrición por grupos de alimentos",
      "Video 4 - Sal y Azúcar",
      "Video 5 - Vegetarianismo"
    ]
  },
  {
    id: 5,
    moduleInfo: [
      "Video 1 - Menú para las primeras 4 semanas",
      "Video 2 - Pongamos manos a la obra",
      "Video 3 - Cortar y cocinar verduras al vapor"
    ]
  },
  {
    id: 6,
    moduleInfo: [
      "Video 1 - Preguntas Frecuentes",
      "Video 2 - ¿Cómo preparar recetas tanto básicas como avanzadas",
      "Video 3 - Tutoriales"
    ]
  }
];

const $$Modules = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="modules" class="w-full flex items-center mt-5 justify-center flex-col"> <h3 class="text-teal-700 font-bold text-2xl">Contenidos</h3> <hr class="w-2/5 m-auto mt-3 border-0.5 border-slate-700"> <div class="w-full px-5 md:px-10 md:w-4/6"> ${ModulesInfo.map((module) => renderTemplate`<div${addAttribute(module.id, "data-accordion")} class="border-b border-slate-200"> <button class="w-full flex justify-between items-center py-5 text-slate-800"> <span>Modulo ${module.id}</span> <span${addAttribute(`icon-${module.id}`, "id")} class="text-slate-800 transition-transform duration-300"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4"> <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"></path> </svg> </span> </button> <div${addAttribute(`content-${module.id}`, "id")} class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"> <ul class="pb-5 text-sm text-slate-500"> ${module.moduleInfo.map((info) => renderTemplate`<li>${info}</li>`)} </ul> </div> </div>`)} </div> </section> ${renderScript($$result, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Modules.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Modules.astro", void 0);

const Babies = [
  "/babies/01.jpeg",
  "/babies/02.jpeg",
  "/babies/10.jpeg",
  "/babies/13.jpeg",
  "/babies/14.jpeg",
  "/babies/15.jpeg",
  "/babies/16.jpeg",
  "/babies/19.jpeg",
  "/babies/21.jpeg",
  "/babies/22.jpeg",
  "/babies/25.jpeg",
  "/babies/26.jpeg",
  "/babies/27.jpeg",
  "/babies/28.jpeg"
];

const $$Testimonies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="tests" class="mt-10 px-5 md:px-10 flex items-center justify-center flex-col"> <div class="text-center "> <h2 class="text-3xl font-bold text-teal-700">Testimonios</h2> <p class="mt-3 ">Aquí encontrarás testimonios de madres que han elegido nuestro curso y han logardo mejorar la alimentación de sus bebés!</p> </div> <div class="mt-5 md:w-4/6 gap-y-4 lg:gap-6 columns-2 lg:columns-3 xl:columns-4"> ${Babies.map((baby) => renderTemplate`<img${addAttribute(baby, "src")} class="mb-4 rounded-lg">`)} </div> </section>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Testimonies.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "Banner", $$Banner, {})} ${renderComponent($$result2, "Info", $$Info, {})} ${renderComponent($$result2, "Modules", $$Modules, {})} ${renderComponent($$result2, "Testimonies", $$Testimonies, {})} ${renderComponent($$result2, "Buy", $$Buy, {})} ${renderComponent($$result2, "Bio", $$Bio, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/index.astro", void 0);

const $$file = "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
