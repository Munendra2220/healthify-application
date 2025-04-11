import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class DataServices {

    public usersList: any = [
        { name: 'test', email: 'test@gmail.com', age: 26 },
        { name: 'test2', email: 'test2@gmail.com', age: 26 }
    ];


}