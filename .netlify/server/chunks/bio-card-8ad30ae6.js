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
  B: () => Bio_card
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("./index-5bb557bd.js");
var import_background_79fcbe12 = require("./background-79fcbe12.js");
const css = {
  code: ".bg-maroon.svelte-dbnyvj>.svelte-dbnyvj{text-shadow:2px 2px 8px rgba(0,0,0,.8)}",
  map: null
};
const Bio_card = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { name } = $$props;
  let { years } = $$props;
  let { classes = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.years === void 0 && $$bindings.years && years !== void 0)
    $$bindings.years(years);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  $$result.css.add(css);
  return `<div class="${(0, import_index_5bb557bd.e)((0, import_index_5bb557bd.n)("bg-maroon bg-opacity-[.85] flex flex-col md:flex-row gap-2 h-min w-full p-4 rounded-md backdrop-blur-3xl shadow-lg " + classes)) + " svelte-dbnyvj"}"><div class="${"basis-1/3 shrink svelte-dbnyvj"}"><img${(0, import_index_5bb557bd.a)("src", src, 0)}${(0, import_index_5bb557bd.a)("alt", alt, 0)} class="${"object-scale-down rounded-md"}"></div>
    <div class="${"flex flex-col justify-center items-center grow basis-2/3 text-gold-400 text-center px-4 mt-4 mb-8 md:mt-8 svelte-dbnyvj"}"><strong class="${"text-4xl lg:text-5xl"}">${(0, import_index_5bb557bd.e)(name)}</strong>
        <br>
        <em class="${"text-3xl lg:text-4xl mb-4 md:mb-8"}">${(0, import_index_5bb557bd.e)(years)}</em>
        <div class="${"text-2xl lg:text-3xl space-y-4 lg:space-y-8"}">${slots.default ? slots.default({}) : ``}</div></div>
</div>`;
});
