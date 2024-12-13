import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent implements OnInit {
  carouselImages = [
    'https://blog.italotreno.com/wp-content/uploads/2016/09/quanto-consuma-un-treno-ad-alta-velocit%C3%A0-1140x660.jpg',
    'https://www.montagna.tv/wp-content/uploads/2023/07/AdobeStock_459846966.jpeg',
    'https://cdn-cf.cms.flixbus.com/drupal-assets/2021-10/mobile-flix-hero-q4-2021.jpg',
  ];
  carouselIndex = 0;

  ngOnInit() {
    this.startCarousel();
  }

  startCarousel() {
    setInterval(() => {
      this.carouselIndex =
        (this.carouselIndex + 1) % this.carouselImages.length;
    }, 3000); // Cambia immagine ogni 3 secondi
  }
}
