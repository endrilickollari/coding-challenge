import {Component, OnInit} from '@angular/core';
import {ImageSearchService} from "../services/image-search.service";

@Component({
  selector: 'app-imgur-search',
  templateUrl: './imgur-search.component.html',
  styleUrls: ['./imgur-search.component.css']
})
export class ImgurSearchComponent implements OnInit {
  searchData: any;
  dataState = '0';
  photos = ([] as any[]);

  constructor(private imgurPhotoSearchService: ImageSearchService) {
  }

  searchPhotos() {
    this.imgurPhotoSearchService.getImagesFromImgur({
      search: this.searchData
    }).subscribe((response: any) => {
        if (response.photos.length > 0) {
          this.photos = response.photos;
          console.log(this.photos)
          this.dataState = '1';
        } else {
          this.dataState = '-1';
        }
      },
      (error) => {
        console.log(error)
      })
  }


  ngOnInit(): void {
  }

}
