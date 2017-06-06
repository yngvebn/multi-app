import { OtherComponent } from './other.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [OtherComponent],
    entryComponents: [OtherComponent],
    exports: [OtherComponent]
})
export class OtherModule {

}