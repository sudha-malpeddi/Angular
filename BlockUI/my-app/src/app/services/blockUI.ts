import { Injectable, ViewContainerRef, ComponentFactoryResolver }   from '@angular/core';
import { BlockUI, NgBlockUI } 										from 'ng-block-ui';

import {IModalComponent} from '../interfaces/IModalComponent'

@Injectable()
export class BlockUIService {	
		
	public vRef: ViewContainerRef;
	component : IModalComponent<any,any,any>;
	
	@BlockUI() ngBlockUI: NgBlockUI;
	
	constructor(private componentFactoryResolver: ComponentFactoryResolver){}
	
	showPopUp(component: any, data: any){
		this.ngBlockUI.start();
					
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
		
		this.vRef.clear();
		
		let componentRef = this.vRef.createComponent(componentFactory);	
		
		this.component = <IModalComponent<any,any,any>>componentRef.instance;
		this.component.Data = data;
		
	}	
	
}