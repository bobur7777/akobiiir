const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question"),
  numberOfQuestion = document.getElementById("number__of__question"),
  numberOfAllQuestion = document.getElementById("number__of__all__question");

let indexOfQuestion,
  indexOfPage = 0;

const answersTracker = document.getElementById("answer__tracker");
const btnNext = document.getElementById("btn__next");

let score = 0;

const correctAnswer = document.getElementById("correct__answer"),
  numberOfAllQuestion2 = document.getElementById("number__of__all__question2"),
  btnTryAgain = document.getElementById("btn__try__again");

const questions = [
  {
    question: "Energiya ta'rifi",
    options: [
      "energiya manbalarini baholash, olish va ulardan amaliy foydalanish usullarini o'rganadigan sanoat va texnik (amaliy) fan sohasi",
      "gidravlik energiya manbalarini baholash, olish va ulardan amaliy foydalanish usullarini o'rganadigan sanoat va texnik (amaliy) fan sohasi.",
      "qayta tiklanuvchi energiya manbalarini baholash, olish va ulardan amaliy foydalanish usullarini o’rganuvchi sanoat va texnik (amaliy) fan sohasi",
      "elektr stansiyalaridan amaliy foydalanish usullarini o’rganuvchi sanoat va texnika (amaliy) fan sohasi",
    ],
    rightAnswer: 0,
  },
  {
    question: "Energiya tashuvchining ta'rifi",
    options: [
      "qattiq, suyuq yoki gazsimon holatdagi, energiyaning foydali shakliga aylantirilishi mumkin bo'lgan energiyaga ega bo'lgan modda",
      "qattiq holatdan suyuq yoki gazsimon holatga o'tganda energiya chiqaradigan modda",
      "energiya manbasidan saqlangan yoki olinadigan energiya miqdori (yil davomida)",
      "qattiq, suyuq yoki gazsimon holatdagi maxsus ishlovdan o‘tgan modda",
    ],
    rightAnswer: 0,
  },
  {
    question: "Energiya manbasining resursini (potensialini) aniqlash",
    options: [
      "energiya manbasidan saqlangan yoki olinadigan energiya miqdori (yil davomida)",
      "foydali energiyaga aylantirilishi mumkin bo'lgan modda.",
      "texnik jihatdan qayta ishlangan energiya manbalari",
      "maxsus qayta ishlangan modda",
    ],
    rightAnswer: 0,
  },
  {
    question: "Quyidagi energiya turlaridan qaysi biri an'anaviy hisoblanadi?",
    options: [
      "yirik gidroenergetika",
      "quyosh energiyasi",
      "shamol energiyasi",
      "geotermal energiya",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qaysi qayta tiklanadigan energiya manbalari dunyodagi eng katta yalpi potensialga ega?",
    options: [
      "geotermal energiya",
      "gidroenergetika",
      "biomassa energiyasi",
      "atom energiyasi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qaysi qayta tiklanadigan energiya manbalari dunyodagi eng kichik yalpi potensialga ega?",
    options: [
      "gidroenergetika",
      "geotermal energiya",
      "biomassa energiyasi",
      "atom energiyasi",
    ],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", "", "", ""],
    rightAnswer: 0,
  },
  {
    question:
      "O‘zbekiston Respublikasining texnik gidrotexnik potensiali qanchaga baholangan?",
    options: [
      "27 mlrd kVt*soat",
      "88 mlrd kVt*soat",
      "1 mlrd kVt*soat",
      "11 mlrd. Kvt*soat",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "O‘zbekiston Respublikasining yalpi gidroenergetik potensiali qancha?",
    options: [
      "620 mlrd kVt*soat",
      "1 mlrd kVt*soat",
      "88 mlrd kVt*soat",
      "27 mlrd. kVt*soat",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "O‘zbekiston Respublikasida texnik gidroenergetika potensiali yalpi hajmining necha foizini tashkil qiladi?",
    options: ["30 %", "10 %", "1	%", "50%"],
    rightAnswer: 0,
  },
  {
    question:
      "O‘zbekistonning sanab o‘tilgan daryolaridan qaysi biri eng katta energiya potensialiga ega?",
    options: [
      "Tupolang daryosi",
      "Pskem daryosi",
      "Chotqol daryosi",
      "Ugam daryosi",
    ],
    rightAnswer: 1,
  },
  {
    question: "Gidroresurslarning yalpi potensialini aniqlash nima?",
    options: [
      "Texnologik rivojlanishning ma'lum darajasida foydali energiyaga aylantirish mumkin bo'lgan o'rtacha yillik energiya hajmining bir qismi",
      "potensial o'zgarishlarning bir qismi ma'lum bir narx darajasida iqtisodiy jihatdan maqsadga muvofiqdir",
      "potensial va kinetik energiya yig'indisi",
      "ma'lum turdagi energiya manbalarida mavjud bo'lgan o'rtacha yillik energiya hajmi",
    ],
    rightAnswer: 3,
  },
  {
    question: "Gidroelektr resurslarining texnik potensialini aniqlash nima?",
    options: [
      "ushbu turdagi energiya manbasining o'rtacha yillik energiya hajmi",
      "ushbu narx darajasida konvertatsiya qilish iqtisodiy jihatdan maqsadga muvofiq bo'lgan potensialning bir qismi",
      "o'rtacha yillik energiya hajmining bir qismi, uni foydalanishga yaroqli energiyaga aylantirish texnologiyaning ma'lum bir rivojlanish darajasi bilan mumkin",
      "potensial va kinetik energiyaning yig'indisi",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Gidroelektr resurslarining iqtisodiy potensialini aniqlash nima?",
    options: [
      "o'rtacha yillik energiya hajmining bir qismi, uni foydalanishga yaroqli energiyaga aylantirish texnologiyaning ma'lum bir rivojlanish darajasi bilan mumkin",
      "ushbu turdagi energiya manbasining o'rtacha yillik energiya hajmi",
      "potensial va kinetik energiyaning yig'indisi",
      "texnik potensialning bir qismi, uning o'zgarishi ma'lum narx darajasida iqtisodiy jihatdan maqsadga muvofiqdir",
    ],
    rightAnswer: 3,
  },
  {
    question: "Elektr stansiyalarining ta'rifini ko’rsating",
    options: [
      "Elektr energiyasini gidravlik energiyaga aylantirish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek, ma'lum bir hududda joylashgan buning uchun zarur bo'lgan inshootlar va binolar",
      "Elektr energiyasini mexanik energiyaga aylantirish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek ma'lum bir hududda joylashgan buning uchun zarur bo'lgan inshootlar va binolar",
      "Elektr energiyasini ishlab chiqarish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek buning uchun zarur bo'lgan inshootlar va binolar",
      "Mexanik energiya ishlab chiqarish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek buning uchun zarur bo'lgan inshootlar va binolar",
    ],
    rightAnswer: 2,
  },
  {
    question: "Gidroelektrostantsiya qaysi jixozlardan iborat topgan? ",
    options: [
      "Dvigatel va turbin",
      "Turbinalar va generatorlar",
      "Nasos va turbin",
      "Generator va elektr motor",
    ],
    rightAnswer: 1,
  },
  {
    question: "Gidroenergetika potensialining qaysi turi eng katta",
    options: ["texnik", "nazariy (yalpi)", "iqtisodiy", "kinetik"],
    rightAnswer: 1,
  },
  {
    question: 
      "Quyidagi energiya turlaridan qaysi biri an'anaviy hisoblanadi?",
    options: [
      "yirik gidroenergetika",
      "quyosh energiyasi",
      "shamol energiyasi",
      "geotermal energiya",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Qaysi qayta tiklanadigan energiya manbalari dunyodagi eng katta yalpi potensialga ega?",
    options: [
      "geotermal energiya",
      "gidroenergetika",
      "biomassa energiyasi",
      "atom energiyasi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Qaysi qayta tiklanadigan energiya manbalari dunyodagi eng kichik yalpi potensialga ega?",
    options: [
      "gidroenergetika",
      "geotermal energiya",
      "biomassa energiyasi",
      "atom energiyasi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O‘zbekiston Respublikasining texnik gidrotexnik potensiali qanchaga baholangan?",
    options: [
      "27 mlrd kVt*soat",
      "88 mlrd kVt*soat",
      "1 mlrd kVt*soat",
      "11 mlrd. Kvt*soat",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O‘zbekiston Respublikasining yalpi gidroenergetik potensiali qancha?",
    options: [
      "88 mlrd kVt*soat",
      "620 mlrd kVt*soat",
      "1 mlrd kVt*soat",
      "27 mlrd. kVt*soat",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O‘zbekiston Respublikasida texnik gidroenergetika potensiali yalpi hajmining necha foizini tashkil qiladi?",
    options: [
      "30 %",
      "10 %",
      "1	%",
      "50%",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O‘zbekistonning sanab o‘tilgan daryolaridan qaysi biri eng katta energiya potensialiga ega?",
    options: [
      "Pskem daryosi",
      "Tupolang daryosi",
      "Chotqol daryosi",
      "Ugam daryosi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidroresurslarning yalpi potensialini aniqlash nima?",
    options: [
      "ma'lum turdagi energiya manbalarida mavjud bo'lgan o'rtacha yillik energiya hajmi",
      "Texnologik rivojlanishning ma'lum darajasida foydali energiyaga aylantirish mumkin bo'lgan o'rtacha yillik energiya hajmining bir qismi",
      "potensial o'zgarishlarning bir qismi ma'lum bir narx darajasida iqtisodiy jihatdan maqsadga muvofiqdir",
      "potensial va kinetik energiya yig'indisi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidroelektr resurslarining iqtisodiy potensialini aniqlash nima?",
    options: [
      "texnik potensialning bir qismi, uning o'zgarishi ma'lum narx darajasida iqtisodiy jihatdan maqsadga muvofiqdir",
      "o'rtacha yillik energiya hajmining bir qismi, uni foydalanishga yaroqli energiyaga aylantirish texnologiyaning ma'lum bir rivojlanish darajasi bilan mumkin",
      "ushbu turdagi energiya manbasining o'rtacha yillik energiya hajmi",
      "potensial va kinetik energiyaning yig'indisi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Elektr stansiyalarining ta'rifini ko’rsating",
    options: [
      "Elektr energiyasini ishlab chiqarish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek buning uchun zarur bo'lgan inshootlar va binolar",
      "Elektr energiyasini gidravlik energiyaga aylantirish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek, ma'lum bir hududda joylashgan buning uchun zarur bo'lgan inshootlar va binolar",
      "Elektr energiyasini mexanik energiyaga aylantirish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek ma'lum bir hududda joylashgan buning uchun zarur bo'lgan inshootlar va binolar",
      "Mexanik energiya ishlab chiqarish uchun ishlatiladigan qurilmalar, uskunalar va uskunalar majmuasi, shuningdek buning uchun zarur bo'lgan inshootlar va binolar",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidroelektrostantsiya qaysi jixozlardan iborat topgan? ",
    options: [
      "Turbinalar va generatorlar",
      "Dvigatel va turbin",
      "Nasos va turbin",
      "Generator va elektr motor",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidroenergetika potensialining qaysi turi eng katta",
    options: [
      "nazariy (yalpi)",
      "texnik",
      "iqtisodiy",
      "kinetik",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidroenergetika potensialining qaysi turi eng kichik",
    options: [
      "iqtisodiy ",
      "texnik",
      "nazariy (yalpi)",
      "kinetik",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Ushbu turdagi energiya manbasida mavjud bo'lgan o'rtacha yillik energiya miqdori…",
    options: [
      "yalpi potensial",
      "texnik potensial",
      "iqtisodiy potensial",
      "gidroenergetika potensiali",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O'rtacha yillik energiya hajmining bir qismi, uni foydalanishga yaroqli energiyaga aylantirish texnologiyaning ma'lum bir rivojlanish darajasi bilan mumkin – bu .....",
    options: [
      "texnik potensial",
      "yalpi potensial",
      "iqtisodiy potensial ",
      "gidroenergetika potensial ",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Ma'lum bir narx darajasida o'zgarishi iqtisodiy jihatdan mumkin bo'lgan texnik potensialning bir qismi ...",
    options: [
      "iqtisodiy potensial ",
      "gidroenergetika potensial ",
      "texnik potensial ",
      "yalpi potensial",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Qaysi gidroelektrostantsiya O'zR gidroenergetikasining ,birinch qurilgan GESi hisoblanadi",
    options: [
      "Bozsuy GES",
      "Charvak GES",
      "Farhod GES",
      "Burjar GES",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Bozsuv gidroelektrstantsiyasi qaysi yildan beri ishlaydi?",
    options: [
      "1926",
      "1929",
      "1936",
      "1906",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Neckar (Germaniya) daryosida dunyodagi birinchi gidroelektrostantsiyalardan biri qaysi yilda qurilgan?",
    options: [
      "1891",
      "1794",
      "1908",
      "1612",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      `Qaysi yilda "O'zR kichik gidroenergetikasini rivojlantirish dasturi"qabul qilindi`,
    options: [
      `1995 y`,
      `1991 y`,
      `1998 y`,
      `2001y`,
    ],
    rightAnswer: 1,
  },
  {
    question: 
      `"Uch dara" (XXR) gidroelektrostantsiyasining kuchi qancha?`,
    options: [
      `22,5 GVt`,
      `18,5 kVt`,
      `625 MVt`,
      `545000Vt`,
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Charvak gidroelektr stantsiyasining quvvati qancha?",
    options: [
      "620 MVt",
      "15,6 MVt",
      "6,4 MVt",
      "3	 3MVt",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Hozirgi vaqtda gidroenergetikadan foydalanish bo'yicha qaysi davlat yetakchi hisoblanadi?",
    options: [
      "Xitoy",
      "Braziliya",
      "AQSh",
      "Norvegiya",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O'zR da qaysi gidroelektrostantsiya eng quvvatli hisoblanadi?",
    options: [
      "Charvaq",
      "Bozsuv",
      "Farhod",
      "Oqtepa",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Markaziy Osiyodagi eng kuchli gidroelektrostantsiya qaysi?",
    options: [
      "Nurek",
      "Bozsuv",
      "Farhod",
      "Chorvoq",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O'zbekiston Respublikasining sanab o'tilgan hududlaridan qaysi biri eng katta yalpi gidroenergetik potensialiga ega?",
    options: [
      "Toshkent",
      "Namangan",
      "Qashqadaryo viloyati",
      "Farg'ona",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "O'zR mintaqalaridan qaysi biri eng kam yalpi gidroenergetik potensialiga ega?",
    options: [
      "Navoiy",
      "Qashqadaryo viloyati",
      "Toshkent",
      "Surxondaryo",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "gidravlik energiyani ta’riflab bering ",
    options: [
      "suvning potensial va kinetik energiyasi",
      "sirtga keladigan quyosh nurlanishining energiyasi",
      "dengiz to'lqinlarining energiyasi",
      "dengizlar, okeanlarning yuqori va chuqur qatlamlarining harorat farqi natijasida olingan energiya",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidrologiyani ta’riflab bering",
    options: [
      "tabiiy suvlarni, ulardagi hodisalar va jarayonlarni va ushbu hodisalar va jarayonlarning rivojlanish qonuniyatlarini o'rganish bilan shug'ullanadigan fan.",
      "geologik jarayonlar, moddiy tarkibi, er qobig'i va litosferaning tuzilishini o'rganishga asoslangan yerning tuzilishi, uning kelib chiqishi va rivojlanishi haqidagi fan ",
      "er osti suvlarining kelib chiqishi, paydo bo'lish shartlari, tarkibi va harakatlanish qonuniyatlarini o'rganadigan fan.",
      "okeanlar, dengizlar, qirg'oq mintaqalari, ko'llar va daryolarning fizik xususiyatlarini o'lchash va tavsiflash bilan shug'ullanadigan amaliy fan sohasi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Gidrogeologiyaning ta'rifi",
    options: [
      "er osti suvlarining kelib chiqishi, paydo bo'lish shartlari, tarkibi va harakatlanish qonuniyatlarini o'rganadigan fan.",
      "geologik jarayonlar, moddiy tarkibi, er qobig'i va litosferaning tuzilishini o'rganishga asoslangan yerning tuzilishi, uning kelib chiqishi va rivojlanishi haqidagi fan ",
      "tabiiy suvlarni, ulardagi hodisalar va jarayonlarni va ushbu hodisalar va jarayonlarning rivojlanish qonuniyatlarini o'rganish bilan shug'ullanadigan fan.",
      "okeanlar, dengizlar, qirg'oq mintaqalari, ko'llar va daryolarning fizik xususiyatlarini o'lchash va tavsiflash bilan shug'ullanadigan amaliy fan sohasi",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Muayyan suv havzalarining tavsiflarini o'rganadigan gidrologiya bo'limining nomi nima",
    options: [
      "gidrografiya",
      "gidrometriya",
      "muhandislik gidrologiyasi",
      "gidrogeologiya",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Daryolarni texnik foydalanish nuqtai nazaridan o'rganish bilan shug'ullanadigan gidrologiya bo'limining nomi nima?",
    options: [
      "muhandislik gidrologiyasi",
      "gidrometriya",
      "gidrografiya",
      "gidrogeologiya",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Agar yog'ingarchilik 5 million km3 bo'lsa va bug'lanish 1 million km3 bo'lsa, havzaning suv balansi tenglamasiga ko'ra Daryo oqimi qanday",
    options: [
      "4 million km3",
      "6 million km3",
      "5 million km3",
      "2 million km3",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Agar Daryo oqimi 10 000 km 3 va yog'ingarchilik 18 000 km 3 bo'lsa, Daryo havzasining suv balansi tenglamasiga ko'ra bug'lanish nimaga teng?",
    options: [
      "8000 km3",
      "28000km3",
      "16000 km3",
      "4000 km3",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Agar Daryo oqimi 10 000 km 3 va bug'lanish 2 000 km 3 bo'lsa, Daryo havzasining suv balansi tenglamasiga ko'ra yog'ingarchilikning hajmi nechaga teng?",
    options: [
      "12000 km3",
      "8000 km3",
      "6	6000 km3",
      "4000 km3",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Daryo oqimi 10000 km 3  va bug'lanish 5000 km 3 bo'lgan xolatlar ucun oqim koeffitsientini aniqlang?",
    options: [
      "0,667",
      "0,5",
      "2,0",
      "1,556",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "yog'ingarchilik 10000 km 3 va bug'lanish 5000 km 3 bo'lgan xolatlar uchun  oqim koeffitsientini aniqlang ?",
    options: [
      "0,5",
      "0,2",
      "2,0",
      "1,5",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Suv sarfini ta’riflab bering",
    options: [
      "vaqt birligi uchun daryoning kesmasi orqali oqib o'tadigan suv miqdori",
      "muayyan vaqt davomida ma'lum bir yo'ldan oqib o'tadigan suv miqdori",
      "suv yig'ish maydonidan birlik vaqtiga oqib tushadigan suv miqdori (oqim tezligi) ",
      "muayyan vaqt davomida ma'lum bir yo'l orqali oqib o'tadigan suv miqdori, suv yig'ish maydonining birligiga tegishli",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Suv oqimini ta’riflab bering",
    options: [
      "muayyan vaqt davomida ma'lum bir yo'ldan oqib o'tadigan suv miqdori",
      "vaqt birligi uchun daryoning kesmasi orqali oqib o'tadigan suv miqdori",
      "suv yig'ish maydonidan birlik vaqtiga oqib tushadigan suv miqdori (oqim tezligi) ",
      "muayyan vaqt davomida ma'lum bir yo'l orqali oqib o'tadigan suv miqdori, suv yig'ish maydonining birligiga tegishli",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Oqim modulini ta’riflab bering",
    options: [
      "suv yig'ish maydonidan birlik vaqtiga oqib tushadigan suv miqdori (oqim tezligi) ",
      "muayyan vaqt davomida ma'lum bir yo'ldan oqib o'tadigan suv miqdori",
      "vaqt birligi uchun daryoning kesmasi orqali oqib o'tadigan suv miqdori",
      "muayyan vaqt davomida ma'lum bir yo'l orqali oqib o'tadigan suv miqdori, suv yig'ish maydonining birligiga tegishli",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "Oqim qatlamini ta’riflab bering",
    options: [
      "muayyan vaqt davomida ma'lum bir yo'l orqali oqib o'tadigan suv miqdori, suv yig'ish maydonining birligiga tegishli",
      "muayyan vaqt davomida ma'lum bir yo'ldan oqib o'tadigan suv miqdori",
      "suv yig'ish maydonidan birlik vaqtiga oqib tushadigan suv miqdori (oqim tezligi) ",
      "vaqt birligi uchun daryoning kesmasi orqali oqib o'tadigan suv miqdori",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
  {
    question: 
      "",
    options: [
      "",
      "",
      "",
      "",
    ],
    rightAnswer: 1,
  },
];

numberOfAllQuestion.innerHTML = questions.length;

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;
};

let complatedAnswer = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitdublicate = false;

  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (complatedAnswer.length > 0) {
      complatedAnswer.forEach((item) => {
        if (item == randomNumber) {
          hitdublicate = true;
        }
      });
      if (hitdublicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (complatedAnswer == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  complatedAnswer.push(indexOfQuestion);
};

const checkAnswer = (el) => {
  if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add("correct");
    updateAnswerTracker("correct");
    score++;
  } else {
    el.target.classList.add("wrong");
    updateAnswerTracker("wrong");
  }
  disabledOptions();
};

const disabledOptions = () => {
  optionElements.forEach((item) => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  });
};

const enableOptions = () => {
  optionElements.forEach((item) => {
    item.classList.remove("disabled", "correct", "wrong");
  });
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement("div");
    answersTracker.appendChild(div);
  });
};

const updateAnswerTracker = (status) => {
  console.log(answersTracker.children);
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const validate = () => {
  if (!optionElements[0].classList.contains("disabled")) {
    alert(
      "Siz savolga javob bermadinggiz keyingi savolni ko`rish uchun javoblardan birini belgilang"
    );
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener("click", validate);

for (option of optionElements) {
  option.addEventListener("click", (e) => checkAnswer(e));
}

const quizOver = () => {
  if ((numberOfQuestion = numberOfAllQuestion))
    () => {
      document.querySelector(".quiz__over__modle").classList.add("active");
      correctAnswer.innerHTML = score;
      numberOfAllQuestion2.innerHTML = questions.length;
    };
};

const tryAgain = () => {
  window.location.reload();
};

btnTryAgain.addEventListener("click", tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
