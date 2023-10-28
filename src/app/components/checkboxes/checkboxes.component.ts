import { Component } from '@angular/core';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  options = ['Form 1°', 'IgniteUi', 'Sorpresa'];
  selectedOption = this.options[0];
  
  constructor(){}

  changeSelect() {
    console.log(this.selectedOption);
  }

}
