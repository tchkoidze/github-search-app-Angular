import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  userName = '';
  @Output() searchEmmiter = new EventEmitter<string>();
  @Input() isDarkMode: boolean = false;
  @Input() message: boolean = false;

  /* search() {
    this.searchEmmiter.emit(this.userName);
  }*/
  search(value: string) {
    this.searchEmmiter.emit(value);
  }
}
