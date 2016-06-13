import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
    selector: 'addroom',
    templateUrl: 'app/addroom/addroom.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})
export class AddRoomComponent {
    addRoomForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.addRoomForm = builder.group({
            ime_sobe: ["", Validators.required],
            broj_kvadrata: ["", Validators.required],
            broj_kreveta: ["", Validators.required]
        });
    }

    onAddRoom(): void {
        var data = "ime_sobe=" + this.addRoomForm.value.ime_sobe + "&broj_kvadrata=" + this.addRoomForm.value.broj_kvadrata + "&broj_kreveta=" + this.addRoomForm.value.broj_kreveta;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255-dz12-luka-kotur-2399/php/addroom.php', data, { headers: headers })
            .map(res => res)
            .subscribe(data => this.postResponse = data,
            err => alert(JSON.stringify(err)),
            () => {
                if (this.postResponse._body.indexOf("error") === -1) {
                    alert("Uspesno dodavanje sobe");
                    this.router.parent.navigate(['./Home']);
                } else {
                    alert("Neuspesno dodavanje sobe");
                }
            }
            );
    }
}