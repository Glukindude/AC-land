import {SliderAppModel} from "../models/slider-app.model";

export const sliderApps: SliderAppModel[] = [
  {
    name: 'Agri Scouting',
    description: [
      'Автоматичне створення планів на огляд полів',
      'Перегляд актів огляду полів',
      'Інформація щодо стану посівів та потенційної урожайності'
    ],
    image: 'agri-scouting.jpg'
  },
  {
    name: 'Agri Management',
    description: [
      'Створення завдань на проведення польових робіт',
      'Створення актів виконаних робіт',
      'Планування та список доступної техніки'
    ],
    image: 'agri-management.jpg'
  }
];