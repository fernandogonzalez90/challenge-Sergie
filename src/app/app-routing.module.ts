import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { IgniteUiComponent } from './components/ignite-ui/ignite-ui.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';

const routes: Routes = [
  {
    path: 'form', component: FormComponent
  },
  {
    path: 'igniteui', component: IgniteUiComponent
  },
  {
    path: 'checkboxes', component: CheckboxesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
