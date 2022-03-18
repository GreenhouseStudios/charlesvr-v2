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
var import_index_5bb557bd = require("../../chunks/index-5bb557bd.js");
var app = "";
const _layout = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"w-screen bg-gold-500 fixed z-50 shadow-lg shadow-black/20"}"><div id="${"nav-items"}" class="${"hidden md:grid sm:grid-cols-[1.5fr_repeat(6,_1fr)] lg:grid-cols-7 items-start min-h-[4rem] h-8 group hover:md:h-32 hover:lg:h-24 transition-[height] duration-[450ms]"}"><a href="${"/"}" data-chapter="${"1"}" class="${"flex flex-col justify-center my-6 pl-6"}"><div class="${"h-5 flex flex-col items-center mb-2"}"><img src="${"..//logos/charlesvr-black.png"}" alt="${"Charles VR"}" class="${"max-h-full"}"></div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">Introduction to Charles V|R
            </div></a>
        <a href="${"/2"}" data-chapter="${"2"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">II
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">The Coronation in Context
            </div></a>
        <a href="${"/3"}" data-chapter="${"3"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">III
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">Who Was Charles V?
            </div></a>
        <a href="${"/4"}" data-chapter="${"4"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">IV
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">An Imperial Coronation in Bologna
            </div></a>
        <a href="${"/5"}" data-chapter="${"5"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">V
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">A Focus on Music
            </div></a>
        <a href="${"/6"}" data-chapter="${"6"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">VI
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">Chapter 7+8
            </div></a>
        <a href="${"/7"}" data-chapter="${"7"}" class="${"flex flex-col py-3 px-2 hover:text-maroon transition-colors"}"><div class="${"text-4xl font-bold text-center"}">VII
            </div>
            <div class="${"text-lg leading-none text-center h-0 opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"}">The Charles V|R Experience
            </div></a></div>
    <div id="${"nav-mobile"}" class="${"md:hidden h-16 flex justify-between items-center pl-4"}"><a href="${"/"}" class="${"h-full flex shrink py-5 pr-4"}"><img src="${"..//logos/charlesvr-black.png"}" alt="${"Charles VR"}" class="${"h-full w-auto"}"></a>
        <button id="${"nav-dropdown"}" class="${"p-4"}"><svg style="${"width:24px;height:24px"}" viewBox="${"0 0 24 24"}"><path fill="${"currentColor"}" d="${"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"}"></path></svg></button></div>
    <div id="${"scroll-bar"}" class="${"w-screen bg-maroon h-3 flex items-center"}"><div id="${"progress-bar"}" class="${"bg-gold-500 h-[2px] w-full"}"></div></div></nav>
<div class="${"overflow-hidden"}">${slots.default ? slots.default({}) : ``}</div>`;
});
