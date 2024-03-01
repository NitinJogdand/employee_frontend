import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit(): void {
  }

  gobackMethod(){
    this.location.back();
  }

}
