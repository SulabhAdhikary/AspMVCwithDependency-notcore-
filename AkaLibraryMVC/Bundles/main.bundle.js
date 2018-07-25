webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
// https://stackoverflow.com/questions/43257272/angular2-how-to-access-index-html-querystring-in-app-component//
// tslint:disable:quotemark
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_collapse__ = __webpack_require__("../../../../ngx-bootstrap/collapse/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__library_home_library_home_component__ = __webpack_require__("../../../../../src/app/library-home/library-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_backend_api_service__ = __webpack_require__("../../../../../src/app/services/backend-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__librarydetail_librarydetail_component__ = __webpack_require__("../../../../../src/app/librarydetail/librarydetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_service_resolve_service__ = __webpack_require__("../../../../../src/app/services/service-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navmenu_navmenu_component__ = __webpack_require__("../../../../../src/app/navmenu/navmenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navmenufordetail_navmenufordetail_component__ = __webpack_require__("../../../../../src/app/navmenufordetail/navmenufordetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__librarybooks_librarybooks_component__ = __webpack_require__("../../../../../src/app/librarybooks/librarybooks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__library_home_library_home_component__["a" /* LibraryHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__librarydetail_librarydetail_component__["a" /* LibrarydetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navmenu_navmenu_component__["a" /* NavmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navmenufordetail_navmenufordetail_component__["a" /* NavmenufordetailComponent */],
                __WEBPACK_IMPORTED_MODULE_13__librarybooks_librarybooks_component__["a" /* LibrarybooksComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_collapse__["a" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_7__library_home_library_home_component__["a" /* LibraryHomeComponent */],
                        pathMatch: 'full',
                        resolve: __WEBPACK_IMPORTED_MODULE_10__services_service_resolve_service__["a" /* ServiceResolveService */]
                    },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__library_home_library_home_component__["a" /* LibraryHomeComponent */], pathMatch: 'full' },
                    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__library_home_library_home_component__["a" /* LibraryHomeComponent */] },
                    { path: 'Libraries/Details/:libid', component: __WEBPACK_IMPORTED_MODULE_9__librarydetail_librarydetail_component__["a" /* LibrarydetailComponent */] },
                    { path: 'Libraries/Details/:libid/LibraryBook', component: __WEBPACK_IMPORTED_MODULE_13__librarybooks_librarybooks_component__["a" /* LibrarybooksComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_backend_api_service__["a" /* BackendApiService */], __WEBPACK_IMPORTED_MODULE_10__services_service_resolve_service__["a" /* ServiceResolveService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/library-home/library-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"library-home.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/library-home/library-home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navmenu></app-navmenu>\n"

/***/ }),

/***/ "../../../../../src/app/library-home/library-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryHomeComponent = /** @class */ (function () {
    function LibraryHomeComponent() {
    }
    LibraryHomeComponent.prototype.ngOnInit = function () {
    };
    LibraryHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-library-home',
            template: __webpack_require__("../../../../../src/app/library-home/library-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/library-home/library-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LibraryHomeComponent);
    return LibraryHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/librarybooks/librarybooks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"librarybooks.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/librarybooks/librarybooks.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navmenufordetail></app-navmenufordetail>\n\n\n<div *ngIf=\"!bookmodel\">\n        content here ...\n    </div>\n<div *ngIf=\"bookmodel\" >\n<form novalidate #f = \"ngForm\">\n \n<div class=\"container\">\n        <div class=\"form-group row\">\n                <label  class=\"col-2 col-form-label\">Books</label>\n               <div class=\"col-10\">\n                  <div class=\"form-group\">\n                    \n                        <select class=\"form-control\" name=\"bookId\" [(ngModel)]=\"bookmodel.id\" required >\n                         \n                          <option *ngFor=\"let book of bookmodel\"\n                                  [value]=\"book.id\" >\n                            {{book.title}}\n                          </option>\n                        </select>\n                     \n                    </div>\n               </div>\n               \n        </div>\n\n        <div class=\"form-group row\">\n                <label  class=\"col-2 col-form-label\">\n                    Members\n                </label>\n                <div class=\"col-10\">\n                        <div class=\"form-group\">\n                <select class=\"form-control\" name=\"memberid\" [(ngModel)]=\"memberModel.id\" required >\n                         \n                        <option *ngFor=\"let member of memberModel\"\n                                [value]=\"member.id\" >\n                          {{member.name}}\n                        </option>\n                      </select>\n                      </div>\n                </div>\n        </div>\n\n        <div class=\"row\">\n                \n                <div class=\"col-md-4 offset-md-8\">\n                                <input type=\"button\" class=\"btn btn-outline-primary float-right\" value=\"Check out\">\n                </div>\n              </div>\n\n</div>\n</form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/librarybooks/librarybooks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibrarybooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__ = __webpack_require__("../../../../../src/app/services/backend-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:quotemark



var LibrarybooksComponent = /** @class */ (function () {
    function LibrarybooksComponent(activatedRoute, backendApiService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.backendApiService = backendApiService;
        this.activatedRoute.params.subscribe(function (parm) { return _this.performLibraryDetailRequest(parm); });
    }
    LibrarybooksComponent.prototype.performLibraryDetailRequest = function (libraryID) {
        var _this = this;
        if ("libid" in libraryID) {
            this.backendApiService.getBooksAndMember(libraryID["libid"])
                .subscribe(function (libDetail) { return _this.GetBookDetail(libDetail); });
        }
    };
    LibrarybooksComponent.prototype.GetBookDetail = function (data) {
        this.bookmodel = data[0];
        this.memberModel = data[1];
    };
    LibrarybooksComponent.prototype.Submit = function () {
    };
    LibrarybooksComponent.prototype.ngOnInit = function () {
    };
    LibrarybooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-librarybooks',
            template: __webpack_require__("../../../../../src/app/librarybooks/librarybooks.component.html"),
            styles: [__webpack_require__("../../../../../src/app/librarybooks/librarybooks.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_backend_api_service__["a" /* BackendApiService */]])
    ], LibrarybooksComponent);
    return LibrarybooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/librarydetail/librarydetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".detailFromBorder{\r\n    border:solid 1px #bcbcbc;\r\n}", "", {"version":3,"sources":["E:/Projects/AkaMediaAssigmnet/AKA Candidate hands on test/AkaLibraryMVC/AkaLibraryMVC/cleintApp/src/app/librarydetail/E:/Projects/AkaMediaAssigmnet/AKA Candidate hands on test/AkaLibraryMVC/AkaLibraryMVC/cleintApp/src/app/librarydetail/librarydetail.component.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;CAC5B","file":"librarydetail.component.css","sourcesContent":[".detailFromBorder{\r\n    border:solid 1px #bcbcbc;\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/librarydetail/librarydetail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navmenufordetail></app-navmenufordetail>\n \n<div class=\"container\">\n        <div class=\"form-group row\">\n                <label  class=\"col-2 col-form-label\">Name</label>\n                <label  class=\"col-10 col-form-label detailFromBorder\">{{libraryName}}</label>\n               \n        </div>\n\n        <div class=\"form-group row\">\n                <label  class=\"col-2 col-form-label\">\n                    City\n                </label>\n                <label  class=\"col-10 col-form-label detailFromBorder\">{{cityName}}</label>\n        </div>\n\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/librarydetail/librarydetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibrarydetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_backend_api_service__ = __webpack_require__("../../../../../src/app/services/backend-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:quotemark



var LibrarydetailComponent = /** @class */ (function () {
    function LibrarydetailComponent(activatedRoute, router, backendApiService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.backendApiService = backendApiService;
        // Check for Query string
        this.activatedRoute.params.subscribe(function (parm) { return _this.performLibraryDetailRequest(parm); });
    }
    LibrarydetailComponent.prototype.performLibraryDetailRequest = function (libraryID) {
        var _this = this;
        if ("libid" in libraryID) {
            this.backendApiService.getLibrarayDetail(libraryID["libid"])
                .subscribe(function (libDetail) { return _this.performLibrarayBindDetail(libDetail); });
        }
    };
    LibrarydetailComponent.prototype.performLibrarayBindDetail = function (libDetail) {
        this.libraryName = libDetail.name;
        this.cityName = libDetail.city;
    };
    LibrarydetailComponent.prototype.ngOnInit = function () {
    };
    LibrarydetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-librarydetail',
            template: __webpack_require__("../../../../../src/app/librarydetail/librarydetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/librarydetail/librarydetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_backend_api_service__["a" /* BackendApiService */]])
    ], LibrarydetailComponent);
    return LibrarydetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"navmenu.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['Home']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Libraries\">Library</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['Member']\">Member</a>\n      </li>\n    </ul>\n   \n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navmenu/navmenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navmenu',
            template: __webpack_require__("../../../../../src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navmenufordetail/navmenufordetail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"navmenufordetail.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navmenufordetail/navmenufordetail.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light bottomMargin\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" [routerLink]=\"['Home']\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"Libraries\">Library</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['Member']\">Member</a>\n      </li>\n\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Library Detail\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        \n          <a class=\"dropdown-item\" [routerLink]=\"['LibraryBook']\">Books</a>\n         \n        </div>\n      </li>\n    </ul>\n   \n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navmenufordetail/navmenufordetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavmenufordetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavmenufordetailComponent = /** @class */ (function () {
    function NavmenufordetailComponent() {
    }
    NavmenufordetailComponent.prototype.ngOnInit = function () {
    };
    NavmenufordetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navmenufordetail',
            template: __webpack_require__("../../../../../src/app/navmenufordetail/navmenufordetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navmenufordetail/navmenufordetail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenufordetailComponent);
    return NavmenufordetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/backend-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackendApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin__ = __webpack_require__("../../../../rxjs/_esm5/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// tslint:disable:quotemark





var BackendApiService = /** @class */ (function () {
    function BackendApiService(http) {
        this.http = http;
    }
    BackendApiService.prototype.getListOfLibrary = function () {
        return this.http.get('api/library')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    BackendApiService.prototype.getLibrarayDetail = function (libraryID) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('id', libraryID.toString());
        var serverUrl = "api/library/" + libraryID;
        return this.http.get(serverUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    BackendApiService.prototype.getBooksAndMember = function (libraryID) {
        var bookUrl = "api/LibraryBooks/" + libraryID;
        var memberurl = "api/Member";
        var booksApi = this.http.get(bookUrl);
        var memberApi = this.http.get(memberurl);
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        params = params.append('id', libraryID.toString());
        return Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_forkJoin__["a" /* forkJoin */])([booksApi, memberApi])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    BackendApiService.prototype.getMembers = function () {
        return this.http.get('api/Member')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    BackendApiService.prototype.handleError = function (error, caught) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            console.error("Backend returned code " + error.status + ", " + ("body was: " + error.error));
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]({
            hasError: true,
            HttpCode: error.status,
            Message: error.error
        });
    };
    BackendApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BackendApiService);
    return BackendApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/service-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceResolveService = /** @class */ (function () {
    function ServiceResolveService() {
    }
    ServiceResolveService.prototype.resolve = function (route, state) {
        console.log('hello');
        console.log(route.params);
        return route.params.id;
    };
    ServiceResolveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ServiceResolveService);
    return ServiceResolveService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map