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
    question: "“Ishlarni tashkil qilish” iborasiga to‘g‘ri ta’rif bering.",
    options: [
      "Ishlarni tashkil qilish – bu materiallarga ishlov berish va qayta ishlash jarayonlarini majmuidir",
      "Ishlarni tashkil qilish – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir",
      "Ishlarni tashkil qilish – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir",
      "Ishlarni tashkil qilish – bu mehnatning barcha elementlarini: ishchilar mehnati, asboblar, mehnat vositalari oqilona birlashtirish va ulardan foydalanishga qaratilgan chora-tadbirlar tizimidir",
    ],
    rightAnswer: 3,
  },
  {
    question: "Texnik me’yorlash vazifalari qaysi biri?",
    options: [
      "Ma’lum vaqt davomida qo‘l, mexanizatsiyalashgan, uzlukli va uzluksiz qurilish jarayonlarini ish vaqtini sarflarini barcha turlarini hisobga olish ",
      "Texnik jihatdan asoslangan me’yorlarni o‘rnatish, ishlarni bajarish usullarini keng tadbiq etish uchun ularni samaraliroqni tanlash, mehnatni yaxshiroq tashkil qilishga imkon beradigan sharoitlarni aniqlash",
      "Ish vaqtining davomiyligi va turib qolishlar sabablarini hamda ularni oldini olish usullarini aniqlash maqsadida ish vaqtini ta’minlanganlik darajasini baholash",
      "Umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimini aniqlash",
    ],
    rightAnswer: 1,
  },
  {
    question: "“Ishlarni texnologiyasi” iborasiga to‘g‘ri ta’rif bering.",
    options: [
      "Ishlarni texnologiyasi – bu mehnatning barcha elementlarini: ishchilar mehnati, asboblar, mehnat vositalari oqilona birlashtirish va ulardan foydalanishga qaratilgan chora-tadbirlar tizimidir ",
      "Ishlarni texnologiyasi – bu materiallarga ishlov berish va qayta ishlash jarayonlarini majmuidir",
      "Ishlarni texnologiyasi – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir",
      "Ishlarni texnologiyasi – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir",
    ],
    rightAnswer: 1,
  },
  {
    question: "Ishchi usul deb nimaga aytiladi?",
    options: [
      "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi. ",
      "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)",
      "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)",
      "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish) ",
    ],
    rightAnswer: 2,
  },
  {
    question: "Ishchi operatsiya deb nimaga aytiladi?",
    options: [
      "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)",
      "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)",
      "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)",
      "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.",
    ],
    rightAnswer: 3,
  },
  {
    question: "Oddiy jarayon deb nimaga aytiladi?",
    options: [
      "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.",
      "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)",
      "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)",
      "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)",
    ],
    rightAnswer: 1,
  },
  {
    question: "Murakkab jarayon deb nimaga aytiladi?",
    options: [
      "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)",
      "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)",
      "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.",
      "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)",
    ],
    rightAnswer: 1,
  },
  {
    question: "“Vaqt me’yori” iborasi deganda nima tushuniladi?",
    options: [
      "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi ",
      "Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi ",
      "Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi ",
      "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi ",
    ],
    rightAnswer: 1,
  },
  {
    question: "“Unumdorlik me’yori” iborasi deganda nima tushuniladi? ",
    options: [
      "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi",
      "Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi",
      "Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi",
      "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi",
    ],
    rightAnswer: 2,
  },
  {
    question: "“Materiallar sarfi me’yori” iborasi deganda nima tushuniladi? ",
    options: [
      "Materiallar sarfi me’yori – bu ob’ekt bo‘yicha ishlarni barcha hajmiga zarur  bo‘lgan materiallar miqdoridir",
      "Materiallar sarfi me’yori – bu ish hajmini yoki mahsulotning birligiga sarflangan vaqtdir",
      "Materiallar sarfi me’yori – bu texnik me’yorlarning mavjud bo‘lmagan turidir",
      "Materiallar sarfi me’yori – bu ish hajmi yoki mahsulot birligi uchun zarur bo‘lgan materiallar miqdoridir ",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Xalqaro standartlar bo‘yicha bir cho‘michli ekskavatorlarning qaysi ko‘rsatkichlari asosiy tavsifi hisoblanadi?",
    options: [
      "Gabarit o‘lchamlari",
      "Cho‘michini sig‘imi va og‘irligi",
      "Texnik parametrlari",
      "Ishchi siklining davomiyligi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qurilish ishlarini bajarish uchun qanday resurslar talab qilinadi?",
    options: [
      "Loyihaviy materiallar, qurilish mashinalari va mexanizmlari, mablag‘lar, ishchi kuchi, qurilish materiallari",
      "Qurilish mashinalari va mexanizmlari, mablag‘lar, ishchi kuchi, qurilish materiallari",
      "Yordamchi inshootlar, loyihaviy materiallar, mablag‘lar",
      "Omborlar, yonilg‘i, xom-ashyo, mashina va mexanizmlar, ishchi kuchi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Ekskavatorning qaysi ish unumdorligi ekspluatatsion deb aytiladi?",
    options: [
      "Hisobiy sharoitlarda ma’lum vaqt davomida uzluksiz ishlagandagi ish unumdorligi",
      "Ma’lum grunt sharoitlarda kun davomida ekskavator yordamida bajarilishi kerak bo‘lgan ish hajmi ",
      "Oldini olib bo‘lmaydigan turib qolishlarni hisobga olgan xolda muayyan sharoitlarda ishlaganda ekskavatorning o‘rtacha haqiqiy ish unumdorligi",
      "Zaboyda ishlarni ma’lum sharoitlariga mos keladigan ekskavatorning o‘rtacha shartli ish unumdorligi",
    ],
    rightAnswer: 2,
  },
  {
    question: "Qaysi qurilish jarayonlarini me’yorlash kerak?",
    options: [
      "Barcha qurilish-montaj jarayonlarini",
      "Zamonaviy, ilg‘or usullar bilan olib boriladigan ratsional tashkil qilingan qurilish jarayonlarini",
      "Tayyorgarlik, asosiy va tashish jarayonlarini",
      "Alohida olingan ob’ektda bajariladigan noyob jarayonlarni ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Vaqt, ishlab chiqarish va unumdorlik me’yorlarini ishlab chiqish qanday ketma-ketlikda bajariladi?",
    options: [
      "Ilmiy-izlanish ishlarini o‘tkazish, loyiha-smeta hujjatlarini tuzish, me’yorlarni ishlab chiqish uchun ishlarni aniqlash, mashina va mexanizmlarni, ishlarni bajarish usullarini tanlash, ish bo‘yicha ma’lumotlarni yig‘ish, asosiy ko‘rsatkichlarni hisoblash va ularni taxlil qilish, ekspertiza qilish, olingan ma’lumotlarni tekshirish",
      "Me’yorlanadigan qurilish jarayonini dasblabki o‘rganish; qurilish jarayonini normal amalga oshirish uchun sharoitlarni yaratish; zveno tarkibini aniqlash; ish vaqtini davomiyligi va taqsimotini qayd qilish; bir qator qurilishlarda ish vaqti sarfini aniqlash bo‘yicha materiallarni tizimlashtirish, taxlil qilish va ishlov berish; ishlab chiqarish sharoitida me’yorlarni tekshirish",
      "Me’yorlanadigan qurilish jarayonini dasblabki o‘rganish; qurilish jarayonini normal amalga oshirish uchun sharoitlarni yaratish; zveno tarkibini aniqlash; ish vaqtini davomiyligi va taqsimotini qayd qilish",
      "Ilmiy-izlanish ishlarini o‘tkazish, ish vaqtini davomiyligi va taqsimotini qayd qilish; bir qator qurilishlarda ish vaqti sarfini aniqlash bo‘yicha materiallarni tizimlashtirish, taxlil qilish va ishlov berish; ishlab chiqarish sharoitida me’yorlarni tekshirish",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Buldozerning asosiy ishchi parametrlari va ish unumdorligi qaysi ko‘rsatkich bilan belgilanadi?",
    options: [
      "Ular osilgan asosiy traktor quvvati bilan",
      "Qurilish xududidagi grunt sharoitlari bilan",
      "Asosiy mashina konstruksiyasi bilan",
      "Uzatmali qurilma quvvati bilan",
    ],
    rightAnswer: 0,
  },
  {
    question: "Grunt zichlanuvchanligiga qaysi omillar ta’sir qiladi?",
    options: [
      "Mexanik tarkibi, bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni, zichlash usuli va qo‘llaniladigan mashnalar parametrlari",
      "Zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni, zichlash usuli va qo‘llaniladigan mashnalar parametrlari ",
      "Bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni ",
      " Bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, zichlash usuli va qo‘llaniladigan mashnalar parametrlari ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Gruntni gidravlik usulda tashishda qanday tezlik kritik deb aytiladi?",
    options: [
      "Quyqatashgich tubiga cho‘kmasdan hisobiy diametrli zarrachalarni tashishni ta’minlaydigan oqimning eng kichik tezligi",
      "Gidromonitor ishchi jihozi bilan berilgan oqim tezligiga teng bo‘lgan tezlik",
      "Quyqao‘tkazgich bo‘yicha quyqani o‘tishini eng maqbul rejimi yaratiladigan, hisobiy diametrli grunt zarrachalarini tashish tezligi",
      "Cho‘kmaga gruntni cho‘kishisiz quyqao‘tkazgich bo‘yicha quyqani o‘tishi mumkin bo‘lgan, uni oqimining eng katta tezligi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Er ishlarini bajarishning qaysi bosqichlarida ularning sifatini nazorat qilish zarur?",
    options: [
      "Ularni bajarish jarayonida, ob’ektda ishlar tugallangandan keyin, bajaruvchilarda ishni qabul qilishda",
      "Qurilish tugagandan so‘ng",
      "Asosiy qurilish-montaj ishlari tugaganda",
      "Er ishlarini bajarishda",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Tuproq inshootlarni qurishda berilgan o‘lcham va belgilardan chetga chiqishga yo‘l qo‘yiladimi?",
    options: [
      "Ha, agar maxsus me’yorlar bilan o‘rnatilgan chegaraviy yo‘l qo‘yiladigan chetga chiqishga ularni ko‘rsatkichlari mos kelsa",
      "Ha, agar ushbu  chetga chiqishlar  inshootni ishlash rejimini buzmasa",
      "Ha, agar buyurtmachi bilan kelishilgan bo‘lsa",
      "Ha, agar ob’ektni foydalanishga topshirish zaruriyati bo‘lsa",
    ],
    rightAnswer: 0,
  },
  {
    question: "Izlanishlarni qaysi turida seysmologik izlanishlar o‘tkaziladi?",
    options: [
      "Muhandislik-geologik",
      "Ekologik-meteorologik",
      "Muhandislik-gidrologik",
      "Muhandislik- botanik",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qurilishni xom-ashyo, mahalliy materiallar, yonilg‘i, elektrenergiya, suv, gaz, issiqlik, tashish aloqalari, ishchilar, turar joy, maishiy-oqartuv tashiklotlari bilan ta’minlash variantlarini tanlash va asoslash qaysi izlanishlar jarayonida amalga oshiriladi?",
    options: ["Iqtisodiy", "Ekologik", "Kameral", "Dala"],
    rightAnswer: 0,
  },
  {
    question:
      "Suv xo‘jaligi ob’ektlarini loyihalash uchun qanday turdagi izlanishlar mavjud?",
    options: [
      "Muhandislik va iqtisodiy ",
      "Ekologik va tekshirish",
      "Muhandislik va texnik",
      "Oddiy va murakkab",
    ],
    rightAnswer: 0,
  },
  {
    question: "Izlanish faoliyati litsenzion hisoblanadimi?",
    options: [
      "Hisoblanadi",
      "Hisoblanmaydi",
      "Tabiatni muhofaza qilish zonalarida ishlarni bajarishda faqat litsenziya kerak",
      "Aholi zich yashaydigan xududlarda ishlarni bajarishda faqat litsenziya kerak",
    ],
    rightAnswer: 0,
  },
  {
    question: " “Loyihalash” iborasiga to‘g‘ri ta’rif bering. ",
    options: [
      "Loyihalash – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi ",
      "Loyihalash – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir",
      "Loyihalash – bu qandaydir inshoot yoki inshootlar majmuasini qurish bo‘yicha oldin tayyorlangan, texnik va iqtisodiy hisob-kitoblar bilan asoslangan va grafik  ko‘rinishida   chizilgan echimdir ",
      "Loyihalash – bu kelajakdagi ob’ektni loyihalash uchun boshlang‘ich ma’lumotlarni tayyorlash va uni qurish va foydalanish sharoitlarini har tomonlama taxlil qilish maqsadida kelajakdagi qurilish xududi yoki maydonini iqtisodiy va muhandislik (texnik) izlanishlar majmuidir",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Loyihalashni qaysi turida ketma-ket smeta hisobi bilan loyiha, undan keyin smeta bilan ishchi hujjatlar ishlab chiqiladi?",
    options: [
      "Ikki bosqichli loyihalashda",
      "Bir bosqichli loyihalashda",
      "Uch bosqichli loyihalashda",
      "To‘rt bosqichli loyihalashda",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Loyihalashni qaysi turida narhini yig‘ma smeta hisobi bilan ishchi loyiha ishlab chiqiladi va namunaviy va qayta qo‘llaniladigan loyihalardan foydalanish nazarda tutiladi?",
    options: [
      "Bir bosqichli loyihalashda",
      "Ikki bosqichli loyihalashda",
      "Uch bosqichli loyihalashda",
      "To‘rt bosqichli loyihalashda",
    ],
    rightAnswer: 0,
  },
  {
    question: " “Taqvimiy reja” iborasiga to‘g‘ri ta’rif bering ",
    options: [
      "Taqvimiy reja – bu inshootlarni butun majmuasi va alohida har bir inshootning chegarasida barcha ishlarni bajarishni ketma-ketligi muddatini belgilovchi hujjatdir. ",
      "Taqvimiy reja – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi ",
      "Taqvimiy reja – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir",
      "Taqvimiy reja – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir ",
    ],
    rightAnswer: 0,
  },
  {
    question: `Quyidagi ta’rifda “Taqvimiy rejaning ushbu modeli (turi) taqvimiy rejalashtirish bilan bohlangan, hisob-kitoblarni ko‘pgina qismini bajarishni avtomatlashtirish imkoniyatini beruvchi, bajarilayotgan barcha ishlar orasidagi bog‘lanishni matematik ta’riflash imkoniyatini beradi” taqvimiy rejaning qaysi modeli (turi) haqida gapiriladi?`,
    options: [
      `Tarmoqli model haqida`,
      `Chiziqli model haqida`,
      `Hech qaysi biri haqida`,
      `Hech qaysi biri haqida`,
    ],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda hodisa – bu … ",
    options: [
      "–  bir yoki bir nechta ishlarni boshlanish imkoniyati uchun zarur va etarli, bir yoki bir nechta ishlarni tugatish haqiqatidir",
      "–  qaysidir hodisadan oldin bo‘lgan, qurilish jarayoni",
      "–  vaqt va resurslar sarflanadigan jarayon",
      "–  tarmoqli grafikni bunday elementi mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda soxta ish  – bu .... shartli ishdir ",
    options: [
      " – hodisalar orasidagi bog‘lanishni ko‘rsatadigan, vaqt ham boshqa resurslar ham sarflanmaydigan ",
      "–  vaqt va resurslar sarflanadigan ",
      "–  bir yoki bir nechta ishlarni boshlanish imkoniyati uchun zarur va etarli, bir yoki bir nechta ishlarni tugatish haqiqatini ko‘rsatadigan ",
      "– tarmoqli grafikni bunday elementi mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda kritik ish – bu ... ishdir ",
    options: [
      " – kritik yo‘lda yotuvchi",
      "– vaqt va resurslar sarflanadigan ",
      "– hodisalar orasidagi bog‘lanishni ko‘rsatadigan, vaqt ham boshqa resurslar ham sarflanmaydigan",
      "– tarmoqli grafikni bunday elementi mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question: `Quyqatashgichning gidravlik hisobi nimaga olib keladi?`,
    options: [
      `Asosiy uskunalarni, materiallarni, ishchi kuchini tanlashga`,
      `Asosiy uskunalarni, materiallarni, ishchi kuchini tanlashga`,
      `Quyqaning kritik tezligini, quyqa uchun uzunligi bo‘yicha bosimni solishtirma yo‘qolishi, quyqatashgichning ko‘ndalang kesimi o‘lchamlarini aniqlashga `,
      `Jarayonning gidromexanik parametrlarini, asosiy qurilma quvvatini aniqlashga`,
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Doimiy tarkibli ishchilar brigadasining ish profiliga mos keladigan mashina, mexanizmlar, qurollar va moslamalar to‘plami bilan jihozlangan  ma’lum turdagi ishlarda ixtisoslashtirilgan ishlarni tashkil qilishning qaysi usulida turli qamrovlarda vaqt bo‘yicha maksimal birlashtirilgan bir xil ishlarni bajaradi va yakunlangan qurilish mahsulotini bir tekisda chiqaradi?",
    options: [
      "Urinma usulda",
      "Oqim usulida",
      "Ketma-ket usulda",
      "Paralel usulda",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Beton xossalariga to‘ldiruvchilarni ta’sir qilish xususiyatlarini hisobga oluvchi beton qorishmasi to‘ldiruvchilariga qo‘yiladigan talablarni aytib bering",
    options: [
      "Mustahkamlik, qattiqlik, o‘lchami",
      "Loysimon fraksiyalarning yo‘qligi, to‘ldiruvchi parametrlari",
      "Donadorlik tarkibi, mustahkamlik, tozalik",
      "Ma’lum o‘lcham, mustahkamlik, sifati",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Toshni chaqiq toshga qayta ishlash bo‘yicha asosiy operatsiyalar. Granulyatsiya nima?",
    options: [
      "Zarur fraksiya guruhlariga turli o‘lchamli zarrachalarni saralash",
      "Beton uchun yaroqsiz kichik mustahkamlikka, yomon sovuq chidamliligi, ko‘p miqdorda suv shimishi, kichik zichlikka ega bo‘lgan tosh materiallarini chiqarib tashlash maqsadida qayta ishlash",
      " Aralashmani mayda zarrachalardan tozalash",
      "Tosh zarrachalariga dumaloq shaklni berish uchun ularga maxsus ishlov berish",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Shag‘al-qum aralashmasini qayta ishlashda asosiy operatsiyalar: dastlabki g‘alvirlash, yuvish, yumaloq katta toshlarni maydalash, yirikligi bo‘yicha shag‘al va chaqiq toshni saralash. Gidromexanizatsiya usuli bilan konlarda materiallarni maydalashda qaysi jarayon bajarilmaydi?",
    options: [
      "Yirikligi bo‘yicha shag‘al va chaqiq toshni saralash",
      "Yuvish",
      "Yumaloq katta toshlarni maydalash",
      "Dastlabki g‘alvirlash",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Shag‘al-qum aralashmasini qayta ishlash usuli uni konlarda qazib olish usuliga bog‘liqdir. Aralashmalarni qayta ishlash jarayoni qazib olishning qaysi usulida quruq va ho‘l bo‘lishi mumkin?",
    options: [
      "Gidromexanizatsiya usuli bilan qazib olishda",
      "Er qazish mashinalari bilan qazib olishda",
      "Portlatish bilan qazib olishda",
      "Qo‘l kuchi bilan qazib olishda",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Beton qorishmasini tayyorlash jarayoni qanday operatsiyalardan tashkil topadi?",
    options: [
      "Yuklash, aralashtirish, to‘kish",
      "Omborlardan materiallarni tashish, qadoqlash, betonqorgichga yuklash, aralashtirish, to‘kish",
      "Qadoqlash, yuklash, aralashtirish, to‘kish",
      "Tashish, uzatish va aralashtirish",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Tashishda beton qorishmasini zaruriy xossalarini ta’minlanishini qanday oshirish mumkin? 	",
    options: [
      "amaliy qo‘shimcha-modifikatorlardan foydalanish bilan",
      "suvdan foydalanish bilan ",
      "kimyoviy qo‘shimcha-modifikatorlardan foydalanish bilan",
      "nokimyoviy qo‘shimcha-modifikatorlardan foydalanish bilan ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Beton qorishmasida qo‘shimchalarni qo‘llash qanchalik sementni iqtisod qilishga imkon beradi?",
    options: ["15% gacha", "25% gacha", "15% dan ortiq", "25% dan ortiq"],
    rightAnswer: 0,
  },
  {
    question:
      "Beton mustahkamligini qaysi qismini yo‘qotganda sovuqqa chidamliligi bo‘yicha tekshirishda iqlimiy sikllar to‘xtaydi?",
    options: [
      "5% dan kam bo‘lmaganda",
      "5% dan oshmaganda",
      "15% dan oshmaganda",
      "10% dan oshmaganda",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "M-400 oq sement asosidagi plastifikatorni qo‘shganda beton suv o‘tkazuvchanligi qanday qiymatga o‘zgaradi?",
    options: [
      "3% ga pasayadi",
      "5% ga pasayadi	",
      "5% ga oshadi	",
      "o‘zgarmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonlashtirishda “sovuq chok” degan tushuncha nimani bildiradi?",
    options: [
      "qotayotgan va yangi yotqizilgan qorishmalar orasidagi chegara",
      "armatura va beton orasidagi chegara",
      "yotqizilayotgan qorishmalar orasidagi chegara	",
      "qotayotgan qorishmalar orasidagi chegara ",
    ],
    rightAnswer: 0,
  },
  {
    question: "Nanobeton o‘zini tavsiflarini qaysi haroratgacha saqlaydi?",
    options: ["500℃ gacha", "800℃ gacha", "700℃ gacha", "400℃ gacha"],
    rightAnswer: 1,
  },
  {
    question:
      "Issiqlik ishlov berish 28 kunlik o‘rniga beton qotishini tezlashtirish imkoniyatini beradi:",
    options: ["8-12 soatda ", "18-22 soatda", "24 soatda	", "6-8 soatda"],
    rightAnswer: 0,
  },
  {
    question:
      "Temirbeton konstruksiyalarni ijobiy sifatlariga qanday sifatlar kiradi? ",
    options: [
      "chidamlilik, yong‘inga barqarorlik, ishlov berishga qulaylik, kimyoviy va biologik turg‘unlik",
      "Mustahkamlik, yong‘inga barqarorlik, ishlov berishga qulaylik, kimyoviy va biologik turg‘unlik",
      "chidamlilik, egilishga turg‘unlik, ishlov berishga qulaylik, kimyoviy va biologik turg‘unlik",
      "chidamlilik, yong‘inga barqarorlik, ishlov berishga qulaylik, kimyoviy va biologik qattiqlik",
    ],
    rightAnswer: 0,
  },
  {
    question: "Dala shiyponi – bu vaqtinchalik shaharchani qaysi turi?",
    options: ["doimiy", "shahar ko‘rinishidagi", "asosiy", "vaxtali"],
    rightAnswer: 3,
  },
  {
    question:
      "Normal kesimlar bo‘yicha mustahkamligi bo‘yicha egiluvchan temirbeton elementlar ..... hisoblanadi.",
    options: [
      "barcha kuchlar ta’siridan ",
      "bo‘ylama kuchlar ta’siridan ",
      "eguvchi moment ta’siridan ",
      "ko‘ndalang kuchlar ta’siridan",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Konstruksiyalarda qurilish armaturasi qanday funksiyalarni bajaradi?",
    options: [
      "betonni siquvchi kuchlanishlarni qabul qilishiga yo‘l qo‘yadi",
      "betonni yorilishiga yo‘l qo‘ymadi, cho‘zuvchi kuchlanishlarni qabul qiladi",
      "betonni yorilishiga yo‘l qo‘ymadi, siquvchi kuchlanishlarni qabul qiladi ",
      "betonni yorilishiga yo‘l qo‘yadi, cho‘zuvchi kuchlanishlarni qabul qiladi ",
    ],
    rightAnswer: 1,
  },
  {
    question: "Kompozit armatura qanday kamchiliklarga ega? ",
    options: [
      "yuqori qattiqlik, egiluvchanlikni mavjud emasligi, past issiqlik o‘tkazuvchanlik, yuqori zararlilik",
      "past qattiqlik, egiluvchanlikni mavjud emasligi, past issiqlik o‘tkazuvchanlik, yuqori zararlilik",
      "past qattiqlik, egiluvchanlikni mavjudligi, past issiqlik o‘tkazuvchanlik, yuqori zararlilik ",
      "qattiqlik, egiluvchanlikni mavjud emasligi, past issiqlik o‘tkazuvchanlik",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Bitumli mastikadagi rulon tom yopma va gidroizolyatsiya materiallarini qaerda saqlash tavsiya qilinadi?",
    options: [
      "harorati -5°S dan past bo‘lmagan quruq joyda	",
      "harorati -15°S dan past bo‘lmagan quruq joyda 	",
      "harorati -10°S dan past bo‘lmagan quruq joyda ",
      "harorati -25°S dan past bo‘lmagan quruq joyda ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Agar beton erta yoshda muzlasa, eritishdan so‘ng uning loyihaviy mustahkamlik markasi ... ga pasayishi mumkin.  	",
    options: ["40-50%", "30-40%", "45-55%", "35-50%"],
    rightAnswer: 0,
  },
  {
    question: "Salbiy haroratlarda betonlashtirish uchun …	",
    options: [
      "sementni isitish mumkin emas, qorishma uchun suv iliq bo‘lishi kerak, lekin  +70°S dan ortiq emas, to‘ldiruvchilar harorati +5°S dan past va +40°S dan ortiq bo‘lmasligi kerak",
      "sementni isitish mumkin emas, qorishma uchun suv iliq bo‘lishi kerak, lekin  +90°S dan ortiq emas, to‘ldiruvchilar harorati +5°S dan past va +60°S dan ortiq bo‘lmasligi kerak",
      "sementni isitish mumkin emas, qorishma uchun suv iliq bo‘lishi kerak, lekin  +80°S dan ortiq emas, to‘ldiruvchilar harorati +5°S dan past va +50°S dan ortiq bo‘lmasligi kerak ",
      "sementni isitish mumkin emas, qorishma uchun suv iliq bo‘lishi kerak, lekin  +60°S dan ortiq emas, to‘ldiruvchilar harorati +5°S dan past va +20°S dan ortiq bo‘lmasligi kerak ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qish vaqtida ulash uchun g‘isht, penobeton yoki gazobeton bloklardan bino devorlarini qo‘tarishda qanday moddadan foydalaniladi? ",
    options: [
      "issiq suv va muzlashga qarshi qo‘shimchalar yordamida tayyorlangan, oddiy elim ",
      "iliq suv va muzlashga qarshi qo‘shimchalar yordamida tayyorlangan, oddiy elim",
      "iliq suv va muzlashga qarshi qo‘shimchalar yordamida tayyorlangan, maxsus elim",
      "iliq suv va muzlashga qarshi qo‘shimchalar yordamida tayyorlangan, sement qorishmasi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qurilishda ishlab chiqarish va yong‘inni o‘chirish uchun suv manbasi sifatida qanday suvdan foydalanish mumkin?",
    options: [
      "har qanday tabiiy suv manbasi",
      "ma’lum sifatga ega bo‘lgan tabiiy manbalardan suv – texnik suv",
      "qurilish xududidagi suv ta’minoti tizimi yoki harakatlanuvchan suv tashgichlar",
      "qurilishda suvdan foydalanilmaydi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qurilish maydonida elektr energiyasini iste’molchilariga qaysi guruhlar kiradi?",
    options: [
      "ta’mirlash ustaxonalari, beton qorish qurilmasi, transportyorlar",
      "qurilish mashinalari elektrodvigatellari, texnologik qurilmalar, yoritish jihozlari",
      "qurilish mashinalari elektrodvigatellari va texnologik qurilmalar ",
      "qurilish maydonida elektrenergiyadan foydalanilmaydi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Yo‘llar va transport xo‘jaligi qurilishni qaysi bazasi ob’ektlariga kiradi?",
    options: [
      "qandaydir baza tarkibiga kirmaydi",
      "yordamchi bazasi",
      "xizmat ko‘rsatuvchi bazasi",
      "ishlab-chiqarish bazasi   ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Ta’mirlash ustaxonalari qurilishni qaysi bazasi ob’ektlariga kiradi?",
    options: [
      "ishlab-chiqarish bazasi",
      "xizmat ko‘rsatuvchi bazasi",
      "qandaydir baza tarkibiga kirmaydi",
      "yordamchi bazasi",
    ],
    rightAnswer: 3,
  },
  {
    question: "Bug‘ qozonlari qurilishni qaysi bazasi ob’ektlariga kiradi?",
    options: [
      "ishlab-chiqarish bazasi",
      "xizmat ko‘rsatuvchi bazasi",
      "yordamchi bazasi",
      "qandaydir baza tarkibiga kirmaydi",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Quruvchilarning vaqtinchalik shaharchalari bitta punktda vazifasi, o‘lchamlari, joylashgan joyi va foydalanishni hisobiy muddatlariga ko‘ra qanday turlarga bo‘linadi?",
    options: [
      "asosiy va vaxtali",
      "asosiy va qo‘shimcha",
      "uzoq va qisqa muddat yashaydigan",
      "katta va kichik",
    ],
    rightAnswer: 0,
  },
  {
    question: "Asosiy shaharchalar qaysi yashash muddatiga hisoblangan? ",
    options: [
      "bir joyda yashash va hayot kechirishni umumiy hisobiy muddati kamida 3 yil",
      "bunday shaharchalar mavjud emas",
      "yashash davomiyligi chegaralanmagan",
      "15 yilgacha muddatga uzoq muddat yashash",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ko‘tarilayotgan ob’ektni bevosita yonida qaysi shaharcha joylashadi?",
    options: [
      "vaxtali",
      "asosiy",
      "shahar ko‘rinishidagi",
      "ob’ekt yonida shaharchani joylashtirish mumkin emas",
    ],
    rightAnswer: 0,
  },
  {
    question: "Dala shiyponi – bu vaqtinchalik shaharchani qaysi turi?",
    options: ["vaxtali", "asosiy", "shahar ko‘rinishidagi", "doimiy"],
    rightAnswer: 0,
  },
  {
    question:
      "Ta’riflardan qaysi biri to‘g‘ri? Bu erda: QTQL – qurilishni tashkil qilish loyihasi, IBL – ishlarni bajarish loyihasi",
    options: [
      "Ob’ektni qurilish bosh plani qurilayotgan majmua bitta alohida ob’ektini ko‘tarish uchun zarur bo‘lgan xududni faqat o‘z ichiga oladi va QTQL tarkibiga kiradi ",
      "Ob’ektni qurilish bosh plani qurilayotgan majmua bitta alohida ob’ektini ko‘tarish uchun zarur bo‘lgan xududni faqat o‘z ichiga oladi va IBL tarkibiga kiradi ",
      "Ob’ektni qurilish bosh plani butun qurilish maydoni xududini qamrab oladi va IBL tarkibiga kiradi ",
      "Ob’ektni qurilish bosh plani butun qurilish maydoni xududini qamrab oladi va QTQL tarkibiga kiradi ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qaysi qurilishni bosh plani butun qurilish maydoni xududini qamrab oladi?",
    options: [
      "ob’ekt",
      "umummaydonli                               ",
      "oddiy",
      "har qanday",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Tarmoqli grafik yordamida operativ nazorat bosqichida operativ ma’lumotlarning minimal hajmiga qaysi ma’lumotlar kiradi?",
    options: [
      "operativ ma’lumotlarni uzatishni yonma-yon intervallari orasida bajarilgan ishlar bo‘yicha resurslar va vaqtning haqiqiy sarflari; rejalashtirilgan muddatlardan chetga chiqishning asosiy sabablari",
      "ko‘rsatib o‘tilganlarning barchasi",
      "ishlarni bajarishning qolgan davomiyligi; operativ ma’lumotlarni tayyorlash vaqtiga aniqlangan, keyingi ishlarni parametrlarini o‘zgartirish imkoniyati",
      "tarmoqqa kiritilishi kerak bo‘lgan yangi ishlar va hodisalar; u yoki bu sabablarga ko‘ra tarmoqdan chiqarilishi kerak bo‘lgan, ishlar va hodisalar",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Tashqi devorlarni suvash va shpaklyovka qilish havo harorati qanday bo‘lganda tavsiya qilinadi?",
    options: [
      "+15°S dan past bo‘lmaganda",
      "+5°S dan past bo‘lmaganda",
      "+8°S dan past bo‘lmaganda",
      "+10°S dan past bo‘lmaganda ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Emulsiyalar asosidagi mastikadan gidroizolyatsiyada atrof havoning harorati qanday bo‘lishi kerak?",
    options: [" 0°S gacha", "+5°S gacha", "-5°S gacha", "+10°S gacha"],
    rightAnswer: 0,
  },
  {
    question:
      "Perxlorvinil emallar asosidagi mastikadan gidroizolyatsiyada atrof havoning harorati qanday bo‘lishi kerak?  ",
    options: [
      "+25°S va past",
      "-20°S va ortiq",
      "-25°S va past",
      "+25°S va ortiq",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Payvandlash ishlari qaysi haroratlarda amalga oshirilishi mumkin?",
    options: [
      " - 30°S gacha ",
      " - 25°S gacha",
      " - 15°S gacha",
      " - 20°S gacha",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Chuqur joylashtirilgan va er osti inshootlari poydevorlarni o‘rnatish uchun tushiruvchi quduqlar usuli qanday sharoitlarda foydalaniladi?",
    options: [
      "grunt suvlarining yuqori sathlarida, barqaror bo‘lmagan gruntlarda, noqulay sharoitlarda",
      "grunt suvlarining yuqori sathlarida, barqaror gruntlarda, noqulay sharoitlarda ",
      "grunt suvlarining past sathlarida, barqaror bo‘lmagan gruntlarda, noqulay sharoitlarda ",
      "grunt suvlarining yuqori sathlarida, barqaror bo‘lmagan gruntlarda, qulay sharoitlarda ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Mastika va qorishmalarni tayyorlash boshlang‘ich bitumli materiallarni ... haroratgacha qizdirishda amalga oshiriladi.",
    options: ["140-1700S", "150-1800S", "150-1900S", "160-1900S"],
    rightAnswer: 2,
  },
  {
    question:
      "Grunt asosning bo‘sh barqarorlik xolatlarida kanal qirg‘og‘ining qiyaligidan grunt asosning ko‘chishi ... yuz beradi. ",
    options: ["burilishga", "siljishga", "eshishga", "cho‘zilishga"],
    rightAnswer: 1,
  },
  {
    question: "Noruda foydali qazilmalarni qazish .... kerak. ",
    options: [
      "sertifikatsiyalanishi",
      "litsenziyalanishi",
      "sinalishi",
      "tasdiqlanishi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Bir cho‘michli ekskavatorlarning ekspluatatsion ish unumdorligiga grunlarni ta’siri qaysi koeffitsientlar yordamida hisobga olinadi?",
    options: [
      "Yumshatish koeffitsienti va cho‘michini to‘ldirish koeffitsienti",
      "Cho‘michini to‘ldirish koeffitsienti, yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti, sig‘im koeffitsienti",
      "Cho‘michini to‘ldirish koeffitsienti va yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti",
      "Cho‘michini to‘ldirish koeffitsienti va ish vaqtidan foydalanish koeffitsienti",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Skreperning ekspluatatsion ish unumdorligiga gruntlarni ta’siri qaysi koeffitsient yordamida hisobga olinadi?",
    options: [
      "Sig‘im koeffitsienti va cho‘michni to‘lish koeffitsienti ",
      "Cho‘michni to‘lish koeffitsienti, yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti, sig‘im koeffitsienti",
      "Cho‘michni to‘lish koeffitsienti va yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti ",
      "Cho‘michni to‘lish koeffitsienti va ish vaqtidan foydalanish koeffitsienti ",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Gruntni qazish va surishda buldozerning ekspluatatsion ish unumdorligiga gruntlarni ta’siri qaysi koeffitsient yordamida hisobga olinadi? ",
    options: [
      "Yumshalish koeffitsienti va ag‘dargichni to‘lish koeffitsienti",
      "Yon tomonlama ko‘tarmachalarga gruntni yo‘qolishini hisobga oluvchi koeffitsienti va yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti ",
      "Yon tomonlama ko‘tarmachalarga gruntni yo‘qolishini hisobga oluvchi koeffitsienti va ish vaqtidan foydalanish koeffitsienti ",
      "Ag‘dargichni to‘lish koeffitsienti, yumshalgan gruntning hajmini tabiiy zichlik holatida dastlabki hajmga keltirish koeffitsienti, sig‘im koeffitsienti",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Ekskavator ishlashida harakat qiladigan yo‘lni, shuningdek grunt to‘kiladigan uzunchoq yo‘lni buldozerlar va boshqa moslamalar yordamida sinchkovlik bilan tayorlansa, ko‘p cho‘michli ekskavator ish unumdorligiga qanday ta’sir qiladi?",
    options: [
      "Ko‘p cho‘michli ekskavatorning ish unumdorligini oshiradi",
      "Ko‘p cho‘michli ekskavatorning ish unumdorligini pasaytiradi",
      "Hech qanday ta’sir qilmaydi  ",
      "Rotorli uchun ish unumdorligini oshiradi, zanjirli uchun – pasaytiradi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Agar har bir ob’ektda buldozerlarning ishi ishlarni bajarishni tashkil qilish va texnologiyasini oldindan ishlab chiqilgan sxemasi bo‘yicha bajarilsa, ularning ish unumdorligiga qanday ta’sir qiladi? ",
    options: [
      "Hech qanday ta’sir qilmaydi",
      "Buldozerning ish unumdorligini oshiradi",
      "Buldozerning ish unumdorligini pasaytiradi",
      "Balki ta’sir qiladi, lekin jarayonning sifat ko‘rsatkichlarinio‘zgartirmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ko‘tarmani ko‘tarishda gruntni zichlayotgan zichlagich ishlayotgan kartada uni o‘lchamlarini oshirish zichlagich ish unumdorligiga qanday ta’sir qiladi?",
    options: [
      "Namlanishi ortiqcha bo‘lgan gruntlarni zichlashda ish unumdorligi o‘sadi",
      "Karta o‘lchamlarini oshishi zichlagich ish unumdorligiga ta’sir qilmaydi",
      "Zichlagichning ish unumdorligi oshadi ",
      "Zichlagichning ish unumdorligi pasayadi",
    ],
    rightAnswer: 2,
  },
  {
    question:
      " Beton sinfidagi sonlar (V20, V25 va h.) qaysi ko‘rsatkichga mos keladi?",
    options: [
      "Sonlar beton namunasining siqilishga mustahkamligiga (20, 25 MPa va h.) mos keladi",
      "Sonlar beton namunasi orqali suv sizilishi ro‘y bermaydigan suvni gidravlik bosimiga (0,2; 0,25 MPa va h.) mos keladi",
      "Sonlar beton namunasini muzlatish va eritishdan keyin mustahkamligi 15% gacha pasayadigan sikllar soniga (20,25 sikllar va h.) mos keladi",
      "Sonlar beton namunasini cho‘zilishga mustahkamligiga (20,25 MPa va h.) mos keladi",
    ],
    rightAnswer: 0,
  },
  {
    question: "Sovuqqa chidamliligi bo‘yicha beton markasi ... aniqlanadi",
    options: [
      "…sovuqqa chidamliligi bo‘yicha beton markasi mavjud emas",
      "…15 % dan ortiq siqilishga beton mustahkamligini pasayishiga yo‘l qo‘yiladigan, suv bilan to‘yingan xolatdagi 28 kunlik sinalayotgan navbat bilan muzlatish va eritish sikllari soni bilan ",
      "…maksimal bosimni, m inshoot qalinligiga, m (yoki bosim chetidan zovurgacha bo‘lgan masofaga) nisbati va inshoot bilan muloqotdagi suvni harorati °S sifatida aniqlanadigan, bosim gradientiga bog‘liq ravishda  ",
      "… inshoot bilan muloqotdagi suvni salbiy haroratida, °S 180 kunlik sinalgan, standart namunani cho‘zilishga qarshiligi bo‘yicha ",
    ],
    rightAnswer: 1,
  },
  {
    question: "Suv o‘tkazmasligi bo‘yicha beton markasini ... belgilanadi",
    options: [
      "…15 % dan ortiq siqilishga beton mustahkamligini pasayishiga yo‘l qo‘yiladigan, suv bilan to‘yingan xolatdagi 28 kunlik sinalayotgan navbat bilan muzlatish va eritish sikllari soni bilan ",
      "… maksimal bosimni, m inshoot qalinligiga, m (yoki bosim chetidan zovurgacha bo‘lgan masofaga) nisbati va inshoot bilan muloqotdagi suvni harorati °S sifatida aniqlanadigan, bosim gradientiga bog‘liq ravishda  ",
      "… suv o‘tkazmasligi bo‘yicha beton markasi mavjud emas",
      "… inshoot bilan muloqotdagi suvni salbiy haroratida, °S 180 kunlik sinalgan, standart namunani cho‘zilishga qarshiligi bo‘yicha",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "O‘qi bo‘yicha cho‘zilishga mustahkamligi bo‘yicha sinfi ... aniqlanadi ",
    options: [
      "… maksimal bosimni, m inshoot qalinligiga, m (yoki bosim chetidan zovurgacha bo‘lgan masofaga) nisbati va inshoot bilan muloqotdagi suvni harorati °S sifatida aniqlanadigan, bosim gradientiga bog‘liq ravishda  ",
      "… inshoot bilan muloqotdagi suvni salbiy haroratida, °S 180 kunlik sinalgan, standart namunani cho‘zilishga qarshiligi bo‘yicha",
      "…15 % dan ortiq siqilishga beton mustahkamligini pasayishiga yo‘l qo‘yiladigan, suv bilan to‘yingan xolatdagi 28 kunlik sinalayotgan navbat bilan muzlatish va eritish sikllari soni bilan",
      "… inshoot bilan muloqotdagi suvni salbiy haroratida, °S 180 kunlik sinalgan, standart namunani cho‘zilishga qarshiligi bo‘yicha",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qurilish bosh planini baholashda qaysi texnik-iqtisodiy ko‘rsatkichlar qo‘llanilishi mumkin?",
    options: [
      "vaqtinchalik bino va inshootlarni qurilishi va 1 ga qurilish maydonini jihozlash bilan bog‘liq bo‘lgan er, tosh, yo‘l va boshqa ishlarning hajmi ",
      "foizda qurilish xo‘jaligini narxining ob’ekt qurilishini umumiy narxiga nisbatan ",
      "ko‘rsatilganlarning barchasi ",
      "1 ga qurilishga vaqtinchalik yo‘llar, muhandislik kommunikatsiyalari, elektr tarmoqlarini uzunligi va o‘rnatishning narxi",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Qurilish bo‘limlarining xo‘jalik faoliyatini boshqarishni qanday usullari mavjud?",
    options: [
      "Birlamchi va ikkilamchi",
      "Ma’muriy, iqtisodiy va ijtimoiy-psixologik",
      "rahbarlik qiluvchi va ma’muriy",
      "ijtimoiy, bozor, rejaviy",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qo‘yilgan vazifani samarali bajarilishi va alohida ishchilar va ishlab chiqarish jamoasini faoliyatini muvofiqligini ta’minlovchi, boshliqni ularga ta’sir usullari nima deb ataladi?",
    options: [
      "boshqarish vazifalari",
      "boshqarish usullari",
      "boshqarish funksiyalari",
      "boshqarish natijalari",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Eng yuqori mehnat samarasini ta’minlaydigan, shaxsni har tomonlama rivojlanish sharoitlari, jamoadagi munosabatlar bilan alohida ishchilar va butun jamoada eng yuqori qanoat hosil qilishga erishish uchun ushbu sharoitlarni shakllantirishga boshqaruvni ta’sirida maqsad sari yo‘naltirilgan qanday boshqarish usullarini o‘z ichiga oladi?",
    options: [
      "ijtimoiy-psixologik ",
      "iqtisodiy  ",
      "ma’muriy",
      "ma’muriy-ijtimoiy",
    ],
    rightAnswer: 0,
  },
  {
    question: " “Rejalashtirish” iborasiga to‘g‘ri ta’rif bering.",
    options: [
      " Rejalashtirish – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir",
      "Rejalashtirish – belgilangan vazifalarni bajarish maqsadida tabiiy, iqtisodiy, texnik va boshqa qonuniyatlarga asoslangan, ishlab chiqarish jamoasiga harakatlarning biror maqsadga qaratilganligi ",
      "Rejalashtirish – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir ",
      "Rejalashtirish – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir",
    ],
    rightAnswer: 0,
  },
  {
    question: " “Boshqarish” iborasiga to‘g‘ri ta’rif bering",
    options: [
      "Boshqarish – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir ",
      "Boshqarish – belgilangan vazifalarni bajarish maqsadida tabiiy, iqtisodiy, texnik va boshqa qonuniyatlarga asoslangan, ishlab chiqarish jamoasiga harakatlarning biror maqsadga qaratilganligi",
      "Boshqarish – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir",
      "Boshqarish – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir",
    ],
    rightAnswer: 1,
  },
  {
    question: "“Ishlab chiqarish me’yori” iborasi deganda nima tushuniladi? ",
    options: [
      "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi",
      "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi",
      "Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi",
      "Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi",
    ],
    rightAnswer: 1,
  },
  {
    question: "“Mashina vaqt me’yori” iborasi deganda nima tushuniladi?",
    options: [
      "Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi",
      "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi",
      "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi",
      "Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qurilish ishlarini bajarish uchun qanday resurslar talab qilinadi? ",
    options: [
      "qurilish mashinalari va qurilmalari, ishchi kuchi, ishlab-chiqarish ob’ektlari, ta’mirlash ustaxonalari",
      "qurilish ishlarini bajarish uchun resurslar talab qilinmaydi",
      "pul mablag‘lari, ishchi kuchi, qurilish materiallari, detallari va jihozlari, qurilish mashinalari va qurilmalari, elektr energiya, yonilg‘i, suv",
      "loyihaviy materiallar, asosiy ob’ektlar, yordamchi baza ob’ektlari",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Yig‘ish ishlarida qaysi jarayonlar tashish jarayonlari hisoblanadi?",
    options: [
      "Konstruksiyani yig‘ishga tayyorlash bilan bog‘liq bo‘lgan jarayonlar; tashqi ko‘zdan kechirish bilan konstruksiya xolatini tekshirish; turli yig‘ish qurilmalari va to‘shamalar bilan ularni dastlabki jihozlash; yiriklashtiruvchi yig‘ish va ularni loyihaviy xolatga o‘rnatguncha konstruksiyani mustahkamlash; o‘rnatilayotgan konstruksiyalarni o‘qlarini va balandlik belgilarini geodezik bo‘lishni bajarish; poydevorni tayanch  yuzalarini tayyorlash",
      "Yig‘ma konstruksiyalarni yuklash, tushirish va joylashtirishni o‘z ichiga olib, kran ta’sir zonasida ombordan o‘rnatish joyiga qurilish maydonchasi chegarasida ularni surish  va qurilish maydoniga zavoddan ularni tashishni o‘z ichiga oluvchi jarayonlar",
      "Yakunlangan konstruktiv elementlarni yaratuvchi jarayonlar: konstruksiyalarni osish, uzatish, loyihaviy xolatga o‘rnatish, vaqtinchalik mustahkamlash bilan koordinat o‘qlari bo‘yicha ularni tekshirish; yig‘ish birikmalarini loyihaga asosan doimiy mustahkamlash; birikish joylari va choklarga ishlov berish va bekitish",
      "Yig‘ish ishlarini  bajarishda bunday jarayonlar mavjud emas",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Yig‘ish ishlarida qaysi jarayonlar tayyorgarlik jarayonlari hisoblanadi? ",
    options: [
      "Konstruksiyani yig‘ishga tayyorlash bilan bog‘liq bo‘lgan jarayonlar; tashqi ko‘zdan kechirish bilan konstruksiya xolatini tekshirish; turli yig‘ish qurilmalari va to‘shamaalar bilan ularni dastlabki jihozlash; yiriklashtiruvchi yig‘ish va ularni loyihaviy xolatga o‘rnatguncha konstruksiyani mustahkamlash; o‘rnatilayotgan konstruksiyalarni o‘qlarini va balandlik belgilarini geodezik bo‘lishni bajarish; poydevorni tayanch  yuzalarini tayyorlash",
      "Yakunlangan konstruktiv elementlarni yaratuvchi jarayonlar: konstruksiyalarni osish, uzatish, loyihaviy xolatga o‘rnatish, vaqtinchalik mustahkamlash bilan koordinat o‘qlari bo‘yicha ularni tekshirish; yig‘ish birikmalarini loyihaga asosan doimiy mustahkamlash; birikish joylari va choklarga ishlov berish va bekitish",
      "Yig‘ish ishlarini  bajarishda bunday jarayonlar mavjud emas",
      "Yig‘ma konstruksiyalarni yuklash, tushirish va joylashtirishni o‘z ichiga olib, kran ta’sir zonasida ombordan o‘rnatish joyiga qurilish maydonchasi chegarasida ularni surish  va qurilish maydoniga zavoddan ularni tashishni o‘z ichiga oluvchi jarayonlar",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Yig‘ish ishlarida qaysi jarayonlar yig‘ish (asosiy) jarayonlar hisoblanadi? ",
    options: [
      "Yig‘ma konstruksiyalarni yuklash, tushirish va joylashtirishni o‘z ichiga olib, kran ta’sir zonasida ombordan o‘rnatish joyiga qurilish maydonchasi chegarasida ularni surish  va qurilish maydoniga zavoddan ularni tashishni o‘z ichiga oluvchi jarayonlar",
      "Yakunlangan konstruktiv elementlarni yaratuvchi jarayonlar: konstruksiyalarni osish, uzatish, loyihaviy xolatga o‘rnatish, vaqtinchalik mustahkamlash bilan koordinat o‘qlari bo‘yicha ularni tekshirish; yig‘ish birikmalarini loyihaga asosan doimiy mustahkamlash; birikish joylari va choklarga ishlov berish va bekitish",
      "Konstruksiyani yig‘ishga tayyorlash bilan bog‘liq bo‘lgan jarayonlar; tashqi ko‘zdan kechirish bilan konstruksiya xolatini tekshirish; turli yig‘ish qurilmalari va to‘shamalar bilan ularni dastlabki jihozlash; yiriklashtiruvchi yig‘ish va ularni loyihaviy xolatga o‘rnatguncha konstruksiyani mustahkamlash; o‘rnatilayotgan konstruksiyalarni o‘qlarini va balandlik belgilarini geodezik bo‘lishni bajarish; poydevorni tayanch  yuzalarini tayyorlash",
      "Yig‘ish ishlarini  bajarishda bunday jarayonlar mavjud emas",
    ],
    rightAnswer: 1,
  },
  {
    question: "Armatura po‘latini oquvchanlik chegarasi deb nimaga aytiladi?",
    options: [
      "Yukni keyinchalik ko‘paytirmasdan sinalayotgan namunani qisqarishi yuz beradigan maksimal cho‘zuvchi zo‘riqish ",
      "Yukni keyinchalik ko‘paytirmasdan sinalayotgan namunani cho‘zilishi yuz beradigan maksimal cho‘zuvchi zo‘riqish",
      "Namunani sinashda po‘lat qiziydigan  cho‘zuvchi zo‘riqish ",
      "Namunani sinashda po‘lat uziladigan cho‘zuvchi zo‘riqish ",
    ],
    rightAnswer: 1,
  },
  {
    question: "Armatura po‘latini mustahkamlik chegarasi deb nimaga aytiladi?",
    options: [
      "namunani sinashda po‘lat uziladigan cho‘zuvchi zo‘riqish ",
      "yukni keyinchalik ko‘paytirmasdan sinalayotgan namunani cho‘zilishi yuz beradigan maksimal cho‘zuvchi zo‘riqish",
      "namunani sinashda po‘lat qiziydigan cho‘zuvchi zo‘riqish ",
      "yukni keyinchalik ko‘paytirmasdan sinalayotgan namunani qisqarishi yuz beradigan maksimal cho‘zuvchi zo‘riqish",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Temirbeton buyumlari zavodlarida ishlab chiqarishni tashkil qilish qaysi belgilariga ko‘ra uchta usulga sinflanadi: devoriy, oqim-agregat va konveyerli?",
    options: [
      "Betonni tayyorlash va uni qotish sexlarida ishlarni tashkil qilish bo‘yicha",
      "Betonni qotish sexida operatsiyalarni tashkil qilish bo‘yicha ",
      "Shakllantirish sexida operatsiyalarni tashkil qilish bo‘yicha ",
      "Shakllantirish va betonni qotish sexlarida operatsiyalarni tashkil qilish bo‘yicha",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Temirbeton buyumlarini ishlab chiqarishni texnologik tashkil qilishni qaysi usulida buyum bitta joyda stendlarda bo‘lib,  barcha texnologik jarayonlardan o‘tadi?",
    options: [
      "Bunday usul mavjud emas",
      "Oqim-agregat usudida",
      "Konveyerli usulda",
      "Kassetali usulda",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Ushbu ibora “... – muhandis-texnik xodimlarning rahbarligi ostida bajaruvchilar jamoasi kuchi bilan ishlarni muayyan turi bajarishga tegishli barcha masalalarni echishni o‘z ichiga oladi” tashkil qilishni uchta turidan qaysi biriga to‘g‘ri keladi?",
    options: [
      "Ishlarni tashkil qilish",
      "Mehnatni tashkil qilish",
      "Qurilishni tashkil qilish",
      "Tashkil qilishni hech qaysi bir turiga to‘g‘ri kelmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Hozirgi vaqtda O‘zbekistonda irrigatsiya tizimlarini boshqarishning qaysi prinsiplari qabul qilingan?",
    options: [
      "ma’muriy-xududiy  ",
      "kollegial",
      "xududiy",
      "havzaviy                                                              ",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Izlanishlarni qaysi jarayonida loyihalashni barcha bosqichlarida xududni va qurilish maydonini tabiiy sharoitlarini o‘rganish amalga oshiriladi (sekin-asta detallashtirish bilan)?",
    options: [
      "Kameral",
      "Ekologik",
      "Muhandislik",
      "Dala",
    ],
    rightAnswer: 2,
  },
  {
    question:
      " “Izlanishlar” iborasiga to‘g‘ri ta’rif bering",
    options: [
      "Izlanishlar – bu kelajakdagi ob’ektni loyihalash uchun boshlang‘ich ma’lumotlarni tayyorlash va uni qurish va foydalanish sharoitlarini har tomonlama taxlil qilish maqsadida kelajakdagi qurilish xududi yoki maydonini iqtisodiy va muhandislik (texnik) izlanishlar majmuidir ",
      "Izlanishlar – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir",
      "Izlanishlar – bu qandaydir inshoot yoki inshootlar majmuasini qurish bo‘yicha oldin tayyorlangan, texnik va iqtisodiy hisob-kitoblar bilan asoslangan va grafik  ko‘rinishida   chizilgan echimdir ",
      "Izlanishlar – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi.  ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qaysi izlanishlar jarayonida qurilish maydoni joylashish joyini tanlash va noqulay gidrometeorologik ta’sirlardan uni muhandislik himoyasi amalga oshiriladi?",
    options: [
      "Iqtisodiy",
      "Dala",
      "Ekologik",
      "Muhandislik ",
    ],
    rightAnswer: 3,
  },
  {
    question:
      " “Loyiha” iborasiga to‘g‘ri ta’rif bering",
    options: [
      "Loyiha – bu qandaydir inshoot yoki inshootlar majmuasini qurish bo‘yicha oldin tayyorlangan, texnik va iqtisodiy hisob-kitoblar bilan asoslangan va grafik  ko‘rinishida   chizilgan echimdir ",
      "Loyiha – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi",
      "Loyiha – bu kelajakdagi ob’ektni loyihalash uchun boshlang‘ich ma’lumotlarni tayyorlash va uni qurish va foydalanish sharoitlarini har tomonlama taxlil qilish maqsadida kelajakdagi qurilish xududi yoki maydonini iqtisodiy va muhandislik (texnik) izlanishlar majmuidir",
      "Loyiha – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Loyihalashning qaysi bosqichida qurilishni tashkil qilish loyihasi (QTQL) ishlab chiqiladi?",
    options: [
      "Uchinchi va to‘rtinchi bosqichlarda",
      "Ikkinchi va uchinchi bosqichlarda",
      "Ishchi hujjatlar tarkibida ikkinchi bosqichda va uning asosida",
      "Tasdiqlanayotgan loyihalarning tarkibida bir bosqichli loyihalashda va ikki bosqichli loyihalashda birinchi bosqichida ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Loyihalashning qaysi bosqichida ishlarni bajarish loyihasi (IBL) ishlab chiqiladi?",
    options: [
      "Ishchi hujjatlar tarkibida ikkinchi bosqichda va uning asosida ",
      "Tasdiqlanayotgan loyihalarning tarkibida bir bosqichli loyihalashda va ikki bosqichli loyihalashda birinchi bosqichida ",
      "Ikkinchi va uchinchi bosqichlarda",
      "Uchinchi va to‘rtinchi bosqichlarda",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "QTQL va IBL tarkibida taqvimiy reja majburiy hujjat hisoblanadimi?",
    options: [
      "Tabiatni muhofaza qilish zonalari qurilishida to‘g‘ri hisoblanadi ",
      "Hisoblanadi",
      "Hisoblanmaydi",
      "Noyob ob’ektlar qurilishida to‘g‘ri hisoblanadi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Taqvimiy ",
    options: [
      "Chiziqli va tarmoqli",
      "Umumiy va individual",
      "Integral va hisobiy",
      "Katta va kichik",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Tarmoqli grafikda qanday ishlar bo‘ladi?",
    options: [
      "Real va shartli",
      "Katta va kichik",
      "Bosh va ikkinchi darajali",
      "Kerakli va keraksiz",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Tarmoqli grafikda real ish deb nimaga aytiladi?",
    options: [
      "Real ish – tarmoqli grafikni bunday elementi mavjud emas",
      "Real ish – vaqt va resurslar sarf qilinadigan jarayon ",
      "Real ish – qandaydir hodisadan oldingi har qanday jarayon",
      "Real ish – bir yoki bir nechta ishlarni boshlanish imkoniyati uchun zarur va etarli, bir yoki bir nechta ishlarni tugatish haqiqatidir ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Tarmoqli grafikda kritik yo‘l  deb nimaga aytiladi?",
    options: [
      "Kritik yo‘l  – bu boshlang‘ich hodisadan oxirgi hodisagacha to‘liq (eng uzun) yo‘l  ",
      "Kritik yo‘l  – har bir hodisadan   oxirgi hodisagacha  eng uzun yo‘l qiymati",
      " Kritik yo‘l  – oxirgi hodisaning boshlanish vaqtini o‘zgartirmasdan ushbu ishni bajarish davomiyligini oshirish mumkin bo‘lgan vaqtdir  ",
      "Kritik yo‘l  – keyingi hodisani boshlanishini erta vaqtini o‘zgartirmasdan ishlarni bajarish davomiyligini oshirish mumkin bo‘lgan vaqt  ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Hodisa potensiali deb nimaga aytiladi? ",
    options: [
      "Hodisa potensiali – har bir hodisadan   oxirgi hodisagacha  eng uzun yo‘l qiymati",
      "Hodisa potensiali – ushbu hodisadan oldingi (boshlang‘ich hodisadan   ko‘rib chiqilayotgangacha  uzun yo‘l) barcha ishlarni bajarish uchun zarur bo‘lgan vaqt",
      " Hodisa potensiali – oxirgi hodisaning boshlanish vaqtini o‘zgartirmasdan ushbu ishni bajarish davomiyligini oshirish mumkin bo‘lgan vaqtdir   ",
      " Hodisa potensiali – keyingi hodisani boshlanishini erta vaqtini o‘zgartirmasdan ishlarni bajarish davomiyligini oshirish mumkin bo‘lgan vaqt  ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      " “Taqvimiy rejalashtirish” iborasiga to‘g‘ri ta’rif bering ",
    options: [
      "Taqvimiy rejalashtirish – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi",
      "Taqvimiy rejalashtirish – taqvimiy rejani ishlab chiqish jarayoni ",
      " Taqvimiy rejalashtirish – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir",
      "Taqvimiy rejalashtirish – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Noruda qurilish materiallari konlari qurilishni qaysi bazasi ob’ektlariga kiradi?",
    options: [
      "ishlab-chiqarish bazalari                      ",
      "tarkibiga ",
      "xizmat ko‘rsatuvchi bazalar",
      "yordamchi bazalar  ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Yig‘ma temirbeton poligonlari qurilishni qaysi bazasi ob’ektlariga kiradi?",
    options: [
      "biror-bir baza tarkibiga kirmaydi",
      "ishlab-chiqarish bazalari",
      "xizmat ko‘rsatuvchi bazalar",
      "yordamchi bazalar  ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Texnikani ta’mirlash uchun yoyma-yig‘ma ustaxona dala shiyponi tarkibiga kiradimi?",
    options: [
      "Kiradi",
      "Kirmaydi",
      "Vaxtali shaharcha",
      "Doimiy shaharcha   ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ta’riflardan qaysi biri to‘g‘ri? Bu erda: IBL – ishlarni bajarish loyihasi, QTQL – qurilishni tashkil qilish loyihasi ",
    options: [
      "Umum maydonli qurilish bosh plani qurilayotgan majmua bitta alohida ob’ektini ko‘tarish uchun zarur bo‘lgan xududni faqat o‘z ichiga oladi va IBL tarkibiga kiradi",
      "Umum maydonli qurilish bosh plani butun qurilish maydoni xududini qamrab oladi va QTQL tarkibiga kiradi ",
      "Umum maydonli qurilish bosh plani butun qurilish maydoni xududini qamrab oladi va IBL tarkibiga kiradi  ",
      "Umum maydonli qurilish bosh plani qurilayotgan majmua bitta alohida ob’ektini ko‘tarish uchun zarur bo‘lgan xududni faqat o‘z ichiga oladi va QTQL tarkibiga kiradi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Beton qorishmasini etkazib berishni qaysi asosiy texnologik sxemalari mavjud?",
    options: [
      "To‘ldiruvchilarni qazib olish joyidan tayyorlash joyigacha; tayyorlash joyidan bevosita betonlashtirilayotgan konstruksiyaga to‘kish joyigacha; tayyorlash joyidan boshqa tashish vositasi yoki qurilmasiga ag‘darish joyigacha; ta’minlovchidan qurilish maydonigacha ",
      "Tayyorlash joyidan bevosita betonlashtirilayotgan konstruksiyaga to‘kish joyigacha; tayyorlash joyidan boshqa tashish vositasi yoki qurilmasiga ag‘darish joyigacha ",
      "Tayyorlash joyidan bevosita betonlashtirilayotgan konstruksiyaga to‘kish joyigacha; beton qorishmasi sifatini nazorat qilishga qabul qilish punktigacha",
      "Tayyorlash joyidan boshqa tashish vositasi yoki qurilmasiga ag‘darish joyigacha; beton qorishmasini to‘kish joyidan muayyan betonlashtirilayotgan uchastkagacha",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Qo‘shimchalardan foydalanib beton qaysi xossalarini o‘zgartirish mumkin?",
    options: [
      "mustahkamlik, chidamlilik, qattiqlik",
      "mustahkamlik va chidamlilik",
      "qattiqlik va mustahkamlilik",
      "qattiqlik va chidamlilik",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Beton qorishmasini bir jinsliligini oshirish qanchalik beton mustahkamligini oshiradi?",
    options: [
      "oshirmaydi",
      "15% gacha",
      "10% gacha",
      "10% dan ortiq",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "M-400 oq sement asosidagi plastifikatorni qo‘shganda beton mustahkamligi qanday qiymatga o‘zgaradi?",
    options: [
      "o‘zgarmaydi",
      "150%	ga oshadi",
      "150% ga pasayadi",
      "100% ga oshadi",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Beton qorishmasiga mikrokremnezyom qo‘shish bilan nimaga erishiladi?",
    options: [
      "betonni yuqori zichligi	",
      "betonni yuqori mustahkamligi",
      "betonni past zichligi",
      "betonni past mustahkamligi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Nanobetonda plastifikator sifatida nimadan foydalaniladi?",
    options: [
      "nanoqo‘shimchalar",
      "nanoinitsiatorlar",
      "nanozichlagichlar",
      "nanonamlovchilar",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Betonni fibrovolokni bilan armaturalashda betonni qaysi xossalari oshadi?",
    options: [
      "mustahkamlik, haroratlar tafovutiga barqarorlik ",
      "mustahkamlik, agressiv muhitlar va haroratlar tafovutiga barqarorlik",
      "qattiqlik, agressiv muhitlar va haroratlar tafovutiga barqarorlik",
      "mustahkamlik, har xil muhitlar va haroratlar tafovutiga barqarorlik ",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Beton va temirbeton buyumlarni tayyorlashda eng uzoq texnologik jarayon .... hisoblanadi.",
    options: [
      "betonni kuchlanishi",
      "betonni ko‘payishi",
      "betonni sovushi",
      "betonni qotishi",
    ],
    rightAnswer: 3,
  },
  {
    question:
      "Temirbeton konstruksiyalarni kamchiliklariga nima kiradi?",
    options: [
      "katta og‘irlikda yuqori mustahkamlik ",
      "katta og‘irlikda unchalik yuqori bo‘lmagan mustahkamlik",
      "katta og‘irlikda yuqori narx",
      "yuqori narxda unchalik yuqori bo‘lmagan mustahkamlik",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Oldindan zo‘riqtirilgan temirbeton muhim ... betonni layoqatsizligini oldini olish uchun mo‘ljallangan.",
    options: [
      "cho‘zuvchi kuchlanishlarga ",
      "siquvchi kuchlanishlarga",
      "egiluvchan kuchlanishlarga",
      "suruvchi kuchlanishlarga",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Kompozit armatura qanday afzalliklarga ega?",
    options: [
      "Korrozion turg‘unlik, past issiqlik va elektr o‘tkazuvchanlik, ekologiklik",
      "Korrozion turg‘unlikka qarshilik, past issiqlik va elektr o‘tkazuvchanlik, ekologiklik",
      "Korrozion mustahkamlik, past issiqlik va elektr o‘tkazuvchanlik, ekologiklik",
      "Korrozion turg‘unlik, baland issiqlik va elektr o‘tkazuvchanlik, ekologiklik",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Sulfit-achitqi brajka turidagi qo‘shimcha qadog‘i ... chegarasidan chiqmasligi kerak.",
    options: [
      "sement og‘irligining 0,1...0,3 % ",
      "sement og‘irligining 0,3...0,5 % ",
      "sement og‘irligining 1...3 % ",
      "sement og‘irligining 5 % ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Bitumli mastikadagi rulon tom yopma va gidroizolyatsiya materiallarini ulardan foydalanishdan oldin ... saqlash kerak. ",
    options: [
      "24 soat harorati +15°S dan past bo‘lmagan joyda ",
      "24 soat harorati +25°S dan past bo‘lmagan joyda c",
      "12 soat harorati +15°S dan past bo‘lmagan joyda ",
      "24 soat harorati +10°S dan past bo‘lmagan joyda ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Salbiy haroratlarda betonlashtirish uchun beton qorishmasi qanday haroratga ega bo‘lishi kerak?",
    options: [
      "beton qorishmasi +20…35°S chegarasida haroratga ega bo‘lishi kerak ",
      "beton qorishmasi +30…40°S chegarasida haroratga ega bo‘lishi kerak ",
      "beton qorishmasi +35…45°S chegarasida haroratga ega bo‘lishi kerak",
      "beton qorishmasi +25…35°S chegarasida haroratga ega bo‘lishi kerak ",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "G‘isht, penobeton yoki gazobeton bloklardan qish davrida bino devorlarini qo‘tarishda nimadan foydalaniladi? 	",
    options: [
      "Salbiy haroratlarda ishlashga mo‘ljallangan maxsus elimlar",
      "Salbiy haroratlarda ishlashga mo‘ljallangan gidroizolyatsion materiallar ",
      "Salbiy haroratlarda ishlashga mo‘ljallangan maxsus qo‘shimchalar",
      "Salbiy haroratlarda ishlashga mo‘ljallangan sement qorishmasi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Muzlashga qarshi qo‘shimchalar bilan birgalikda atrof muhitni salbiy haroratlarida qurilishda yotqizish qarishmasi markasi ...  ",
    options: [
      "M50 va ortiq",
      "M40 va ortiq",
      "M30 va ortiq",
      "M20 va ortiq",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Bitumli mastikaga issiqlik izolyatsiya materiallarini yotqizish qanday haroratlarda bajarilishi mumkin? ",
    options: [
      "-30°S dan past bo‘lmaganda",
      "-26°S dan past bo‘lmaganda",
      "-20°S dan past bo‘lmaganda",
      "-25°S dan past bo‘lmaganda",
    ],
    rightAnswer: 2,
  },
  {
    question:
      "Etil asosidagi mastikadan gidroizolyatsiyada atrof havoning harorati qanday bo‘lishi kerak?  ",
    options: [
      "+25°S va ortiq",
      " -25°S va ortiq",
      "-25°S va past",
      "+25°S va past",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Bitumli cherepitsa bilan tom yopmani yopish bo‘yicha ishlarni ... haroratda bajarishga ruxsat beriladi. ",
    options: [
      "-5°S dan past bo‘lmagan",
      "+5°S dan past bo‘lmagan",
      "-10°S dan past bo‘lmagan",
      "-15°S dan past bo‘lmagan",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Termoaktiv qolip deb nimaga aytiladi?",
    options: [
      "Termoaktiv qolip  -  bu isituvchi elementlar bilan jihozlangan ko‘p qatlamli shchitlar",
      "Termoaktiv qolip -  bu isituvchi elementlar bilan jihozlangan ko‘p qatlamli plitalar",
      "Termoaktiv qolip -  bu isituvchi elementlar bilan jihozlangan shchitlar ",
      "Termoaktiv qolip -  bu isituvchi elementlar bilan jihozlangan plitalar",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Gidrotexnika inshootlari yaxlit konstruksiyalar konstruktiv choklarni joylashish joyi ...  belgilanadi. ",
    options: [
      "betonni zichlash vaqtida ",
      "loyiha bilan",
      "betonni yotqizish vaqtida",
      "qurilish vaqtida",
    ],
    rightAnswer: 1,
  },
  {
    question:
      "Sement grunt tarkibida og‘irligi bo‘yicha sement miqdori ... tashkil qiladi.",
    options: [
      "8 dan 12 % gacha",
      "10 dan 12 % gacha",
      "10 dan 15 % gacha",
      "8 dan 11 % gacha",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Er ishlarida mashinalar samaradorligini qanday oshirish mumkin?",
    options: [
      "Ish vaqtini yaxshilab, ish vaqtida turib qolishlarni qisqartirib",
      "Metrologik xavfsizlikni oshirib  ",
      "Texnik imkoniyatlarni kengaytirib ",
      "Texnik imkoniyatlarni kengaytirib, ekologik xavfsizlikni kengaytirib",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Issiq va quruq iqlimda betonlashtirishda nima uchun namdan himoyalovchi plyonkalar qo‘llaniladi?",
    options: [
      "namdan himoyalovchi plyonkalar suv yo‘qolishini kamaytiradi, bug‘latish kamerasida betonni qotish sharoitiga yaqin bo‘lgan, termonamlik rejimini yuzaga keltiradi ",
      "namdan himoyalovchi plyonkalar yangi yotqizilgan betonni mexanik ta’sirlardan himoya qiladi",
      "namdan himoyalovchi plyonkalar suv yo‘qolishini kamaytiradi",
      "issiq va quruq iqlimda betonlashtirishda namdan himoyalovchi plyonkalardan foydalanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Muzlash bo‘yicha qaysi mustahkamlikni kritik deb aytiladi?",
    options: [
      "Sovuqdan yuzaga kelgan yoriqlar paydo bo‘lish xavfi bo‘lmagandagi mustahkamlik",
      "15 Mpa mustahkamlik",
      "20 Mpa mustahkamlik",
      "Blok yuzasiga bosim berish imkoniyati bo‘lmagandagi mustahkamlik",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Temirbeton buyumlarini ishlab chiqarishni texnologik tashkil qilishni qaysi usulida bitta joyda ikkinchi joyga bir tekis tezlikda uzluksiz, shu jumladan qotishni tezlashtirish uchun operatsiyalarni bajarishda buyum suriladi?",
    options: [
      "Konveyerli usulda",
      "Kassetali usulda",
      "Oqim-agregat usulida",
      "Bunday usul mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qaysi konlar qurilish materiallarini ishlab chiqaruvchi korxonalar (masalan, temirbeton buyumlar zavodlari uchun) uchun materiallarni etkazib beruvchi doimo ishlovchi korxonalar hisoblanadi?",
    options: [
      "Xom-ashyo",
      "Sanoat",
      "Bunday konlar mavjud emas",
      "Qurilishga oid",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qullanilish usuli bo‘yicha gidromexanizatsiyada gruntni gidravlik tashishni sinflarga ajrating",
    options: [
      "O‘zioqar va bosimli",
      "Gorizontal va vertikal",
      "Oddiy va murakkab",
      "Mexanik va gidravlik",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Tarmoqli grafik asosida operativ boshqarish qaysi bosqichlardan iborat? ",
    options: [
      "ko‘rsatilganlarning barchasi",
      "ishlarni haqiqiy xolati to‘g‘risida ma’lumotlarni tayyorlash; ushbu ma’lumotlar bo‘yicha tarmoqli grafik parametrlarini qayta hisoblash; rejalashtirilgan topshiriqlar bilan taqqoslaganda qurilish paytida yuzaga kelgan o‘zgarishlarni aniqlash",
      "ishlarni bajarishni alternativ variantlarini ishlab chiqish; tahliliy hisob-kitoblarni bajarish va eng ratsional echimni amalga oshirishni amaliy imkoniyatlarini hisobga olgan xolda ularni tanlash",
      " ishlarni keyingi muddatiga detallashtirilgan rejaviy topshiriqlarni ishlab chiqish va ularni bajaruvchilarga etkazish",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qurilishda qaysi ehtiyojlar uchun suvdan foydalaniladi?",
    options: [
      "ishlab-chiqarish ehtiyojlari va yong‘inni o‘chirish uchun, xo‘jalik-ichimlik ehtiyojlari uchun",
      "ishlab-chiqarish ehtiyojlari va yong‘inni o‘chirish uchun ",
      "ichimlik ehtiyojlari uchun ",
      "qurilishda suvdan foydalanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ishlab-chiqarish bazalarini qaysi asosiy ob’ektlari mavjud? ",
    options: [
      "noruda qurilish materiallari konlari; maydalash-saralash zavodlari va qurilmalari; saralash-yuvish zavodlari va qurilmalari; sement-beton zavodlari; yig‘ma temirbeton zavodlari va poligonlari; armatura va qoliplash ustaxonalari",
      "qurilish davrida zarur bo‘lgan, ombor xo‘jaligi, suv ta’minoti, eneriya ta’minoti, qozonhona, muqim kompressorlar, ta’mirlash ustaxonalari, garajlar, mashina saroylari, mashina to‘xtash joylari, yo‘llar va transport xo‘jaligi, aloqa, boshqa vaqtinchalik bino va inshootlar (agar zarurat bo‘lsa, vaqtinchalik yashash joylari va madaniy-maishiy qurilish) ",
      "qurilayotgan majmuaning asosiy ob’ektlari",
      "ishlab-chiqarish bazalari mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Yordamchi bazalarini qaysi asosiy ob’ektlari mavjud? ",
    options: [
      "qurilish davrida zarur bo‘lgan, ombor xo‘jaligi, suv ta’minoti, eneriya ta’minoti, qozonhona, muqim kompressorlar, ta’mirlash ustaxonalari, garajlar, mashina saroylari, mashina to‘xtash joylari, yo‘llar va transport xo‘jaligi, aloqa, boshqa vaqtinchalik bino va inshootlar (agar zarurat bo‘lsa, vaqtinchalik yashash joylari va madaniy-maishiy qurilish) ",
      "noruda qurilish materiallari konlari; maydalash-saralash zavodlari va qurilmalari; saralash-yuvish zavodlari va qurilmalari; sement-beton zavodlari; yig‘ma temirbeton zavodlari va poligonlari; armatura va qoliplash ustaxonalari",
      "qurilayotgan majmuaning asosiy ob’ektlari",
      "ishlab-chiqarish bazalari mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quruvchilar shaharchasining qaysi biriga quyidagi ta’rif to‘g‘ri keladi – “… bu shaharchada joylashtiriladigan, ishlab chiqarish bo‘linmalarini qaytadan joylashtirish bilan bog‘liq xolda bir joyda ishlash muddatini chegaralashdan iborat, xususiyatga ega bo‘lganob’ekt qurilishi davrida yaratiladigan, aholi yashash punktidir”?",
    options: [
      "quruvchilarning vaqtinchalik shaharchasi                 ",
      "quruvchilarning doimiy shaharchasi                 ",
      "quruvchilarning xizmat ko‘rsatuvchi shaharchasi                 ",
      "shahar turidagi quruvchilarning shaharchasi ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Vaxtali shaharchalar qancha muddatga yashashga hisoblangan? ",
    options: [
      "1.5 yilgacha qisqa muddatli yashashga ",
      "bunday shaharchalar mavjud emas",
      "yashash davomiyligi chegaralanmagan",
      "15 yilgacha uzoq muddatga yashashga",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qurilish bosh planini baholashda qo‘llaniladigan texnik-iqtisodiy ko‘rsatkichlar ... ",
    options: [
      "ko‘rsatilganlarning barchasi ",
      "1 ga qurilishga vaqtinchalik yo‘llar, muhandislik kommunikatsiyalari, elektr tarmoqlarini uzunligi va o‘rnatishning narxi",
      "vaqtinchalik bino va inshootlarni qurilishi va 1 ga qurilish maydonini jihozlash bilan bog‘liq bo‘lgan er, tosh, yo‘l va boshqa ishlarning hajmi ",
      "foizda qurilish xo‘jaligini narxining ob’ekt qurilishini umumiy narxiga nisbatan ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qurilish qaysi ikkita tizimdan (murakkab ishlab-chiqarish tizimi) iborat?",
    options: [
      "boshqaruvchi va boshqariladigan",
      "asosiy va yordamchi",
      "kadrli va asosiy",
      "birinchi va ikkinchi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Boshqarish tizimini tuzilishi va uni alohida elementlarining o‘zaro bog‘liqligi boshqarishni tashkiliy tuzilmasi bilan belgilanadi. Boshqarishni tashkiliy tuzilmasi aytib bering.",
    options: [
      "chiziqli, funksional, chiziqli-funksional",
      "tarmoqli, chiziqli, tarmoqli-chiziqli",
      "boshqaruvchi va boshqariladigan",
      "bosh va otalikka olingan",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Boshqarishni qaysi ma’muriy usullari mavjud?",
    options: [
      "tashkiliy va boshqara oladigan",
      "bevosita va qo‘shimcha ",
      "bir yo‘la va uzoq muddatli",
      "bunday usullar mavjud emas",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Har bir ishchining javobgarligi va moddiy qizishini oshirishga qaysi usullar imkon to‘g‘diradi?",
    options: [
      "iqtisodiy ",
      "ijtimoiy-psixologik",
      "ma’muriy",
      "ma’muriy-ijtimoiy",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorish qurilmasida beton qorishmasini tashkil etuvchilardan qaysi biri pnevmoquvurtashgichlar bo‘yicha tashiladi?",
    options: [
      "Sement",
      "Suv",
      "Qum",
      "Shag‘al",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorish qurilmasida qaysi to‘ldiruvchilarni tashish uchun tasmali tranportyorlar qo‘llaniladi?",
    options: [
      "Qum va yirik to‘ldiruvchilar uchun",
      "Sement uchun",
      "Qum va suv aralashmasi uchun",
      "Tasmali tranportyorlar qo‘llanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Nima uchun qurilish choklarida shtrablar – beton blokida o‘yiqlar yoki turtib chiqqan joylar o‘rnatiladi?",
    options: [
      "Ikki qo‘shni blok betonini yaxshiroq birikishi uchun",
      "Bloklarda betonning mustahkamlik xarakteristikalarini oshirish uchun",
      "Ishlarni mehnat sarfini kamaytirish uchun",
      "Ishlarni narxini pasaytirish uchun",
    ],
    rightAnswer: 0,
  },
  
  {
    question:
      "Me’yoriy hujjat bo‘yicha ob’ekt qurilish davomiyligini aniqlashda xududning zilzilabardoshligi, cho‘l zonasida ishlash sharoitlari, cho‘kishga qarshi tadbirlar mavjudligi va boshqalar qanday inobatga olinadi? ",
    options: [
      "Maxsus koeffitsient yordamida inobatga olinadi",
      "Bu ko‘rsatkichlar inobatga olinmaydi",
      "Aniqlanayotgan davomiylikka foiz nisbatida qo‘shish yo‘li bilan inobatga olinadi",
      "Qurilgan ob’ektlar bilan taqqoslash yo‘li bilan inobatga olinadi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qalinligi 15 sm armaturalangan plita bilan (μ= 0,3 % armaturalanish koeffitsienti bilan) konus cho‘kishi 6...8 sm mu’tadil plastik beton qorishmasini zichlash uchun qaysi turdagi titratgich to‘g‘ri keladi?",
    options: [
      "Yuzaki titratgich",
      "Chuqurlik titratgichi",
      "Tashqi titratgich",
      "Oddiy titratgich",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorish qurilmasida qaysi to‘ldiruvchilarni tashish uchun tasmali tranportyorlar qo‘llaniladi?",
    options: [
      "Qum va yirik to‘ldiruvchilar uchun",
      "Sement uchun",
      "Qum va suv aralashmasi uchun",
      "Tasmali tranportyorlar qo‘llanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Nima uchun qurilish choklarida shtrablar – beton blokida o‘yiqlar yoki turtib chiqqan joylar o‘rnatiladi?",
    options: [
      "Ikki qo‘shni blok betonini yaxshiroq birikishi uchun",
      "Bloklarda betonning mustahkamlik xarakteristikalarini oshirish uchun",
      "Ishlarni mehnat sarfini kamaytirish uchun",
      "Ishlarni narxini pasaytirish uchun",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qalinligi 15 sm armaturalangan plita bilan (μ= 0,3 % armaturalanish koeffitsienti bilan) konus cho‘kishi 6...8 sm mu’tadil plastik beton qorishmasini zichlash uchun qaysi turdagi titratgich to‘g‘ri keladi?",
    options: [
      "Yuzaki titratgich",
      "Chuqurlik titratgichi",
      "Tashqi titratgich",
      "Oddiy titratgich",
    ],
    rightAnswer: 0,
  },
  
  {
    question:
      "Me’yoriy hujjat bo‘yicha ob’ekt qurilish davomiyligini aniqlashda xududning zilzilabardoshligi, cho‘l zonasida ishlash sharoitlari, cho‘kishga qarshi tadbirlar mavjudligi va boshqalar qanday inobatga olinadi? ",
    options: [
      "Maxsus koeffitsient yordamida inobatga olinadi",
      "Bu ko‘rsatkichlar inobatga olinmaydi",
      "Aniqlanayotgan davomiylikka foiz nisbatida qo‘shish yo‘li bilan inobatga olinadi",
      "Qurilgan ob’ektlar bilan taqqoslash yo‘li bilan inobatga olinadi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorish qurilmasida qaysi to‘ldiruvchilarni tashish uchun tasmali tranportyorlar qo‘llaniladi?",
    options: [
      "Qum va yirik to‘ldiruvchilar uchun",
      "Sement uchun",
      "Qum va suv aralashmasi uchun",
      "Tasmali tranportyorlar qo‘llanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Nima uchun qurilish choklarida shtrablar – beton blokida o‘yiqlar yoki turtib chiqqan joylar o‘rnatiladi?",
    options: [
      "Ikki qo‘shni blok betonini yaxshiroq birikishi uchun",
      "Bloklarda betonning mustahkamlik xarakteristikalarini oshirish uchun",
      "Ishlarni mehnat sarfini kamaytirish uchun",
      "Ishlarni narxini pasaytirish uchun",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qalinligi 15 sm armaturalangan plita bilan (μ= 0,3 % armaturalanish koeffitsienti bilan) konus cho‘kishi 6...8 sm mu’tadil plastik beton qorishmasini zichlash uchun qaysi turdagi titratgich to‘g‘ri keladi?",
    options: [
      "Yuzaki titratgich",
      "Chuqurlik titratgichi",
      "Tashqi titratgich",
      "Oddiy titratgich",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorish qurilmasida qaysi to‘ldiruvchilarni tashish uchun tasmali tranportyorlar qo‘llaniladi?",
    options: [
      "Qum va yirik to‘ldiruvchilar uchun",
      "Sement uchun",
      "Qum va suv aralashmasi uchun",
      "Tasmali tranportyorlar qo‘llanilmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Nima uchun qurilish choklarida shtrablar – beton blokida o‘yiqlar yoki turtib chiqqan joylar o‘rnatiladi?",
    options: [
      "Ikki qo‘shni blok betonini yaxshiroq birikishi uchun",
      "Bloklarda betonning mustahkamlik xarakteristikalarini oshirish uchun",
      "Ishlarni mehnat sarfini kamaytirish uchun",
      "Ishlarni narxini pasaytirish uchun",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qalinligi 15 sm armaturalangan plita bilan (μ= 0,3 % armaturalanish koeffitsienti bilan) konus cho‘kishi 6...8 sm mu’tadil plastik beton qorishmasini zichlash uchun qaysi turdagi titratgich to‘g‘ri keladi?",
    options: [
      "Yuzaki titratgich",
      "Chuqurlik titratgichi",
      "Tashqi titratgich",
      "Oddiy titratgich",
    ],
    rightAnswer: 0,
  },
  
  {
    question:
      "Me’yoriy hujjat bo‘yicha ob’ekt qurilish davomiyligini aniqlashda xududning zilzilabardoshligi, cho‘l zonasida ishlash sharoitlari, cho‘kishga qarshi tadbirlar mavjudligi va boshqalar qanday inobatga olinadi? ",
    options: [
      "Maxsus koeffitsient yordamida inobatga olinadi",
      "Bu ko‘rsatkichlar inobatga olinmaydi",
      "Aniqlanayotgan davomiylikka foiz nisbatida qo‘shish yo‘li bilan inobatga olinadi",
      "Qurilgan ob’ektlar bilan taqqoslash yo‘li bilan inobatga olinadi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qolip ishlari mehnat sarfi va narxiga qolipni aylanish ko‘rsatkichini o‘zgarishi qanday ta’sir ko‘rsatadi?",
    options: [
      "Agar qoliplarni aylanishini oshirsa, qolip ishlari mehnat sarfi va narxini kamaytirish mumkin",
      "Agar qoliplarni aylanishini kamaytirsa, qolip ishlari mehnat sarfi va narxini kamaytirish mumkin ",
      "Qoliplarni aylanishi ko‘rsatkichini o‘zgarishi qolip ishlari mehnat sarfi va narxiga ta’sir ko‘rsatmaydi",
      "Agar qoliplarni aylanishini oshirsa, qolip ishlari mehnat sarfi va narxini oshirish mumkin ",
    ],
    rightAnswer: 0,
  },
  
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Qanday xolatda beton qorishmasini qoidalarga rioya qilgan xolda zichlanayapti deb ta’kidlash mumkin?",
    options: [
      "Agar chuqurlik titratgichlari bilan zichlashda uni pastda yotuvchi beton qorishmasi qatlamiga 5...15 sm ga chuqurlashishi ta’minlangan xolatda",
      "Agar chuqurlik titratgichlari bilan zichlashda uni pastda yotuvchi beton qorishmasi qatlamiga chuqurlashtirilmagan xolatda",
      "Blokda beton qorishmasini zichlash uchun chuqurlik titratgichi qo‘llanilmagan xolatda",
      "Agar chuqurlik titratgichlari bilan zichlashda betonlashtirilayotgan blokda beton qorishmasini oshishi yuz bergan xolatda",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Betonqorgichda beton qorishmasini aralashtirish davomiyligi qaysi ko‘rsatkichlarga bog‘liq?",
    options: [
      "Beton qorishmasi konsistensiyasi, barabanning yuklash sig‘imiga; qorishmani tarkibi va haroratiga; betonqorgich konstruksiyasi va barabanni aylanish tezligiga",
      "Betonqorgich konstruksiyasi va barabanni aylanish tezligi, betonqorgich rusumi, beton qorishmasi tashkil etuvchilarini etkazib berish masofasi, ularni sifatiga",
      "Jarayonni asosiy ko‘rsatkichlariga, asosiy qurilma konstruksiyasiga, beton qorishmasi to‘ldiruvchilarini sifatiga",
      "Qadoqlagich turi, qadoqlangan material hajmiga, barabanni aylanish tezligiga, tashish vositasi tavsifnomasiga",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Gruntni qazishda bir cho‘michli ekskavator platformasini burilish burchagini o‘zgarishi uni ish unumdorligiga qanday ta’sir qiladi?",
    options: [
      "Ekskavator platformasini burilish burchagini kichiklashishi uni ish unumdorligini oshirish imkoniyatini beradi",
      "Ekskavator platformasini burilish burchagini kattalashishi uni ish unumdorligini oshirish imkoniyatini beradi ",
      "Bir cho‘michli ekskavator platformasini burilish burchagini qiymati uni ish unumdorligiga ta’sir qilmaydi",
      "Ekskavator platformasini burilish burchagini kattalashishi uni ish unumdorligini pasaytiradi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Agar to‘kish joyiga suriladigan bir cho‘michli ekskavatorning cho‘michini ko‘tarilishi bilan platformasini burilishini birlashtirsa, qanday natijalar olinadi?",
    options: [
      "Bir cho‘michli ekskavatorning ish unumdorligi oshadi",
      "Bir cho‘michli ekskavatorning ish unumdorligi pasayadi",
      "Bir cho‘michli ekskavator ko‘proq yonilg‘i ketkazadi",
      "Hech qanday natijalar olinmaydi",
    ],
    rightAnswer: 0,
  },
  
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Gidromonitorni ishlashi uchun nasosni tanlash qaysi omillarga bog‘liq?",
    options: [
      "Umumiy talab qilinadigan suv sarfi va talab qilinadigan bosimga",
      "Grunt xossalari va suv sarfiga",
      "Yuvilayotgan grunt zonasigacha bo‘lgan masofa va suv tezligiga ",
      "Gidromonitor markasi va uning tavsifnomasiga",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Me’yoriy hujjat bo‘yicha ob’ekt qurilish davomiyligini aniqlashda xududning zilzilabardoshligi, cho‘l zonasida ishlash sharoitlari, cho‘kishga qarshi tadbirlar mavjudligi va boshqalar qanday inobatga olinadi? ",
    options: [
      "Maxsus koeffitsient yordamida inobatga olinadi",
      "Bu ko‘rsatkichlar inobatga olinmaydi",
      "Aniqlanayotgan davomiylikka foiz nisbatida qo‘shish yo‘li bilan inobatga olinadi",
      "Qurilgan ob’ektlar bilan taqqoslash yo‘li bilan inobatga olinadi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Grunt massalari balansini tuzishda zahira va konlarda qaysi xollarda qo‘shimcha ishlov berishni rejalashtirish mumkin?",
    options: [
      "Mavjud qazilmalardan grunt etmaganida, tashish masofasi uzoq bo‘lgani uchun tashishni qimmatligi, qazilmani qazish va gruntni yotqizish bo‘yicha ishlar orasida to‘g‘ri kelmaslik bo‘lganda ",
      "Buyurtmachi bilan kelishilganda",
      "Faqat ishlar texnologik ketma-ketligi sharoitlari bo‘yicha",
      "Agar rejalashtirilayotgan konlar qazilayotgan qazilmalarga nisbatan yaqin joylashgan bo‘lsa",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Beton qorishmasini tashishni texnologik ruxsat etilgan davomiyligi nimaga bog‘liq?",
    options: [
      "Beton qorishmasini boshlang‘ich harorati, havo harorati, sement va tashish vositasi turiga",
      "Tashish vositasi va tashish masofasiga",
      "Beton qorishmasini tayyorlash, etkazib berish va yotqizish usuliga",
      "Tashish vositasining tebranish kuchi va tashish masofasiga",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Bir cho‘michli ekskavatorning sikllar soni ekskavator platformasini burilish burchagiga bog‘liqmi?",
    options: [
      "Bog‘liq",
      "Bog‘liq emas",
      "Bog‘liq, tashish vositasiga ishlaganda",
      "Bog‘liq, tuproqtepaga ishlaganda ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Bir cho‘michli ekskavatorning sikllar soni ekskavator platformasini burilish burchagiga bog‘liqmi?",
    options: [
      "Bog‘liq",
      "Bog‘liq emas",
      "Bog‘liq, tashish vositasiga ishlaganda",
      "Bog‘liq, tuproqtepaga ishlaganda ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ishlarni bajarishda skreperlarni harakatlanishini ratsional sxemasini tanlashga qanday talablar qo‘yiladi?",
    options: [
      "Tashish yo‘li iloji boricha qisqa, zaboy uzunligi va yuklash fronti etarli, yo‘l nishabligi optimal  bo‘lishi kerak ",
      "Sxema me’yorlarga muvofiq bo‘lishi kerak",
      "Tashish yo‘li iloji boricha qisqa va to‘g‘ri chiziqli,  yo‘l nishabligi optimal  bo‘lishi kerak ",
      "Tashish yo‘li iloji boricha qisqa, zaboy uzunligi va yuklash fronti optimal  bo‘lishi kerak ",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Buldozer bilan gruntni ag‘darishda ishlov berishni transheyali usuli uni ish unumdorligini oshiradimi yoki pasaytiradimi?   ",
    options: [
      "oshiradi",
      "pasaytiradi",
      "Murakkablashtiradi va pasaytiradi",
      "Soddalashtiradi, lekin kamaytiradi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ishlarni tashkil qilishni qaysi usulini qo‘llaganda, qurilish muddatini qisqartirish, mehnat sarfini kamaytirish va qurilish tannarxini pasaytirish mumkin bo‘ladi?",
    options: [
      "Oqim usulini",
      "Paralel usulni",
      "Ketma-ket usulni",
      "Taqqoslash usulini",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Gruntni gidravlik tashishda oqim tezligi kritikdan past bo‘lganda, nima sodir bo‘ladi?",
    options: [
      "Grunt zarrachalari quvuro‘tkazgich tubiga cho‘kadi, bu ko‘ndalang kesim maydoni kichiklashishiga, bosim yo‘qolishini o‘sishiga olib keladi",
      "Grunt zarrachalari quvuro‘tkazgich tubiga cho‘kadi, bu ko‘ndalang kesim maydoni kichiklashishiga, bosim yo‘qolishini kamayishiga olib keladi ",
      "Grunt zarrachalari quvuro‘tkazgich tubiga cho‘kadi, bu ko‘ndalang kesim maydoni oshishiga, bosim yo‘qolishini o‘sishiga olib keladi ",
      "Oqim tezligi kritikdan past bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 1.5…4,0 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Quyqa ko‘rsatilgan tezlik bilan tashiladi",
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Quyqaning tezligi 0…0,5 m/s bo‘lganda, quyqa bilan qanday hodisa yuz beradi?",
    options: [
      "Aralashmadan grunt cho‘kadi, suv tinadi",
      "Quyqa o‘z harakatini davot ettiradi",
      "Gidromexanizatsiyada quyqa bunday tezlikka  ega bo‘lmaydi",
      "Quyqa harakatlanish yo‘nalishini o‘zgartiradi",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ma’lum xo‘jalik vazifasini (boshqarish echimini) amalga oshirishga boshqarish ob’ektini yo‘naltirish maqsadida unga to‘g‘ridan-to‘g‘ri ta’sir qilish qaysi usullarda ifodalanadi?",
    options: [
      "ma’muriy",
      "iqtisodiy  ",
      "ijtimoiy-psixologik ",
      "ma’xmuriy-ijtimoiy",
    ],
    rightAnswer: 0,
  },
  {
    question:
      "Ushbu ibora “... – bu qurilishda butun majmuadagi ishlarni bir butun yaxlit  bog‘lash, ishlarni bajaruvchi hamkorlarni, materiallar va jihozlarni etkazib beruvchilarni barchasini harakatlarini muvofiqlashtirish, shuningdek, o‘rnatilgan muddatlarda ob’ektni foydalanishga topshirish uchun barcha ularni zarur bo‘lgani bilan qurilishni to‘liq ta’minlashdan iborat bo‘lgan yo‘nalishdir” tashkil qilishni uchta turidan qaysi biriga to‘g‘ri keladi?",
    options: [
      "Qurilishni tashkil qilish",
      "Mehnatni tashkil qilish",
      "Ishni tashkil qilish",
      "Tashkil qilishni hech qaysi biriga to‘g‘ri kelmaydi ",
    ],
    rightAnswer: 0,
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
