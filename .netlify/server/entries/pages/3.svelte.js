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
  default: () => _3
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5bb557bd = require("../../chunks/index-5bb557bd.js");
var import_chapter_button_svelte_svelte_type_style_lang_63e096b9 = require("../../chunks/chapter-button.svelte_svelte_type_style_lang-63e096b9.js");
var import_bio_card_8ad30ae6 = require("../../chunks/bio-card-8ad30ae6.js");
var import_chapter_button_42b65814 = require("../../chunks/chapter-button-42b65814.js");
var import_background_79fcbe12 = require("../../chunks/background-79fcbe12.js");
const Tree_card = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { name } = $$props;
  let { years } = $$props;
  let { noLine = false } = $$props;
  let { topLine = false } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.years === void 0 && $$bindings.years && years !== void 0)
    $$bindings.years(years);
  if ($$props.noLine === void 0 && $$bindings.noLine && noLine !== void 0)
    $$bindings.noLine(noLine);
  if ($$props.topLine === void 0 && $$bindings.topLine && topLine !== void 0)
    $$bindings.topLine(topLine);
  return `<div class="${"flex flex-col items-center"}">${topLine ? `<div class="${"w-[2px] h-5 bg-white bg-opacity-60"}"></div>` : ``}
    <div class="${"max-w-[128px] shadow-lg"}"><img${(0, import_index_5bb557bd.a)("src", src, 0)}${(0, import_index_5bb557bd.a)("alt", alt, 0)} class="${"rounded-t"}">
        <div class="${"bg-black rounded-b px-2"}"><div class="${"text-white text-center py-2"}"><div class="${"leading-tight tracking-wide"}">${(0, import_index_5bb557bd.e)(name)}</div>
                <em>${(0, import_index_5bb557bd.e)(years)}</em></div></div></div>
    ${!noLine ? `<div class="${"w-[2px] h-5 bg-white bg-opacity-60"}"></div>` : ``}
</div>`;
});
const Family_tree = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"md:w-2/3 bg-no-repeat bg-center bg-contain"}"${(0, import_index_5bb557bd.b)({
    "background-image": `url(..//family-tree/tree.svg`
  })}><div class="${"grid grid-cols-4 gap-4 items-end"}">${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/maximilian.jpg",
    name: "Emperor Maximilian I",
    years: "1459-1519"
  }, {}, {})}
        ${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/mary.jpg",
    name: "Duchess Mary of Burgundy",
    years: "1457-1482"
  }, {}, {})}
        ${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/isabella.jpg",
    name: "Queen Isabella I of Castile",
    years: "1451-1504"
  }, {}, {})}
        ${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/ferdinand.jpg",
    name: "King Ferdinand II of Aragon",
    years: "1452-1516"
  }, {}, {})}</div>
    <div class="${"grid grid-cols-2 gap-4 place-items-center"}"><div class="${"h-[2px] bg-white bg-opacity-60 w-full"}"></div>
        <div class="${"h-[2px] bg-white bg-opacity-60 w-full"}"></div></div>
    <div class="${"grid grid-cols-2 gap-4 place-items-center"}">${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/philip.jpg",
    name: "Philip the Handsome",
    years: "1478-1506",
    topLine: true
  }, {}, {})}
        ${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/joanna.jpg",
    name: "Joanna of Castile",
    years: "1479-1555",
    topLine: true
  }, {}, {})}</div>
    <div class="${"h-[2px] bg-white bg-opacity-60 w-5/6 mx-auto"}"></div>
    <div class="${"flex justify-center pb-4 md:mb-24"}">${(0, import_index_5bb557bd.v)(Tree_card, "TreeCard").$$render($$result, {
    src: "..//family-tree/charlesv.jpg",
    name: "Charles V",
    years: "1500-1558",
    noLine: true,
    topLine: true
  }, {}, {})}</div>
</div>`;
});
const _3 = (0, import_index_5bb557bd.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.T, "Transition").$$render($$result, {}, {}, {
    default: () => {
      return `${(0, import_index_5bb557bd.v)(import_background_79fcbe12.S, "SectionHero").$$render($$result, {
        title: "Who was Charles V?",
        bg: "..//backgrounds/charles.jpg"
      }, {}, {})}
    ${(0, import_index_5bb557bd.v)(import_background_79fcbe12.B, "Background").$$render($$result, {
        parallax: true,
        src: "..//backgrounds/fabric.jpg",
        classes: "flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
      }, {}, {
        default: () => {
          return `${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { classes: "w-full mb-24" }, {}, {
            default: () => {
              return `<div class="${"first-letter:text-[300%] w-full"}">Charles Habsburg was born in Ghent, a region now located in Belgium. His four grandparents, Emperor Maximilian I of the Holy Roman Empire, Duchess Mary of Burgundy, King Ferdinand II of Aragon, and Queen Isabella I of Castile, carefully planned a dynastic marriage that would result in one extremely profitable heir. Charles was the eldest son of Philip the Handsome and Joanna of Castile, and he therefore inherited ample land throughout Europe. From Duchess Mary of Burgundy, his maternal grandmother, he acquired the remaining land of the Duchy of Burgundy in southern Europe, Flanders in the north (presently known as Belgium and the Netherlands), and some holdings in central Europe.
        </div>`;
            }
          })}
    ${(0, import_index_5bb557bd.v)(Family_tree, "FamilyTree").$$render($$result, {}, {}, {})}
    ${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { classes: "mb-24" }, {}, {
            default: () => {
              return `King Ferdinand II of Aragon, his maternal grandfather, left him most of the Iberian Peninsula, therefore making him King Carlos I of Spain. Charles also inherited eastern Spain and Aragon\u2019s colonies in the Mediterranean. From Queen Isabella I of Castile, his paternal grandmother, Charles acquired central Spain and Castile\u2019s American colonies. Emperor Maximilian I of the Holy Roman Empire, his paternal grandfather, left him the Austrian crownlands.
    `;
            }
          })}`;
        }
      })}
${(0, import_index_5bb557bd.v)(import_background_79fcbe12.B, "Background").$$render($$result, {
        src: "..//backgrounds/battle-of-pavia.jpg",
        scrim: "light",
        classes: "flex flex-col p-4 md:p-16 2xl:p-32 2xl:px-64"
      }, {}, {
        default: () => {
          return `<div class="${"grid 2xl:grid-cols-[3fr_4fr] gap-24"}">${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { classes: "mb-4 md:mb-24", light: true }, {}, {
            default: () => {
              return `Through this formidable personal inheritance and a combination of bribes and threats, Charles was able to position himself as the electors\u2019 choice for successor to his late grandfather, Holy Roman Emperor Maximilian I. He was selected over other possible candidates such as King Henry VIII of England, King Francis I of France, and Frederick the Wise, the duke of Saxony. Following his royal coronation in Aachen in 1520, he did what many of these other European rulers feared he would: he joined his grandfather\u2019s Holy Roman Empire with his mother\u2019s kingdoms of Spain and the Netherlands.
        `;
            }
          })} 
        ${(0, import_index_5bb557bd.v)(import_bio_card_8ad30ae6.B, "BioCard").$$render($$result, {
            name: "King Francis I",
            src: "..//character-cards/Francis I.jpg",
            years: "1494-1547",
            classes: "mb-4 md:mb-24"
          }, {}, {
            default: () => {
              return `<p>Crowned King of France in January 1515</p>
            <p>Made France the first country in Europe to establish formal relations with the Ottoman Empire</p>
            <p>Upheld a rivalry with Charles V until relucantly signing the Truce of Nice in 1538</p>`;
            }
          })}</div>
    ${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { light: true, classes: "mb-4 md:mb-24" }, {}, {
            default: () => {
              return `Francis and Charles became bitter rivals. Pope Clement VII sided with France. Francis fared especially badly in the 1525 Battle of Pavia, where he was roundly defeated and taken prisoner. Charles, however, lacked the funds to pay his victorious, mostly Lutheran, army. In the face of poverty, Lutheran hostility to the Papacy, and Clement\u2019s alliance with France, the army marched on Rome.
    `;
            }
          })}`;
        }
      })}
${(0, import_index_5bb557bd.v)(import_background_79fcbe12.B, "Background").$$render($$result, {
        src: "..//backgrounds/sackofrome.jpg",
        parallax: true,
        classes: "flex flex-col items-center p-4 md:p-16 2xl:p-32 2xl:px-64"
      }, {}, {
        default: () => {
          return `${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, { classes: "mb-24" }, {}, {
            default: () => {
              return `The sack was brutal, and in the context of the history of the Holy Roman Empire, a shocking event. Instead of defending Rome and its Church, the would-be Holy Roman Emperor besieged it and effectively imprisoned the pope. In the aftermath, Charles heard from counselors who denounced the sack and from others who supported it, but he seems to have had difficulty reconciling the accounts of its brutality with political justifications.
    `;
            }
          })}
    ${(0, import_index_5bb557bd.v)(import_chapter_button_svelte_svelte_type_style_lang_63e096b9.C, "Card").$$render($$result, {}, {}, {
            default: () => {
              return `In the end, he wanted all memory of the event erased and to put the episode behind him. Clement also felt prudent to make his peace with Charles. This, along with the political unrest associated with the beginning of the Protestant Reformation, was the context in which choices about the setting and music for the imperial coronation were made.
    `;
            }
          })}
    ${(0, import_index_5bb557bd.v)(import_chapter_button_42b65814.C, "ChapterButton").$$render($$result, {
            numeral: "IV",
            chapter: "A Bolognese Coronation",
            path: "4"
          }, {}, {})}`;
        }
      })}`;
    }
  })}`;
});
