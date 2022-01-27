import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IletisimComponent } from './iletisim/iletisim.component';
import { IndexComponent } from './index/index.component';
import { YeteneklerimizCozumlerimizComponent } from './yeteneklerimiz-cozumlerimiz/yeteneklerimiz-cozumlerimiz.component';

const routes: Routes = [
  { path:'index', component:IndexComponent},
  { path:'iletisim', component:IletisimComponent},
  { path: '', redirectTo:'index', pathMatch:'full'},
  { path: 'yeteneklerimiz-cozumlerimiz', component:YeteneklerimizCozumlerimizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
