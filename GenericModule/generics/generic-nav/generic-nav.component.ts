import { NavGenerate } from './NavGenerate';
import { LoginService } from './../../../service/login.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-nav',
  templateUrl: './generic-nav.component.html',
  styleUrls: ['./generic-nav.component.scss']
})
export class GenericNavComponent implements OnInit {

  opened: boolean;
  @Input()nav : NavGenerate

  constructor(private LoginService : LoginService,private router : Router) { }

  ngOnInit(): void {
  }

  LogOut(){
    this.LoginService.SignOutSesionActual();
  }


  SideNavBtnAccion(){
    this.opened = false;
  }
}
