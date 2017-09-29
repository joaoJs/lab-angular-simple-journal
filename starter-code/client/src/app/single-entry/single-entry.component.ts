import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JournalApiService } from '../services/journal-api.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  entry: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private entryThang: JournalApiService
  ) { }

  ngOnInit() {
    this.activatedThang.params
      .subscribe(
        (params) => {
          this.entryThang.getOneEntry(params.id)
            .subscribe(
              (entry) => {
                this.entry = entry;
              }
            )
        }
      )

  }

  

}
