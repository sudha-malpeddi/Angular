import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { IModalComponent } from '../interfaces/IModalComponent'

@Component({
	selector: 'block-popup',
	templateUrl: './popup.html',
	styleUrls: [ './popup.css' ]
})
export class Popup implements IModalComponent<string, string, any>, OnInit {

	objectData: any = {};
	isAvailable: boolean = false;
	hideStatus: boolean = false;
	

	@BlockUI() blockUI: NgBlockUI;

	IsProceedButtonDisabled?: boolean;
	Data: any;
	Title: string;
	contentBody: string;
	ProceedButtonText: string = "Ok";
	CancelButtonText: string = "ok";
	IsCancelButtonVisible: boolean = false;
	isLoading: boolean = false;
	url: string;

	ngOnInit(): void {
		console.log(this.Data.textMsg);
	}	
		
	onClose(): Promise<string> {
		this.blockUI.stop();
		return Promise.resolve("");
	}
	onProceed(): Promise<string> {
		return Promise.resolve("");
	}
	onCancel(): Promise<string> {
		return Promise.resolve("");
	}
}
