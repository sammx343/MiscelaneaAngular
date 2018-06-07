import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  changeAlerta:number;
  constructor() { 
    this.changeAlerta = 0;
  }

  ngOnInit() {
  }

  alertar(){
    console.log("resultado");
    console.log(this.changeAlerta);
    this.changeAlerta++;
    switch (this.changeAlerta) {
      case 0:
        return "success"
      case 1:
        return "warning"
      case 2:
        return "info"
      case 3:
        return "danger"
      default:
        this.changeAlerta = 0;
        return "success";
    }
  }

}
