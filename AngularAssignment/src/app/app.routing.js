"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var movement_1 = require("./movement");
var routes = [
    { path: '', component: movement_1.MovementComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.appRoutingModule = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map