import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form1: boolean = false;
  form2: boolean = false;
  form3: boolean = false;

  constructor() { }
  ngOnInit() {
  }
  selectForm(e) {
    if(e== "1") {
      this.form1 = true;
      this.form2 = false;
      this.form3 = false;
    }else if(e== "2") {
      this.form2 = true;
      this.form1 = false;
      this.form3 = false;
    }else if(e=="3") {
      this.form3 = true;
      this.form1 = false;
      this.form2 = false;
    }
}
}
