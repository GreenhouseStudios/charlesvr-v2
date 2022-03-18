const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["backgrounds/abolcoronation.jpg","backgrounds/afocusonmusic.jpg","backgrounds/battle-of-pavia.jpg","backgrounds/Bologna_Italy_San_Petronio_from_Asinelli.jpg","backgrounds/charles.jpg","backgrounds/choirman2.mp4","backgrounds/choirshot.mp4","backgrounds/crown.png","backgrounds/crowning.jpg","backgrounds/damask_albedo-01.svg","backgrounds/detail.jpg","backgrounds/earlyflag.jpg","backgrounds/Elderly_Karl_V.jpg","backgrounds/exterior.jpg","backgrounds/fabric.jpg","backgrounds/holy-roman-empire.jpg","backgrounds/index.png","backgrounds/introcrawl.mp4","backgrounds/laudes.jpg","backgrounds/laudeswords.png","backgrounds/mural.jpg","backgrounds/musicstand.jpg","backgrounds/paintings.jpg","backgrounds/pope.jpg","backgrounds/sackofrome.jpg","backgrounds/singing.jpg","backgrounds/stand.jpg","backgrounds/tex16-1.jpg","backgrounds/tex16-35.jpg","backgrounds/updatedmap.mp4","backgrounds/vr-goggles.jpg","backgrounds/vr-overtheshoulder.jpg","backgrounds/vr-overview.jpg","backgrounds/wall.jpg","backgrounds/wideview.jpg","character-cards/Charlemagne.jpg","character-cards/Francis I.jpg","character-cards/Otto.jpg","character-cards/Pope Clement VII.jpg","content/Bronzino_-_Eleonora_di_Toledo_col_figlio_Giovanni_-_Google_Art_Project.jpg","content/choirsinger.png","content/Coronation_of_Louis_XV_in_Reims.JPG","content/dedication-to-the-emperor.jpg","content/dualcoronations.png","content/Giovanni_battista_moroni.JPG","content/Isotta_Brembati_Grumelli,_by_Giovanni_Battista_Moroni.jpg","content/Maarten_van_Heemskerck_013.jpg","content/Moretto,_ritratto_di_giovane,_1540-45_ca._02.jpg","content/pope.png","content/Rom,_Basilika_Santa_Maria_Maggiore,_Innenansicht.jpg","content/rota-porfiletica-st-peter.jpg","content/Sanpetroniointerior.jpg","drawersquiggle.png","family-tree/charlesv.jpg","family-tree/ferdinand.jpg","family-tree/isabella.jpg","family-tree/joanna.jpg","family-tree/mary.jpg","family-tree/maximilian.jpg","family-tree/philip.jpg","family-tree/tree.svg","favicon.ico","logos/charlesvr-black.png","logos/charlesvr-duotone.png"]),
	mimeTypes: {".jpg":"image/jpeg",".mp4":"video/mp4",".png":"image/png",".svg":"image/svg+xml",".JPG":"image/jpeg",".ico":"image/vnd.microsoft.icon"},
	_: {
		entry: {"file":"start-f3711056.js","js":["start-f3711056.js","chunks/vendor-0d4a325d.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "2",
				pattern: /^\/2\/?$/,
				names: [],
				types: [],
				path: "/2",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "3",
				pattern: /^\/3\/?$/,
				names: [],
				types: [],
				path: "/3",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "4",
				pattern: /^\/4\/?$/,
				names: [],
				types: [],
				path: "/4",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "5",
				pattern: /^\/5\/?$/,
				names: [],
				types: [],
				path: "/5",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "6",
				pattern: /^\/6\/?$/,
				names: [],
				types: [],
				path: "/6",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "7",
				pattern: /^\/7\/?$/,
				names: [],
				types: [],
				path: "/7",
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		validators: async () => {
			
			return {  };
		}
	}
});
