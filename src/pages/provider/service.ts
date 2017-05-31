import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProviderService {
    data: any;
   providers: string[] = ["Roll Rapids", "St Joseph"];
   url: string = 'https://sfet-nprodnstg.dm50.dev.smed.net/sf-qa1450/mpi/QueryResponse_v3?wsdl';
   constructor(private http: Http) {

   }
   getProviders() {
       console.log(this.url);
      return this.http.get(this.url);
   }

   
}