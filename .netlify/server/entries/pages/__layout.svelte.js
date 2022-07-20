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
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa0ff56f = require("../../chunks/index-fa0ff56f.js");
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "nav.svelte-143j9lh{margin-bottom:20px}")();
const css = {
  code: "nav.svelte-143j9lh{margin-bottom:20px}",
  map: null
};
const _layout = (0, import_index_fa0ff56f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"navbar navbar-expand-lg navbar-light svelte-143j9lh"}" style="${"background-color: white;"}"><div class="${"container-fluid"}"><button class="${"navbar-toggler"}" type="${"button"}" data-bs-toggle="${"collapse"}" data-bs-target="${"#navbarTogglerDemo03"}" aria-controls="${"navbarTogglerDemo03"}" aria-expanded="${"false"}" aria-label="${"Toggle navigation"}"><span class="${"navbar-toggler-icon"}"></span></button>
    <a class="${"navbar-brand"}" href="${"/"}"><img src="${"/ngo-logo.png"}" alt="${"Logo"}"></a>
    <div class="${"d-flex flex-column justify-content-between align-items-end"}"><div class="${"pb-5"}">Hello</div>
      <div class="${"collapse navbar-collapse"}" id="${"navbarTogglerDemo03"}"><ul class="${"navbar-nav me-auto mb-2 mb-lg-0"}"><li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/members"}">Members</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/gallery"}">Gallery</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/news"}">News</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/about"}">About</a></li>
          <li class="${"nav-item"}"><a class="${"nav-link"}" href="${"/contactus"}">Contact us</a></li></ul>
        <form class="${"d-flex"}"><input class="${"form-control me-2"}" type="${"search"}" placeholder="${"Search"}" aria-label="${"Search"}">
          <button class="${"btn btn-outline-success"}" type="${"submit"}">Search</button></form></div></div></div></nav>

${slots.default ? slots.default({}) : ``}`;
});
