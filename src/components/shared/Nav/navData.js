import {MdKeyboardArrowDown} from 'react-icons/md';
import icon1 from '../../../assets/shared/navbar-assets/apple-icon.png'
import icon2 from '../../../assets/shared/navbar-assets/google-play.png';

export const linksData = [
  {
    id:1,
    to:'/',
    title: "About",
    drop: <MdKeyboardArrowDown />
  }
  ,
  {
    id:2,
    to:'/',
    title: "Services",
    drop: <MdKeyboardArrowDown />
  }
  ,
  {
    id:3,
    to:'/career',
    title: "Career",
    drop: ""
  }
  ,
  {
    id:4,
    to:'/contact',
    title: "Contact us",
    drop: ""
  }
  ,
  {
    id:5,
    to:'/help',
    title: "Help Center",
    drop: ""
  }
];

export const downloadData = [
  {
    id:1,
    to:"/",
    icon: icon1,
    alt: 'apple-icn',
    title: "Apple Store"
  }
  ,
  {
    id:2,
    to:"/",
    icon: icon2,
    alt: 'googleplay-icn',
    title: "Google Play"
  }
];