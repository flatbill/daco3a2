import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-daco-format-view',
  templateUrl: './daco-format-view.component.html',
  styleUrls: ['./daco-format-view.component.scss']
})
export class DacoFormatViewComponent implements OnInit {
  dacoFormatList: Observable<any[]>;
  constructor(http: HttpClient) { 
    const dacoFormatPath = 
    'https://mz7sh2eha2.execute-api.us-east-1.amazonaws.com/default/dacoFetch0?TableName=dacoFormat';
     this.dacoFormatList = http.get<{Items: any[]}>(dacoFormatPath)
      .pipe(
        map(x => x.Items)
      )
    }

  ngOnInit() {
  }

}
