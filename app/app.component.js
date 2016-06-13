System.register(['angular2/core', 'angular2/router', './home/home.component', './login/login.component', './registration/registration.component', './searchrooms/searchrooms.component', './addroom/addroom.component', './addhotel/addhotel.component', './allrooms/allrooms.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_component_1, login_component_1, registration_component_1, searchrooms_component_1, addroom_component_1, addhotel_component_1, allrooms_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (registration_component_1_1) {
                registration_component_1 = registration_component_1_1;
            },
            function (searchrooms_component_1_1) {
                searchrooms_component_1 = searchrooms_component_1_1;
            },
            function (addroom_component_1_1) {
                addroom_component_1 = addroom_component_1_1;
            },
            function (addhotel_component_1_1) {
                addhotel_component_1 = addhotel_component_1_1;
            },
            function (allrooms_component_1_1) {
                allrooms_component_1 = allrooms_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    var _this = this;
                    this.router = router;
                    router.subscribe(function (val) {
                        if (localStorage.getItem('token') !== null) {
                            _this.isAuth = "yes";
                        }
                        else {
                            _this.isAuth = "no";
                        }
                    });
                }
                AppComponent.prototype.onLogout = function () {
                    localStorage.removeItem("token");
                    this.router.navigate(['./Home']);
                    if (localStorage.getItem('token') !== null) {
                        this.isAuth = "yes";
                    }
                    else {
                        this.isAuth = "no";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/router.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: './', name: 'Home', component: home_component_1.MainPageComponent, useAsDefault: true },
                        { path: './login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: './register', name: 'Register', component: registration_component_1.RegistrationComponent },
                        { path: './searchrooms', name: 'SearchRooms', component: searchrooms_component_1.SearchRoomsComponent },
                        { path: './addroom', name: 'AddRoom', component: addroom_component_1.AddRoomComponent },
                        { path: './addhotel', name: 'AddHotel', component: addhotel_component_1.AddHotelComponent },
                        { path: './allrooms', name: 'AllRooms', component: allrooms_component_1.AllRoomsComponent },
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map