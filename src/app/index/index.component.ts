import { Component, OnInit } from '@angular/core';
import { CalismaAlanlariService } from '../services/calisma-alanlari.service';
import { CalismaAlanlari } from './CalismaAlanlari';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [CalismaAlanlariService]
})
export class IndexComponent implements OnInit {

  constructor(private calismaAlanlariService: CalismaAlanlariService) { }
  calismaAlanlari: CalismaAlanlari[] = [];

  ngOnInit(): void {
    this.calismaAlanlariService.getCalismaAlanlari().subscribe(data => { 
      this.calismaAlanlari = data
    });
  }

}
