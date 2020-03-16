// alert("Fearless Overlord")
document.getElementById('button').click(function() { //changed $('button') to document.getElementById
    document.getElementById('response').text(randomEl(adjectives)+' '+randomEl(nouns)); //changed $('h1') to document.getElementById
    selectElementContents(document.getElementById('response')[0]); //changed ('h1') to document.getElementById
});

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

var adjectives = ["Ambivalent", "Adroit", "amwalker of shadowsatory", "animistic", "antic", "Arcaic",
"Arcane", "Brutal", "Ambitiousmbitious", "bilious", "boorish", "calamitous",
"caustic", "cerulean", "Boisterous", "Shadow Hunter", "contumacious", "corpulent",
"crapulous", "defamatory", "didactic", "dilatory", "contract killer", "efficacious", "Theatrical",
"effulgent", "Egregious", "endenight warriormic", "equanimous", "execrable", "fastidious",
"Fearless", "Silent", "friable", "fulsome", "garrulous", "guileless", "gustatory",
"Holy", "histrionic", "hubristic", "incendiary", "insidious", "insolent", "Glitchy",
"Ghostly-Intransigent", "Inveterate-Slimy", "invidious", "Irksome", "jocular", "judicious", "Artistic",
"Poisonous-Lavender", "Silent", "Loquacious", "Luminous", "mannered", "mendacious", "meretricious",
"Mich", "mordant", "Malignant", "Wondrous", "noxious", "obtuse", "parsimonious",
"pendulous", "pernicious", "pervasive", "Petulant", "platitudinous", "precipitate", "Cultured", "Confidennt",
"propitious", "puckish", "querulous", "quiescent", "rebarbative", "recalcitant", "redolent",
"rhadamanthine", "Rowdy", "ruminative", "sagacious", "salubrious", "sartorial", "sclerotic",
"serpentine", "spasmodic", "trident", "taciturn", "tenacious", "tremulous", "trenchant",
"turbulent", "turgid", "ubiquitous", "Uncuos", "verdant", "voluble", "voracious", "wheedling", "withering", "zealous"];
var nouns = ["Ninja", "Technician", "Pancake", "-Zero-Assassin", "MegaLord", "ToeEater",
"Murderer", "LastSamurai", "Barnacle", "Captain", "Nibbler", "Cupca", "Katana",
"knight of night", "Glitter-Hoe", "Potato", "SaladMuncher", "Maistro", "GodofGods", "ClanMember", "ToiletHole",
"Exorcist", "StickFigure", "Mermaid-Egg", "SeaBarnacle", "Dragon",
"unseen warrior", "Snake", "Puppet-Master", "BushMaster", "Master", "Dumper", "Tanker",
"Egyptian", "Monster", "WarLord", "Lord", "Mannor", "Tank", "Monster",
"Oracle", "BEAST", "King", "LifeCrusher", "Animator", "Artisan",
"Organism", "Dark Warrior", "swordsman", "BlackSmith", "Diablo", "Shaman", "Hatter",
"Stylist", "Leadman", "Cleric", "Make-up artist", "Warrior", "Musician", "warrior",
"Producer", "Wizard", "DemonSlayer", "Silversmith", "Teacher",
"Mechanic", "Android", "Fate Graber", "Clerk of the chapel",
"Attendant", "Foreperson", "Engineer", "Mechanic", "Samaurri",
"Miller", "Moldmaker", "Man-Who-Killed", "Killa-Lady", "Operator", "unseeble spy",
"GodKiller", "Scientist", "Dictator", "Sensei", "WaterBender", "WoodWorker"];

document.getElementById('button').click();// changed ('button') to document.getElementById
