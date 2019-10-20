import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";
@Component({
  selector: "app-testimonial-caurosel",
  templateUrl: "./testimonial-caurosel.component.html",
  styleUrls: ["./testimonial-caurosel.component.scss"]
})
export class TestimonialCauroselComponent implements OnInit {
  public carouselTileItems: Array<any> = [
    {
      testimonial: 'TESTIMONIALS.TESTIMONIAL_1',
      user_image: "./assets/images/landing/faces/face1.jpg",
      user_name: 'TESTIMONIALS.TESTIMONIAL_NAME_1',
      user_designation: 'TESTIMONIALS.TESTIMONIAL_DESIGNATION_1'
    },
    {
      testimonial: 'TESTIMONIALS.TESTIMONIAL_2',
      user_image: "./assets/images/landing/faces/face2.jpg",
      user_name: 'TESTIMONIALS.TESTIMONIAL_NAME_2',
      user_designation: 'TESTIMONIALS.TESTIMONIAL_DESIGNATION_2'
    },
    {
      testimonial: 'TESTIMONIALS.TESTIMONIAL_3',
      user_image: "./assets/images/landing/faces/face3.jpg",
      user_name: 'TESTIMONIALS.TESTIMONIAL_NAME_3',
      user_designation: 'TESTIMONIALS.TESTIMONIAL_DESIGNATION_3'
    },
    {
      testimonial: 'TESTIMONIALS.TESTIMONIAL_4',
      user_image: "./assets/images/landing/faces/face4.jpg",
      user_name: 'TESTIMONIALS.TESTIMONIAL_NAME_4',
      user_designation: 'TESTIMONIALS.TESTIMONIAL_DESIGNATION_4'
    }
  ];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };
  constructor() {}

  ngOnInit() {}
}
