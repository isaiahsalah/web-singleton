
export class Product {
    title: string;
    item: string;
    description: string;
    image: string;
    link:string;
  
    constructor(title: string, item: string, description: string, image: string, link:string) {
      this.title = title;
      this.item = item;
      this.description = description;
      this.image = image;
      this.link = link;

    }
  }
  
  export class Services {
    title: string;
    description: string;
    icon: string;
  
    constructor(title: string, description: string, icon: string) {
      this.title = title;
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
  
  export class FaqQuestion {
  
    question: string;
    answer: string;
  
    constructor(question: string, answer: string) {
      this.question = question;
      this.answer = answer;
    }
  }
  
  export class Faq {
  
    title: string;
    questions: FaqQuestion[];
  
    constructor(title: string, questions: FaqQuestion[]) {
      this.title = title;
      this.questions = questions;
    }
  }
  
  export class member {
  
    name: string;
    position: string;
    description: string;
    image: string;
  
    constructor(name: string, position: string, description: string, image: string ) {
      this.name = name;
      this.position = position;
      this.description = description;
      this.image = image;
    }
  }
  
  export class Team {
  
    area: string;
    description: string;
    members: member[];
  
    constructor(area: string, description: string, members: member[]) {
      this.area = area;
      this.description = description;
      this.members = members;
    }
  }
  
  export class Social {
  
    title: string;
    url: string;
    icon: string;
  
    constructor(title: string, url: string, icon: string) {
      this.title = title;
      this.url = url;
      this.icon = icon;
    }
  }