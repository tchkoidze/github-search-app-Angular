import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface UserProps {
  avatar_url?: string;
  name: string;
  login?: string;
  bio?: string;
  company?: string;
  public_repos?: number;
  created_at?: string;
  followers?: number;
  twitter_username?: string;
  following?: number;
  location?: string;
  blog?: string;
}

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

  userData: UserProps = {
    avatar_url: '',
    login: '',
    name: '',
    bio: '',
    twitter_username: '',
    company: '',
    public_repos: 0,
    created_at: '',
    followers: 0,
    following: 0,
    location: '',
    blog: '',
  };

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
