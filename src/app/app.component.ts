import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'github-search-app-Angular';
  isDarkMode: boolean = false;

  moonImg = '/assets/images/moon.svg';
  sunImg = '/assets/images/sun.svg';

  errorMsg: boolean = false;

  switchTheme() {
    const bodyClasses = window.document.body.classList;
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      bodyClasses.add('dark');
    } else {
      bodyClasses.remove('dark');
    }
  }
}
