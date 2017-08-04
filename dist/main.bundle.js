webpackJsonp([1,5],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__officer_involved_shooting_model__ = __webpack_require__(649);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subject_age_group_model__ = __webpack_require__(654);
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

/***/ 336:
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

/***/ 337:
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
            template: __webpack_require__(902),
            styles: [__webpack_require__(891)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/main.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(912);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoryService = (function () {
    function StoryService(http) {
        this.http = http;
    }
    StoryService.prototype.getStories = function () {
        // change this url when project is deployed to the actual url
        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/stories')
            .then(function (res) {
            for (var i = 0; i < res.data.stories.length; i++) {
                var story = res.data.stories[i];
                __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post('/api/saveStories', {
                    newTitle: story.title,
                    newAuthor: story.author.name,
                    newDate: story.publishedAt,
                    newLink: story.links.permalink
                })
                    .then(function (res) {
                    console.log(res);
                });
            }
        });
    };
    //having trouble accessing this function from component because component thinks this returns void with .then and returns type AxiosPromise if I just return axios.get
    StoryService.prototype.displayStories = function () {
        // return axios.get('/api/displayStories');
        // let response = [];
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.get('/api/displayStories')
            .then(function (res) {
            console.log(res.data);
            // response = res;
            return res.data;
        });
        // return response;
    };
    StoryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], StoryService);
    return StoryService;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/story.service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 520;


/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(644);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/main.js.map

/***/ }),

/***/ 643:
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
            template: __webpack_require__(898),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/app.component.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dash_dash_component__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__source_pipe__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_main_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__graphs_graphs_component__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scatterplot_scatterplot_component__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bar_bar_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__subject_age_group_subject_age_group_component__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__table_table_component__ = __webpack_require__(656);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__ = __webpack_require__(883);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pie_chart_pie_chart_component__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__time_chart_time_chart_component__ = __webpack_require__(658);
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
                __WEBPACK_IMPORTED_MODULE_6__dash_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__source_pipe__["a" /* SourcePipe */],
                __WEBPACK_IMPORTED_MODULE_9__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_10__graphs_graphs_component__["a" /* GraphsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__scatterplot_scatterplot_component__["a" /* ScatterplotComponent */],
                __WEBPACK_IMPORTED_MODULE_12__bar_bar_component__["a" /* BarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__subject_age_group_subject_age_group_component__["a" /* SubjectAgeGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_14__table_table_component__["a" /* TableComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
                __WEBPACK_IMPORTED_MODULE_17__time_chart_time_chart_component__["a" /* TimeChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts_ng2_charts__["ChartsModule"],
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

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__(337);
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

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(163);
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
            template: __webpack_require__(899),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object])
    ], BarComponent);
    return BarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/bar.component.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__story_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__police_service__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashComponent = (function () {
    function DashComponent(storyService, policeService) {
        this.storyService = storyService;
        this.policeService = policeService;
        this.sidebar = false;
        this.selectedSources = ["BBC", "CNN"];
    }
    DashComponent.prototype.ngOnInit = function () {
        this.stories = this.storyService.displayStories();
    };
    //eventually call this function inside of another function that also calls on the service to save source preferences
    DashComponent.prototype.showSidebar = function () {
        if (this.sidebar === false) {
            this.sidebar = true;
        }
        else {
            this.sidebar = false;
        }
    };
    DashComponent.prototype.getPoliceData = function () {
        this.policeService.getPoliceDataFromSocrata();
    };
    DashComponent.prototype.navigate = function (clickedStory) {
        window.open(clickedStory, "_blank");
    };
    DashComponent.prototype.setPipe = function (selectedSources) {
        this.selectedSources = selectedSources;
    };
    DashComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dash',
            template: __webpack_require__(900),
            styles: [__webpack_require__(889)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */], __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]) === 'function' && _b) || Object])
    ], DashComponent);
    return DashComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/dash.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__police_service__ = __webpack_require__(106);
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
            template: __webpack_require__(901),
            styles: [__webpack_require__(890)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]) === 'function' && _a) || Object])
    ], GraphsComponent);
    return GraphsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/graphs.component.js.map

/***/ }),

/***/ 649:
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

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__database_column_model__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__police_service__ = __webpack_require__(106);
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
            template: __webpack_require__(903),
            styles: [__webpack_require__(892)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]) === 'function' && _b) || Object])
    ], PieChartComponent);
    return PieChartComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/pie-chart.component.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(163);
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
            template: __webpack_require__(904),
            styles: [__webpack_require__(893)]
        }), 
        __metadata('design:paramtypes', [])
    ], ScatterplotComponent);
    return ScatterplotComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/scatterplot.component.js.map

/***/ }),

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__story_service__ = __webpack_require__(338);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(storyService) {
        this.storyService = storyService;
        this.doneSavePreferences = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeSources = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.options = [
            { name: 'CNN', value: 'CNN', checked: false },
            { name: 'BBC', value: 'BBC', checked: false },
            { name: 'Fox News', value: 'Fox+News', checked: false },
            { name: 'NPR', value: 'NPR', checked: false },
            { name: 'ESPN US', value: 'ESPN+US', checked: false },
            { name: 'Bloomberg', value: 'Bloomberg', checked: false },
            { name: 'CBS Sports', value: 'CBS+Sports', checked: false },
            { name: 'CBS News', value: 'CBS+News', checked: false },
            { name: 'Huffington Post', value: 'Huffington+Post', checked: false },
            { name: 'Al Jazeera', value: 'Al+Jazeera', checked: false },
            { name: 'The Washington Post', value: 'The+Washington+Post', checked: false },
            { name: 'Yahoo', value: 'Yahoo', checked: false }
        ];
        this.selectedSources = [];
    }
    Object.defineProperty(SidebarComponent.prototype, "selectedOptions", {
        get: function () {
            return this.options
                .filter(function (opt) { return opt.checked; })
                .map(function (opt) { return opt.value; });
        },
        enumerable: true,
        configurable: true
    });
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.getStories = function () {
        this.storyService.getStories();
        this.doneSavePreferences.emit();
    };
    SidebarComponent.prototype.onChange = function () {
        this.selectedSources = [];
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var i = _a[_i];
            if (i.checked === true) {
                this.selectedSources.push(i.name);
            }
        }
        this.changeSources.emit(this.selectedSources);
    };
    SidebarComponent.prototype.sendPreferences = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "doneSavePreferences", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SidebarComponent.prototype, "changeSources", void 0);
    SidebarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(905),
            styles: [__webpack_require__(894)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* StoryService */]) === 'function' && _a) || Object])
    ], SidebarComponent);
    return SidebarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/sidebar.component.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourcePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SourcePipe = (function () {
    function SourcePipe() {
    }
    SourcePipe.prototype.transform = function (input, source) {
        var output = [];
        if (source.indexOf("CNN") > -1) {
            for (var i = 0; i < input.length; i++) {
                if (input[i].source === "CNN") {
                    output.push(input[i]);
                }
            }
        }
        if (source.indexOf("BBC") > -1) {
            for (var i = 0; i < input.length; i++) {
                if (input[i].source === "BBC") {
                    output.push(input[i]);
                }
            }
        }
        return output;
    };
    SourcePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'source',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], SourcePipe);
    return SourcePipe;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/source.pipe.js.map

/***/ }),

/***/ 654:
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

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__police_service__ = __webpack_require__(106);
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
            template: __webpack_require__(906),
            styles: [__webpack_require__(895)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__police_service__["a" /* PoliceService */]) === 'function' && _b) || Object])
    ], SubjectAgeGroupComponent);
    return SubjectAgeGroupComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/subject-age-group.component.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__(163);
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
            template: __webpack_require__(907),
            styles: [__webpack_require__(896)]
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/table.component.js.map

/***/ }),

/***/ 657:
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

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__police_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_column_model__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__time_chart_model__ = __webpack_require__(657);
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
            template: __webpack_require__(908),
            styles: [__webpack_require__(897)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__police_service__["a" /* PoliceService */]) === 'function' && _a) || Object])
    ], TimeChartComponent);
    return TimeChartComponent;
    var _a;
}());
//# sourceMappingURL=/Users/katherinematthews/Desktop/epicodus-capstone/src/time-chart.component.js.map

/***/ }),

/***/ 659:
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

/***/ 880:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 387,
	"./af.js": 387,
	"./ar": 394,
	"./ar-dz": 388,
	"./ar-dz.js": 388,
	"./ar-kw": 389,
	"./ar-kw.js": 389,
	"./ar-ly": 390,
	"./ar-ly.js": 390,
	"./ar-ma": 391,
	"./ar-ma.js": 391,
	"./ar-sa": 392,
	"./ar-sa.js": 392,
	"./ar-tn": 393,
	"./ar-tn.js": 393,
	"./ar.js": 394,
	"./az": 395,
	"./az.js": 395,
	"./be": 396,
	"./be.js": 396,
	"./bg": 397,
	"./bg.js": 397,
	"./bn": 398,
	"./bn.js": 398,
	"./bo": 399,
	"./bo.js": 399,
	"./br": 400,
	"./br.js": 400,
	"./bs": 401,
	"./bs.js": 401,
	"./ca": 402,
	"./ca.js": 402,
	"./cs": 403,
	"./cs.js": 403,
	"./cv": 404,
	"./cv.js": 404,
	"./cy": 405,
	"./cy.js": 405,
	"./da": 406,
	"./da.js": 406,
	"./de": 409,
	"./de-at": 407,
	"./de-at.js": 407,
	"./de-ch": 408,
	"./de-ch.js": 408,
	"./de.js": 409,
	"./dv": 410,
	"./dv.js": 410,
	"./el": 411,
	"./el.js": 411,
	"./en-au": 412,
	"./en-au.js": 412,
	"./en-ca": 413,
	"./en-ca.js": 413,
	"./en-gb": 414,
	"./en-gb.js": 414,
	"./en-ie": 415,
	"./en-ie.js": 415,
	"./en-nz": 416,
	"./en-nz.js": 416,
	"./eo": 417,
	"./eo.js": 417,
	"./es": 419,
	"./es-do": 418,
	"./es-do.js": 418,
	"./es.js": 419,
	"./et": 420,
	"./et.js": 420,
	"./eu": 421,
	"./eu.js": 421,
	"./fa": 422,
	"./fa.js": 422,
	"./fi": 423,
	"./fi.js": 423,
	"./fo": 424,
	"./fo.js": 424,
	"./fr": 427,
	"./fr-ca": 425,
	"./fr-ca.js": 425,
	"./fr-ch": 426,
	"./fr-ch.js": 426,
	"./fr.js": 427,
	"./fy": 428,
	"./fy.js": 428,
	"./gd": 429,
	"./gd.js": 429,
	"./gl": 430,
	"./gl.js": 430,
	"./gom-latn": 431,
	"./gom-latn.js": 431,
	"./he": 432,
	"./he.js": 432,
	"./hi": 433,
	"./hi.js": 433,
	"./hr": 434,
	"./hr.js": 434,
	"./hu": 435,
	"./hu.js": 435,
	"./hy-am": 436,
	"./hy-am.js": 436,
	"./id": 437,
	"./id.js": 437,
	"./is": 438,
	"./is.js": 438,
	"./it": 439,
	"./it.js": 439,
	"./ja": 440,
	"./ja.js": 440,
	"./jv": 441,
	"./jv.js": 441,
	"./ka": 442,
	"./ka.js": 442,
	"./kk": 443,
	"./kk.js": 443,
	"./km": 444,
	"./km.js": 444,
	"./kn": 445,
	"./kn.js": 445,
	"./ko": 446,
	"./ko.js": 446,
	"./ky": 447,
	"./ky.js": 447,
	"./lb": 448,
	"./lb.js": 448,
	"./lo": 449,
	"./lo.js": 449,
	"./lt": 450,
	"./lt.js": 450,
	"./lv": 451,
	"./lv.js": 451,
	"./me": 452,
	"./me.js": 452,
	"./mi": 453,
	"./mi.js": 453,
	"./mk": 454,
	"./mk.js": 454,
	"./ml": 455,
	"./ml.js": 455,
	"./mr": 456,
	"./mr.js": 456,
	"./ms": 458,
	"./ms-my": 457,
	"./ms-my.js": 457,
	"./ms.js": 458,
	"./my": 459,
	"./my.js": 459,
	"./nb": 460,
	"./nb.js": 460,
	"./ne": 461,
	"./ne.js": 461,
	"./nl": 463,
	"./nl-be": 462,
	"./nl-be.js": 462,
	"./nl.js": 463,
	"./nn": 464,
	"./nn.js": 464,
	"./pa-in": 465,
	"./pa-in.js": 465,
	"./pl": 466,
	"./pl.js": 466,
	"./pt": 468,
	"./pt-br": 467,
	"./pt-br.js": 467,
	"./pt.js": 468,
	"./ro": 469,
	"./ro.js": 469,
	"./ru": 470,
	"./ru.js": 470,
	"./sd": 471,
	"./sd.js": 471,
	"./se": 472,
	"./se.js": 472,
	"./si": 473,
	"./si.js": 473,
	"./sk": 474,
	"./sk.js": 474,
	"./sl": 475,
	"./sl.js": 475,
	"./sq": 476,
	"./sq.js": 476,
	"./sr": 478,
	"./sr-cyrl": 477,
	"./sr-cyrl.js": 477,
	"./sr.js": 478,
	"./ss": 479,
	"./ss.js": 479,
	"./sv": 480,
	"./sv.js": 480,
	"./sw": 481,
	"./sw.js": 481,
	"./ta": 482,
	"./ta.js": 482,
	"./te": 483,
	"./te.js": 483,
	"./tet": 484,
	"./tet.js": 484,
	"./th": 485,
	"./th.js": 485,
	"./tl-ph": 486,
	"./tl-ph.js": 486,
	"./tlh": 487,
	"./tlh.js": 487,
	"./tr": 488,
	"./tr.js": 488,
	"./tzl": 489,
	"./tzl.js": 489,
	"./tzm": 491,
	"./tzm-latn": 490,
	"./tzm-latn.js": 490,
	"./tzm.js": 491,
	"./uk": 492,
	"./uk.js": 492,
	"./ur": 493,
	"./ur.js": 493,
	"./uz": 495,
	"./uz-latn": 494,
	"./uz-latn.js": 494,
	"./uz.js": 495,
	"./vi": 496,
	"./vi.js": 496,
	"./x-pseudo": 497,
	"./x-pseudo.js": 497,
	"./yo": 498,
	"./yo.js": 498,
	"./zh-cn": 499,
	"./zh-cn.js": 499,
	"./zh-hk": 500,
	"./zh-hk.js": 500,
	"./zh-tw": 501,
	"./zh-tw.js": 501
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
webpackContext.id = 880;


/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "#bar-chart-container {\n  padding: 0px 20px;\n}\n\n#time-title {\n  font-size: 30px;\n  padding: 50px 0px 30px 0px;\n}\n\n#time-intro {\n  font-size: 18px;\n  padding: 0px 0px 20px 0px;\n}\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  float: right;\n  height: 100vh;\n  width: 300px;\n  background-color: rgba(242, 242, 242, 0.5);\n  z-index: 2;\n}\n\n.story-tile {\n  /*height: 300px;\n  width: 300px;*/\n  /*background-color: blue;*/\n}\n\n.story-tile-image {\n  height: 50px;\n  width: auto;\n}\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "#graphs-container {\n  margin: 0% 4% 4% 4%;\n}\n\n.divider {\n  height: 100px;\n  width: 100vw;\n  background-color: #f3e5ff;\n}\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = ".main-container {\n  width: 100vw;\n  background-color: #f3e5ff;\n}\n\n#title {\n  margin: 60px 10px 0px 10px;\n  font-size: 78px;\n  letter-spacing: 6px;\n}\n\n#sub-title {\n  font-size: 20px;\n  max-width: 900px;\n  margin-left: 90px;\n}\n\n#link-to-socrata a {\n  color: #333;\n}\n\na:hover {\n  color: #333;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "#pie-chart-container {\n  margin: 20px 0px;\n}\n\n#intro-and-form {\n  text-align: center;\n  top: 50%;\n}\n\n#total-intro {\n  font-size: 30px;\n  padding: 140px 10px 90px 10px;\n}\n\n#form-intro {\n  font-size: 18px;\n  padding: 10px;\n}\n\n#chart-and-description {\n  max-width: 700px;\n}\n\n#description {\n  padding: 30px 10px 10px 10px;\n}\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = ".sidebar-content {\n}\n\n.preferences-form {\n  margin: 20px;\n}\n\n#preferences-form-sources {\n  margin: 30px 0px 0px 0px;\n}\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "#time-chart-title {\n  text-align: center;\n  font-size: 30px;\n  padding: 40px 0px 20px 0px;\n}\n\n#time-chart {\n  padding: 0% 10%;\n}\n\n#form-and-description {\n  padding-left: 15%;\n  padding-top: 10px;\n}\n\n#form-intro {\n  font-size: 18px;\n  padding-bottom: 5px;\n}\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "<div id=\"bar-chart-container\">\n  <div id=\"time-title\">\n    Length of summaries over time\n  </div>\n\n  <div id=\"time-intro\">\n    Select a time-span to view how summaries of officer involved shootings compare over time. Dataset ranges from 2005/03/21 until 2016/06/19.\n  </div>\n\n  <label>First date</label>\n  <input type=\"date\" #firstDate value=\"2005-03-21\">\n  <label>Second date</label>\n  <input type=\"date\" #secondDate value=\"2016-06-19\">\n  <button (click)=\"submitForm(firstDate.value, secondDate.value)\">submit</button>\n\n  <div id=\"test-bar\" (window:resize)=\"onResize($event)\"></div>\n</div>\n<div id=\"current-summary\">\n  {{currentSummary}}\n</div>\n"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav-extended\">\n  <div class=\"nav-wrapper\">\n    <a href=\"#\" class=\"brand-logo center\">Logo</a>\n    <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down\">\n      <li><a href=\"sass.html\">Sass</a></li>\n    </ul>\n  </div>\n  <div class=\"nav-content\">\n    <a (click)=\"showSidebar()\" class=\"btn-floating btn-large halfway-fab waves-effect waves-light red\"><i class=\"material-icons\">settings</i></a>\n  </div>\n</nav>\n\n<div *ngIf=\"sidebar\" class=\"sidebar\">\n  <app-sidebar (doneSavePreferences)=\"showSidebar()\" (changeSources)=\"setPipe($event)\"></app-sidebar>\n</div>\n\n<a class=\"preferences-form waves-effect waves-teal btn-flat\" (click)=\"displayStories()\">DISPLAY STORIES</a>\n\n<a class=\"preferences-form waves-effect waves-teal btn-flat\" (click)=\"getPoliceData()\">Police data</a>\n\n<!-- create a pipe here to filter stories by news source. pipe will handle dom and button save preferences will update database -->\n<div class=\"row\">\n  <div class=\"story-tile\" *ngFor=\"let story of stories | source:selectedSources\">\n    <div class=\"col s6 m4 l3\">\n      <div class=\"card small\">\n        <div class=\"card-image\">\n          <img src={{story.img}}>\n          <span class=\"card-title\">{{story.title}}</span>\n        </div>\n        <div class=\"card-content\">\n          <p>{{story.content}}</p>\n        </div>\n        <div class=\"card-action\">\n          <a href=\"#\"  (click)=\"navigate(story.link)\">source</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"getPoliceDataFromSocrata()\">\n  getPoliceDataFromSocrata\n</p>\n\n <div id=\"graphs-container\">\n   <app-pie-chart></app-pie-chart>\n</div>\n\n<div class=\"divider\"></div>\n\n<div id=\"graphs-container\">\n   <app-time-chart></app-time-chart>\n</div>\n\n<div class=\"divider\"></div>\n\n<div id=\"graphs-container\">\n   <app-bar [OfficerInvolvedShootingsGraphData]=\"OfficerInvolvedShootingsGraphData\" (YearSearchParameter)=\"queryByYear($event)\"></app-bar>\n </div>\n <!-- <app-subject-age-group></app-subject-age-group> -->\n"

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div id=\"title\">\n    MEANINGFUL DATA\n  </div>\n\n  <div id=\"sub-title\">\n    Graphs created with d3 and Chart.js to create informative and engaging experience with Seattle Police Department's data about officer involved shootings from 2005 - present.\n    <p id=\"link-to-socrata\">All data pulled from <a href=\"#\" (click)=\"navigateToSocrata()\">Socrata</a></p>\n  </div>\n\n</div>\n\n<app-graphs></app-graphs>\n"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"pie-chart-container\">\n  <div class=\"col-sm-3\" id=\"intro-and-form\">\n    <p id=\"total-intro\">Total number of records for this dataset: {{dataCount}}</p>\n    <p id=\"form-intro\">Breakdown information by selecting a column in the dataset</p>\n\n    <select (change)=\"onChange($event.target.value)\">\n      <option *ngFor=\"let column of databaseColumns\" value={{column.column}}>{{column.column}}</option>\n    </select>\n  </div>\n  <div class=\"col-sm-9\" id=\"chart-and-description\">\n    <p id=\"description\">{{currentDescription}}</p>\n\n    <div style=\"display: block\">\n      <canvas baseChart id=\"pie-chart\"\n      [data]=\"pieChartData\"\n      [labels]=\"pieChartLabels\"\n      [colors]=\"pieChartColors\"\n      [chartType]=\"pieChartType\"\n      (chartHover)=\"chartHovered($event)\"\n      (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"test()\">\n  scatterplot works!\n</p>\n\n<div id=\"test-scatterplot\"></div>\n\n<div id=\"subject-age-group-scatterplot\"></div>\n"

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-content row\">\n  <div class=\"col s11 offset-s1\">\n  <form>\n    <h4 id=\"preferences-form-sources\">SOURCES</h4>\n    <hr>\n    <div *ngFor=\"let option of options\" (change)=\"onChange()\">\n            <input type=\"checkbox\"\n                   name=\"options\"\n                   value=\"{{option.value}}\"\n                   id=\"{{option.value}}\"\n                   [(ngModel)]=\"option.checked\"/>\n            <label for=\"{{option.value}}\">{{option.name}}</label>\n    </div>\n  </form>\n  <!-- for now, I want to get this button to populate database by querying aylien api. in future, that will happen automatically and this button will apply filters -->\n  <a class=\"preferences-form waves-effect waves-teal btn-flat\" (click)=\"getStories()\">SAVE PREFERENCES</a>\n</div>\n</div>\n"

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

module.exports = "<div id=\"subject-age-group-graph\" (window:resize)=\"onResize($event)\"></div>\n"

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"testTable()\">\n  table works!\n</p>\n\n<div id=\"table-graph\"></div>\n"

/***/ }),

/***/ 908:
/***/ (function(module, exports) {

module.exports = "<div id=\"time-chart-title\">\n  Side-by-side comparison by year\n</div>\n<div id=\"time-chart\">\n  <div style=\"display: block\">\n    <canvas baseChart\n            [datasets]=\"barChartData\"\n            [labels]=\"barChartLabels\"\n            [colors]=\"barChartColors\"\n            [options]=\"barChartOptions\"\n            [legend]=\"barChartLegend\"\n            [chartType]=\"barChartType\"\n            (chartHover)=\"chartHovered($event)\"\n            (chartClick)=\"chartClicked($event)\"></canvas>\n  </div>\n</div>\n<div id=\"form-and-description\">\n  <div id=\"form-intro\">Juxtapose different incident responses to see how they change from 2005 - 2016</div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-2\">\n      <select (change)=\"onChange($event.target.value)\">\n        <option *ngFor=\"let column of databaseColumns\" value={{column.column}}>{{column.column}}</option>\n      </select>\n\n    </div>\n    <div class=\"col-sm-10\">\n      <p>{{currentDescription}}</p>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(521);


/***/ })

},[930]);
//# sourceMappingURL=main.bundle.map