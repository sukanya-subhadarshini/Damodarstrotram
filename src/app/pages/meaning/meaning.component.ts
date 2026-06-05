import { Component } from '@angular/core';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.css']
})
export class MeaningComponent {

  language = 'english';

  meanings = {

    english: `
Verse 1:
I meditate upon baby Krishna, who places His lotus feet into His lotus mouth while lying on a banyan leaf.

Verse 2:
The gopis, while selling curd and butter, become so absorbed in Krishna that they repeatedly chant:
"Govinda Damodara Madhaveti."

Verse 3:
The women of Gokula gather together and constantly sing the holy names of Krishna.

Verse 4:
Even while resting in their homes, devotees remember and chant the names of Lord Vishnu.

Verse 5:
O tongue! Always sing the beautiful names of Krishna which remove all suffering.

Verse 6:
At the end of happiness, sorrow, and even life itself, the divine names of Krishna remain the true refuge.

Verse 7:
O tongue! Speak only these sweet names:
Govinda, Damodara, Madhava.

Verse 8:
At the final moment of life, may these holy names arise naturally on my lips.

Verse 9:
O tongue! Drink the nectar of Krishna’s holy names forever.
`,

    hindi: `
श्लोक 1:
मैं बालक श्रीकृष्ण का ध्यान करता हूँ जो वट वृक्ष के पत्ते पर शयन करते हुए अपने चरणकमलों को मुख में धारण किए हुए हैं।

श्लोक 2:
गोपियाँ दही और मक्खन बेचते समय भी श्रीकृष्ण के प्रेम में डूबी रहती हैं और "गोविन्द दामोदर माधव" का नाम जपती हैं।

श्लोक 3:
गोकुल की गोपियाँ एकत्र होकर प्रतिदिन भगवान के पवित्र नामों का कीर्तन करती हैं।

श्लोक 4:
अपने घरों में विश्राम करते समय भी भक्त भगवान विष्णु के नामों का स्मरण करते हैं।

श्लोक 5:
हे जिह्वा! सदैव श्रीकृष्ण के सुन्दर नामों का भजन करो जो सभी दुखों का नाश करते हैं।

श्लोक 6:
सुख, दुःख और जीवन के अंत में भी भगवान का नाम ही सच्चा सहारा है।

श्लोक 7:
हे जिह्वा! सदैव मधुर नामों "गोविन्द, दामोदर, माधव" का उच्चारण करो।

श्लोक 8:
मृत्यु के समय भी मेरे मुख से यही पवित्र नाम निकलें।

श्लोक 9:
हे जिह्वा! श्रीकृष्ण के नाम रूपी अमृत का निरंतर पान करो।
`,

    odiya: `
ଶ୍ଲୋକ ୧:
ମୁଁ ବାଳକ କୃଷ୍ଣଙ୍କୁ ସ୍ମରଣ କରୁଛି, ଯିଏ ବଟପତ୍ର ଉପରେ ଶୟନ କରି ନିଜ ପାଦକମଳକୁ ମୁଖରେ ଧାରଣ କରିଛନ୍ତି।

ଶ୍ଲୋକ ୨:
ଗୋପୀମାନେ ଦହି ଓ ମଖନ ବିକ୍ରୟ କରୁଥିବା ବେଳେ ମଧ୍ୟ କୃଷ୍ଣଙ୍କ ପ୍ରେମରେ ମଗ୍ନ ହୋଇ "ଗୋବିନ୍ଦ ଦାମୋଦର ମାଧବ" ନାମ ଜପ କରନ୍ତି।

ଶ୍ଲୋକ ୩:
ଗୋକୁଳର ଗୋପୀମାନେ ଏକତ୍ରିତ ହୋଇ ଭଗବାନଙ୍କ ପବିତ୍ର ନାମ ଗାନ କରନ୍ତି।

ଶ୍ଲୋକ ୪:
ନିଜ ଘରେ ବିଶ୍ରାମ କରୁଥିବା ସମୟରେ ମଧ୍ୟ ଭକ୍ତମାନେ ବିଷ୍ଣୁଙ୍କ ନାମ ସ୍ମରଣ କରନ୍ତି।

ଶ୍ଲୋକ ୫:
ହେ ଜିହ୍ୱା! ସଦା କୃଷ୍ଣଙ୍କ ସୁନ୍ଦର ନାମ ଜପ କର, ଯାହା ସମସ୍ତ ଦୁଃଖ ଦୂର କରେ।

ଶ୍ଲୋକ ୬:
ସୁଖ, ଦୁଃଖ ଏବଂ ଜୀବନର ଶେଷରେ ମଧ୍ୟ ଭଗବାନଙ୍କ ନାମ ହିଁ ସତ୍ୟ ଆଶ୍ରୟ।

ଶ୍ଲୋକ ୭:
"ଗୋବିନ୍ଦ, ଦାମୋଦର, ମାଧବ" ଏହି ମଧୁର ନାମ ସଦା ଉଚ୍ଚାରଣ କର।

ଶ୍ଲୋକ ୮:
ମୃତ୍ୟୁ ସମୟରେ ମଧ୍ୟ ଏହି ପବିତ୍ର ନାମ ମୋ ମୁଖରୁ ବାହାରୁ।

ଶ୍ଲୋକ ୯:
ହେ ଜିହ୍ୱା! କୃଷ୍ଣଙ୍କ ନାମରୂପୀ ଅମୃତ ସଦା ପାନ କର।
`
  };
}