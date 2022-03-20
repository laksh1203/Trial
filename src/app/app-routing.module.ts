import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"form1", component:Form1Component},
  {path:"form2",component:Form2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
