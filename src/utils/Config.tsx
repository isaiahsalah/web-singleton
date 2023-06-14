

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

//Se seleccionan los colores que representan a la organización
export const Color = {
  primary: '#475A71',
  secondary: '#1F1F1F',
  active: '#2985d1',
  alternative: '#ffffff',
  warning: '#E8A074',

}



//Se edita los datos que apareceran en el banner principal de la la pagina de inicio
export const PresentationData = {
  title: 'Tecnología que te Libera...',
  subtitle: 'Nuestro Método de Trabajo revolucionario se unen para brindarte una experiencia única y eficiente, permitiéndote alcanzar tus metas de manera más rápida y efectiva.',
  button:
  {
    title: 'Cotizar',
    url: 'https://facebook.com'
  }
};

//Se escribe el mensaje que se imprimira en la sección de nosotros de la pagina principal
export const AboutSectionData = {
  years: '17',
  title: 'años dando soluciones tecnologicas a pequeñas y grandes empresas',
  subtitle: 'Somos una empresa de desarrollo de software líder y confiable. Nuestro equipo experto está comprometido en brindarte soluciones personalizadas de calidad que impulsen el crecimiento de tu negocio. Confía en nosotros para alcanzar el éxito tecnológico que deseas.',
  button: {
    title: 'Ver más',
    url: '/about'
  }
}

//Se seleccionan las tecnologias que se usan en la empresa
export const TechnologiesData = [
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

//Se escribe el mensaje que se imprimira en la sección de contact de la pagina principal
export const ContactMessageData = {
  title: '¿Quieres saber más sobre nuestro proyecto?',
  message: 'Somos una empresa de desarrollo de software líder y confiable. Nuestro equipo experto está comprometido en brindarte soluciones personalizadas de calidad que impulsen el crecimiento de tu negocio. Confía en nosotros para alcanzar el éxito tecnológico que deseas.',
  button: {
    title: 'Di hola',
    url: 'https://facebook.com/'
  }
}

//Se editan las redes sociales de la empresa
export const SocialMediaData = [
  {
    title: "Whatsapp",
    link: "https://api.whatsapp.com/send?phone=59170881108&text=%20",
    icon: RiWhatsappFill
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/company/singletonsoftware",
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

//Se edita el botòn de cotizar fijado en la barra de navegaciòn
export const CotizarButtonData = {
  title: "Cotizar",
  url: "https://twitter.com/",
}

//Se edita el botòn de chat fijado en la parte inferior derecha de la pantalla
export const ChatButtonData = {
  title: "Hablá con nosotros",
  url: "https://facebook.com/",
}

/*
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
]*/
/*
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
]*/
/*
export const ServicesList = [

  {
    title: 'Sincronización',
    description: 'Con este servicio puede operar en sucursales o almacenes distantes, sin necesidad de una conexión a internet constante.',
    icon: AiOutlineFileSync,
  },
  {
    title: 'Soporte',
    description: 'Contamos con un equipo multidiciplinario de profesionales, para brindar asistencia en diferentes áreas de la empresa.',
    icon: BiSupport,
  },
  {
    title: 'Seguimiento de Integridad',
    description: 'Las estructuras internas de nuestros sitemas nos permiten verificar alertas de correcto uso del sistema. Le brindamos al cliente la posibilidad de brindarle una alerta temprana de un uso incorrecto de alguno de nuestros sistemas.',
    icon: AiOutlineSecurityScan,
  },
  {
    title: 'Elaboración de Informes periodicos personalizados',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: TbReport,
  },
  {
    title: 'blabla',
    description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) ',
    icon: GiTBrick,
  },
]*/
/*
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
]*/
/*
export const FaqList = [
  {
    title: "ola",
    questions: [
      {
        question: "Lorem  dolor  amet, consectetur adipiscin",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor sit amet, consectetur adipiscin",
      }
    ]
  },
  {
    title: "fara",
    questions: [
      {
        question: "Lorem  dolor  amet, consectetur adipiscin",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor sit amet, consectetur adipiscin",
      }

    ]
  },
  {
    title: "nexus",
    questions: [
      {
        question: "Lorem  dolor  amet, consectetur adipiscin",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscinLorem ipsum dolor sit amet, consectetur adipiscin",
      }
    ]
  }


]*/