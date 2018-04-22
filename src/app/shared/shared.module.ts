import { NgModule } from "@angular/core";
import { AppDropDownDirective } from "./appDropdown.directive";

@NgModule({
    declarations: [ AppDropDownDirective ],
    exports: [ AppDropDownDirective ]
})
export class SharedModule {}