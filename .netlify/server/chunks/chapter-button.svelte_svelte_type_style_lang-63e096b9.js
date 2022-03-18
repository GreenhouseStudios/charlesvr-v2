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
  C: () => Card,
  T: () => Transition
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("./index-5bb557bd.js");
const Transition = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".p-4.svelte-ngypy4{padding:clamp(16px, 1em, 32px)\r\n    }",
  map: null
};
const Card = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { light = false } = $$props;
  let { classes = "" } = $$props;
  let { flex = "flex" } = $$props;
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  $$result.css.add(css);
  return `<div class="${(0, import_index_5bb557bd.e)((0, import_index_5bb557bd.n)(flex + " text-[22px] leading-10 font-normal p-4 backdrop-blur-3xl rounded-md shadow-lg h-min " + (light ? "bg-white bg-opacity-70 text-black font-medium " : "bg-black bg-opacity-60 text-white ") + classes)) + " svelte-ngypy4"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var chapterButton_svelte_svelte_type_style_lang = "";
