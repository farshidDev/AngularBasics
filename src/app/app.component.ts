import { Component } from '@angular/core';

// decorator
@Component({
  selector: 'app-root',
  //template: '<p>Hello World</p>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //styles: []
})
export class AppComponent {
  name = 'farshid ahmadi';

  imgURL = 'https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1060&t=st=1688336597~exp=1688337197~hmac=79dfbc6cb68631951a885bdd6add56d5a42590dc6e72f08c7164cbf343422f03';
  images = ['https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1060&t=st=1688336597~exp=1688337197~hmac=79dfbc6cb68631951a885bdd6add56d5a42590dc6e72f08c7164cbf343422f03',
  'https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1060&t=st=1688336597~exp=1688337197~hmac=79dfbc6cb68631951a885bdd6add56d5a42590dc6e72f08c7164cbf343422f03',
  'https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg?w=1060&t=st=1688336597~exp=1688337197~hmac=79dfbc6cb68631951a885bdd6add56d5a42590dc6e72f08c7164cbf343422f03'];
  
  imgAlt = 'test';
  currentDate = new Date();
  cost = 2000;
  temprature = 25.3;
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false;
  fontSize = 16;

  getName() {
    return this.name;
  }

  ChangeImage(e:KeyboardEvent)
  {
    this.imgURL = (e.target as HTMLInputElement).value;
  }

  logImg(event: string)
  {
    console.log(event);
  }

}
