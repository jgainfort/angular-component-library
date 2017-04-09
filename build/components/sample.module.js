import { NgModule } from '@angular/core';
import { SampleComponent } from './sample.component';
export { SampleComponent } from './sample.component';
var SampleModule = (function () {
    function SampleModule() {
    }
    return SampleModule;
}());
export { SampleModule };
SampleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SampleComponent],
                exports: [SampleComponent]
            },] },
];
/**
 * @nocollapse
 */
SampleModule.ctorParameters = function () { return []; };
function SampleModule_tsickle_Closure_declarations() {
    /** @type {?} */
    SampleModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SampleModule.ctorParameters;
}
