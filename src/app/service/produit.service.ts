import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  public host:string="http://localhost:8888/PRODUCT-SERVICES"

  constructor(private  http:HttpClient) { }

  public getProducts(){

    return this.http.get(this.host+"/products");

  }


}
