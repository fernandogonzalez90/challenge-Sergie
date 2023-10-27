import { Component, ViewChild, OnInit } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular';
import { DATA } from '../data/nwindData';

@Component({
  selector: 'app-ignite-ui',
  templateUrl: './ignite-ui.component.html',
  styleUrls: ['./ignite-ui.component.css'],

})
export class IgniteUiComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;
  public data: any[];

  constructor() {
  }

  public ngOnInit(): void {
    this.data = DATA;
  }


  public formatDate(val: any) {
    if (val !== 'Select All') {
      return new Intl.DateTimeFormat('en-US').format(val);
    } else {
      return val;
    }
  }

  public formatCurrency(val: string) {
    return parseInt(val, 10).toFixed(2);
  }
}
