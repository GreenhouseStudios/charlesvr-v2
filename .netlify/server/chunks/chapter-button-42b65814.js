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
  C: () => Chapter_button
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("./index-5bb557bd.js");
var import_chapter_button_svelte_svelte_type_style_lang_63e096b9 = require("./chapter-button.svelte_svelte_type_style_lang-63e096b9.js");
const css = {
  code: "#button.svelte-esrmi3{background:linear-gradient(to left, #401221 50%, #54182c 50%);background-size:200% 100%;background-position:right bottom}#button.svelte-esrmi3:hover{background-position:left bottom}",
  map: null
};
const Chapter_button = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { numeral } = $$props;
  let { chapter } = $$props;
  let { path } = $$props;
  let { light = false } = $$props;
  if ($$props.numeral === void 0 && $$bindings.numeral && numeral !== void 0)
    $$bindings.numeral(numeral);
  if ($$props.chapter === void 0 && $$bindings.chapter && chapter !== void 0)
    $$bindings.chapter(chapter);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  if ($$props.light === void 0 && $$bindings.light && light !== void 0)
    $$bindings.light(light);
  $$result.css.add(css);
  return `<div class="${"mt-24 w-full sm:w-max"}">${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { light }, {}, {
    default: () => {
      return `<div class="${"flex justify-center w-full"}">Continue to next chapter:
        </div>`;
    }
  })}
    
    <a id="${"button"}" class="${"group flex flex-col sm:flex-row items-center px-6 rounded-xl sm:gap-6 shadow-lg mt-4 transition-all duration-500 shadow-black/30 svelte-esrmi3"}"${(0, import_index_5bb557bd.a)("href", path, 0)}><p class="${"text-gold-500 group-hover:text-gold-400 text-8xl pb-2 transition-colors duration-500"}">${(0, import_index_5bb557bd.e)(numeral)}</p>
        <p class="${"text-white text-3xl py-6"}">${(0, import_index_5bb557bd.e)(chapter)}</p></a>
</div>`;
});
