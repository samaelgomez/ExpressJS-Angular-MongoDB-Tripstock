import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
// import { CarouselModule } from 'ngx-owl-carousel-o';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListProductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // MatCarouselModule.forRoot()
    // CarouselModule
    // NgbModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListProductsComponent
  ]
})
export class SharedModule { }