import { Injectable } from '@angular/core'

@Injectable()
export class ImageService {
    visibleImages = [];

    getImages() {
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number) {
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
    { "id": 1, "location": "Bidar Port", "caption": "Name of the Image", "url": "assets/img/Bidar_1.jpg" },
    { "id": 2, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_2.jpg" },
    { "id": 3, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_3.JPG" },
    { "id": 4, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_4.jpg" },
    { "id": 5, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_5.jpg" },
    { "id": 6, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_6.jpg" },
    { "id": 7, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_7.jpg" },
    { "id": 8, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_8.jpg" },
    { "id": 9, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_9.jpg" },
    { "id": 10, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_10.jpg" },
    { "id": 11, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_11.jpg" },
    { "id": 12, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_12.jpg" },
    { "id": 13, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_13.jpg" },
    { "id": 14, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_14.jpg" },
    { "id": 15, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_15.jpg" },
    { "id": 16, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_16.jpg" },
    { "id": 17, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_17.jpg" },
    { "id": 18, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_18.jpg" },
    { "id": 19, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_19.jpg" },
    { "id": 20, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_20.jpg" },
    { "id": 21, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_21.jpg" },
    { "id": 22, "location": "bidar", "caption": "Name of the Image", "url": "assets/img/Bidar_22.jpg" },
    { "id": 23, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_1.jpg" },
    { "id": 24, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_2.jpg" },
    { "id": 25, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_3.jpg" },
    { "id": 26, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_4.jpg" },
    { "id": 27, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_5.JPG" },
    { "id": 28, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_6.jpg" },
    { "id": 29, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_7.jpg" },
    { "id": 30, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_8.jpg" },
    { "id": 31, "location": "humnabad", "caption": "Name of the Image", "url": "assets/img/humnabad_9.jpg" },
    
    { "id": 32, "location": "bhalki", "caption": "Name of the Image", "url": "assets/img/bhalki_1.jpg" },
    { "id": 33, "location": "bhalki", "caption": "Name of the Image", "url": "assets/img/bhalki_2.jpg" },
    { "id": 34, "location": "bhalki", "caption": "Name of the Image", "url": "assets/img/bhalki_3.jpg" },
    { "id": 35, "location": "bhalki", "caption": "Name of the Image", "url": "assets/img/bhalki_4.jpg" },
    { "id": 36, "location": "bhalki", "caption": "Name of the Image", "url": "assets/img/bhalki_5.jpg" },

    { "id": 37, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_1.jpg" },
    { "id": 38, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_2.jpg" },
    { "id": 39, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_3.jpg" },
    { "id": 40, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_4.jpg" },
    { "id": 41, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_5.jpg" },
    { "id": 42, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_6.jpg" },
    { "id": 43, "location": "basavakalyan", "caption": "Name of the Image", "url": "assets/img/basavakalyan_7.jpg" },

    { "id": 44, "location": "aurad", "caption": "Name of the Image", "url": "assets/img/aurad_1.JPG" },
    { "id": 45, "location": "aurad", "caption": "Name of the Image", "url": "assets/img/aurad_2.JPG" },

    { "id": 45, "location": "aurad", "caption": "Name of the Image", "url": "assets/img/aurad_3.png" }
]
