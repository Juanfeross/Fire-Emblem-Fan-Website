import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgScrollbar, NgScrollbarModule } from 'ngx-scrollbar';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgScrollbarModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
