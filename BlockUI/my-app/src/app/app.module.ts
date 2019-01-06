import { BrowserModule } 	from '@angular/platform-browser';
import { NgModule } 		from '@angular/core';
import { BlockUIModule } 	from 'ng-block-ui';

import { AppComponent } 	from './app.component';
import { BlockUIService }	from './services/blockUI.service'

import { BlockTemplateComponent } 		from './block-ui/block-template.component'
import { Popup } from './pop-up/popup.component'

@NgModule({
  declarations: [
    AppComponent, 
	BlockTemplateComponent,
	Popup
  ],
  imports: [
    BrowserModule,
	BlockUIModule
  ],
  providers: [BlockUIService],
  bootstrap: [AppComponent], 
  entryComponents : [
		BlockTemplateComponent,
		Popup
	]
})
export class AppModule { }
