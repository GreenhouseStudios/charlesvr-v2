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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("../../chunks/index-5bb557bd.js");
var import_chapter_button_svelte_svelte_type_style_lang_63e096b9 = require("../../chunks/chapter-button.svelte_svelte_type_style_lang-63e096b9.js");
var import_chapter_button_42b65814 = require("../../chunks/chapter-button-42b65814.js");
const Routes = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.T, "Transition").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="${"min-h-screen flex items-center flex-col bg-cover bg-center pt-0 p-4 md:p-16 2xl:p-32 2xl:px-64"}" style="${"background-image: linear-gradient(rgba(255, 255, 255, 0.7) 60%, rgba(255, 255, 255, 0.6)), url('..//backgrounds/index.png')"}"><img src="${"..//logos/charlesvr-duotone.png"}" alt="${"Charles VR"}" class="${"w-4/6 mt-48 mb-4"}">
        <div class="${"text-4xl text-[#900006] text-center leading-normal mb-16"}">A Virtual Reality Recreation of the
        <br>
        Imperial Coronation of Holy Roman Emperor Charles V
    </div>
    ${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { light: true }, {}, {
        default: () => {
          return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam velit? Est labore aliquid deserunt alias assumenda sapiente eligendi quae. Voluptatum, cupiditate modi possimus iusto nisi eos voluptas distinctio itaque.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, totam velit? Est labore aliquid deserunt alias assumenda sapiente eligendi quae. Voluptatum, cupiditate modi possimus iusto nisi eos voluptas distinctio itaque.
    `;
        }
      })}
    ${(0, import_index_5bb557bd.v)(import_chapter_button_42b65814.C, "ChapterButton").$$render($$result, {
        numeral: "II",
        chapter: "Historical Background",
        path: "2",
        light: true
      }, {}, {})}</div>`;
    }
  })}`;
});
