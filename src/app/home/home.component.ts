import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  language = 'sanskrit';

  damodarstrotram = {

    sanskrit: `
करारविन्देन पदारविन्दं
मुखारविन्दे विनिवेशयन्तम् ।
वटस्य पत्रस्य पुटे शयानं
बालं मुकुन्दं मनसा स्मरामि ॥

श्रीकृष्ण गोविन्द हरे मुरारे
हे नाथ नारायण वासुदेव ।
जिह्वे पिबस्वामृतमेतदेव
गोविन्द दामोदर माधवेति ॥ 1

विक्रेतुकामाखिलगोपकन्या
मुरारिपादार्पितचित्तवृत्तिः ।
दध्यादिकं मोहवशादवोचत्
गोविन्द दामोदर माधवेति ॥ 2

गृहे गृहे गोपवधूकदम्बाः
सर्वे मिलित्वा समवाप्य योगम् ।
पुण्यानि नामानि पठन्ति नित्यं
गोविन्द दामोदर माधवेति ॥ 3

सुखं शयाना निलये निजेऽपि
नामानि विष्णोः प्रवदन्ति मर्त्याः ।
ते निश्चितं तन्मयतां व्रजन्ति
गोविन्द दामोदर माधवेति ॥ 4

जिह्वे सदैवं भज सुन्दराणि
नामानि कृष्णस्य मनोहराणि ।
समस्त भक्तार्तिविनाशनानि
गोविन्द दामोदर माधवेति ॥ 5

सुखावसाने इदमेव सारं
दुःखावसाने इदमेव ज्ञेयम् ।
देहावसाने इदमेव जाप्यं
गोविन्द दामोदर माधवेति ॥ 6

जिह्वे रसज्ञे मधुरप्रिये त्वं
सत्यं हितं त्वां परमं वदामि ।
अवर्णयेथा मधुराक्षराणि
गोविन्द दामोदर माधवेति ॥ 7

त्वामेव याचे मम देहि जिह्वे
समागते दण्डधरे कृतान्ते ।
वक्तव्यमेवं मधुरं सुभक्त्या
गोविन्द दामोदर माधवेति ॥ 8

श्रीकृष्ण राधावर गोकुलेश
गोपाल गोवर्धननाथ विष्णो ।
जिह्वे पिबस्वामृतमेतदेव
गोविन्द दामोदर माधवेति ॥ 9
`,

    english: `
karāravindēna padāravindaṃ
mukhāravindē vinivēśayantam ।
vaṭasya patrasya puṭē śayānaṃ
bālaṃ mukundaṃ manasā smarāmi ॥

śrīkṛṣṇa gōvinda harē murārē
hē nātha nārāyaṇa vāsudēva ।
jihvē pibasvāmṛtamētadēva
gōvinda dāmōdara mādhavēti ॥ 1

vikrētukāmākhilagōpakanyā
murāripādārpitachittavṛttiḥ ।
dadhyādikaṃ mōhavaśādavōchat
gōvinda dāmōdara mādhavēti ॥ 2

gṛhē gṛhē gōpavadhūkadambāḥ
sarvē militvā samavāpya yōgam ।
puṇyāni nāmāni paṭhanti nityaṃ
gōvinda dāmōdara mādhavēti ॥ 3

sukhaṃ śayānā nilayē nijē'pi
nāmāni viṣṇōḥ pravadanti martyāḥ ।
tē niśchitaṃ tanmayatāṃ vrajanti
gōvinda dāmōdara mādhavēti ॥ 4

jihvē sadaivaṃ bhaja sundarāṇi
nāmāni kṛṣṇasya manōharāṇi ।
samasta bhaktārtivināśanāni
gōvinda dāmōdara mādhavēti ॥ 5

sukhāvasānē idamēva sāraṃ
duḥkhāvasānē idamēva jñēyam ।
dēhāvasānē idamēva jāpyaṃ
gōvinda dāmōdara mādhavēti ॥ 6

jihvē rasajñē madhurapriyē tvaṃ
satyaṃ hitaṃ tvāṃ paramaṃ vadāmi ।
avarṇayēthā madhurākṣarāṇi
gōvinda dāmōdara mādhavēti ॥ 7

tvāmēva yāchē mama dēhi jihvē
samāgatē daṇḍadharē kṛtāntē ।
vaktavyamēvaṃ madhuraṃ subhaktyā
gōvinda dāmōdara mādhavēti ॥ 8

śrīkṛṣṇa rādhāvara gōkulēśa
gōpāla gōvardhananātha viṣṇō ।
jihvē pibasvāmṛtamētadēva
gōvinda dāmōdara mādhavēti ॥ 9

`,

    odiya: `
କରାରଵିଂଦେନ ପଦାରଵିଂଦଂ
ମୁଖାରଵିଂଦେ ଵିନିଵେଶୟଂତମ୍ ।
ଵଟସ୍ୟ ପତ୍ରସ୍ୟ ପୁଟେ ଶୟାନଂ
ବାଲଂ ମୁକୁଂଦଂ ମନସା ସ୍ମରାମି ॥

ଶ୍ରୀକୃଷ୍ଣ ଗୋଵିଂଦ ହରେ ମୁରାରେ
ହେ ନାଥ ନାରାୟଣ ଵାସୁଦେଵ ।
ଜିହ୍ଵେ ପିବସ୍ଵାମୃତମେତଦେଵ
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 1

ଵିକ୍ରେତୁକାମାଖିଲଗୋପକନ୍ୟା
ମୁରାରିପାଦାର୍ପିତଚିତ୍ତଵୃତ୍ତିଃ ।
ଦଧ୍ୟାଦିକଂ ମୋହଵଶାଦଵୋଚତ୍
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 2

ଗୃହେ ଗୃହେ ଗୋପଵଧୂକଦଂବାଃ
ସର୍ଵେ ମିଲିତ୍ଵା ସମଵାପ୍ୟ ୟୋଗମ୍ ।
ପୁଣ୍ୟାନି ନାମାନି ପଠଂତି ନିତ୍ୟଂ
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 3

ସୁଖଂ ଶୟାନା ନିଲୟେ ନିଜେଽପି
ନାମାନି ଵିଷ୍ଣୋଃ ପ୍ରଵଦଂତି ମର୍ତ୍ୟାଃ ।
ତେ ନିଶ୍ଚିତଂ ତନ୍ମୟତାଂ ଵ୍ରଜଂତି
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 4

ଜିହ୍ଵେ ସଦୈଵଂ ଭଜ ସୁଂଦରାଣି
ନାମାନି କୃଷ୍ଣସ୍ୟ ମନୋହରାଣି ।
ସମସ୍ତ ଭକ୍ତାର୍ତିଵିନାଶନାନି
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 5

ସୁଖାଵସାନେ ଇଦମେଵ ସାରଂ
ଦୁଃଖାଵସାନେ ଇଦମେଵ ଜ୍ଞେୟମ୍ ।
ଦେହାଵସାନେ ଇଦମେଵ ଜାପ୍ୟଂ
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 6

ଜିହ୍ଵେ ରସଜ୍ଞେ ମଧୁରପ୍ରିୟେ ତ୍ଵଂ
ସତ୍ୟଂ ହିତଂ ତ୍ଵାଂ ପରମଂ ଵଦାମି ।
ଅଵର୍ଣୟେଥା ମଧୁରାକ୍ଷରାଣି
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 7

ତ୍ଵାମେଵ ୟାଚେ ମମ ଦେହି ଜିହ୍ଵେ
ସମାଗତେ ଦଂଡଧରେ କୃତାଂତେ ।
ଵକ୍ତଵ୍ୟମେଵଂ ମଧୁରଂ ସୁଭକ୍ତ୍ୟା
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 8

ଶ୍ରୀକୃଷ୍ଣ ରାଧାଵର ଗୋକୁଲେଶ
ଗୋପାଲ ଗୋଵର୍ଧନନାଥ ଵିଷ୍ଣୋ ।
ଜିହ୍ଵେ ପିବସ୍ଵାମୃତମେତଦେଵ
ଗୋଵିଂଦ ଦାମୋଦର ମାଧଵେତି ॥ 9
`

  };

}