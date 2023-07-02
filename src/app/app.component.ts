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
  title = 'Basics';
}
