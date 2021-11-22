import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category'
import { CategoriesService } from 'src/app/core/services/category.service';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { OwlOptions } from 'ngx-owl-carousel-o';
// import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  listCategories: Category[] = [];

  constructor(private _categoryService: CategoriesService) {
    // _config.interval = 5000;
    // _config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this._categoryService.getCategories().subscribe(data => {
      console.log(data);
      this.listCategories = data;
    }, error => {
      console.log(error);
    })
  }

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }

}
