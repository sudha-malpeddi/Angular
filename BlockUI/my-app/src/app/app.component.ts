import { Component } 		from '@angular/core';
import { BlockUIService }  	from './services/blockUI.service'
import { Popup }			from './pop-up/popup.component'
import { BlockTemplateComponent } from './block-ui/block-template.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';
	blockTemplate = BlockTemplateComponent;
	constructor(private _blockUI : BlockUIService){
	}
	
	showPopup(): void{
		this._blockUI.showPopUp(Popup, { 	
			textMsg:"Hello world!!"
		});	
	}
}
