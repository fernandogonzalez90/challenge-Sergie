import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.css']
})
export class CheckboxesComponent {
  options = ['Form 1°', 'IgniteUi', 'Sopresa'];
  selectedOption = this.options[0];
  videoUrl = 'https://www.youtube.com/watch?v=N8Xt5rP_DUo&t=13070s';
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer){
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  changeSelect() {
    console.log(this.selectedOption);
  }

}
