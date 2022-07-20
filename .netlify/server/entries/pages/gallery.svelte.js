var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Gallery
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa0ff56f = require("../../chunks/index-fa0ff56f.js");
var gallery_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "div.svelte-1q7czwe{padding:2rem}")();
const css = {
  code: "div.svelte-1q7czwe{padding:2rem}",
  map: null
};
const Gallery = (0, import_index_fa0ff56f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"carouselExampleInterval"}" class="${"carousel slide svelte-1q7czwe"}" data-bs-ride="${"carousel"}"><div class="${"carousel-inner svelte-1q7czwe"}"><div class="${"carousel-item active svelte-1q7czwe"}" data-bs-interval="${"10000"}"><img src="${"Welcome_bg.jpg"}" class="${"d-block w-100"}" alt="${"..."}"></div>
      <div class="${"carousel-item svelte-1q7czwe"}" data-bs-interval="${"2000"}"><img src="${"Welcome_bg.jpg"}" class="${"d-block w-100"}" alt="${"..."}"></div>
      <div class="${"carousel-item svelte-1q7czwe"}"><img src="${"Welcome_bg.jpg"}" class="${"d-block w-100"}" alt="${"..."}"></div></div>
    <button class="${"carousel-control-prev"}" type="${"button"}" data-bs-target="${"#carouselExampleInterval"}" data-bs-slide="${"prev"}"><span class="${"carousel-control-prev-icon"}" aria-hidden="${"true"}"></span>
      <span class="${"visually-hidden"}">Previous</span></button>
    <button class="${"carousel-control-next"}" type="${"button"}" data-bs-target="${"#carouselExampleInterval"}" data-bs-slide="${"next"}"><span class="${"carousel-control-next-icon"}" aria-hidden="${"true"}"></span>
      <span class="${"visually-hidden"}">Next</span></button></div>`;
});
