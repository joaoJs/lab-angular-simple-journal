import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JournalApiService {

  baseUrl: string = 'http://localhost:3000';

  constructor(
    private httpThang: HttpClient
  ) { }

  getEntries() {
    return this.httpThang.get(this.baseUrl + '/api/journal-entries');
  }

  getOneEntry(id: string) {
    return this.httpThang.get(this.baseUrl + '/api/journal-entries/' + id);
  }

  postEntry(newEntry) {
    return this.httpThang.post(
      this.baseUrl + '/api/journal-entries', newEntry
    )
  }

}
