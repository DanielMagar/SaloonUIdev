//////// After Team Discussion i'll apply the code  ///////////////

// import cut from '../../image/services/cut.jpg';
// import makeup from '../../image/services/makeup.jpg';
// import manicure from '../../image/services/manicure.jpg';
// import color from '../../image/services/color.jpg';

const cut =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fcut.jpg?alt=media&token=9d49a655-ee55-45a5-8e56-c00255694377';
const makeup =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fmakeup.jpg?alt=media&token=b26aa54b-67f8-4814-9437-8fa7f2d2b1fc';
const manicure =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fmanycure.jpg?alt=media&token=6a983db7-3ca6-456a-9d37-8471871f1c3f';
const color =
  'https://firebasestorage.googleapis.com/v0/b/saloonweb-ad3f5.appspot.com/o/Saloon-Images%2Fcolor.jpg?alt=media&token=340626cf-f00f-4e9b-93e6-06e79a64de65';

const services = [
  {
    id: 1,
    image: cut,
    service: [
      { name: 'Cut' },
      {
        servicesList: [
          { id: 1, name: 'Short Hair Cut', price: 400 },
          { id: 2, name: 'Long Hair Cut', price: 500 },
          { id: 3, name: 'Bangs', price: 300 },
          { id: 4, name: 'Cut + Blow dry', price: 600 },
        ],
      },
    ],
  },

  {
    id: 2,
    image: makeup,
    service: [
      { name: 'Makeup' },
      {
        servicesList: [
          { id: 1, name: 'Wedding Make-up', price: 600 },
          { id: 2, name: 'Make-up & Lashes', price: 450 },
          { id: 3, name: 'Party Glam', price: 500 },
          { id: 4, name: 'Glamurous', price: 550 },
        ],
      },
    ],
  },

  {
    id: 3,
    image: manicure,
    service: [
      { name: 'manicure' },
      {
        servicesList: [
          { id: 1, name: 'Classic Manicure', price: 400 },
          { id: 2, name: 'French Manicure', price: 500 },
          { id: 3, name: 'Press-On Nails', price: 300 },
          { id: 4, name: 'Gel Manicure', price: 550 },
        ],
      },
    ],
  },

  {
    id: 4,
    image: color,
    service: [
      { name: 'Colors' },
      {
        servicesList: [
          { id: 1, name: 'Blonde', price: 600 },
          { id: 2, name: 'Highlights', price: 500 },
          { id: 3, name: 'Color Chart', price: 700 },
          { id: 4, name: 'Custom', price: 1000 },
        ],
      },
    ],
  },

  // {
  //   id: 2,
  //   image: makeup,
  //   service: [
  //     { name: 'Makeup' },
  //     {
  //       servicesList: [
  //         { id: 1, name: 'Wedding Make-up', price: 600 },
  //         { id: 2, name: 'Make-up & Lashes', price: 450 },
  //         { id: 3, name: 'Party Glam', price: 500 },
  //         { id: 4, name: 'Glamurous', price: 550 },
  //       ],
  //     },
  //   ],
  // },
];

export default services;
