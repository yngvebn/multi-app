import { FirstChildComponent } from './first-child/first-child.component';
import { FirstComponent } from './first.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

function routes(): Routes {
    if (document.querySelector('app-first')) {
        return [
            {
                path: '',
                component: FirstChildComponent
            }
        ]
    }
    return [];
}

@NgModule({
    imports: [
        RouterModule.forRoot(routes())
    ],
    declarations: [FirstComponent, FirstChildComponent],
    exports: [FirstComponent],
    entryComponents: [FirstComponent]
})
export class FirstModule {
    constructor() {
        console.log('first module constructor')
    }
}