import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
    selector: 'addhotel',
    templateUrl: 'app/addhotel/addhotel.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})

export class AddHotelComponent {
    addHotelForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.addHotelForm = builder.group({
            ime_hotela: ["", Validators.required]
        });
    }

    onAddHotel(): void {
        var data = "ime_hotela=" + this.addHotelForm.value.ime_hotela;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255-dz12-luka-kotur-2399/php/addhotel.php', data, { headers: headers })
            .map(res => res)
            .subscribe(data => this.postResponse = data,
            err => alert(JSON.stringify(err)),
            () => {
                if (this.postResponse._body.indexOf("error") === -1) {
                    alert("Uspesno dodavanje hotela");
                    this.router.parent.navigate(['./Home']);
                } else {
                    alert("Neuspesno dodavanje hotela");
                }
            }
            );
    }
}