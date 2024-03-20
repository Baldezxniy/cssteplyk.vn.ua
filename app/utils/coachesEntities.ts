
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

export const coaches: Coaches[] = [
  {
    name: "Володимир Руденко",
    img: VolodymyrYakovich,
    description: "Тренер-викладач з волейболу",
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