webpackJsonp([1,5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__officer_involved_shooting_model__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subject_age_group_model__ = __webpack_require__(649);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoliceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PoliceService = (function () {
    function PoliceService() {
    }
    PoliceService.prototype.getPoliceDataFromSocrata = function () {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('https://data.seattle.gov/resource/89ww-kmca.json')
            .then(function (res) {
            //saves data returned in json to postgres database
            res.data.forEach(function (object) {
                for (var property in object) {
                    if (object.hasOwnProperty(property)) {
                        object[property] = object[property].trim();
                    }
                    else {
                        console.log("object doesn't have own property" + object);
                    }
                }
                __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/officer-related-shootings', object)
                    .then(function (res) {
                    console.log(object);
                });
            });
        });
    };
    PoliceService.prototype.getPoliceDataFromPsqlDB = function () {
        var transformedOfficerInvolvedShootings = [];
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/officer-related-shootings')
            .then(function (res) {
            //transforms database objects into OfficerInvolvedShooting objects. I do this in case we want to exclude or manipulate data in between the database and the front-end
            res.data.forEach(function (object) {
                transformedOfficerInvolvedShootings.push(new __WEBPACK_IMPORTED_MODULE_2__officer_involved_shooting_model__["a" /* OfficerInvolvedShooting */](object));
            });
            return transformedOfficerInvolvedShootings;
        });
    };
    PoliceService.prototype.getGroupedSubjectAges = function () {
        var transformedSubjectAgeGroups = [];
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/grouped-subject-ages')
            .then(function (res) {
            res.data.forEach(function (object) {
                transformedSubjectAgeGroups.push(new __WEBPACK_IMPORTED_MODULE_3__subject_age_group_model__["a" /* SubjectAgeGroup */](object));
            });
            return transformedSubjectAgeGroups;
        });
    };
    PoliceService.prototype.getPieChartData = function (param) {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/pie-chart-data', param)
            .then(function (res) {
            return res;
        });
    };
    PoliceService.prototype.getPoliceDataFromPsqlDBWhereYear = function (dateRange) {
        var transformedOfficerInvolvedShootings = [];
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('/api/officer-involved-shootings-where-year', dateRange)
            .then(function (res) {
            res.data.forEach(function (object) {
                transformedOfficerInvolvedShootings.push(new __WEBPACK_IMPORTED_MODULE_2__officer_involved_shooting_model__["a" /* OfficerInvolvedShooting */](object));
            });
            return transformedOfficerInvolvedShootings;
        });
    };
    PoliceService.prototype.getTimeChartData = function () {
        return __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('/api/time-chart-data')
            .then(function (res) {
            return res;
        });
    };
    PoliceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], PoliceService);
    return PoliceService;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/police.service.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseColumn; });
var DatabaseColumn = (function () {
    function DatabaseColumn(column, description) {
        this.column = column;
        this.description = description;
    }
    return DatabaseColumn;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/database-column.model.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.navigateToSocrata = function () {
        window.open("https://data.seattle.gov/Public-Safety/SPD-Officer-Involved-Shooting-OIS-Data/mg5r-efcm", "_blank");
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(895),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/main.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 517;


/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(654);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(642);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/main.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app test!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(892),
            styles: [__webpack_require__(883)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/app.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__graphs_graphs_component__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scatterplot_scatterplot_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bar_bar_component__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subject_age_group_subject_age_group_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__table_table_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts_ng2_charts__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pie_chart_pie_chart_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__time_chart_time_chart_component__ = __webpack_require__(653);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__graphs_graphs_component__["a" /* GraphsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__scatterplot_scatterplot_component__["a" /* ScatterplotComponent */],
                __WEBPACK_IMPORTED_MODULE_9__bar_bar_component__["a" /* BarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__subject_age_group_subject_age_group_component__["a" /* SubjectAgeGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_11__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_14__time_chart_time_chart_component__["a" /* TimeChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_charts_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/app.module.js.map

/***/ }),

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__(336);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/app.routing.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = (function () {
    // public currentSummary = "test";
    function BarComponent(elementRef) {
        this.elementRef = elementRef;
        this.YearSearchParameter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graphElement = this.elementRef.nativeElement.querySelector('#test-bar');
        setTimeout(function () { return _this.d3SvgBarHorizontal(_this.graphElement.clientWidth); }, 1000);
    };
    BarComponent.prototype.submitForm = function (firstDate, secondDate) {
        var _this = this;
        this.YearSearchParameter.emit({ start: firstDate, end: secondDate });
        setTimeout(function () { return _this.d3SvgBarHorizontal(_this.graphElement.clientWidth); }, 1000);
    };
    BarComponent.prototype.onResize = function (event) {
        this.d3SvgBarHorizontal(event.target.innerWidth);
    };
    // changeCurrentSummary(summary) {
    //   this.currentSummary = summary;
    //   console.log(this.currentSummary);
    // }
    BarComponent.prototype.d3SvgBarHorizontal = function (graphWidth) {
        var changeCurrentSummary = function (summary) {
            this.changeCurrentSummary(summary);
        };
        var w = graphWidth;
        var h = 600;
        var padding = 36;
        var barPadding = 1;
        var param = "summary";
        //declared locally because some d3 functions can't reach all the way out to component properties
        var graphData = this.OfficerInvolvedShootingsGraphData;
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return d[param].length;
            })])
            .range([padding, h - padding]);
        var yAxisScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([__WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return d[param].length;
            }), 0])
            .range([padding, h - padding]);
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleTime"]()
            .domain([__WEBPACK_IMPORTED_MODULE_1_d3__["min"](graphData, function (d) {
                return new Date(d.date);
            }),
            __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return new Date(d.date);
            })])
            .range([padding, w - padding]);
        var xAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisBottom"](xScale);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](yAxisScale);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#test-bar")
            .html("")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
        svg.selectAll("rect")
            .data(graphData)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
            return xScale(new Date(d.date));
        })
            .attr("y", function (d, i) {
            return h - yScale(d[param].length);
        })
            .attr("width", function (d) {
            return w / graphData.length;
        })
            .attr("height", function (d) {
            return yScale(d[param].length) - padding;
        })
            .attr("fill", "#00888A")
            .attr("fill-opacity", "0.3")
            .on("mouseover", handleMouseOver)
            .on("mouseout", handleMouseOut)
            .on("click", handleClick);
        function handleClick(d, i) {
            // d3.select(this).remove();
            // changeCurrentSummary(d.summary);
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#mouse-over-text").remove();
            svg.append("text")
                .attr("id", "mouse-over-text")
                .attr("x", 0)
                .attr("y", 50)
                .attr("word-wrap", "break-word")
                .text(function () {
                return d.summary;
            });
        }
        function handleMouseOver(d, i) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr("fill", "#003F40");
        }
        function handleMouseOut(d, i) {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).attr("fill", "#00888A");
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#mouse-over-text").remove();
        }
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + 0 + "," + (h - padding) + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + "," + 0 + ")")
            .call(yAxis);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], BarComponent.prototype, "OfficerInvolvedShootingsGraphData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BarComponent.prototype, "YearSearchParameter", void 0);
    BarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bar',
            template: __webpack_require__(893),
            styles: [__webpack_require__(884)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], BarComponent);
    return BarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/bar.component.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__police_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GraphsComponent = (function () {
    function GraphsComponent(policeService) {
        this.policeService = policeService;
    }
    GraphsComponent.prototype.ngOnInit = function () {
        this.getPoliceDataFromPsqlDB();
        this.getGroupedSubjectAges();
    };
    GraphsComponent.prototype.getPoliceDataFromSocrata = function () {
        this.policeService.getPoliceDataFromSocrata();
    };
    GraphsComponent.prototype.getPoliceDataFromPsqlDB = function () {
        var _this = this;
        this.policeService.getPoliceDataFromPsqlDB()
            .then(function (servicePromise) { return _this.OfficerInvolvedShootingsGraphData = servicePromise; });
    };
    GraphsComponent.prototype.getGroupedSubjectAges = function () {
        var _this = this;
        this.policeService.getGroupedSubjectAges()
            .then(function (servicePromise) {
            _this.SubjectAgeGroupGraphData = servicePromise;
            _this.pieChartData = _this.SubjectAgeGroupGraphData.map(function (data) {
                return data.count;
            });
            _this.pieChartLabels = _this.SubjectAgeGroupGraphData.map(function (data) {
                return data.subjectAge;
            });
        });
    };
    GraphsComponent.prototype.queryByYear = function (dateRange) {
        var _this = this;
        this.policeService.getPoliceDataFromPsqlDBWhereYear(dateRange)
            .then(function (servicePromise) { return _this.OfficerInvolvedShootingsGraphData = servicePromise; });
    };
    GraphsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-graphs',
            template: __webpack_require__(894),
            styles: [__webpack_require__(885)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]) === 'function' && _a) || Object])
    ], GraphsComponent);
    return GraphsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/graphs.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficerInvolvedShooting; });
var OfficerInvolvedShooting = (function () {
    function OfficerInvolvedShooting(databaseObject) {
        this.databaseObject = databaseObject;
        this.date = databaseObject.date;
        this.fatal = databaseObject.fatal;
        this.justified = databaseObject.justified;
        this.justifiedPolicy = databaseObject.justified_policy;
        this.withinPolicy = databaseObject.within_policy;
        this.latitude = databaseObject.latitude;
        this.longitude = databaseObject.longitude;
        this.numberOfRounds = databaseObject.number_of_rounds;
        this.officerDisciplined = databaseObject.officer_disciplined;
        this.officerGender = databaseObject.officer_gender;
        this.officerInjured = databaseObject.officer_injured;
        this.officerRace = databaseObject.officer_race;
        this.officerOnDuty = databaseObject.on_duty;
        this.officerRank = databaseObject.rank;
        this.subjectAge = databaseObject.subject_age;
        this.subjectDOB = databaseObject.subject_dob;
        this.subjectGender = databaseObject.subject_gender;
        this.subjectRace = databaseObject.subject_race;
        this.subjectWeapon = databaseObject.subject_weapon;
        this.summary = databaseObject.summary;
        this.time = databaseObject.time;
        this.typeOfWeapon = databaseObject.type_of_weapon;
    }
    return OfficerInvolvedShooting;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/officer-involved-shooting.model.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_column_model__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__police_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PieChartComponent = (function () {
    function PieChartComponent(elementRef, policeService) {
        this.elementRef = elementRef;
        this.policeService = policeService;
        // public OfficerInvolvedShootingsGraphData: OfficerInvolvedShooting[];
        this.dataCount = 0;
        this.pieChartData = [];
        this.pieChartLabels = [];
        this.pieChartColors = [
            {
                backgroundColor: [
                    'rgba(0, 125, 81, 0.8)',
                    'rgba(56, 135, 215, 0.8)',
                    'rgba(215, 215, 56, 0.8)',
                    'rgba(255, 33, 143, 0.8)',
                    'rgba(191, 196, 223, 0.8)',
                    'rgba(56, 215, 56, 0.8)',
                    'rgba(96, 174, 146, 0.8)',
                    'rgba(255, 154, 33, 0.8)',
                    'rgba(96, 108, 174, 0.8)',
                    'rgba(56, 215, 136, 0.8)',
                    'rgba(205, 215, 56, 0.8)',
                    'rgba(255, 33, 33, 0.8)',
                    'rgba(126, 215, 56, 0.8)',
                    'rgba(56, 215, 66, 0.8)',
                    'rgba(56, 215, 146, 0.8)',
                    'rgba(56, 205, 215, 0.8)',
                    'rgba(223, 255, 33, 0.8)',
                    'rgba(0, 19, 125, 0.8)',
                    'rgba(136, 56, 215, 0.8)',
                    'rgba(215, 56, 214, 0.8)',
                    'rgba(255, 116, 116, 0.8)',
                    'rgba(215, 56, 56, 0.8)',
                    'rgba(148,159,177, 0.8)',
                    'rgba(166, 166, 166, 0.8)',
                    'rgba(255, 200, 200, 0.8)',
                    'rgba(235, 255, 116, 0.8)',
                    'rgba(56, 215, 97, 0.8)',
                    'rgba(56, 215, 177, 0.8)',
                    'rgba(215, 118, 56, 0.8)',
                    'rgba(215, 136, 56, 0.8)',
                    'rgba(56, 174, 215, 0.8)',
                    'rgba(56, 94, 215, 0.8)',
                    'rgba(97, 56, 215, 0.8)',
                    'rgba(56, 214, 215, 0.8)',
                    'rgba(0, 56, 215, 0.8)',
                    'rgba(198, 56, 215, 0.8)',
                    'rgba(219, 219, 219, 0.8)',
                    'rgba(215, 56, 153, 0.8)',
                    'rgba(215, 56, 73, 0.8)',
                    'rgba(113, 113, 113, 0.8)'
                ],
                borderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'white'
            }
        ];
        this.pieChartType = 'pie';
        this.currentParameter = "number_of_rounds";
        this.currentDescription = "The number of rounds the officer fired during the incident, if known. If the officer fired more than one round, and the exact number of rounds fired by each officer in an incident cannot be determined, multiple is indicated.";
        this.databaseColumns = [
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('number_of_rounds', 'The number of rounds the officer fired during the incident, if known. If the officer fired more than one round, and the exact number of rounds fired by each officer in an incident cannot be determined, multiple is indicated.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('city', 'City where the incident occurred'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('fatal', 'Whether the subject was fatally injured during the incident. Either "yes" or "no"'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('justified', 'Prior to 2014 the Firearms Review Board judged officer involved shootings to be justified or not justified. Incidents in this dataset that occurred prior to the 2014 policy changes governing the department\'s use of force reporting and review indicate either "Yes" (justified) or "No" (not justified). For incidents reviewed by the Force Review Board after the 2014 the column indicating justified is blank.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('within_policy', 'For incidents occurring after 2014 and reviewed by the Force Review Board, incidents are determined to be within policy ("yes") or not within policy("no").'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('justified_policy', 'Combined field including justified and within policy, according to relevant standard.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('officer_disciplined', 'Indicates whether the officer involved in the incident was disciplined for the policy violations associated with the indident.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('officer_gender', 'The gender of the officer in the incident.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('officer_injured', 'Whether the officer suffered serious injury during the incident. Either yes or no.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('officer_race', 'The race of the officer involved in the incident.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('on_duty', 'Whether the officer was on duty at the time of the incident. Either "yes" or "no".'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('rank', 'The rank of the officer involved in the incident at the time of the incident.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('subject_age', 'The age of the subject involved in the incident if known. Rounded to the nearest full year.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('subject_gender', 'The gender of the subject involved in the incident if known.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('subject_race', 'The race of the subject involved in the incident if known.'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('subject_weapon', 'Indicates whether the subject involved in the incident was armed with a weapon. Either "yes" or "no".'),
            new __WEBPACK_IMPORTED_MODULE_1__database_column_model__["a" /* DatabaseColumn */]('type_of_weapon', 'A brief description of the weapon the subject was armed with, if applicable. If the subject had no weapon, the data field is blank.')
        ];
    }
    // events
    PieChartComponent.prototype.chartClicked = function (e) {
        if (e.active.length > 0) {
            var index = e.active[0]._index;
            var data = e.active[0]._chart.config.data.datasets[0].data[e.active[0]._index];
            var label = e.active[0]._chart.config.data.labels[e.active[0]._index];
            console.log("data: " + data + " label: " + label);
        }
    };
    PieChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PieChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.policeService.getPoliceDataFromPsqlDB()
            .then(function (servicePromise) {
            _this.dataCount = servicePromise.length;
        });
        this.getData();
    };
    PieChartComponent.prototype.getData = function () {
        var _this = this;
        this.policeService.getPieChartData({ param: this.currentParameter })
            .then(function (servicePromise) {
            _this.setChart(servicePromise.data, _this.currentParameter);
        });
    };
    PieChartComponent.prototype.findDatabaseColumn = function (param) {
        var description = "";
        this.databaseColumns.forEach(function (column) {
            if (column.column === param) {
                description = column.description;
            }
        });
        return description;
    };
    PieChartComponent.prototype.onChange = function (selectedParameter) {
        var _this = this;
        this.currentParameter = selectedParameter;
        this.currentDescription = this.findDatabaseColumn(selectedParameter);
        this.policeService.getPieChartData({ param: this.currentParameter })
            .then(function (servicePromise) {
            _this.setChart(servicePromise.data, _this.currentParameter);
        });
    };
    PieChartComponent.prototype.setChart = function (pieChartObjects, parameter) {
        var _this = this;
        this.pieChartLabels = pieChartObjects.map(function (data) {
            return data[parameter];
        });
        setTimeout(function () {
            _this.pieChartData = pieChartObjects.map(function (data) {
                return data.count;
            });
        }, 50);
    };
    PieChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(896),
            styles: [__webpack_require__(887)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]) === 'function' && _b) || Object])
    ], PieChartComponent);
    return PieChartComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/pie-chart.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterplotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScatterplotComponent = (function () {
    function ScatterplotComponent() {
        this.testData = [5, 10, 13, 19, 11];
    }
    ScatterplotComponent.prototype.ngOnInit = function () {
    };
    ScatterplotComponent.prototype.test = function () {
        console.log(this.SubjectAgeGroupGraphData);
        this.d3SvgScatterplot();
    };
    // d3SubjectAgeGroupScatterplot() {
    //   var h = 500;
    //   var w = 500;
    //   var padding = 10;
    //   var graphData = this.testData;
    //
    //   var pack = d3.pack()
    //                 .size([h, w])
    //                 .padding(padding);
    //
    //   var root = d3.hierarchy(graphData);
    //   console.log(root);
    //
    //   var circles = svg.selectAll(".node")
    //                    .data(graphData)
    //                    .enter()
    //                    .append("circle")
    //                    .attr("class", "node")
    //                    .attr("r", 10);
    //
    //   // var svg = d3.select("#subject-age-group-scatterplot")
    //   //             .append("svg")
    //   //             .attr("width", w)
    //   //             .attr("height", h)
    //   //             .append("g")
    //   //             .attr("transform", "translate(0,0)");
    //   //
    //   //
    //   //
    //   // simulation.nodes(graphData);
    //   //
    //
    //   // var root = d3.hierarchy(graphData);
    //   //
    //   // svg.selectAll("circle")
    //   //    .data(root)
    //   //    .enter()
    //   //    .append("circle")
    //   //    .attr("cx", function(d, i) {
    //   //      return (i);
    //   //    })
    //   //    .attr("cy", function(d) {
    //   //      return d;
    //   //    })
    //   //    .attr("r", function(d) {
    //   //      return d.count;
    //   //    });
    // }
    ScatterplotComponent.prototype.d3SvgScatterplot = function () {
        var h = 500;
        var w = 800;
        var padding = 30;
        var graphData = this.OfficerInvolvedShootingsGraphData;
        var yScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return d.subjectAge;
            })])
            .range([padding, h - padding]);
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d, i) {
                return i;
            })])
            .range([padding, w - padding]);
        //consider adding .clamp(true) in order to take any numbers outside the domain and force them to round to the nearest high or low value. or clamp() lets scale return numbers outside a range if a number is outside the given domain
        var rScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return d.subjectAge;
            })])
            .range([2, 5]);
        var yAxis = __WEBPACK_IMPORTED_MODULE_1_d3__["axisLeft"](yScale);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#test-scatterplot")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
        svg.selectAll("circle")
            .data(graphData)
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
            return xScale(i);
        })
            .attr("cy", function (d) {
            return h - (yScale(d.subjectAge));
        })
            .attr("r", function (d) {
            return rScale(d.subjectAge);
        });
        svg.selectAll("text")
            .data(graphData)
            .enter()
            .append("text")
            .text(function (d) {
            return d.subjectAge;
        })
            .attr("x", function (d, i) {
            return xScale(i);
        })
            .attr("y", function (d) {
            return h - (yScale(d.subjectAge));
        });
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + (padding) + ", 0)")
            .call(yAxis);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ScatterplotComponent.prototype, "OfficerInvolvedShootingsGraphData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], ScatterplotComponent.prototype, "SubjectAgeGroupGraphData", void 0);
    ScatterplotComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scatterplot',
            template: __webpack_require__(897),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScatterplotComponent);
    return ScatterplotComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/scatterplot.component.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectAgeGroup; });
var SubjectAgeGroup = (function () {
    function SubjectAgeGroup(databaseObject) {
        this.databaseObject = databaseObject;
        this.count = databaseObject.count;
        this.subjectAge = databaseObject.subject_age;
    }
    return SubjectAgeGroup;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/subject-age-group.model.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__police_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubjectAgeGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectAgeGroupComponent = (function () {
    function SubjectAgeGroupComponent(elementRef, policeService) {
        this.elementRef = elementRef;
        this.policeService = policeService;
    }
    SubjectAgeGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.graphElement = this.elementRef.nativeElement.querySelector('#subject-age-group-graph');
        this.policeService.getGroupedSubjectAges()
            .then(function (servicePromise) {
            _this.SubjectAgeGroupGraphData = servicePromise;
        });
        setTimeout(function () {
            _this.d3SubjectAgeGroupBubble(_this.graphElement.clientWidth);
        }, 2000);
    };
    SubjectAgeGroupComponent.prototype.onResize = function (event) {
        this.d3SubjectAgeGroupBubble(event.target.innerWidth);
    };
    SubjectAgeGroupComponent.prototype.d3SubjectAgeGroupBubble = function (graphWidth) {
        var w = graphWidth;
        var h = 500;
        var padding = 10;
        var graphData = this.SubjectAgeGroupGraphData;
        var rScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d) {
                return d.count;
            })])
            .range([2, 20]);
        var xScale = __WEBPACK_IMPORTED_MODULE_1_d3__["scaleLinear"]()
            .domain([0, __WEBPACK_IMPORTED_MODULE_1_d3__["max"](graphData, function (d, i) {
                return d.subjectAge;
            })])
            .range([padding, w - padding]);
        var svg = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#subject-age-group-graph")
            .html("")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
        svg.selectAll("circle")
            .data(graphData)
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
            return xScale(d.subjectAge);
        })
            .attr("cy", 250)
            .attr("r", function (d) {
            return rScale(d.count);
        })
            .on("mouseover", function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).style("fill", "green");
        })
            .on("mouseout", function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).style("fill", "black");
        })
            .on("mousedown", function () {
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).transition()
                .delay(0)
                .duration(1000)
                .attr("cy", 100);
            __WEBPACK_IMPORTED_MODULE_1_d3__["select"](this).transition()
                .delay(1000)
                .attr("cy", 250);
        });
    };
    SubjectAgeGroupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subject-age-group',
            template: __webpack_require__(898),
            styles: [__webpack_require__(889)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]) === 'function' && _b) || Object])
    ], SubjectAgeGroupComponent);
    return SubjectAgeGroupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/subject-age-group.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TableComponent = (function () {
    function TableComponent() {
        this.testData = [5, 10, 13, 19];
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.testTable = function () {
        this.d3Table();
    };
    TableComponent.prototype.d3Table = function () {
        var w = 500;
        var h = 500;
        var padding = 10;
        var graphData = this.testData;
        var table = __WEBPACK_IMPORTED_MODULE_1_d3__["select"]("#table-graph")
            .append("table")
            .style("border-collapse", "collapse")
            .style("border", "2px black solid");
        table.selectAll("tr")
            .data(graphData)
            .enter()
            .append("tr")
            .selectAll("td")
            .data(graphData)
            .enter().append("td")
            .style("border", "1px black solid")
            .style("padding", "10px")
            .text("hey")
            .style("font-size", "12px");
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Array)
    ], TableComponent.prototype, "OfficerInvolvedShootingsGraphData", void 0);
    TableComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(899),
            styles: [__webpack_require__(890)]
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/table.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeChart; });
var TimeChart = (function () {
    function TimeChart(data, label) {
        this.data = data;
        this.label = label;
    }
    return TimeChart;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/time-chart.model.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__police_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_column_model__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_chart_model__ = __webpack_require__(652);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimeChartComponent = (function () {
    function TimeChartComponent(policeService) {
        this.policeService = policeService;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.currentDescription = "";
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
        this.barChartColors = [
            {
                backgroundColor: 'rgba(191, 196, 223, 0.8)',
                borderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'white'
            },
            {
                backgroundColor: 'rgba(198, 56, 215, 0.8)',
                borderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'white'
            },
            {
                backgroundColor: 'rgba(215, 215, 56, 0.8)',
                borderColor: 'white',
                pointBackgroundColor: 'white',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'white'
            }
        ];
        this.databaseColumns = [
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('officer_injured', 'Whether the officer suffered serious injury during the incident. Either yes or no.'),
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('fatal', 'Whether the subject was fatally injured during the incident. Either "yes" or "no"'),
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('officer_gender', 'The gender of the officer in the incident.'),
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('on_duty', 'Whether the officer was on duty at the time of the incident. Either "yes" or "no".'),
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('subject_gender', 'The gender of the subject involved in the incident if known.'),
            new __WEBPACK_IMPORTED_MODULE_2__database_column_model__["a" /* DatabaseColumn */]('subject_weapon', 'Indicates whether the subject involved in the incident was armed with a weapon. Either "yes" or "no".')
        ];
        this.subject_gender = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([1, 0, 0, 0, 0, 0, 0, 0, 1, 6, 0, 0], 'Female'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([9, 6, 5, 6, 15, 10, 3, 7, 12, 19, 14, 6], 'Male')
        ];
        this.officer_gender = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([0, 0, 0, 1, 1, 0, 2, 1, 0, 6, 1, 1], 'Female'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([10, 6, 5, 5, 14, 10, 1, 6, 13, 19, 13, 5], 'Male')
        ];
        this.fatal = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([6, 4, 3, 6, 7, 5, 2, 5, 2, 18, 2, 2], 'No'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([4, 2, 2, 0, 8, 5, 1, 2, 11, 7, 12, 4], 'Yes')
        ];
        this.officer_injured = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([9, 5, 4, 3, 14, 10, 3, 7, 12, 25, 14, 6], 'No'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([1, 1, 1, 3, 1, 0, 0, 0, 1, 0, 0, 0], 'Yes')
        ];
        this.subject_weapon = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([3, 1, 1, 1, 1, 0, 1, 0, 1, 16, 0, 0], 'No'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([7, 5, 4, 5, 14, 10, 2, 7, 12, 9, 14, 6], 'Yes')
        ];
        this.on_duty = [
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], 'No'),
            new __WEBPACK_IMPORTED_MODULE_3__time_chart_model__["a" /* TimeChart */]([10, 5, 4, 5, 15, 10, 3, 7, 13, 25, 14, 6], 'Yes')
        ];
    }
    // events
    TimeChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    TimeChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    TimeChartComponent.prototype.ngOnInit = function () {
        this.policeService.getPoliceDataFromPsqlDB()
            .then(function (servicePromise) {
            console.log(servicePromise);
        });
        this.getData();
        this.barChartData = this.officer_injured;
        this.currentDescription = this.findDatabaseColumn("officer_injured");
    };
    TimeChartComponent.prototype.onChange = function (selectedParameter) {
        this.barChartData = this[selectedParameter];
        this.currentDescription = this.findDatabaseColumn(selectedParameter);
    };
    TimeChartComponent.prototype.findDatabaseColumn = function (param) {
        var description = "";
        this.databaseColumns.forEach(function (column) {
            if (column.column === param) {
                description = column.description;
            }
        });
        return description;
    };
    TimeChartComponent.prototype.getData = function () {
        var _this = this;
        this.policeService.getTimeChartData()
            .then(function (servicePromise) {
            _this.convertObjectsToTimeCharts(servicePromise.data.rows);
        });
    };
    TimeChartComponent.prototype.convertObjectsToTimeCharts = function (databaseObjects) {
        console.log(databaseObjects);
    };
    TimeChartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-time-chart',
            template: __webpack_require__(900),
            styles: [__webpack_require__(891)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]) === 'function' && _a) || Object])
    ], TimeChartComponent);
    return TimeChartComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/time-chart.component.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/environment.js.map

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 384,
	"./af.js": 384,
	"./ar": 391,
	"./ar-dz": 385,
	"./ar-dz.js": 385,
	"./ar-kw": 386,
	"./ar-kw.js": 386,
	"./ar-ly": 387,
	"./ar-ly.js": 387,
	"./ar-ma": 388,
	"./ar-ma.js": 388,
	"./ar-sa": 389,
	"./ar-sa.js": 389,
	"./ar-tn": 390,
	"./ar-tn.js": 390,
	"./ar.js": 391,
	"./az": 392,
	"./az.js": 392,
	"./be": 393,
	"./be.js": 393,
	"./bg": 394,
	"./bg.js": 394,
	"./bn": 395,
	"./bn.js": 395,
	"./bo": 396,
	"./bo.js": 396,
	"./br": 397,
	"./br.js": 397,
	"./bs": 398,
	"./bs.js": 398,
	"./ca": 399,
	"./ca.js": 399,
	"./cs": 400,
	"./cs.js": 400,
	"./cv": 401,
	"./cv.js": 401,
	"./cy": 402,
	"./cy.js": 402,
	"./da": 403,
	"./da.js": 403,
	"./de": 406,
	"./de-at": 404,
	"./de-at.js": 404,
	"./de-ch": 405,
	"./de-ch.js": 405,
	"./de.js": 406,
	"./dv": 407,
	"./dv.js": 407,
	"./el": 408,
	"./el.js": 408,
	"./en-au": 409,
	"./en-au.js": 409,
	"./en-ca": 410,
	"./en-ca.js": 410,
	"./en-gb": 411,
	"./en-gb.js": 411,
	"./en-ie": 412,
	"./en-ie.js": 412,
	"./en-nz": 413,
	"./en-nz.js": 413,
	"./eo": 414,
	"./eo.js": 414,
	"./es": 416,
	"./es-do": 415,
	"./es-do.js": 415,
	"./es.js": 416,
	"./et": 417,
	"./et.js": 417,
	"./eu": 418,
	"./eu.js": 418,
	"./fa": 419,
	"./fa.js": 419,
	"./fi": 420,
	"./fi.js": 420,
	"./fo": 421,
	"./fo.js": 421,
	"./fr": 424,
	"./fr-ca": 422,
	"./fr-ca.js": 422,
	"./fr-ch": 423,
	"./fr-ch.js": 423,
	"./fr.js": 424,
	"./fy": 425,
	"./fy.js": 425,
	"./gd": 426,
	"./gd.js": 426,
	"./gl": 427,
	"./gl.js": 427,
	"./gom-latn": 428,
	"./gom-latn.js": 428,
	"./he": 429,
	"./he.js": 429,
	"./hi": 430,
	"./hi.js": 430,
	"./hr": 431,
	"./hr.js": 431,
	"./hu": 432,
	"./hu.js": 432,
	"./hy-am": 433,
	"./hy-am.js": 433,
	"./id": 434,
	"./id.js": 434,
	"./is": 435,
	"./is.js": 435,
	"./it": 436,
	"./it.js": 436,
	"./ja": 437,
	"./ja.js": 437,
	"./jv": 438,
	"./jv.js": 438,
	"./ka": 439,
	"./ka.js": 439,
	"./kk": 440,
	"./kk.js": 440,
	"./km": 441,
	"./km.js": 441,
	"./kn": 442,
	"./kn.js": 442,
	"./ko": 443,
	"./ko.js": 443,
	"./ky": 444,
	"./ky.js": 444,
	"./lb": 445,
	"./lb.js": 445,
	"./lo": 446,
	"./lo.js": 446,
	"./lt": 447,
	"./lt.js": 447,
	"./lv": 448,
	"./lv.js": 448,
	"./me": 449,
	"./me.js": 449,
	"./mi": 450,
	"./mi.js": 450,
	"./mk": 451,
	"./mk.js": 451,
	"./ml": 452,
	"./ml.js": 452,
	"./mr": 453,
	"./mr.js": 453,
	"./ms": 455,
	"./ms-my": 454,
	"./ms-my.js": 454,
	"./ms.js": 455,
	"./my": 456,
	"./my.js": 456,
	"./nb": 457,
	"./nb.js": 457,
	"./ne": 458,
	"./ne.js": 458,
	"./nl": 460,
	"./nl-be": 459,
	"./nl-be.js": 459,
	"./nl.js": 460,
	"./nn": 461,
	"./nn.js": 461,
	"./pa-in": 462,
	"./pa-in.js": 462,
	"./pl": 463,
	"./pl.js": 463,
	"./pt": 465,
	"./pt-br": 464,
	"./pt-br.js": 464,
	"./pt.js": 465,
	"./ro": 466,
	"./ro.js": 466,
	"./ru": 467,
	"./ru.js": 467,
	"./sd": 468,
	"./sd.js": 468,
	"./se": 469,
	"./se.js": 469,
	"./si": 470,
	"./si.js": 470,
	"./sk": 471,
	"./sk.js": 471,
	"./sl": 472,
	"./sl.js": 472,
	"./sq": 473,
	"./sq.js": 473,
	"./sr": 475,
	"./sr-cyrl": 474,
	"./sr-cyrl.js": 474,
	"./sr.js": 475,
	"./ss": 476,
	"./ss.js": 476,
	"./sv": 477,
	"./sv.js": 477,
	"./sw": 478,
	"./sw.js": 478,
	"./ta": 479,
	"./ta.js": 479,
	"./te": 480,
	"./te.js": 480,
	"./tet": 481,
	"./tet.js": 481,
	"./th": 482,
	"./th.js": 482,
	"./tl-ph": 483,
	"./tl-ph.js": 483,
	"./tlh": 484,
	"./tlh.js": 484,
	"./tr": 485,
	"./tr.js": 485,
	"./tzl": 486,
	"./tzl.js": 486,
	"./tzm": 488,
	"./tzm-latn": 487,
	"./tzm-latn.js": 487,
	"./tzm.js": 488,
	"./uk": 489,
	"./uk.js": 489,
	"./ur": 490,
	"./ur.js": 490,
	"./uz": 492,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 492,
	"./vi": 493,
	"./vi.js": 493,
	"./x-pseudo": 494,
	"./x-pseudo.js": 494,
	"./yo": 495,
	"./yo.js": 495,
	"./zh-cn": 496,
	"./zh-cn.js": 496,
	"./zh-hk": 497,
	"./zh-hk.js": 497,
	"./zh-tw": 498,
	"./zh-tw.js": 498
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 876;


/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "#bar-chart-container {\n  padding: 0px 20px;\n}\n\n#time-title {\n  font-size: 30px;\n  padding: 50px 0px 30px 0px;\n}\n\n#time-intro {\n  font-size: 18px;\n  padding: 0px 0px 20px 0px;\n}\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "#graphs-container {\n  margin: 0% 4% 4% 4%;\n}\n\n.divider {\n  height: 100px;\n  width: 100vw;\n  background-color: #f3e5ff;\n}\n"

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100vw;\n  background-color: #f3e5ff;\n}\n\n#title {\n  margin: 60px 10px 0px 10px;\n  font-size: 78px;\n  letter-spacing: 6px;\n}\n\n#sub-title {\n  font-size: 20px;\n  max-width: 900px;\n  margin-left: 90px;\n}\n\n#link-to-socrata a {\n  color: #333;\n}\n\na:hover {\n  color: #333;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "#pie-chart-container {\n  margin: 20px 0px;\n}\n\n#intro-and-form {\n  text-align: center;\n  top: 50%;\n}\n\n#total-intro {\n  font-size: 30px;\n  padding: 140px 10px 90px 10px;\n}\n\n#form-intro {\n  font-size: 18px;\n  padding: 10px;\n}\n\n#chart-and-description {\n  max-width: 700px;\n}\n\n#description {\n  padding: 30px 10px 10px 10px;\n}\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "#time-chart-title {\n  text-align: center;\n  font-size: 30px;\n  padding: 40px 0px 20px 0px;\n}\n\n#time-chart {\n  padding: 0% 10%;\n}\n\n#form-and-description {\n  padding-left: 15%;\n  padding-top: 10px;\n}\n\n#form-intro {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<div id=\"bar-chart-container\">\n  <div id=\"time-title\">\n    Length of summaries over time\n  </div>\n\n  <div id=\"time-intro\">\n    Select a time-span to view how summaries of officer involved shootings compare over time. Dataset ranges from 2005/03/21 until 2016/06/19.\n  </div>\n\n  <label>First date</label>\n  <input type=\"date\" #firstDate value=\"2005-03-21\">\n  <label>Second date</label>\n  <input type=\"date\" #secondDate value=\"2016-06-19\">\n  <button (click)=\"submitForm(firstDate.value, secondDate.value)\">submit</button>\n\n  <div id=\"test-bar\" (window:resize)=\"onResize($event)\"></div>\n</div>\n<div id=\"current-summary\">\n  {{currentSummary}}\n</div>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<div id=\"graphs-container\">\n   <app-pie-chart></app-pie-chart>\n</div>\n\n<div class=\"divider\"></div>\n\n<div id=\"graphs-container\">\n   <app-time-chart></app-time-chart>\n</div>\n\n<div class=\"divider\"></div>\n\n<div id=\"graphs-container\">\n   <app-bar [OfficerInvolvedShootingsGraphData]=\"OfficerInvolvedShootingsGraphData\" (YearSearchParameter)=\"queryByYear($event)\"></app-bar>\n </div>\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div id=\"title\">\n    MEANINGFUL DATA\n  </div>\n\n  <div id=\"sub-title\">\n    Graphs created with d3 and Chart.js to create informative and engaging experience with Seattle Police Department's data about officer involved shootings from 2005 - present.\n    <p id=\"link-to-socrata\">All data pulled from <a href=\"#\" (click)=\"navigateToSocrata()\">Socrata</a></p>\n  </div>\n\n</div>\n\n<app-graphs></app-graphs>\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"pie-chart-container\">\n  <div class=\"col-sm-3\" id=\"intro-and-form\">\n    <p id=\"total-intro\">Total number of records for this dataset: {{dataCount}}</p>\n    <p id=\"form-intro\">Breakdown information by selecting a column in the dataset</p>\n\n    <select (change)=\"onChange($event.target.value)\">\n      <option *ngFor=\"let column of databaseColumns\" value={{column.column}}>{{column.column}}</option>\n    </select>\n  </div>\n  <div class=\"col-sm-9\" id=\"chart-and-description\">\n    <p id=\"description\">{{currentDescription}}</p>\n\n    <div style=\"display: block\">\n      <canvas baseChart id=\"pie-chart\"\n      [data]=\"pieChartData\"\n      [labels]=\"pieChartLabels\"\n      [colors]=\"pieChartColors\"\n      [chartType]=\"pieChartType\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"test()\">\n  scatterplot works!\n</p>\n\n<div id=\"test-scatterplot\"></div>\n\n<div id=\"subject-age-group-scatterplot\"></div>\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<div id=\"subject-age-group-graph\" (window:resize)=\"onResize($event)\"></div>\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"testTable()\">\n  table works!\n</p>\n\n<div id=\"table-graph\"></div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<div id=\"time-chart-title\">\n  Side-by-side comparison by year\n</div>\n<div id=\"time-chart\">\n  <div style=\"display: block\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [colors]=\"barChartColors\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n</div>\n<div id=\"form-and-description\">\n  <div id=\"form-intro\">Juxtapose different incident responses to see how they change from 2005 - 2016</div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let column of databaseColumns\" value={{column.column}}>{{column.column}}</option>\n      </select>\n\n    </div>\n    <div class=\"col-sm-10\">\n      <p>{{currentDescription}}</p>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 921:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(518);


/***/ })

},[921]);
//# sourceMappingURL=main.bundle.map