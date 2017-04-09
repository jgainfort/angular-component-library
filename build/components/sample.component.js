import { Component } from '@angular/core';
var SampleComponent = (function () {
    function SampleComponent() {
        this.title = 'sample componenent works!';
    }
    return SampleComponent;
}());
export { SampleComponent };
SampleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sample',
                template: "\n    <h1>{{title}}</h1>\n  ",
                styles: ["\n    h1 { color: red }\n  "]
            },] },
];
/**
 * @nocollapse
 */
SampleComponent.ctorParameters = function () { return []; };
function SampleComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    SampleComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    SampleComponent.ctorParameters;
    /** @type {?} */
    SampleComponent.prototype.title;
}
