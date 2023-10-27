import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FormComponent } from './components/form/form.component';
import { IgniteUiComponent } from './components/ignite-ui/ignite-ui.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modulos de máscara
import { NgxMaskDirective, provideEnvironmentNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
// Modulos de Ignite UI
import {
  IgxGridModule,
  IgxButtonGroupModule,
  IgxOverlayService,
  IgxNavigationService
} from 'igniteui-angular';
// Directive para evitar scroll
import { IgxPreventDocumentScrollModule } from "./directives/prevent-scroll.directive";
import { ChallengeComponent } from './components/challenge/challenge.component';
import { FooterComponent } from './components/footer/footer.component';

const maskConfig: Partial<IConfig> = {
  validation: false,

};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    CheckboxesComponent,
    IgniteUiComponent,
    ChallengeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    FormsModule,
    FormsModule,
    IgxPreventDocumentScrollModule,
    IgxGridModule,
    IgxButtonGroupModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideEnvironmentNgxMask(maskConfig),
    IgxOverlayService,
    IgxNavigationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
