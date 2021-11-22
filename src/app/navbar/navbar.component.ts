import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private dialog : MatDialog) { }
  @Output() sideNavOpen: EventEmitter<boolean> = new EventEmitter(true);
  ngOnInit(): void {
  }

  filter(){
  

  }
}
