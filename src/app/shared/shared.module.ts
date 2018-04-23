import { NgModule } from "@angular/core";
import { AppDropDownDirective } from "./appDropdown.directive";

/**
 * Don't provide the shared service in the shared module, since this will create 
 *  a child injector for lazy loaded modules that create another instance of service
 *    for the lazy loaded componenents
 */
@NgModule({
    declarations: [ AppDropDownDirective ],
    exports: [ AppDropDownDirective ]
})
export class SharedModule {}