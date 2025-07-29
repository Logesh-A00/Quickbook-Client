import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

export const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg" },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg" },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg" },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg" },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg" },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg" },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg" },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg" },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg" },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg" },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg" },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg" },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg" }
]

export const dummyShowsData = [
    {
        _id: '1',
        title: 'Deadpool & Wolverine',
        release_date: '2025-07-26',
        genres: [
            { id: 28, name: 'Action' },
            { id: 35, name: 'Comedy' }
        ],
        runtime: 128,
        vote_average: 8.7,
        poster_path: 'https://image.tmdb.org/t/p/original/a0GM57AnJtNi7lMOCamniiyV10W.jpg'
    },
    {
        _id: '2',
        title: 'Despicable Me 4',
        release_date: '2025-07-03',
        genres: [
            { id: 16, name: 'Animation' },
            { id: 35, name: 'Comedy' },
            { id: 10751, name: 'Family' }
        ],
        runtime: 95,
        vote_average: 7.2,
        poster_path: 'https://image.tmdb.org/t/p/original/tt79dbOPd9Z9ykEOpvckttgYXwH.jpg'
    },
    {
        _id: '3',
        title: 'Inside Out 2',
        release_date: '2025-06-14',
        genres: [
            { id: 16, name: 'Animation' },
            { id: 35, name: 'Comedy' },
            { id: 18, name: 'Drama' }
        ],
        runtime: 100,
        vote_average: 8.4,
        poster_path: 'https://image.tmdb.org/t/p/original/gg5j9xhKfElFUPpYRIWCDpWfogh.jpg'
    },
    {
        _id: '4',
        title: 'Twisters',
        release_date: '2025-07-19',
        genres: [
            { id: 28, name: 'Action' },
            { id: 18, name: 'Drama' }
        ],
        runtime: 115,
        vote_average: 7.6,
        poster_path: 'https://image.tmdb.org/t/p/original/gDPKUiIbvNhrO0zj2KDDxFR1inV.jpg'
    }
]

export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: null,
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: null,
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack" },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: null,
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2", "A3"],
        "isPaid": true
    }
]
