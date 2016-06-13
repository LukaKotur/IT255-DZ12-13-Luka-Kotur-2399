System.register(['angular2/core', 'angular2/http', '../pipe/search.pipe', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, search_pipe_1;
    var SearchRoomsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (_1) {}],
        execute: function() {
            SearchRoomsComponent = (function () {
                function SearchRoomsComponent(http) {
                    var _this = this;
                    this.name = "";
                    http.get('results.json')
                        .map(function (res) { return res.json(); })
                        .subscribe(function (sobe) { return _this.sobe = sobe; });
                }
                SearchRoomsComponent = __decorate([
                    core_1.Component({
                        pipes: [search_pipe_1.FilterPipe],
                        selector: 'searchrooms',
                        templateUrl: 'app/searchrooms/searchrooms.html'
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], SearchRoomsComponent);
                return SearchRoomsComponent;
            }());
            exports_1("SearchRoomsComponent", SearchRoomsComponent);
        }
    }
});
//# sourceMappingURL=searchrooms.component.js.map