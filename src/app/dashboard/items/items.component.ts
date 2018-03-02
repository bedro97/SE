import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,Validators} from "@angular/forms";
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import {Headers} from "@angular/http" ;
import {ProductService} from "../../product.service";
import {product} from "../../product.model";
@Component({
  selector: 'app-dashboard-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit{

    items:any;
    username:string = '';
    name :string = '';
    price : Number = 0 ;
    addForm : FormGroup;
    montag :product[];
    itemse:any;
    //username:string = '';
    namee :string = '';
    pricee : Number = 0 ;
    addForme : FormGroup;

  //  req:string = 'This field is required';
    //failed:boolean;
    constructor(private fb: FormBuilder,private productServices:ProductService,private router:Router) {
        this.addForm = fb.group({
            // 'username' : [null, Validators.required],
            'name' : [null, Validators.required],
            'price' : [null, Validators.required]
        });
        this.addForme = fb.group({
            // 'username' : [null, Validators.required],
            'namee' : [null, Validators.required],
            'pricee' : [null, Validators.required]
        });

}
// }ngonInit(){
    ngOnInit(): void {
        this.productServices.bringing_products().then( montag=> this.montag=montag);
    }



      make(items){
        this.name=items.name;
        this.price=items.price;
        this.productServices.create_new(items.name,items.price)
            .subscribe((res: Response)=>{
                this.productServices.products = null;
                this.productServices.productSubject.next(this.productServices.products);

                if(res.status===200) {
                    console.log("sdf");
                }

            },(err)=>{
                console.log(err);
            });




    }
    delete(id){
        // this.name=items.name;
        // this.price=items.price;
        this.productServices.delete_(id)
            .subscribe((res: Response)=>{
                this.productServices.products = null;
                this.productServices.productSubject.next(this.productServices.products);

                if(res.status===200) {
                    console.log("sdf");
                }

            },(err)=>{
                console.log(err);
            });


    }
    update(id,itemse){
        this.namee=itemse.namee;
        this.pricee=itemse.pricee;
        this.productServices.update_(id,itemse.namee,itemse.pricee)
            .subscribe((res: Response)=>{
                this.productServices.products = null;
                this.productServices.productSubject.next(this.productServices.products);

                if(res.status===200) {
                    console.log("sdf");
                }

            },(err)=>{
                console.log(err);
            });


    }
    // bringing_products(){
    //
    // }

}
