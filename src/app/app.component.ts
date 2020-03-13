import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book-angular';
  layout = 'recipes';

  onNavigate(layout: string) {
    this.layout = layout;
  }
}
