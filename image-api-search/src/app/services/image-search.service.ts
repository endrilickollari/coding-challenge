import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, share, throwError} from "rxjs";

const imgurApiUrl = environment.IMGUR_API_URL;
const imgurApiAuth = environment.IMGUR_API_AUTH;
const pexelsApiUrl = environment.PEXELS_API_URL;
const pexelsApiAuth = environment.PEXELS_API_AUTH;

const imgurHttpOptions = {
  headers: new HttpHeaders({
    'Authorization': imgurApiAuth
  })
};

const pexelsHttpOptions = {
  headers: new HttpHeaders({
    'Authorization': pexelsApiAuth
  })
};

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {

  constructor(private httpClient: HttpClient) {
  }

  getImagesFromImgur({search}: { search: any }): Observable<any> {
    const searchUrl = imgurApiUrl + '?q=' + search;
    return this.httpClient.get<any>(searchUrl, imgurHttpOptions);
  }


  getImagesFromPexels({search}: { search: any }): Observable<any> {
    const searchUrl = pexelsApiUrl + '?query=' + search;
    return this.httpClient.get<any>(searchUrl, pexelsHttpOptions).pipe(catchError(share()));
  }
}
