import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const navLinks = [
  {
    id: 1,
    title: 'Cars',
    icon: <IoIcons.IoIosCar />,
    path: '/',
    cName: 'sidebar-link',
  },
  {
    id: 2,
    title: 'Reserve',
    icon: <MdIcons.MdOutlineAddCard />,
    path: '/reserve',
    cName: 'sidebar-link',
  },
  {
    id: 3,
    title: 'My Reservations',
    icon: <MdIcons.MdOutlineViewTimeline />,
    path: '/myreservations',
    cName: 'sidebar-link',
  },
  {
    id: 4,
    title: 'Add Car',
    icon: <GiIcons.GiCartwheel />,
    path: '/add-car',
    cName: 'sidebar-link',
  },
  {
    id: 5,
    title: 'Delete Car',
    icon: <RiIcons.RiDeleteBack2Line />,
    path: '/delete-car',
    cName: 'sidebar-link',
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaIcons.FaTwitter />,
    cName: 'social-icon',
  },
  {
    id: 2,
    icon: <FaIcons.FaFacebookF />,
    cName: 'social-icon',
  },
  {
    id: 3,
    icon: <FaIcons.FaGooglePlusG />,
    cName: 'social-icon',
  },
  {
    id: 4,
    icon: <FaIcons.FaPinterestP />,
    cName: 'social-icon',
  },
];