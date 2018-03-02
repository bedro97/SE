import {ProductService} from "./product.service";
import * as moment from "moment";
//import _date = moment.unitOfTime._date;

export class product{
    public username: String
    public name : String
    public price :Number
    public _id : String
    public createdAt : Date
    public updatedAt : Date



    constructor(name:String,price:Number)
    {

        this.name = name
        this.price = price;
    }
}
