import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'github-search-app-Angular';
  isDarkMode: boolean = false;
  term: string = 'matthewkk01';

  moonImg = '/assets/images/moon.svg';
  sunImg = '/assets/images/sun.svg';

  errorMsg: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

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
