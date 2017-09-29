import { Component, OnInit } from '@angular/core';
import { JournalApiService } from '../services/journal-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newEntry: any = {};

  constructor(
    private entryThang: JournalApiService
  ) { }

  ngOnInit() {
  }

  saveNewEntry() {
    this.entryThang.postEntry(this.newEntry)
      .subscribe(
        (entry) => {
            console.log("success!");
        }
      )
    this.newEntry = {};
  }

}
