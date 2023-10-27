import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { IgniteUiComponent } from './components/ignite-ui/ignite-ui.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { ChallengeComponent } from './components/challenge/challenge.component';

const routes: Routes = [
  {
    path: '', component: ChallengeComponent
  },
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'igniteui', component: IgniteUiComponent
  },
  {
    path: 'selects', component: CheckboxesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
