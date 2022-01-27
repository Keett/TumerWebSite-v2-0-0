import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {}

  refresh():void{
    window.location.reload();
  }

}
