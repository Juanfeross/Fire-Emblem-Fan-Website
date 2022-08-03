import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgScrollbarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
