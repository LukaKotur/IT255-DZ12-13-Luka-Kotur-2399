import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import { MainPageComponent } from './home/home.component';
import { LoginComponent}  from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchRoomsComponent } from './searchrooms/searchrooms.component';
import { AddRoomComponent } from './addroom/addroom.component';
import { AddHotelComponent } from './addhotel/addhotel.component';
import { AllRoomsComponent } from './allrooms/allrooms.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/router.html',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: './', name: 'Home', component: MainPageComponent, useAsDefault: true },
  { path: './login', name: 'Login', component: LoginComponent },
  { path: './register', name: 'Register', component: RegistrationComponent },
  { path: './searchrooms', name: 'SearchRooms', component: SearchRoomsComponent },
  { path: './addroom', name: 'AddRoom', component: AddRoomComponent },
  { path: './addhotel', name: 'AddHotel', component: AddHotelComponent },
  { path: './allrooms', name: 'AllRooms', component: AllRoomsComponent },
])

export class AppComponent {
	router: Router;
  isAuth: String;

  constructor(router: Router) {
    this.router = router;
		  router.subscribe((val) => {

      if (localStorage.getItem('token') !== null) {
        this.isAuth = "yes";
      } else {
        this.isAuth = "no";
      }
		  });
  }

  onLogout(): void {
    localStorage.removeItem("token");
    this.router.navigate(['./Home']);
    if (localStorage.getItem('token') !== null) {
      this.isAuth = "yes";
    } else {
      this.isAuth = "no";
    }
  }

}
