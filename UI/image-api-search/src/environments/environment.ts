// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IMGUR_API_URL: "https://api.imgur.com/3/gallery/search/",
  IMGUR_API_AUTH: "Client-ID a0e285112494a96",
  PEXELS_API_URL: "https://api.pexels.com/v1/search",
  PEXELS_API_AUTH: "563492ad6f9170000100000172e40c73ea194f8589f3de8585118b13",
  UPLOAD_PHOTO_API: "http://localhost:8080/upload",
  GET_PHOTOS: "http://localhost:8080/files",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
