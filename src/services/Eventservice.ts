import { Event } from "../data/event.interface";

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'; 
import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from "./Authservice";



@Injectable()
export class EventService {
    private EventList: Event[] = [];
    
    constructor(public http:Http, private authSvc:AuthService)
    {}; 

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        let ctr = 0;

        for(let fav of this.favoriteQuotes){
            if(quote == fav){
                this.favoriteQuotes.splice(ctr,1);
                break;
            }
            else {
                ctr++;
            }
        }
    }

    getAllFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }

    isFavorite(quote: Quote) {
        var index = this.favoriteQuotes.indexOf(quote);

        if(index >= 0){
            return true;
        }
        else{
            return false;
        }
    }

    clearAll(){
        this.favoriteQuotes=[];
    }

    storeList(token: string){
        const uid = this.authSvc.getActiveUser().uid;
        return this.http
            .put('https://mobile2-97518.firebaseio.com/' + uid + '/fav-quotes.json?auth=' + token, this.favoriteQuotes)
            .map((response: Response) => {
                return response.json();
            });
    }

    loadList(token: string){
        const uid = this.authSvc.getActiveUser().uid;
        return this.http
            .get('https://mobile2-97518.firebaseio.com/' + uid + '/fav-quotes.json?auth=' + token)
            .map((response: Response) => {
                return response.json();
            });
    }

    setInit(quote: Quote[]){
        this.favoriteQuotes = quote;
    }
}
