import { Component, Directive } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import { FilterPipe } from '../pipe/search.pipe';
import 'rxjs/Rx';
@Component({
    pipes: [FilterPipe],
    selector: 'searchrooms',
    templateUrl: 'app/searchrooms/searchrooms.html'
})
export class SearchRoomsComponent {
    name: String = "";
    sobe: Object[];
    constructor(http: Http) {
        http.get('results.json')
            .map(res => res.json())
            .subscribe(sobe => this.sobe = sobe);
    }
}