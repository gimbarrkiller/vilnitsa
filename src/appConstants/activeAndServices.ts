import {
  activityFishImg, activityHuntingImg,
  excursionsImg, fermeImg, saunaImg,
} from 'assets/images';

import { PathName } from './routes';

export const activeAndServices = [
  {
    pathname: PathName.Services,
    title: 'Выбор развлечений',
    titleGold: 'В созвучии с природой',
    subtitleText: 'Здесь каждый сможет найти для себя что-то интересное',
    services: [
      {
        title: 'Ферма и стрельбище',
        img: fermeImg,
        pathname: PathName.ServicesFerme,
      },
      {
        title: 'Банный комплекс',
        img: saunaImg,
        pathname: PathName.ServicesSauna,
      },
      {
        title: 'Экскурсии',
        img: excursionsImg,
        pathname: PathName.ServicesExcursions,
      },
    ],
  },
  {
    pathname: PathName.Activity,
    title: 'Активный отдых',
    titleGold: 'Вдали от суеты',
    subtitleText: 'Дух приключений живёт в каждом. Покорите Алтай с нами!',
    services: [
      {
        title: 'Рыбалка',
        img: activityFishImg,
        pathname: PathName.ActivityFishing,
      },
      {
        title: 'Охота',
        img: activityHuntingImg,
        pathname: PathName.ActivityHunting,
      },
    ],
  },
];
