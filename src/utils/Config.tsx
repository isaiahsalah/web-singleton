

import {
  IoLocation,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok
}
  from "react-icons/io5"
import { IoLogoWhatsapp as IoLogoWhatsapp4 }
  from "react-icons/io"

import {
  SiTypescript,
  SiJavascript,
  SiAngular,
  SiReact,
  SiNetapp,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMicrosoft,
  SiMaterialdesign,
  SiKotlin,
  SiAndroid,
  SiVite
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
export const PresentationHomeData = {
  title: 'Tecnología que te Libera...',
  subtitle: 'Nuestros Métodos de Trabajo se unen para brindarte una experiencia única y eficiente, permitiéndote alcanzar tus metas de manera más rápida y efectiva.',
  button:
  {
    title: 'Cotizar',
    url: 'https://wa.link/yg436s'
  }
};

//Se edita los datos que apareceran en el banner principal de la la pagina de nosotros
export const PresentationAboutData = {
  title: 'Impulsando el éxito y la innovación',
  subtitle: 'Somos una empresa apasionada por la tecnología y el desarrollo de software, comprometidos en brindar soluciones creativas y vanguardistas que impulsen el crecimiento y el éxito de nuestros clientes.',
  button:
  {
    title: 'Cotizar',
    url: 'https://wa.link/yg436s'
  }
};

//Se edita los datos que apareceran en la misiòn de la la pagina de nosotros
export const MisionAboutData = {
  title: 'Ofrecemos soluciones de software innovadoras y de alta calidad',
  subtitle: 'Nos enfocamos en ofrecer soluciones personalizadas y escalables, utilizando tecnologías de vanguardia y un enfoque ágil. Nuestra misión es colaborar estrechamente con nuestros clientes, comprender sus necesidades y desafíos específicos, y proporcionarles software innovador y confiable que impulse su crecimiento y los ayude a alcanzar el éxito en un entorno empresarial en constante evolución. Valoramos la calidad, la eficiencia y la satisfacción del cliente, y nos esforzamos por establecer relaciones sólidas y duraderas basadas en la confianza mutua y el logro de resultados excepcionales.',
  
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
    name: "",
    icon: <SiCsharp />,
  },
  {
    name: "",
    icon: <SiNetapp />,
  },
  {
    name: "",
    icon: <SiMicrosoftsqlserver />,
  },
  {
    name: "",
    icon: <SiMicrosoft />,
  },
  {
    name: "",
    icon: <SiVite />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "",
    icon: <SiJavascript />,
  },
  {
    name: "",
    icon: <SiMaterialdesign />,
  },
  {
    name: "",
    icon: <SiKotlin />,
  },
  {
    name: "",
    icon: <SiAndroid />,
  },
  {
    name: "",
    icon: <SiAngular />,
  },
  {
    name: "",
    icon: <SiTypescript />,
  }
];

//Se escribe el mensaje que se imprimira en la sección de contact de la pagina principal
export const ContactMessageData = {
  title: '¿Estás listo para acceder a soluciones tecnológicas que impulsen el crecimiento de tu empresa?',
  message: 'Impulsamos el éxito de tu proyecto a través de soluciones personalizadas, innovadoras y de alta calidad, respaldadas por nuestra experiencia y un compromiso inquebrantable con la satisfacción de nuestros cliente.',
  button: {
    title: 'Salúdanos',
    url: 'https://wa.link/yg436s'
  }
}

//Se editan las redes sociales de la empresa
export const SocialMediaData = [
  {
    title: "Whatsapp",
    link: "https://wa.link/yg436s",
    icon: IoLogoWhatsapp4
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/company/singletonsoftware/",
    icon: IoLogoLinkedin
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/SistemasSingleton/",
    icon: IoLogoFacebook
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/singleton2.0/",
    icon: IoLogoInstagram
  },
  {
    title: "Tiktok",
    link: "https://www.tiktok.com/@singleton.bo",
    icon: IoLogoTiktok
  },
  {
    title: "Map",
    link: "https://goo.gl/maps/Zmz6JYhJir3bmsjH6",
    icon: IoLocation
  }
]

//Se edita el botòn de cotizar fijado en la barra de navegaciòn
export const CotizarButtonData = {
  title: "Cotizar",
  url: "https://wa.link/yg436s",
}

//Se edita el botòn de chat fijado en la parte inferior derecha de la pantalla
export const ChatButtonData = {
  title: "Habla con nosotros",
  url: "https://wa.link/yg436s",
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