import { Component, Directive } from 'angular2/core';
import { FormBuilder, Validators, ControlGroup, Control, FORM_DIRECTIVES, FORM_BINDINGS} from 'angular2/common'
import {Http, HTTP_PROVIDERS, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {Router, ROUTER_PROVIDERS} from 'angular2/router'

@Component({
    selector: 'registration',
    templateUrl: 'app/registration/registration.html',
    directives: [FORM_DIRECTIVES],
    viewBindings: [FORM_BINDINGS]
})
export class RegistrationComponent {

    registerForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;

    constructor(builder: FormBuilder, http: Http, router: Router) {
        this.http = http;
        this.router = router;
        this.registerForm = builder.group({
            username: ["", Validators.none],
            password: ["", Validators.none],
            firstName: ["", Validators.none],
            lastName: ["", Validators.none],
        });

        if (localStorage.getItem('token') != null) {
            this.router.parent.navigate(['./Home']);
        }

    }

    onRegister(): void {
        var data = "username=" + this.registerForm.value.username + "&password=" + this.registerForm.value.password + "&firstName=" + this.registerForm.value.firstName + "&lastName=" + this.registerForm.value.lastName;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/it255-dz12-luka-kotur-2399/php/register.php', data, { headers: headers })
            .map(res => res)
            .subscribe(data => this.postResponse = data,
            err => {
                var obj = JSON.parse(err._body);
                document.getElementsByClassName("alert")[0].style.display = "block";
                document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
            },
            () => {
                var obj = JSON.parse(this.postResponse._body);
                localStorage.setItem('token', obj.token);
                this.router.parent.navigate(['./Home']);
            }
            );

    }
}