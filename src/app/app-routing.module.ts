import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './iletisim/iletisim.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path:'index', component:IndexComponent},
  { path:'iletisim', component:IletisimComponent},
  { path: '', redirectTo:'index', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
