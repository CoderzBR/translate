
1
function ChangeLang(a) {
2
 var b, elemento = "";
3
 if (document.createEvent) {
4
 var c = document.createEvent("HTMLEvents");
5
 c.initEvent("click", true, true)
6
 }
7
 if (a == 'pt') {
8
 elemento = $(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']")
9
 } else {
10
 switch (a) {
11
 case 'de':
12
 b = "alem";
13
 break;
14
 case 'es':
15
 b = "espanhol";
16
 break;
17
 case 'fr':
18
 b = "fran";
19
 break;
20
 case 'en':
21
 b = "ing";
22
 break;
23
 case 'it':
24
 b = "italiano";
25
 break
26
 }
27
 elemento = $(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + b + "')");
28
 }
29
 if (elemento.length > 0) {
30
 if (document.createEvent) {
31
 elemento[0].dispatchEvent(c)
32
 } else {
33
 elemento[0].click()
34
 }
35
 }
36
}
37
function googleTranslateElementInit() {
38
 new google.translate.TranslateElement({
39
 pageLanguage: 'pt',
40
 autoDisplay: false,
41
 includedLanguages: 'de,es,fr,en,it',
42
 layout: google.translate.TranslateElement.InlineLayout.SIMPLE
43
 },
44
 'google_translate_element');
45
}

