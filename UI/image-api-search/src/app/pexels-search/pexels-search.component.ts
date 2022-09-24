import { Component, OnInit } from '@angular/core';
import {ImageSearchService} from "../services/image-search.service";

@Component({
  selector: 'app-pexels-search',
  templateUrl: './pexels-search.component.html',
  styleUrls: ['./pexels-search.component.css']
})
export class PexelsSearchComponent implements OnInit {
  searchData: any;
  dataState = '0';
  photos = ([] as any[]);
  constructor(private pexelsPhotoSearchService: ImageSearchService) { }

  searchPhotos() {
    this.pexelsPhotoSearchService.getImagesFromPexels({
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
