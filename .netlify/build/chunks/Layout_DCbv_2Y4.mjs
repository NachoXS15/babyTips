import { c as createComponent, m as maybeRenderHead, r as renderComponent, a as renderTemplate, e as createAstro, f as renderSlot, g as renderHead, d as addAttribute } from './astro/server_CYXvoDF4.mjs';
import 'kleur/colors';
import 'html-escaper';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_F-q3fReJ.mjs';
/* empty css                                   */

const logo = new Proxy({"src":"/_astro/logo.D7G_IBw9.png","width":800,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/logo.png";
							}
							
							return target[name];
						}
					});

const wsp = new Proxy({"src":"/_astro/whatsapp.D12WwBC6.png","width":446,"height":454,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/assets/img/whatsapp.png";
							}
							
							return target[name];
						}
					});

const $$Chat = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="fixed bottom-8 right-5 md:right-10 flex items-center gap-3"> <div class="group transition relative flex items-center gap-3"> <span class="hidden group-hover:inline transition text-end bg-green-300 px-3 py-2 rounded">
¿Necesitas ayuda? <br> ¡Envíame un mensaje!
</span> <a href="https://wa.link/hy01dy" target="_blank" class="hover:scale-110 transition"> ${renderComponent($$result, "Image", $$Image, { "src": wsp, "class": "w-20", "alt": "" })}</a> </div> </article>`;
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/components/Chat.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/png" href="/logo.png"><meta name="author" content="Ignacio Joaqu\xEDn Pantoja"><meta name="description" content="Alimenta a tu beb\xE9 de forma saludable, divertida y r\xE1pida. Cursos de Alimentaci\xF3n Complementaria para beb\xE9s"><meta name="keywords" content="babies, bebes, alimento, alimentacion, comida, salud"><meta name="generator"', '><title>BabyTips - Alimentaci\xF3n Complementaria</title><!-- Meta Pixel Code --><script>\n			//pixel\n			!(function (f, b, e, v, n, t, s) {\n				if (f.fbq) return;\n				n = f.fbq = function () {\n					n.callMethod\n						? n.callMethod.apply(n, arguments)\n						: n.queue.push(arguments);\n				};\n				if (!f._fbq) f._fbq = n;\n				n.push = n;\n				n.loaded = !0;\n				n.version = "2.0";\n				n.queue = [];\n				t = b.createElement(e);\n				t.async = !0;\n				t.src = v;\n				s = b.getElementsByTagName(e)[0];\n				s.parentNode.insertBefore(t, s);\n			})(\n				window,\n				document,\n				"script",\n				"https://connect.facebook.net/en_US/fbevents.js",\n			);\n			fbq("init", "1420940242374982");\n			fbq("track", "PageView");\n\n			//access_token\n			const eventId = "viewcontent-" + Date.now();\n			fetch("/api/meta-conversion", {\n				method: "POST",\n				headers: { "Content-Type": "application/json" },\n				body: JSON.stringify({\n					event_id: eventId,\n					event_name: "PageView",\n					event_source_url: window.location.href,\n				}),\n			});\n\n			//clarity\n			(function (c, l, a, r, i, t, y) {\n				c[a] =\n					c[a] ||\n					function () {\n						(c[a].q = c[a].q || []).push(arguments);\n					};\n				t = l.createElement(r);\n				t.async = 1;\n				t.src = "https://www.clarity.ms/tag/" + i;\n				y = l.getElementsByTagName(r)[0];\n				y.parentNode.insertBefore(t, y);\n			})(window, document, "clarity", "script", "rqql22do09");\n		<\/script>', '<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=11859999148098597&ev=PageView&noscript=1" data-astro-cid-sckkx6r4></noscript><!-- End Meta Pixel Code -->', '</head> <body class="relative" data-astro-cid-sckkx6r4> ', " ", " </body> </html> "])), addAttribute(Astro2.generator, "content"), maybeRenderHead(), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Chat", $$Chat, { "data-astro-cid-sckkx6r4": true }));
}, "C:/Users/nacho/Coding/Repositorio/babyTipsSite/src/layouts/Layout.astro", void 0);

export { $$Layout as $, logo as l };
