import { GiTBrick } from 'react-icons/gi'
import img2 from '../assets/images/pc.jpg'
import img3 from '../assets/images/server.jpg'
import techSvg from '../assets/svgs/tech.svg'

import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiMapPinFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiYoutubeFill
} from "react-icons/ri"
import {
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiReact,
  SiAmazon,
  SiPostgresql,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNetapp,
  SiCsharp,
  SiFlutter,
  SiPython,
  SiDart,
  SiSwift,
} from "react-icons/si";
import { Ri4KFill } from 'react-icons/ri';


export class Product {
  title: string;
  item: string;
  description: string;
  image: string;

  constructor(title: string, item: string, description: string, image: string) {
    this.title = title;
    this.item = item;
    this.description = description;
    this.image = image;
  }
}

export class Services {
  title: string;
  item: string;
  description: string;
  icon: string;

  constructor(title: string, item: string, description: string, icon: string) {
    this.title = title;
    this.item = item;
    this.description = description;
    this.icon = icon;
  }
}

export class DataBussiness {
  title: string;
  description: string;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}

export const Color = {
  primary: '#475A71',
  secondary: '#1F1F1F',
  active: '#2985d1',
  alternative: '#ffffff',
  warning: '#E8A074',

}
export const ProductsList = [

  {
    title: 'Ramses',
    item: 'General',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    image: techSvg,
    modules: [
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
    ],
  },
  {
    title: 'Sigma',
    item: 'Farmacias',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    image: img2,
    modules: [
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
    ],
  },
  {
    title: 'Horus',
    item: 'Transporte',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    image: img3,
    modules: [
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
      {
        title: 'modulo1',
        description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor',
        icon: RiWhatsappFill,
        color: '#a02727',
      },
    ],
  },
]

export const ContactMessage = {
  title: '¿Quieres saber más sobre nuestro proyecto?',
  message: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,'
}

export const SocialMedia = [
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=59170881108&text=%20",
    icon: RiWhatsappFill
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/",
    icon: RiLinkedinFill
  },
  {
    title: "Twitter",
    link: "https://twitter.com/",
    icon: RiTwitterFill
  },
  {
    title: "Facebook",
    link: "https://codepen.io/",
    icon: RiFacebookBoxFill
  },
  {
    title: "Youtube",
    link: "https://codepen.io/",
    icon: RiYoutubeFill
  },
  {
    title: "Map",
    link: "https://codepen.io/",
    icon: RiMapPinFill
  }
]





export const ServicesList = [

  {
    title: 'Ramses',
    item: 'General',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
  {
    title: 'Sigma',
    item: 'Farmacias',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
  {
    title: 'Horus',
    item: 'Transporte',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
  {
    title: 'Horus',
    item: 'Transporte',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
  {
    title: 'Horus',
    item: 'Transporte',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
]



export const AboutData = [
  {
    title: "45",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",

  },
  {
    title: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",

  }, {
    title: "112",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",

  }
  ,
  {
    title: "10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",

  },
  {
    title: "25",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscin",

  }
]

export const FaqList = [
  {
    title: "ola",
    questions: [
      {
        title: "Lorem  dolor  amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      }
    ]
  },
  {
    title: "fara",
    questions: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      }

    ]
  },
  {
    title: "nexus",
    questions: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
    ]
  },
  {
    title: "ramses",
    questions: [
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscinasd",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      },
      {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscin",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscin",
      }
    ]
  },


]

export const Technologies = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Redux",
    icon: <SiAmazon />,
  },
  {
    name: "Redux",
    icon: <SiTypescript />,
  },
  {
    name: "Redux",
    icon: <SiAngular />,
  },
  {
    name: "Redux",
    icon: <SiPython />,
  },
  {
    name: "Redux",
    icon: <SiPostgresql />,
  },
  {
    name: "Redux",
    icon: <SiFirebase />,
  },
  {
    name: "Redux",
    icon: <SiMongodb />,
  },
  {
    name: "Redux",
    icon: <SiMysql />,
  },
  {
    name: "Redux",
    icon: <SiNetapp />,
  },
  {
    name: "Redux",
    icon: <SiJavascript />,
  },
  {
    name: "Redux",
    icon: <SiCsharp />,
  },
  {
    name: "Redux",
    icon: <SiNetapp />,
  },
  {
    name: "Redux",
    icon: <SiSwift />,
  },
  {
    name: "Redux",
    icon: <SiDart />,
  },
  {
    name: "Redux",
    icon: <SiFlutter />,
  },
];


export const ListTeam = [
  {
      title: "Desarrollo",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
      members: [
          {
              name: 'Olivier Tassinari',
              flag: 'v1.x co-creator',
              location: 'Paris, France',
              image: 'https://i.imgur.com/EXQVxqQ.png',
              social: [
                  {
                      icon: RiLinkedinFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: RiTwitterFill,
                      url: 'https://twitter.com/'
                  },
              ],


          },
          {
              name: 'Matt Brookes',
              flag: 'Pioneer',
              location: 'London, UK',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
          {
              name: 'Sebastian Silbermann',
              flag: 'Community team',
              location: 'Dresden, Germany',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
          {
              name: 'Damien Tassone',
              flag: 'Enterprise team',
              location: 'London, UK',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
          {
              name: 'Marija Najdova',
              flag: 'Community team',
              location: 'Skopje, North Macedonia',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
          {
              name: 'Danail Hadjiatanasov',
              flag: 'Enterprise team',
              location: 'Amsterdam, Netherlands',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
          {
              name: 'Josh Wooding',
              flag: 'Community member, J.P. Morgan',
              location: 'London, UK',
              image: 'https://i.imgur.com/EXQVxqQ.png',

              social: [
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
                  {
                      icon: Ri4KFill,
                      url: 'https://twitter.com/'
                  },
              ],
          },
      ]
  },
  {
      title: "Implementacion",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
      members:
          [

              {
                  name: 'Matt Brookes',
                  flag: 'Pioneer',
                  location: 'London, UK',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Sebastian Silbermann',
                  flag: 'Community team',
                  location: 'Dresden, Germany',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Damien Tassone',
                  flag: 'Enterprise team',
                  location: 'London, UK',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Marija Najdova',
                  flag: 'Community team',
                  location: 'Skopje, North Macedonia',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Danail Hadjiatanasov',
                  flag: 'Enterprise team',
                  location: 'Amsterdam, Netherlands',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Josh Wooding',
                  flag: 'Community member, J.P. Morgan',
                  location: 'London, UK',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
          ]
  },
  {
      title: "Ventas",
      description: "Lorem ipsum dolor sit amet, consectetur adip incididunt et justo e parturient mont taciti socios",
      members:
          [

              {
                  name: 'Sebastian Silbermann',
                  flag: 'Community team',
                  location: 'Dresden, Germany',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Damien Tassone',
                  flag: 'Enterprise team',
                  location: 'London, UK',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Marija Najdova',
                  flag: 'Community team',
                  location: 'Skopje, North Macedonia',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Danail Hadjiatanasov',
                  flag: 'Enterprise team',
                  location: 'Amsterdam, Netherlands',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
              {
                  name: 'Josh Wooding',
                  flag: 'Community member, J.P. Morgan',
                  location: 'London, UK',
                  image: 'https://i.imgur.com/EXQVxqQ.png',

                  social: [
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                      {
                          icon: Ri4KFill,
                          url: 'https://twitter.com/'
                      },
                  ],
              },
          ]
  }
]