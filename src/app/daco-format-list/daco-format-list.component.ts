import { Component, OnInit,Input,Output,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-daco-format-list',
  templateUrl: './daco-format-list.component.html',
  styleUrls: ['./daco-format-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DacoFormatListComponent implements OnInit {
  @Input() dacoFormatList: any[];
  constructor() { }

  ngOnInit() {
  }

}
