import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProviderService {
   providers: string[] = ["Roll Rapids", "St Joseph"];
   url: 'http/lkll'
   constructor(private http: Http) {

   }
   getProviders() {
    //    this.http.get('url').subscribe((data) => {
    //     //    this.providers = data;
    //    }) 
       return this.providers;
   }

   
}