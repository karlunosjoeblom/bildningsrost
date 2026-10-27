(()=>{"use strict";
const $=id=>document.getElementById(id),pick=a=>a[Math.floor(Math.random()*a.length)];
const intro={
saklig:["Jag skriver med anledning av frågorna om den fackliga bildningens ställning inom Byggnads.","Jag vill uppmärksamma förbundet på vikten av öppna och långsiktiga villkor för facklig utbildning.","Jag önskar en redovisning av hur Byggnads arbetar för att värna medlemmarnas möjligheter till utbildning."],
personlig:["För mig är möjligheten att lära sig och diskutera en central del av ett levande fackförbund.","Jag tycker att det är viktigt att medlemmar kan ställa frågor och utveckla sin kunskap tillsammans.","Det bekymrar mig när frågor om facklig utbildning väcker osäkerhet kring hur beslut fattas."],
skarpare:["Jag förväntar mig att Byggnads tar sitt ansvar för medlemmarnas rätt till facklig bildning på allvar.","En stark medlemsdemokrati kräver öppenhet kring beslut som påverkar utbildningsverksamheten.","Förbundets ansvar för bildningen måste kunna granskas och förklaras för medlemmarna."]};
const points={
bildning:["Facklig bildning är inte en sidoverksamhet. Den ger medlemmar kunskap att organisera sig, diskutera och påverka.","Utbildningarnas värde ligger i att fler medlemmar får redskap att förstå sina rättigheter och utveckla den gemensamma organisationen.","Ett starkt förbund behöver medlemmar som själva kan analysera, ifrågasätta och ta ansvar."],
demokrati:["Medlemsinflytande förutsätter att kunskap inte koncentreras till ett fåtal personer.","Demokrati är mer än val och möten; den kräver utrymme för självständigt tänkande och samtal.","Det är viktigt att också kritiska perspektiv får plats inom den fackliga utbildningen."],
insyn:["Beslut som påverkar utbildningsverksamheten bör motiveras och kunna följas av medlemmarna.","Jag vill förstå vilka beslutsvägar som används när utbildningsuppdrag förändras.","Öppen dokumentation och tydliga mandat är avgörande för förtroendet."],
utbildningar:["Utbildningstillfällen inom den fackliga bildningen har ställts in. Det väcker frågor om varför utbildningarna inte genomförs och hur Byggnads ska säkerställa medlemmarnas fortsatta tillgång till Vägen framåt och Makthantverket.","När utbildningstillfällen ställs in behöver medlemmarna få veta varför det sker, vem som ansvarar för besluten och hur nya tillfällen ska kunna erbjudas.","De inställda utbildningstillfällena väcker frågor om förbundets ansvar för den fackliga bildningen. Jag önskar tydliga besked om hur tillgången till Vägen framåt och Makthantverket ska säkerställas."],
ansvar:["Jag vill veta vem som ansvarar för att följa upp kvaliteten och tillgängligheten i den fackliga utbildningen.","Förbundet bör kunna beskriva hur medlemskritik tas emot och hur beslut kan omprövas.","Det behövs tydliga besked om hur ansvariga säkerställer ett öppet och hållbart studiearbete."]};
const questions=["Hur säkerställer förbundet att medlemmar får tillgång till kvalificerad facklig bildning?","Hur skyddas utrymmet för kritiska diskussioner inom utbildningsverksamheten?","Vilka beslutsorgan ansvarar för förändringar som påverkar kurserna?","Hur informeras medlemmarna om förändringar och deras skäl?","Hur kan medlemmarna påverka studieverksamhetens framtida inriktning?","Vilka konkreta åtgärder planeras för att stärka den fackliga bildningen?"];const cancelledCourseQuestions=["Vilka skäl ligger bakom de inställda utbildningstillfällena och vem ansvarar för besluten?","Hur ska förbundet säkerställa medlemmarnas fortsatta tillgång till Vägen framåt och Makthantverket?","När planeras nya utbildningstillfällen och hur informeras berörda medlemmar?"];
const formalIntro={
vardaglig:{
saklig:["Jag hör av mig för att jag undrar hur Byggnads tänker kring den fackliga bildningen.","Jag vill gärna veta hur förbundet ser på utbildning och medlemmarnas möjligheter att påverka."],
personlig:["Jag tycker att våra utbildningar är viktiga och vill berätta hur jag ser på saken.","För mig betyder den fackliga bildningen mycket, och därför vill jag ställa några frågor."],
skarpare:["Jag tycker att Byggnads måste ge tydligare besked om vad som händer med bildningen.","Det är dags att förbundet svarar ordentligt på frågor om utbildning och medlemsinflytande."]},
formell:{
saklig:["Jag vänder mig till er med anledning av den fackliga bildningens ställning inom Byggnads.","Jag önskar härmed ett klargörande beträffande förbundets arbete med facklig utbildning och medlemsinflytande."],
personlig:["Jag vill härmed framföra mina synpunkter på medlemmarnas förutsättningar för facklig bildning.","Mot bakgrund av bildningens betydelse för medlemsdemokratin vill jag uppmärksamma er på följande frågor."],
skarpare:["Jag begär ett tydligt klargörande av förbundets ansvar för den fackliga bildningen.","Jag förväntar mig en saklig redovisning av förbundets ställningstaganden i frågor om utbildning och medlemsinflytande."]}
};
const styledPoints={
vardaglig:{
bildning:["Vi behöver bra utbildningar så att fler medlemmar kan förstå sina rättigheter och vara med och påverka.","Facklig utbildning ska hjälpa oss medlemmar att få kunskap och ta plats i vår egen organisation."],
demokrati:["Om medlemmarna ska kunna påverka på riktigt måste vi också få kunskap och möjlighet att diskutera.","Jag vill att det ska finnas utrymme för fler åsikter och öppna samtal i utbildningarna."],
insyn:["Jag vill förstå hur besluten om utbildningarna fattas och vem som står bakom dem.","Det borde vara enkelt för oss medlemmar att få veta varför studieverksamheten förändras."],
utbildningar:["Utbildningstillfällen har ställts in. Jag vill veta varför och hur vi medlemmar ska kunna gå Vägen framåt och Makthantverket framöver.","När kurstillfällen ställs in behöver vi få veta vad som hänt, vem som ansvarar och när nya tillfällen kan ordnas."],
ansvar:["Vem ser till att utbildningarna fungerar och att medlemmarnas frågor blir besvarade?","Jag vill veta vem vi medlemmar ska vända oss till och hur våra synpunkter följs upp."]},
formell:{
bildning:["Den fackliga bildningen är en grundläggande förutsättning för medlemmarnas kunskap, organisering och inflytande.","Förbundet bör säkerställa att utbildningsverksamheten långsiktigt stärker medlemmarnas förmåga att tillvarata sina rättigheter."],
demokrati:["Ett reellt medlemsinflytande förutsätter tillgång till kunskap och utrymme för självständig diskussion.","Jag vill understryka vikten av att olika perspektiv ges utrymme inom ramen för den fackliga utbildningen."],
insyn:["Jag efterfrågar transparens beträffande de beslutsunderlag och mandat som ligger till grund för förändringar i studieverksamheten.","Beslut som påverkar utbildningsverksamheten bör kunna motiveras och granskas av förbundets medlemmar."],
utbildningar:["Utbildningstillfällen inom den fackliga bildningen har ställts in. Jag begär ett klargörande av skälen, ansvarsfördelningen och hur medlemmarnas fortsatta tillgång till Vägen framåt och Makthantverket ska säkerställas.","Mot bakgrund av de inställda utbildningstillfällena önskar jag en skriftlig redogörelse för beslutens grunder samt vilka åtgärder Byggnads avser att vidta för att värna utbildningarnas tillgänglighet."],
ansvar:["Jag begär ett förtydligande av ansvarsfördelningen för uppföljning och kvalitetssäkring av studieverksamheten.","Det bör framgå vilka funktioner som ansvarar för beslut, omprövning och återkoppling inom utbildningsverksamheten."]}
};
const questionLeads={
vardaglig:["Jag vill också gärna veta: ","Jag har några frågor till er: "],
normal:["Jag vill gärna få ett skriftligt svar på hur ni ser på följande frågor: ","Jag önskar ett tydligt besked om följande: ","Det vore värdefullt att få veta följande: "],
formell:["Jag önskar ett skriftligt klargörande av följande frågor: ","Jag ber er särskilt att redovisa följande: "]
};
const signoffs={
vardaglig:["Jag hoppas att ni kan svara på det här.\n\nHälsningar,","Tack på förhand för ett svar.\n\nVänliga hälsningar,"],
normal:["Jag ser fram emot ett tydligt svar.\n\nMed vänlig hälsning,","Tack för att ni återkommer med en redovisning.\n\nVänliga hälsningar,","Jag hoppas att frågorna kan bidra till en öppen diskussion.\n\nKamratliga hälsningar,"],
formell:["Jag ser fram emot ert skriftliga svar.\n\nMed vänlig hälsning,","Jag emotser en skriftlig återkoppling i dessa frågor.\n\nMed vänlig hälsning,"]
};
const config=window.BILDNINGSROST_CONFIG||{recipients:[]};const list=$("recipients");
(config.recipients||[]).forEach((r,i)=>{if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.email))return;const label=document.createElement("label");label.className="recipient";const check=document.createElement("input");check.type="checkbox";check.value=r.email;check.checked=/^(Centralt|Förbundsledning|Studier) – /.test(r.name);check.id="r"+i;const text=document.createElement("span");const parts=r.name.split(" – ");const group=parts.length>1?parts.shift():"";const person=parts.join(" – ")||r.name;const role=person.includes(" – ")?person.split(" – ")[0]:"";const title=document.createElement("strong");title.textContent=/gemensam inkorg/i.test(person)?group:person.replace(/^ordförande /,"");const detail=document.createElement("small");detail.className="recipient-role";detail.textContent=/gemensam inkorg/i.test(person)?"Gemensam inkorg":r.role||((/^ordförande /i.test(person)?"Regionordförande":/^Studier$/i.test(group)?"Studieverksamhet":group==="Centralt"?"Central kontaktperson":"Regional kontaktperson")+(group&&group!=="Centralt"?" · "+group:""));text.append(title,detail,document.createTextNode(r.email));label.append(check,text);list.append(label)});
function updateRecipientStatus(){const total=list.querySelectorAll('input[type="checkbox"]').length;const selected=list.querySelectorAll('input:checked').length;$("recipient-status").textContent=total?selected+" av "+total+" mottagare markerade.":"Inga mottagare finns inlagda."}
function setAllRecipients(checked){list.querySelectorAll('input[type="checkbox"]').forEach(box=>box.checked=checked);$("approved").checked=false;updateRecipientStatus()}
$("select-all").addEventListener("click",()=>setAllRecipients(true));
$("deselect-all").addEventListener("click",()=>setAllRecipients(false));
list.addEventListener("change",()=>{$("approved").checked=false;updateRecipientStatus()});
updateRecipientStatus();
const responseRequests={
vardaglig:["Jag vill gärna få ett tydligt svar på hur ni tänker gå vidare.","Jag tycker att vi medlemmar behöver få veta vad som ska hända nu.","Det vore bra om ni berättade vad ni tänker göra åt situationen."],
normal:["Jag önskar ett skriftligt besked om hur förbundet avser att hantera dessa frågor.","Jag förväntar mig en tydlig redovisning av vilka åtgärder som planeras.","Jag vill ha en konkret återkoppling om hur medlemsinflytandet och utbildningsverksamheten ska värnas."],
formell:["Jag begär en skriftlig redogörelse för förbundets ställningstaganden och planerade åtgärder.","Jag önskar ett skriftligt klargörande av ansvarsfördelning och fortsatt handläggning.","Jag emotser en saklig redovisning av hur förbundet avser att säkerställa medlemmarnas tillgång till facklig bildning."]
};
const reflectivePassages={
vardaglig:["För mig handlar det här om att fler ska få chans att lära sig och göra sin röst hörd.","När utbildningen fungerar blir det lättare för oss medlemmar att förstå vad vi kan förändra tillsammans.","Jag vill tillhöra ett förbund där man får ställa frågor och utvecklas, också när man tycker olika."],
normal:["Facklig utbildning fyller en viktig funktion för ett levande medlemsinflytande. Det är därför angeläget att verksamheten utvecklas med medlemmarnas delaktighet.","Jag ser den fackliga bildningen som en förutsättning för att medlemmarna ska kunna ta ansvar och delta i förbundets demokratiska arbete.","Förbundet vinner i längden på att utbildning och öppen diskussion uppmuntras, även när frågor och synpunkter är kritiska."],
formell:["Den fackliga bildningen utgör en central del av förbundets demokratiska infrastruktur och förutsätter långsiktighet och insyn.","Ett hållbart medlemsinflytande förutsätter att kunskap förmedlas brett och att medlemmar ges faktiska möjligheter till självständig diskussion.","Förbundets arbete med utbildning bör präglas av tydliga mandat, tillgänglighet och respekt för medlemmarnas rätt att påverka verksamhetens utveckling."]
};
const concernPassages={
vardaglig:["Jag tycker inte att det räcker med att låta frågorna hänga i luften. Vi medlemmar behöver svar.","Det är svårt att känna förtroende när man inte får veta hur sådana här frågor hanteras."],
normal:["Brist på tydliga besked riskerar att skapa osäkerhet om utbildningsverksamhetens framtid.","Det är viktigt att ansvariga redovisar sina överväganden så att medlemmarna kan följa hur frågorna hanteras."],
formell:["Avsaknaden av tydliga besked försvårar medlemmarnas möjlighet att bedöma hur utbildningsverksamheten leds och utvecklas.","Mot denna bakgrund bör förbundet klargöra beslutsvägar, ansvar och hur eventuella förändringar kommuniceras till medlemmarna."]
};
const shortClosings={
vardaglig:["Jag hoppas att ni återkommer med ett svar.","Jag ser fram emot att höra hur ni tänker."],
normal:["Jag ser fram emot er återkoppling.","Jag hoppas på en öppen och konstruktiv dialog."],
formell:["Jag ser fram emot ert skriftliga svar.","Jag emotser en tydlig återkoppling."]
};
const signatures={vardaglig:["Vänliga hälsningar,","Hälsningar,"],normal:["Med vänlig hälsning,","Vänliga hälsningar,","Kamratliga hälsningar,"],formell:["Med vänlig hälsning,"]};
let lastOpening="",lastStructure=-1;
function generate(){
const topics=[...document.querySelectorAll("#topics input:checked")].map(x=>x.value);
if(!topics.length){$("status").textContent="Välj minst ett ämne.";return}
const tone=$("tone").value,formality=$("formality").value,length=$("length").value;
const pool=formality==="normal"?intro[tone]:formalIntro[formality][tone];
const openings=pool.filter(x=>x!==lastOpening);
const opening=pick(openings.length?openings:pool);lastOpening=opening;
const topicCount=length==="kort"?1:length==="lang"?Math.min(topics.length,4):Math.min(topics.length,2);
const shuffled=[...topics].sort(()=>Math.random()-.5);
const paragraphs=[];
const topicParagraphs=shuffled.slice(0,topicCount).map(t=>{
const options=formality==="normal"?points[t]:styledPoints[formality][t];
const statements=options.filter(x=>!x.trim().endsWith("?"));
return pick(statements.length?statements:options);
});
const structures=[0,1,2,3].filter(x=>x!==lastStructure);
const structure=pick(structures);lastStructure=structure;
const prompt=topics.includes("utbildningar")?pick(cancelledCourseQuestions):pick(questions);
paragraphs.push(opening);
if(structure===0){
  // En konkret fråga tidigt i brevet, utan frågelista.
  paragraphs.push(prompt);
  paragraphs.push(...topicParagraphs);
  if(length==="lang")paragraphs.push(pick(responseRequests[formality]));
}else if(structure===1){
  // Argumentation och ett tydligt krav, helt utan obligatoriska frågor.
  paragraphs.push(...topicParagraphs);
  paragraphs.push(pick(responseRequests[formality]));
}else if(structure===2){
  // Personligt resonerande uppbyggnad utan fast avslutande frågelista.
  if(topicParagraphs.length)paragraphs.push(topicParagraphs[0]);
  paragraphs.push(pick(reflectivePassages[formality]));
  paragraphs.push(...topicParagraphs.slice(1));
}else{
  // Kritisk men saklig framställning med fokus på ansvar och återkoppling.
  paragraphs.push(pick(concernPassages[formality]));
  paragraphs.push(...topicParagraphs);
  if(length!=="kort")paragraphs.push(pick(responseRequests[formality]));
}
if(tone==="skarpare"&&structure===2)paragraphs.push(pick(responseRequests[formality]));
if(structure!==1&&structure!==3)paragraphs.push(pick(shortClosings[formality]));
paragraphs.push(pick(signatures[formality]));
$("message").value=paragraphs.join("\n\n");
const subjectOptions=shuffled.flatMap(t=>subjects[t]||[]);
const otherSubjects=subjectOptions.filter(x=>x!==$("subject").value);
if(otherSubjects.length)$("subject").value=pick(otherSubjects);
$("approved").checked=false;
$("status").textContent="Textförslaget är klart. Granska och anpassa det innan du skickar.";
}
const subjects={bildning:["Facklig bildning måste prioriteras","Medlemmarnas rätt till facklig utbildning","Hur värnar Byggnads den fackliga bildningen?"],demokrati:["Medlemsinflytande och facklig demokrati","Stärk medlemsdemokratin inom Byggnads","Medlemmarnas inflytande måste tas på allvar"],insyn:["Frågor om insyn och beslutsfattande","Öppenhet kring beslut inom Byggnads","Begäran om tydligare beslutsunderlag"],utbildningar:["Begäran om besked om inställda utbildningstillfällen","Tillgången till Vägen framåt och Makthantverket","Beslut och ansvar för inställda kurstillfällen"],ansvar:["Ansvar för den fackliga utbildningen","Hur följs studieverksamheten upp?","Frågor om ansvar och uppföljning"]};
function body(){return $("message").value.trim()+"\n"+($("name").value.trim()||"")+( $("email").value.trim()?"\nKontaktadress: "+$("email").value.trim():"")}
$("generate").onclick=generate;$("copy").onclick=async()=>{try{await navigator.clipboard.writeText("Ämne: "+$("subject").value+"\n\n"+body());$("status").textContent="Brevet kopierat."}catch{$("status").textContent="Kopiering misslyckades. Markera texten manuellt."}};
$("send").onclick=()=>{const emails=[...list.querySelectorAll("input:checked")].map(x=>x.value);if(!$("approved").checked){$("status").textContent="Bekräfta att du har granskat brevet.";return}if(!$("message").value.trim()||!emails.length){$("status").textContent="Skriv ett brev och välj minst en mottagare.";return}const mailto="mailto:?bcc="+emails.map(encodeURIComponent).join(",")+"&subject="+encodeURIComponent($("subject").value)+"&body="+encodeURIComponent(body());if(mailto.length>1900){$("status").textContent="Brevet eller mottagarlistan kan vara för lång för mejlappen. Kopiera texten och välj färre mottagare.";return}window.location.href=mailto;$("status").textContent="Ett utkast öppnas i din mejlapp. Kontrollera och skicka det där."};})();