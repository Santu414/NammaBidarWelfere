import { Component,OnInit } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute,Router,Routes } from '@angular/router';

@Component({
    selector:'image-detial',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image:any

  constructor(private imageService: ImageService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(){
    this.image = this.imageService.getImage(
      +this.route.snapshot.params['id']
    )
  }
  goBack(){
    this.router.navigate(['./gallery']);
  }
}
