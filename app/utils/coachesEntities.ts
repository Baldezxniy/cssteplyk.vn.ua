
// import LyudmilaKropivyanska from '../../public/img/coaches/Lyudmila-Kropivyanska.jpg'
import LyudmilaKropivyanska from '../../public/t_5.jpg'
import PetroGarnik from '../../public/img/coaches/Petro-Garnik.jpg'
import SergeyVorozhbit from '../../public/img/coaches/Sergey-Vorozhbit.jpg'
import SvetlanaGranik from '../../public/img/coaches/Svetlana-Granik.jpg'
import VadimDrachuk from '../../public/img/coaches/Vadim-Drachuk.jpg'
import ValeryPisarenko from '../../public/img/coaches/Valery-Pisarenko.jpg'
import VictorSemenovich from '../../public/img/coaches/Victor-Semenovich.jpg'
import VolodymyrYakovich from '../../public/img/coaches/Volodymyr-Yakovich.jpg'


type Coaches = {
  name: string,
  description: string,
  img: any,
  classPhoto: string
}


// Для Свайпера
export const coaches: Coaches[] = [
  {
    name: "Володимир Руденко",
    img: VolodymyrYakovich,
    description: "Директор та тренер-викладач з волейболу",
    classPhoto: "object-fit-cover"
  },

  {
    name: "Людмила Кропив’янська",
    img: LyudmilaKropivyanska,
    description: "Тренер-викладач з волейболу",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Сергій Ворожбит",
    img: SergeyVorozhbit,
    description: "Тренер-викладач з волейболу",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Валерій Писаренко",
    img: ValeryPisarenko,
    description: "Тренер-викладач з греко-римської боротьби",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Світлана Гарник",
    img: SvetlanaGranik,
    description: "Тренер-викладач з легкої атлетики",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Петро Гарник",
    img: PetroGarnik,
    description: "Тренер-викладач із стрільби кульової",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Віктор Колісник",
    img: VictorSemenovich,
    description: "Тренер-викладач із футболу",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Вадим Драчук",
    img: VadimDrachuk,
    description: "Тренер-викладач із футболу",
    classPhoto: "object-fit-cover"
  }
];

// На странице с тренерами
export const coachesInPage = [
  {
    name: "Володимир Руденко",
    img: VolodymyrYakovich,
    firstParagraph: "Володимир Руденко – директор та  тренер в Теплицькій ДЮСШ. Досвідчений волейбольний тренер і визнаний експерт у своєму ділі. З багаторічним стажем у волейбольній сфері, він веде команду спортсменів до висот майстерності.",
    secondParagraph: "Володимир Якович враховує унікальність кожного гравця, створюючи ефективні тренування, які не лише розвивають технічні навички, але й вкладають фундамент в вихованні сильного характеру та командного духу. Його відданість грі та натхнення стають відмінним прикладом для наших спортсменів.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Людмила Кропив’янська",
    img: LyudmilaKropivyanska,
    firstParagraph: "Людмила Кропив’янська – талановитий тренер в нашій спортивній школі, яка присвятила себе волейболу. З великою енергією та харизмою Людмила Вікторівна проводить свої тренування, надаючи кожному учаснику можливість розкрити своє вміння та виразність.",
    secondParagraph: "Її тренування спрямовані на поєднання технічної вправності та емоційного вираження. Людмила Вікторівна не лише викладач, а й вдумливий наставник, який надихає своїх вихованців до досягнень у світі сучасного волейболу. Завдяки її підходу, наші діти розвиваються як  спортсмени так і творчі особистості.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Сергій Ворожбит",
    img: SergeyVorozhbit,
    firstParagraph: "Сергій Ворожбит – визнаний тренер спортивної школи, який відданий розвитку дитячого волейболу. З багаторічним стажем та неперевершеним досвідом, він керує командою молодих волейболістів, виховуючи не лише майстерність на спортивному майданчику, а й сильний дух та визначеність.",
    secondParagraph: "Тренерський підхід Сергія Вячеславовича базується на розвитку технічних вмінь та фізичної підготовки кожного спортсмена. Він є не лише наставником, а й другом та підтримкою, який здатен виявити і розкрити потенціал кожного гравця. Завдяки його відданості та професіоналізму, наші спортсмени досягають бажаних результатів.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Валерій Писаренко",
    img: ValeryPisarenko,
    firstParagraph: "Валерій Писаренко - визнаний фахівець і тренер з греко-римської боротьби. З великим ентузіазмом та професійним підходом Валерій Іванович веде наших спортсменів до високих досягнень у своїй дисципліні.",
    secondParagraph: "Його тренування орієнтовані на розвиток технічних навичок і формування міцного фізичного та морального стану кожного спортсмена. Валерій Писаренко, як відомий фахівець своєї справи, вміло поєднує досвід та натхнення, створюючи атмосферу, де кожен борець може розкрити свій потенціал та досягти великих висот у греко-римській боротьбі.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Світлана Гарник",
    img: SvetlanaGranik,
    firstParagraph: "Світлана Гарник – тренер-викладач з легкої атлетики з багаторічним стажем та досвідом. знаний фахівець. Працює на високий результат, має великий досвід в роботі з дітьми. Виховує в дітей згуртованість та працелюбність, професійне відношення до своїх захоплень.",
    // secondParagraph: "Його тренування орієнтовані на розвиток технічних навичок і формування міцного фізичного та морального стану кожного спортсмена. Валерій Писаренко, як відомий фахівець своєї справи, вміло поєднує досвід та натхнення, створюючи атмосферу, де кожен борець може розкрити свій потенціал та досягти великих висот у греко-римській боротьбі.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Гарник Петро",
    img: PetroGarnik,
    firstParagraph: "Гарник Петро - тренер викладач із стрільби кульової, один з кращих майстрів своєї справи. Дисципліна, цілеспрямованість- це ті основні риси які Петро Іванович прививає своїм вихованцям, все це на виході дає високі результати на змаганнях різного рангу.",
    // secondParagraph: "Його тренування орієнтовані на розвиток технічних навичок і формування міцного фізичного та морального стану кожного спортсмена. Валерій Писаренко, як відомий фахівець своєї справи, вміло поєднує досвід та натхнення, створюючи атмосферу, де кожен борець може розкрити свій потенціал та досягти великих висот у греко-римській боротьбі.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Віктор Колісник",
    img: VictorSemenovich,
    firstParagraph: "Віктор Колісник - тренер-викладач по футболу з великим досвідом, тривалий час працює у спортивній школі, фехівець своєї справи, привив багатьом своїм вихованцям любов до спорту, до футболу. Зарядженість на результат- ціль Віктора Семеновича. Особлива увага на технічну та фізичну підготовку юних футболістів.",
    // secondParagraph: "Його тренування орієнтовані на розвиток технічних навичок і формування міцного фізичного та морального стану кожного спортсмена. Валерій Писаренко, як відомий фахівець своєї справи, вміло поєднує досвід та натхнення, створюючи атмосферу, де кожен борець може розкрити свій потенціал та досягти великих висот у греко-римській боротьбі.",
    classPhoto: "object-fit-cover"
  },
  {
    name: "Вадим Драчук",
    img: VadimDrachuk,
    firstParagraph: "Вадим Драчук -  молодий, креативний тренер-викладач по футболу в нашій школі, малий стаж роботи компенсує працелюбністю та більш новітнім відношенням до тренувань своїх підопічних, які з радістю та захватом поспішають до Вадима Олексійовича на тренування, розкриваючи свої здібності і вміння.",
    // secondParagraph: "Його тренування орієнтовані на розвиток технічних навичок і формування міцного фізичного та морального стану кожного спортсмена. Валерій Писаренко, як відомий фахівець своєї справи, вміло поєднує досвід та натхнення, створюючи атмосферу, де кожен борець може розкрити свій потенціал та досягти великих висот у греко-римській боротьбі.",
    classPhoto: "object-fit-cover"
  },
]