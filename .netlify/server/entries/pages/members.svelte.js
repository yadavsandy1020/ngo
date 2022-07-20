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
  default: () => Members
});
module.exports = __toCommonJS(stdin_exports);
var import_index_fa0ff56f = require("../../chunks/index-fa0ff56f.js");
var members_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".card-body.svelte-qpucq6{padding:1rem 0rem !important}")();
const css = {
  code: ".card-body.svelte-qpucq6{padding:1rem 0rem !important}",
  map: null
};
const Members = (0, import_index_fa0ff56f.c)(($$result, $$props, $$bindings, slots) => {
  const members = [
    {
      name: "Deeksha Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    },
    {
      name: "Sandeep Yadav",
      designation: "developer",
      photo: "Welcome_bg.jpg"
    }
  ];
  $$result.css.add(css);
  return `<div class="${"container"}"><div class="${"row justify-content-evenly"}">${(0, import_index_fa0ff56f.a)(members, ({ name, designation, photo }) => {
    return `<div class="${"card col-3 mb-4"}" style="${"width: 18rem;"}"><img${(0, import_index_fa0ff56f.b)("src", photo, 0)} class="${"card-img-top"}" alt="${"..."}">
            <div class="${"card-body svelte-qpucq6"}"><h5 class="${"card-title"}">${(0, import_index_fa0ff56f.e)(name)}</h5>
              <p class="${"card-text"}">Some quick example text to build on the card title and make up the bulk of the card&#39;s content.</p>
              </div>
          </div>`;
  })}</div></div>`;
});
