import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { SitemapComponent } from './sitemap/sitemap.component';


const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'sitemap', component: SitemapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
