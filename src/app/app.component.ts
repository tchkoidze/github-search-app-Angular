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
  term: string = 'tchkoidze';

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

  ngOnInit() {
    this.extractName(this.term);
  }

  extractName(searchWord: string) {
    this.term = searchWord;

    //API url using with searchword
    const apiUrl: string = `https://api.github.com/users/${this.term}`;

    // make api request
    this.http.get<UserProps>(apiUrl).subscribe({
      next: (res: UserProps) => {
        this.userData = res;
        this.errorMsg = false;
      },
      error: (error) => {
        console.log(error);
        this.errorMsg = true;
      },
    });
  }

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

/**
 (res: UserProps) => {
        this.userData = res;
        this.errorMsg = false;
      },
      (error) => {
        console.log(error);
        this.errorMsg = true;
      }
 */
