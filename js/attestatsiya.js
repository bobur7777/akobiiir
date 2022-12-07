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
    options: ["Ishlarni tashkil qilish – bu mehnatning barcha elementlarini: ishchilar mehnati, asboblar, mehnat vositalari oqilona birlashtirish va ulardan foydalanishga qaratilgan chora-tadbirlar tizimidir", 
              "Ishlarni tashkil qilish – bu materiallarga ishlov berish va qayta ishlash jarayonlarini majmuidir", 
              "Ishlarni tashkil qilish – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir", 
              "Ishlarni tashkil qilish – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir"],
    rightAnswer: 0,
  },
  {
    question: "Texnik me’yorlash vazifalari qaysi biri?",
    options: ["Texnik jihatdan asoslangan me’yorlarni o‘rnatish, ishlarni bajarish usullarini keng tadbiq etish uchun ularni samaraliroqni tanlash, mehnatni yaxshiroq tashkil qilishga imkon beradigan sharoitlarni aniqlash", 
              "Ma’lum vaqt davomida qo‘l, mexanizatsiyalashgan, uzlukli va uzluksiz qurilish jarayonlarini ish vaqtini sarflarini barcha turlarini hisobga olish ", 
              "Ish vaqtining davomiyligi va turib qolishlar sabablarini hamda ularni oldini olish usullarini aniqlash maqsadida ish vaqtini ta’minlanganlik darajasini baholash", 
              "Umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimini aniqlash"],
    rightAnswer: 0,
  },
  {
    question: "“Ishlarni texnologiyasi” iborasiga to‘g‘ri ta’rif bering.",
    options: ["Ishlarni texnologiyasi – bu materiallarga ishlov berish va qayta ishlash jarayonlarini majmuidir", 
              "Ishlarni texnologiyasi – bu mehnatning barcha elementlarini: ishchilar mehnati, asboblar, mehnat vositalari oqilona birlashtirish va ulardan foydalanishga qaratilgan chora-tadbirlar tizimidir ", 
              "Ishlarni texnologiyasi – bu mehnat vositalari, mehnat predmetlari va mehnat predmetlariga mehnat vositalarining ta’sir qilish usullarini rivojlanish va takomillashtirishni uzluksiz jarayonidir", 
              "Ishlarni texnologiyasi – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir"],
    rightAnswer: 0,
  },
  {
    question: "Ishchi usul deb nimaga aytiladi?",
    options: ["Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)", 
              "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi. ", 
              "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)", 
              "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish) "],
    rightAnswer: 0,
  },
  {
    question: "Ishchi operatsiya deb nimaga aytiladi?",
    options: ["Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.", 
              "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)", 
              "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)", 
              "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)"],
    rightAnswer: 0,
  },
  {
    question: "Oddiy jarayon deb nimaga aytiladi?",
    options: ["Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)", 
              "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.", 
              "Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)", 
              "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)"],
    rightAnswer: 0,
  },
  {
    question: "Murakkab jarayon deb nimaga aytiladi?",
    options: ["Bir-biriga o‘zaro tashkiliy va yakuniy mahsulotning birligi bilan bog‘liq bo‘lgan bir nechta oddiy jarayonlarning majmuasi (yig‘ma temirbeton konstruksiyalarni yig‘ish va choklarni bekitish)", 
              "Tayyor mahsulotni olishni ta’minlaydigan bir nechta texnologik o‘zaro bog‘liq ishchi operatsiyalari majmuasi (ekskavator tomonidan tuproqni avtosamosvalga yuklash bilan qazish)", 
              "Qurilish jarayonining tashkiliy bo‘linmas va texnologik jihatdan bir hil qismi (ekskavator cho‘michiga gruntni olish) ma’lum bir birlamchi mahsulotlarni olishni ta’minlaydigan bir nechta ishchi usullar majmuasi.", 
              "Bitta maqsad bilan birlashtirilgan ishchining bir nechta harakatlarining majmuasi (ekskavatorni boshqarish richaglarini qo‘l bilan yoqish)"],
    rightAnswer: 0,
  },
  {
    question: "“Vaqt me’yori” iborasi deganda nima tushuniladi?",
    options: ["Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi ", 
              "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi ", 
              "Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi ", 
              "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi "],
    rightAnswer: 0,
  },
  {
    question: "“Unumdorlik me’yori” iborasi deganda nima tushuniladi? ",
    options: ["Vaqt birligida mashina yoki mexanizm yordamida bajarilishi kerak bo‘lgan ish hajmi", 
              "Vaqt birligida tegishli malakaga ega ishchi tomonidan bajarilishi kerak bo‘lgan ish hajmi", 
              "Tegishli malakaga ega bo‘lgan barcha ishchilar tomonidan sifatli mahsulot birligini ishlab chiqarish yoki ish birligini bajarish uchun sarflangan vaqtning umumiy miqdori; tayyor mahsulot o‘lchov birligiga ish kunlari yoki soatlarda ifodalanadi", 
              "Birlik ish hajmini yoki mahsulot birligini ishlab chiqarish uchun   mashina ishlashi kerak bo‘lgan vaqt miqdori; mahsulot o‘lchov birligiga smenada yoki soatlarda ifodalanadi"],
    rightAnswer: 0,
  },
  {
    question: "“Materiallar sarfi me’yori” iborasi deganda nima tushuniladi? ",
    options: ["Materiallar sarfi me’yori – bu ish hajmi yoki mahsulot birligi uchun zarur bo‘lgan materiallar miqdoridir ", 
              "Materiallar sarfi me’yori – bu ob’ekt bo‘yicha ishlarni barcha hajmiga zarur  bo‘lgan materiallar miqdoridir", 
              "Materiallar sarfi me’yori – bu ish hajmini yoki mahsulotning birligiga sarflangan vaqtdir", 
              "Materiallar sarfi me’yori – bu texnik me’yorlarning mavjud bo‘lmagan turidir"],
    rightAnswer: 0,
  },
  {
    question: "Xalqaro standartlar bo‘yicha bir cho‘michli ekskavatorlarning qaysi ko‘rsatkichlari asosiy tavsifi hisoblanadi?",
    options: ["Cho‘michini sig‘imi va og‘irligi", 
              "Gabarit o‘lchamlari", 
              "Texnik parametrlari", 
              "Ishchi siklining davomiyligi"],
    rightAnswer: 0,
  },
  {
    question: "Qurilish ishlarini bajarish uchun qanday resurslar talab qilinadi?",
    options: ["Qurilish mashinalari va mexanizmlari, mablag‘lar, ishchi kuchi, qurilish materiallari", 
              "Loyihaviy materiallar, qurilish mashinalari va mexanizmlari, mablag‘lar, ishchi kuchi, qurilish materiallari", 
              "Yordamchi inshootlar, loyihaviy materiallar, mablag‘lar", 
              "Omborlar, yonilg‘i, xom-ashyo, mashina va mexanizmlar, ishchi kuchi"],
    rightAnswer: 0,
  },
  {
    question: "Ekskavatorning qaysi ish unumdorligi ekspluatatsion deb aytiladi?",
    options: ["Oldini olib bo‘lmaydigan turib qolishlarni hisobga olgan xolda muayyan sharoitlarda ishlaganda ekskavatorning o‘rtacha haqiqiy ish unumdorligi", 
              "Hisobiy sharoitlarda ma’lum vaqt davomida uzluksiz ishlagandagi ish unumdorligi", 
              "Ma’lum grunt sharoitlarda kun davomida ekskavator yordamida bajarilishi kerak bo‘lgan ish hajmi ", 
              "Zaboyda ishlarni ma’lum sharoitlariga mos keladigan ekskavatorning o‘rtacha shartli ish unumdorligi"],
    rightAnswer: 0,
  },
  {
    question: "Qaysi qurilish jarayonlarini me’yorlash kerak?",
    options: ["Zamonaviy, ilg‘or usullar bilan olib boriladigan ratsional tashkil qilingan qurilish jarayonlarini", 
              "Barcha qurilish-montaj jarayonlarini", 
              "Tayyorgarlik, asosiy va tashish jarayonlarini", 
              "Alohida olingan ob’ektda bajariladigan noyob jarayonlarni "],
    rightAnswer: 0,
  },
  {
    question: "Vaqt, ishlab chiqarish va unumdorlik me’yorlarini ishlab chiqish qanday ketma-ketlikda bajariladi?",
    options: ["Me’yorlanadigan qurilish jarayonini dasblabki o‘rganish; qurilish jarayonini normal amalga oshirish uchun sharoitlarni yaratish; zveno tarkibini aniqlash; ish vaqtini davomiyligi va taqsimotini qayd qilish; bir qator qurilishlarda ish vaqti sarfini aniqlash bo‘yicha materiallarni tizimlashtirish, taxlil qilish va ishlov berish; ishlab chiqarish sharoitida me’yorlarni tekshirish", 
              "Ilmiy-izlanish ishlarini o‘tkazish, loyiha-smeta hujjatlarini tuzish, me’yorlarni ishlab chiqish uchun ishlarni aniqlash, mashina va mexanizmlarni, ishlarni bajarish usullarini tanlash, ish bo‘yicha ma’lumotlarni yig‘ish, asosiy ko‘rsatkichlarni hisoblash va ularni taxlil qilish, ekspertiza qilish, olingan ma’lumotlarni tekshirish", 
              "Me’yorlanadigan qurilish jarayonini dasblabki o‘rganish; qurilish jarayonini normal amalga oshirish uchun sharoitlarni yaratish; zveno tarkibini aniqlash; ish vaqtini davomiyligi va taqsimotini qayd qilish", 
              "Ilmiy-izlanish ishlarini o‘tkazish, ish vaqtini davomiyligi va taqsimotini qayd qilish; bir qator qurilishlarda ish vaqti sarfini aniqlash bo‘yicha materiallarni tizimlashtirish, taxlil qilish va ishlov berish; ishlab chiqarish sharoitida me’yorlarni tekshirish"],
    rightAnswer: 0,
  },
  {
    question: "Buldozerning asosiy ishchi parametrlari va ish unumdorligi qaysi ko‘rsatkich bilan belgilanadi?",
    options: ["Ular osilgan asosiy traktor quvvati bilan", 
              "Qurilish xududidagi grunt sharoitlari bilan", 
              "Asosiy mashina konstruksiyasi bilan", 
              "Uzatmali qurilma quvvati bilan"],
    rightAnswer: 0,
  },
  {
    question: "Grunt zichlanuvchanligiga qaysi omillar ta’sir qiladi?",
    options: ["Mexanik tarkibi, bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni, zichlash usuli va qo‘llaniladigan mashnalar parametrlari", 
              "Zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni, zichlash usuli va qo‘llaniladigan mashnalar parametrlari ", 
              "Bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, bir joydan mexanizmlarning o‘tishlar soni ", 
              " Bog‘langanligi, dastlabki zichligi va uni namligi, zichlanayotgan qatlamlar qalinligi, zichlash usuli va qo‘llaniladigan mashnalar parametrlari "],
    rightAnswer: 0,
  },
  {
    question: "Gruntni gidravlik usulda tashishda qanday tezlik kritik deb aytiladi?",
    options: ["Quyqatashgich tubiga cho‘kmasdan hisobiy diametrli zarrachalarni tashishni ta’minlaydigan oqimning eng kichik tezligi", 
              "Gidromonitor ishchi jihozi bilan berilgan oqim tezligiga teng bo‘lgan tezlik", 
              "Quyqao‘tkazgich bo‘yicha quyqani o‘tishini eng maqbul rejimi yaratiladigan, hisobiy diametrli grunt zarrachalarini tashish tezligi", 
              "Cho‘kmaga gruntni cho‘kishisiz quyqao‘tkazgich bo‘yicha quyqani o‘tishi mumkin bo‘lgan, uni oqimining eng katta tezligi"],
    rightAnswer: 0,
  },
  {
    question: "Er ishlarini bajarishning qaysi bosqichlarida ularning sifatini nazorat qilish zarur?",
    options: ["Ularni bajarish jarayonida, ob’ektda ishlar tugallangandan keyin, bajaruvchilarda ishni qabul qilishda", 
              "Qurilish tugagandan so‘ng", 
              "Asosiy qurilish-montaj ishlari tugaganda", 
              "Er ishlarini bajarishda"],
    rightAnswer: 0,
  },
  {
    question: "Tuproq inshootlarni qurishda berilgan o‘lcham va belgilardan chetga chiqishga yo‘l qo‘yiladimi?",
    options: ["Ha, agar maxsus me’yorlar bilan o‘rnatilgan chegaraviy yo‘l qo‘yiladigan chetga chiqishga ularni ko‘rsatkichlari mos kelsa", 
              "Ha, agar ushbu  chetga chiqishlar  inshootni ishlash rejimini buzmasa", 
              "Ha, agar buyurtmachi bilan kelishilgan bo‘lsa", 
              "Ha, agar ob’ektni foydalanishga topshirish zaruriyati bo‘lsa"],
    rightAnswer: 0,
  },
  {
    question: "Izlanishlarni qaysi turida seysmologik izlanishlar o‘tkaziladi?",
    options: ["Muhandislik-geologik", 
              "Ekologik-meteorologik", 
              "Muhandislik-gidrologik", 
              "Muhandislik- botanik"],
    rightAnswer: 0,
  },
  {
    question: "Qurilishni xom-ashyo, mahalliy materiallar, yonilg‘i, elektrenergiya, suv, gaz, issiqlik, tashish aloqalari, ishchilar, turar joy, maishiy-oqartuv tashiklotlari bilan ta’minlash variantlarini tanlash va asoslash qaysi izlanishlar jarayonida amalga oshiriladi?",
    options: ["Iqtisodiy", 
              "Ekologik", 
              "Kameral", 
              "Dala"],
    rightAnswer: 0,
  },
  {
    question: "Suv xo‘jaligi ob’ektlarini loyihalash uchun qanday turdagi izlanishlar mavjud?",
    options: ["Muhandislik va iqtisodiy ", 
              "Ekologik va tekshirish", 
              "Muhandislik va texnik", 
              "Oddiy va murakkab"],
    rightAnswer: 0,
  },
  {
    question: "Izlanish faoliyati litsenzion hisoblanadimi?",
    options: ["Hisoblanadi", 
              "Hisoblanmaydi", 
              "Tabiatni muhofaza qilish zonalarida ishlarni bajarishda faqat litsenziya kerak", 
              "Aholi zich yashaydigan xududlarda ishlarni bajarishda faqat litsenziya kerak"],
    rightAnswer: 0,
  },
  {
    question: " “Loyihalash” iborasiga to‘g‘ri ta’rif bering. ",
    options: ["Loyihalash – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi ", 
              "Loyihalash – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir", 
              "Loyihalash – bu qandaydir inshoot yoki inshootlar majmuasini qurish bo‘yicha oldin tayyorlangan, texnik va iqtisodiy hisob-kitoblar bilan asoslangan va grafik  ko‘rinishida   chizilgan echimdir ", 
              "Loyihalash – bu kelajakdagi ob’ektni loyihalash uchun boshlang‘ich ma’lumotlarni tayyorlash va uni qurish va foydalanish sharoitlarini har tomonlama taxlil qilish maqsadida kelajakdagi qurilish xududi yoki maydonini iqtisodiy va muhandislik (texnik) izlanishlar majmuidir"],
    rightAnswer: 0,
  },
  {
    question: "Loyihalashni qaysi turida ketma-ket smeta hisobi bilan loyiha, undan keyin smeta bilan ishchi hujjatlar ishlab chiqiladi?",
    options: ["Ikki bosqichli loyihalashda ", 
              "Bir bosqichli loyihalashda ", 
              "Uch bosqichli loyihalashda ", 
              "To‘rt bosqichli loyihalashda  "],
    rightAnswer: 0,
  },
  {
    question: "Loyihalashni qaysi turida narhini yig‘ma smeta hisobi bilan ishchi loyiha ishlab chiqiladi va namunaviy va qayta qo‘llaniladigan loyihalardan foydalanish nazarda tutiladi?",
    options: ["Bir bosqichli loyihalashda ", 
              "Ikki bosqichli loyihalashda ", 
              "Uch bosqichli loyihalashda ", 
              "To‘rt bosqichli loyihalashda  "],
    rightAnswer: 0,
  },
  {
    question: " “Taqvimiy reja” iborasiga to‘g‘ri ta’rif bering ",
    options: ["Taqvimiy reja – bu inshootlarni butun majmuasi va alohida har bir inshootning chegarasida barcha ishlarni bajarishni ketma-ketligi muddatini belgilovchi hujjatdir. ", 
              "Taqvimiy reja – bu mutaxassislar jamoasini o‘zaro muvofiqlashtirilgan kompleks ishi natijasi bo‘lib, inshootlarni va ularni majmualarini qurish uchun texnik hujjat hisoblanadi ", 
              "Taqvimiy reja – bu qandaydir jarayonni (masalan, loyihalash, qurish, foydalanish) tayyorlash, sozlash, tartibga solish uchun barcha mehnat elementlarini ratsional birikishi bo‘yicha tadbirlar tizimidir", 
              "Taqvimiy reja – umumiy maqsadlarga muvofiq ishlarni yoki qandaydir harakatlarning tartibi, ketma-ketligi va bajarilish muddati va real imkoniyatlar bilan bog‘liq xolda nazarda tutuvchi oldindan belgilangan tadbirlar tizimidir "],
    rightAnswer: 0,
  },
  {
    question: `Quyidagi ta’rifda “Taqvimiy rejaning ushbu modeli (turi) taqvimiy rejalashtirish bilan bohlangan, hisob-kitoblarni ko‘pgina qismini bajarishni avtomatlashtirish imkoniyatini beruvchi, bajarilayotgan barcha ishlar orasidagi bog‘lanishni matematik ta’riflash imkoniyatini beradi” taqvimiy rejaning qaysi modeli (turi) haqida gapiriladi?`,
    options: [`Tarmoqli model haqida`, 
              `Chiziqli model haqida`, 
              `Hech qaysi biri haqida`, 
              `Hech qaysi biri haqida`],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda hodisa – bu … ",
    options: ["–  bir yoki bir nechta ishlarni boshlanish imkoniyati uchun zarur va etarli, bir yoki bir nechta ishlarni tugatish haqiqatidir", 
              "–  qaysidir hodisadan oldin bo‘lgan, qurilish jarayoni", 
              "–  vaqt va resurslar sarflanadigan jarayon", 
              "–  tarmoqli grafikni bunday elementi mavjud emas"],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda soxta ish  – bu .... shartli ishdir ",
    options: [" – hodisalar orasidagi bog‘lanishni ko‘rsatadigan, vaqt ham boshqa resurslar ham sarflanmaydigan ", 
              "–  vaqt va resurslar sarflanadigan ", 
              "–  bir yoki bir nechta ishlarni boshlanish imkoniyati uchun zarur va etarli, bir yoki bir nechta ishlarni tugatish haqiqatini ko‘rsatadigan ", 
              "– tarmoqli grafikni bunday elementi mavjud emas"],
    rightAnswer: 0,
  },
  {
    question: "Tarmoqli grafikda kritik ish – bu ... ishdir ",
    options: [" – kritik yo‘lda yotuvchi", 
              "–  vaqt va resurslar sarflanadigan ", 
              "– hodisalar orasidagi bog‘lanishni ko‘rsatadigan, vaqt ham boshqa resurslar ham sarflanmaydigan", 
              "– tarmoqli grafikni bunday elementi mavjud emas"],
    rightAnswer: 0,
  },
  {
    question: ``,
    options: [``, 
              ``, 
              ``, 
              ``],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
    rightAnswer: 0,
  },
  {
    question: "",
    options: ["", 
              "", 
              "", 
              ""],
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
    };
    if (complatedAnswer == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  };
  complatedAnswer.push(indexOfQuestion);
};

const checkAnswer = el => {
  if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    el.target.classList.add('correct');
    updateAnswerTracker('correct');
    score++;
  } else {
    el.target.classList.add('wrong');
    updateAnswerTracker('wrong');
  }
  disabledOptions();
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add('disabled');
    if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add('correct');
    }
  })
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove('disabled', 'correct', 'wrong');
  })
};

const answerTracker = () => {
  questions.forEach(() => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
};

const updateAnswerTracker = status => {
  console.log(answersTracker.children);
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

for(option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}

const validate = () => {
  if(!optionElements[0].classList.contains('disabled')) {
    alert('Siz savolga javob bermadinggiz keyingi savolni ko`rish uchun javoblardan birini belgilang');
  } else {
    randomQuestion();
    enableOptions();
  }
};

btnNext.addEventListener('click', validate);

for (option of optionElements) {
  option.addEventListener('click', e => checkAnswer(e));
}



const quizOver = () => {
  if(numberOfQuestion = numberOfAllQuestion) () =>{
  document.querySelector('.quiz__over__modle').classList.add('active');
  correctAnswer.innerHTML = score;
  numberOfAllQuestion2.innerHTML = questions.length;
}};

const tryAgain = () => {
  window.location.reload();
}

btnTryAgain.addEventListener('click', tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
});
