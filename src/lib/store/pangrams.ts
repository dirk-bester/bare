// https://clagnut.com/blog/2380
const pangrams = [
	'"Now fax quiz Jack!" my brave ghost pled.',
	'A quick brown fox jumps over the lazy dog.',
	'A quick movement of the enemy will jeopardize six gunboats.',
	'A quivering Texas zombie fought republic linked jewelry.',
	'A very bad quack might jinx zippy fowls.',
	'A very big box sailed up then whizzed quickly from Japan.',
	"A wizard's job is to vex chumps quickly in fog.",
	'All questions asked by five watched experts amaze the judge.',
	'Amazingly few discotheques provide jukeboxes.',
	"As quirky joke, chefs won't pay devil magic zebra tax.",
	'Back in June we delivered oxygen equipment of the same size.',
	'Battle of Thermopylae: Quick javelin grazed wry Xerxes.',
	'Bawds jog, flick quartz, vex nymph.',
	'Big dwarves heckle my top quiz of jinx.',
	'Big fjords vex quick waltz nymph.',
	'Big July earthquakes confound zany experimental vow.',
	"BlewJ's computer quiz favored proxy hacking.",
	'Blowzy red vixens fight for a quick jump.',
	'Bobby Klun awarded Jayme sixth place for her very high quiz.',
	'Bored? Craving a pub quiz fix? Why, just come to the Royal Oak!',
	'Bortz waqf glyphs vex muck djin.',
	'Both fickle dwarves jinx my pig quiz.',
	'Brawny gods just flocked up to quiz and vex him.',
	'Brick quiz whangs jumpy veldt fox.',
	'Bright vixens jump; dozy fowl quack.',
	'Brown jars prevented the mixture from freezing too quickly.',
	'By Jove, my quick study of lexicography won a prize.',
	'Cozy lummox gives smart squid who asks for job pen.',
	'Cozy sphinx waves quart jug of bad milk.',
	'Crazy Frederick bought many very exquisite opal jewels.',
	'Cute, kind, jovial, foxy physique, amazing beauty? Wowser!',
	'Cwm fjord bank glyphs vext quiz.',
	'Cwm fjord veg balks nth pyx quiz.',
	'DJs flock by when MTV ax quiz prog.',
	'Do wafting zephyrs quickly vex Jumbo?',
	'Fake bugs put in wax jonquils drive him crazy.',
	'Farmer jack realized that big yellow quilts were expensive.',
	'Fat hag dwarves quickly zap jinx mob.',
	"Fax back Jim's Gwyneth Paltrow video quiz.",
	'Few black taxis drive up major roads on quiet hazy nights.',
	'Few quips galvanized the mock jury box.',
	'Fickle bog dwarves jinx empathy quiz.',
	'Fickle jinx bog dwarves spy math quiz.',
	'Five hexing wizard bots jump quickly.',
	'Five jumping wizards hex bolty quick.',
	'Five quacking zephyrs jolt my wax bed.',
	'Fix problem quickly with galvanized jets.',
	'Fox dwarves chop my talking quiz job.',
	'Fox nymphs grab quick-jived waltz.',
	"Foxy diva Jennifer Lopez wasn't baking my quiche.",
	'Foxy parsons quiz and cajole the lovably dim wiki-girl.',
	'Glib jocks quiz nymph to vex dwarf.',
	'Go, lazy fat vixen; be shrewd, jump quick.',
	'GQ jock wears vinyl tuxedo for showbiz promo.',
	"GQ's oft lucky whiz Dr. J, ex-NBA MVP.",
	'Grumpy wizards make a toxic brew for the jovial queen.',
	'Grumpy wizards make toxic brew for the evil queen and jack.',
	'Have a pick: twenty-six letters — no forcing a jumbled quiz!',
	'Heavy boxes perform quick waltzes and jigs.',
	'Hick dwarves jam blitzing foxy quip.',
	'How quickly daft jumping zebras vex.',
	'How razorback-jumping frogs can level six piqued gymnasts!',
	'How vexingly quick daft zebras jump!',
	'J. Fox made five quick plays to win the big prize.',
	'Jack fox bids ivy-strewn phlegm quiz.',
	'Jack quietly moved up front and seized the big ball of wax.',
	'Jack, love my big wad of sphinx quartz!',
	'Jackdaws love my big sphinx of quartz.',
	'Jackie will budget for the most expensive zoology equipment.',
	'Jacky can now give six big tips from the old quiz.',
	'JCVD might pique a sleazy boxer with funk.',
	'Jim quickly realized that the beautiful gowns are expensive.',
	'Jink cwm, zag veldt, fob qursh pyx.',
	'Joaquin Phoenix was gazed by MTV for luck.',
	'Jumbling vext frowzy hacks PDQ.',
	'Jumping hay dwarves flock quartz box.',
	'Jumpy halfling dwarves pick quartz box.',
	'Junk MTV quiz graced by fox whelps.',
	'Junky qoph-flags vext crwd zimb.',
	'Just keep examining every low bid quoted for zinc etchings.',
	'Just poets wax boldly as kings and queens march over fuzz.',
	'Kat veld zubr gif cwm jynx qophs.',
	'Kvetching, flummoxed by job, W. zaps Iraq.',
	'Levi Lentz packed my bag with six quarts of juice.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	'Lovak won the squad prize cup for sixty big jumps.',
	'Mr. Jock, TV quiz PhD., bags few lynx.',
	'My ex pub quiz crowd gave joyful thanks.',
	'My faxed joke won a pager in the cable TV quiz show.',
	'My girl wove six dozen plaid jackets before she quit.',
	'My jocks box, get hard, unzip, quiver, flow.',
	'Nymphs blitz quick vex dwarf jog.',
	'Pack my box with five dozen liquor jugs.',
	'Pack my red box with five dozen quality jugs.',
	'Painful zombies quickly watch a jinxed graveyard.',
	'PR flacks quiz gym: TV DJ box when?',
	'Prating jokers quizzically vexed me with fibs.',
	'Public junk dwarves hug my quartz fox.',
	'Public junk dwarves quiz mighty fox.',
	"Quads of blowzy fjord ignite map vex'd chicks.",
	'Quest judge wizard bonks foxy chimp love.',
	'Quick blowing zephyrs vex daft Jim.',
	'Quick brown fox jumps over the lazy dog.',
	'Quick fox jumps nightly above wizard.',
	'Quick wafting zephyrs vex bold Jim.',
	'Quick zephyrs blow, vexing daft Jim.',
	'Quilt frenzy jackdaw gave them best pox.',
	'Quincy Pondexter blocked five jams against the Wizards!',
	'Quirky spud boys can jam after zapping five worthy Polysixes.',
	'Quizzical twins proved my hijack-bug fix.',
	'Schwarzkopf vexed Iraq big-time in July.',
	'Sex prof gives back no quiz with mild joy.',
	'Sex-charged fop blew my junk TV quiz.',
	'Show mangled quartz flip vibe exactly.',
	'Six big devils from Japan quickly forgot how to waltz.',
	'Sixty zippers were quickly picked from the woven jute bag.',
	'Sixty zips were quickly picked from the woven jute bag.',
	'Sphinx of black quartz, judge my vow!',
	'Squdgy fez, blank jimp crwth vox!',
	'Sympathizing would fix Quaker objectives.',
	'That quick beige fox jumped in the air over each thin dog. Look out, I shout, for he’s foiled you again, creating chaos.',
	'The five boxing wizards jump quickly.',
	'The jay, pig, fox, zebra and my wolves quack!',
	'The job of waxing linoleum frequently peeves chintzy kids.',
	"The lazy major was fixing Cupid's broken quiver.",
	'The quick brown fox jumped over the lazy dogs.',
	'The quick brown fox jumps over a lazy dog.',
	'The quick brown fox jumps over the lazy dog.',
	'The quick onyx goblin jumps over the lazy dwarf.',
	'The wizard quickly jinxed the gnomes before they vaporized.',
	"Then a cop quizzed Mick Jagger's ex-wives briefly.",
	'Twelve ziggurats quickly jumped a finch box.',
	'Two driven jocks help fax my big quiz.',
	'Vamp fox held quartz duck just by wing.',
	'Veldt jynx grimps waqf zho buck.',
	'Vex quest wizard, judge my backflop hand.',
	'Vexed nymphs go for quick waltz job.',
	'Waltz job vexed quick frog nymphs.',
	'Waltz, bad nymph, for quick jigs vex!',
	'Waltz, nymph, for quick jigs vex Bud!',
	'Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game.',
	'Waxy and quivering, jocks fumble the pizza.',
	'We promptly judged antique ivory buckles for the next prize.',
	'When zombies arrive, quickly fax judge Pat.',
	'Who packed five dozen old quart jugs in my box?',
	"Why shouldn't a quixotic Kazakh vampire jog barefoot?",
	'Woven silk pyjamas exchanged for blue quartz.',
	'Zack Gappow saved the job requirement list for the six boys.',
	'Zelda might fix the job growth plans very quickly on Monday.',
	'Zidane, Yiddish xylophone wonder, vanquished undesirables through simply rendering quisling patterns on neatly maintained long keys, justly instigating heartfelt gratitude for exemplary deeds captured by audio. Adoring brilliant creativity, daring entrepreneurs funded grand halls, inducing judicious kibitzing, lessened measurably night one; perhaps quelled rapidly since tickets usually vanished when xylophonophilics yelled "Zidane!" Zealots yodeled xylophone whimsies, violently upending the standard rigor quieter patrons observed, neatly mutilating long-kept jive interactions, harmony gone, frantically enabling dire change by armfuls.',
	'Zing, dwarf jocks vex lymph, Qutb.',
	'Zing, vext cwm fly jabs Kurd qoph.'
];
export default pangrams;
