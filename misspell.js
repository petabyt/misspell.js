var nearbykeys = {
	q: "qwa",
	w: "qaeds",
	e: "wsdfr",
	r: "edtgf",
	t: "rfghy",
	y: "tghju",
	u: "yhjki",
	i: "ujklo",
	o: "iklp",
	p: "ol",
	a: "qwsxz",
	s: "qazxcdew",
	d: "rewsxcvf",
	f: "bvcdertg",
	g: "bvfrtyhn",
	h: "tubmgjyn",
	j: "yhnmkiu",
	k: "lmjio",
	l: "opk",
	z: "asx",
	x: "zsc",
	c: "xvdsf",
	v: "cdbfg",
	b: "vfghn",
	n: "bghjm",
	m: "nhjk"
};

function misspell(word) {
	var mistake = Math.floor(4 * Math.random()),
		wordSplit = word.split(""),
		randomCharacter = Math.floor(Math.random() * word.length + 1),
		a = word.removeLetters("constants").split(""),
		randomVowel = a[Math.floor(Math.random() * a.length)],
		b = word.removeLetters("vowels").split(""),
		randomConstant = b[Math.floor(Math.random() * b.length)];
	if (0 == mistake) wordSplit.splice(randomCharacter + 1, 0, wordSplit[
		randomCharacter]);
	else if (1 == mistake) wordSplit.splice(wordSplit.indexOf(wordSplit[
		randomCharacter]), 1);
	else if (2 == mistake) wordSplit = word.replace(randomConstant, randomVowel).split(
		"");
	else if (3 == mistake) wordSplit = word.replace(randomVowel, randomConstant).split(
		"");
	else if ("4" == mistake) {
		var randomNearybyKey = Math.floor(Math.random() * eval("nearbykeys." +
			wordSplit[randomCharacter]).length);
		wordSplit = word.replace(wordSplit[randomCharacter], eval("nearbykeys." +
			wordSplit[randomCharacter])[randomNearybyKey]).split("")
	}
	return wordSplit.join("")
}
String.prototype.removeLetters = function(r) {
	var a = this;
	return "vowels" == r ? a = a.replace(/[euioa]/gi, "") : "constants" == r && (
		a = a.replace(/[qwrtypsdfghjklzxcvbnm]/gi, "")), a
};