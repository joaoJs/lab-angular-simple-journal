import { Component, OnInit } from '@angular/core';
import { JournalApiService} from '../services/journal-api.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: any[] = [];

  constructor(
    private entryThang: JournalApiService
  ) { }

  ngOnInit() {
    this.entryThang.getEntries()
      .subscribe(
        (list: any[]) => {
          console.log(list);
          this.entries = list;
        }
      );
  }

}
