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
  B: () => Background,
  S: () => Section_hero
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("./index-5bb557bd.js");
const Section_hero = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { bg } = $$props;
  let { noScrim = false } = $$props;
  let { opacity = "50" } = $$props;
  let background;
  noScrim ? background = `url("${bg}")` : background = `linear-gradient(rgba(0, 0, 0, 0.${opacity}), rgba(0, 0, 0, 0.${opacity})),url("${bg}")`;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.noScrim === void 0 && $$bindings.noScrim && noScrim !== void 0)
    $$bindings.noScrim(noScrim);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  return `<div class="${"h-[95vh] md:h-screen grid place-items-center bg-cover bg-top"}"${(0, import_index_5bb557bd.b)({ "background-image": background })}><div class="${"text-white text-6xl md:text-7xl px-4 text-center"}">${(0, import_index_5bb557bd.e)(title)}</div>
</div>`;
});
var bioCard_svelte_svelte_type_style_lang = "";
const Background = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { parallax = false } = $$props;
  let { scrim = "dark" } = $$props;
  let { classes = "" } = $$props;
  let { cover = true } = $$props;
  let { opacity = "50" } = $$props;
  let background;
  switch (scrim) {
    case "light":
      background = `linear-gradient(rgba(255, 255, 255, 0.${opacity}), rgba(255, 255, 255, 0.${opacity})),url("${src}")`;
      break;
    case "dark":
      background = `linear-gradient(rgba(0, 0, 0, 0.${opacity}), rgba(0, 0, 0, 0.${opacity})),url("${src}")`;
      break;
    case "none":
      background = `url("${src}")`;
      break;
    default:
      background = `${scrim},url("${src}")`;
      break;
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.scrim === void 0 && $$bindings.scrim && scrim !== void 0)
    $$bindings.scrim(scrim);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.cover === void 0 && $$bindings.cover && cover !== void 0)
    $$bindings.cover(cover);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  return `<div class="${[
    (0, import_index_5bb557bd.e)("h-min " + classes),
    (parallax ? "bg-fixed" : "") + " " + (cover ? "bg-cover" : "")
  ].join(" ").trim()}"${(0, import_index_5bb557bd.b)({ "background-image": background })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
