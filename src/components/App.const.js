/** Переменные */
import { nanoid } from 'nanoid';

export const newsCategory = [
    { title: 'Сейчас в СМИ', active: true,  id: nanoid() },
    { title: 'в Германии', active: false,  id: nanoid() },
    { title: 'Рекомендуем', active: false,  id: nanoid() }
];

export const newsItems = [
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'Путин упростил получение автомобильных номеров',
        id: nanoid()
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'В команде Зеленского раскрыли план реформ на Украине',
        id: nanoid()
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
        id: nanoid()
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'Суд закрыл дело Демпартии США против России',
        id: nanoid()
    },
    {
        icon: "https://placeimg.com/20/20/any",
        link: 'https://netology.ru/',
        title: 'На Украине призвали создать ракеты для удара по Москве',
        id: nanoid()
    }
]

export const exchange = [
    { name: 'USD MOEX', value: '63,52', dif: '+0,09', id: nanoid() },
    { name: 'EUR MOEX', value: '70,86', dif: '+0,14', id: nanoid() },
    { name: 'НЕФТЬ', value: '64,90', dif: '+1,63%', id: nanoid() },
];

export const advertising = {
    icon: "https://placeimg.com/70/70/tech",
    link: 'https://netology.ru/',
    title: 'Работа над ошибками',
    text: 'Смотрите на ЯндЫксе и запоминайте'
}

export const searchCategory = [
    { title: 'Видео', active: true, id: nanoid() },
    { title: 'Картинки', active: false, id: nanoid() },
    { title: 'Новости', active: false, id: nanoid() },
    { title: 'Карты', active: false, id: nanoid() },
    { title: 'Маркет', active: false, id: nanoid() },
    { title: 'Переводчик', active: false, id: nanoid() },
    { title: 'Эфир', active: false, id: nanoid() },
    { title: 'еще', active: false, id: nanoid() }
]

export const searchExamples = [
    'фаза луны сегодня',
    'самый тупой запрос',
    'что если я шаурма',
    'кого зовут как Андрея',
    'кот Никель и его друзья'
]

export const advertisingBanner = {
    icon: "https://placeimg.com/800/80/tech",
    link: 'https://netology.ru/',

}

export const favourite = [
    { title: 'Недвижимость', text: 'о сталинках', id: nanoid() },
    { title: 'Маркет', text: 'люстры и светильники', id: nanoid() },
    { title: 'Авто.ру', text: 'привод 4x4 до 500 000', id: nanoid() },
];

export const tvProgramm = [
    { time: '02:00', name: 'ТНТ.Best', channel: 'ТНТ.International', id: nanoid() },
    { time: '02:15', name: 'Джинглики', channel: 'Карусель INT', id: nanoid() },
    { time: '02:25', name: 'Наедине со всеми', channel: 'Первый', id: nanoid() },
];

export const onAir = [
    { name: 'Управление как искусство', channel: 'Успех', id: nanoid() },
    { name: 'Ночь. Мир в это время', channel: 'earthTV', id: nanoid() },
    { name: 'Андрей Возн...', channel: 'Совершенно секретно', id: nanoid() },
]