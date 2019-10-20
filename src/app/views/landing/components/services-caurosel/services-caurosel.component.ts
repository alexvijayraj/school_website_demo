import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from "@ngu/carousel";

@Component({
  selector: "app-services-caurosel",
  templateUrl: "./services-caurosel.component.html",
  styleUrls: ["./services-caurosel.component.scss"]
})
export class ServicesCauroselComponent implements OnInit {

  public carouselTileItems: Array<any>;

  constructor() {
     this.carouselTileItems = [
      {
        icon: "./assets/images/landing/services/service1_1.svg",
        text: 'EVENTS.SUB_TEXT_1',
        title: 'EVENTS.SUB_TITLE_1'
      },
      {
        icon: "./assets/images/landing/services/service2_1.svg",
        text: 'EVENTS.SUB_TEXT_2',
        title: "EVENTS.SUB_TITLE_2"
      },
      {
        icon: "./assets/images/landing/services/service3_1.svg",
        text: 'EVENTS.SUB_TEXT_3',
        title: "EVENTS.SUB_TITLE_3"
      },
      {
        icon: "./assets/images/landing/services/service4_1.svg",
        text: 'EVENTS.SUB_TEXT_4',
        title: "EVENTS.SUB_TITLE_4"
      },
      {
        icon: "./assets/images/landing/services/service5_1.svg",
        text: 'EVENTS.SUB_TEXT_5',
        title: "EVENTS.SUB_TITLE_5"
      },
      {
        icon: "./assets/images/landing/services/service6_1.svg",
        text: 'EVENTS.SUB_TEXT_6',
        title: "EVENTS.SUB_TITLE_6"
      }
    ];
  }

  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md:3, lg: 4, all: 0 },
    slide: 4,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: "cubic-bezier(0, 0, 0.2, 1)"
  };

  ngOnInit() {}

}
