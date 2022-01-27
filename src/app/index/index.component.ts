import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { CalismaAlanlariService } from '../services/calisma-alanlari.service';
import { ReferenceService } from '../services/reference.service';
import { TalentSolutionService } from '../services/talent-solution.service';
import { About } from './About';
import { CalismaAlanlari } from './CalismaAlanlari';
import { Reference } from './Reference';
import { TalentSolution } from './TalentSolution';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [CalismaAlanlariService, AboutService, TalentSolutionService, ReferenceService]
})
export class IndexComponent implements OnInit {

  constructor(private calismaAlanlariService: CalismaAlanlariService, private aboutService:AboutService, private talentSolutionService: TalentSolutionService, private referenceService: ReferenceService) { }
  calismaAlanlari: CalismaAlanlari[] = [];
  abouts:About[] = [];
  talentSolutions:TalentSolution[] = [];
  references:Reference[] = [];

  ngOnInit(): void {
    this.calismaAlanlariService.getCalismaAlanlari().subscribe(data => { 
      this.calismaAlanlari = data
    });

    this.aboutService.getAboutData().subscribe(data => {
      this.abouts = data
    });

    this.talentSolutionService.getTalentSolutionData().subscribe(data => {
      this.talentSolutions = data
    });

    this.referenceService.getReferenceData().subscribe(data => {
      this.references = data
    });
  }
}
