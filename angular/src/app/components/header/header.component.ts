import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  id: number;

  constructor(private UserService: UserService) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.links = ['יציאה', 'חיפוש', 'אודות']

    }
    else {
      this.links = ['רישום/כניסה', 'חיפוש', 'אודות']
    }
  }

  links = [];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'warn';
  }

}