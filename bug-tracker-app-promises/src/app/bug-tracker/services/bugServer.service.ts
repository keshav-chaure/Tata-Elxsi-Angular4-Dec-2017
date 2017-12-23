import { Injectable } from '@angular/core';
import { IBug } from '../models/IBug';
import { BugOperationsService } from './bugOperations.service';
import axios from 'axios';

@Injectable()
export class BugServerService{
	private serviceUrl : string = 'http://localhost:3000/bugs';

	constructor(private bugOperations : BugOperationsService){

	}
	getAll() : Promise<IBug[]>{
		return axios
			.get(this.serviceUrl)
			.then(response => response.data);
	}
	
	addNew(newBugName : string) : Promise<IBug>{
		let newBugData = this.bugOperations.createNew(newBugName); 
		return axios
			.post(this.serviceUrl, newBugData)
			.then(response => response.data);
	}

	toggle(bugToToggle : IBug) : Promise<IBug> {
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		return axios
			.put(`${this.serviceUrl}/${bugToToggle.id}`, toggledBug)
			.then(response => response.data);
	}

	remove(bug : IBug) : Promise<any>{
		return axios
			.delete(`${this.serviceUrl}/${bug.id}`)
			.then(response => response.data);	
	}
}