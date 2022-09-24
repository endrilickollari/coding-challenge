import {environment} from "../../environments/environment";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

const uploadPhotoApiUrl = environment.UPLOAD_PHOTO_API;
const getPhotosApiUrl = environment.GET_PHOTOS;

@Injectable({
  providedIn: 'root'
})
export class UploadPhotoService {
  constructor(private httpClient: HttpClient) {

  }

  uploadPhoto(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const request = new HttpRequest('POST', uploadPhotoApiUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.httpClient.request(request)
  }

  getFiles(): Observable<any> {
    return this.httpClient.get(getPhotosApiUrl);
  }
}
