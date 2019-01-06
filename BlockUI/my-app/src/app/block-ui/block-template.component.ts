import { Component, ViewContainerRef, ViewChild, OnInit, Output,EventEmitter } from '@angular/core';
import { BlockUI, NgBlockUI } 	from 'ng-block-ui';

import { IModalComponent }  from '../interfaces/IModalComponent'
import { BlockUIService } 	from '../services/blockUI.service'

@Component({
  selector: 'block-temp',
  templateUrl: './blockTemplate.html'
})
export class BlockTemplateComponent implements OnInit {
	
	_resolve: (value?: {} | PromiseLike<{}>) => void;
	_reject: (reason?: any) => void;
	
	@BlockUI() blockUI: NgBlockUI;
	
	@Output("closePopup") closePopup = new EventEmitter<any>();
	
	@ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) dynamicComponentContainer: ViewContainerRef;
	
	constructor(private _blockUIService : BlockUIService) { 		
		console.log("In BlockTemplateComponent constructor")
	}

	ngOnInit()  {
		this._blockUIService.vRef = this.dynamicComponentContainer;
	}
	
	public close() {
		this.blockUI.stop();
	}
		
}


