import { Subject } from "rxjs/Subject";
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import { product } from "./product.model";
import {UserService} from "./user.service"
import { Headers } from "@angular/http";

@Injectable()
export class ProductService{

    constructor(private http:Http,private userService: UserService){


    }

    public products: product;
    public productSubject = new Subject();




     bringing_products(): Promise<product[]>{
       // var products = new product(name,price);
         const headers = new Headers({'x-auth':this.userService.user.token});
        return this.http.get ('http://localhost:3000/api/product/getProducts',{headers:headers}).toPromise().then(
            respone => respone.json().data as product[]);
}

       delete_(id:string) {
         //  var products = new product(name, price);
           const headers = new Headers({'x-auth': this.userService.user.token});
           return this.http.delete('http://localhost:3000/api/product/deleteProduct' + '/' + id, {headers: headers});

       }
       update_(id:string,name:string,price:Number){
         var products = new product(name,price);
           const headers = new Headers({'x-auth':this.userService.user.token});
         return this.http.patch('http://localhost:3000/api/product/updateProduct'+'/'+id,products,{headers:headers});

     }
       create_new(name:String,price:Number){
         var products = new product(name,price);
           const headers = new Headers({'x-auth':this.userService.user.token});
         return this.http.post('http://localhost:3000/api/product/createProduct',products,{headers:headers});
     }
}