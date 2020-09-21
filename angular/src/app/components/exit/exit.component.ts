import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() { 
    this.router.navigate(['']);
    localStorage.removeItem("token");

  }

}
