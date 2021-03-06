import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector: 'bug-stats',
	changeDetection : ChangeDetectionStrategy.OnPush,
	template : `
		<section class="stats">
			<div>{{getDate()}}</div>
			<span class="closed">{{bugs | closedCount}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`
})
export class BugStatsComponent {

	@Input('data')
	bugs : IBug[] = [];

	constructor() {}
	getDate(){
		return new Date().toString();
	}
	
	
}