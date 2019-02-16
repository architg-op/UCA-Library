import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// @Component ({
//   selector : 'app-root',
//   template : '<h1>New Custom heading of the project</h1>',
//   styleUrls: ['./app.component.css']
// })

export class AppComponent {
  title = 'my-app';
  public name = "Math";
  private methodName() {
    
  }
}
