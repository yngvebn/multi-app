import { FirstComponent } from './first/first.component';
import { OtherModule } from './other/other.module';
import { FirstModule } from './first/first.module';
import { OtherComponent } from './other/other.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, Type, ComponentFactoryResolver } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const rootComponents = [
  FirstComponent,
  OtherComponent
]

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FirstModule,
    OtherModule
  ],
  providers: []
})
export class AppModule {
  constructor(private resolver: ComponentFactoryResolver) {

  }

  public ngDoBootstrap(appRef: ApplicationRef) {
    rootComponents.forEach((componentDef: Type<{}>) => {
      const factory = this.resolver.resolveComponentFactory(componentDef);
      if (document.querySelector(factory.selector)) {
        console.log('found ' + factory.selector);
        appRef.bootstrap(factory);
      }
      else {
        console.log('NOT found ' + factory.selector);
      }
    })
  }
}
