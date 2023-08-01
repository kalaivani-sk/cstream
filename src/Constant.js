import AntMan from './assests/img/ant-man.jpg'
import Avengers2 from './assests/img/avengers-2.jpg'
import BlackPanther from './assests/img/black-panther.jpg'
import CaptainAmerica from './assests/img/Captain-America.jpg'
import DoctorStrange from './assests/img/doctorStrange.jpg'
import GuardiansOfTheGalaxy from './assests/img/guardians-of-the-galaxy.jpg'
import SpiderManHomeComming from './assests/img/spider-man-homecoming.jpg'
import Thor3 from './assests/img/thor-3.png'

import * as Hi from 'react-icons/hi'
import * as Md from 'react-icons/md'
import * as Pi from 'react-icons/pi'
import * as Go from 'react-icons/go'
import * as Io from 'react-icons/io5'

export const regex = {
    email: /^\S+@\S+\.\S+$/,
    password: /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/,
    phone: /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
}

export const credentialsPosterCollections = [
    {
        title: 'Ant Man',
        img: AntMan,
        ratting: 3,
        actors: ["Paul Rudd", "Evangeline Lilly", "Corey Stoll", "Bobby Cannavale", "Michael Peña", "Anthony Mackie"]
    },
    {
        title: 'Avengers 2',
        img: Avengers2,
        ratting: 5,
        actors: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson", "Mark Ruffalo", "Jeremy Renner", "Chris Hemsworth"]
    },
    {
        title: 'Black Panther',
        img: BlackPanther,
        ratting: 4,
        actors: ["Tenoch Huerta", "Sudwick Boseman", "Letitia Wright", "Michael B. Jordan", "Angela Bassett", "Danai Gurira"]
    },
    {
        title: 'Captain America',
        img: CaptainAmerica,
        ratting: 5,
        actors: ["Chris Evans", "Tommy Lee Jones", "Hugo Weaving", "Hayley Atwell", "Dominic Cooper"]
    },
    {
        title: 'Doctor Strange',
        img: DoctorStrange,
        ratting: 3,
        actors: ["Robert Downey Jr.", "Gwyneth Paltrow", "Rebecca Hall", "Don Cheadle", "Stephanie Szostak"]
    },
    {
        title: 'Guardians Of The Galaxy',
        img: GuardiansOfTheGalaxy,
        ratting: 2,
        actors: ["James Gunn", "Chris Pratt", "Joe Saldana", "Vin Diesel", "Sean Gunn", "Karen Gillan"]
    },
    {
        title: 'Spider Man Home Comming',
        img: SpiderManHomeComming,
        ratting: 4,
        actors: ["Tom Holland", "Michael Keaton", "Robert Downey Jr", "Marisa Tomei", "Jon Favreau   "]
    },
    {
        title: 'Thor 3',
        img: Thor3,
        ratting: 3,
        actors: ["Chris Hemsworth", "Cate Blanchett", "Tom Hiddleston", "Jeff Colletblum", "Karl Urban"]
    },
]

export const icons = {
    starOutline: Hi.HiOutlineStar,
    filledStar: Hi.HiStar,
    errorOutline: Md.MdOutlineErrorOutline,
    closedEyeOutLine: Pi.PiEyeClosed,
    openedEyeOutLine: Pi.PiEye,
    homeOutLine: Go.GoHome,
    homeFilled: Go.GoHomeFill,
    groupOutline: Hi.HiOutlineUserGroup,
    groupFilled: Hi.HiUserGroup,
    heartOutline: Hi.HiOutlineHeart,
    heartFilled: Hi.HiHeart,
    profileOutline: Io.IoPersonCircleOutline,
    profileFilled: Io.IoPersonCircleSharp
}