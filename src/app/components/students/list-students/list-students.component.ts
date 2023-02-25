import { Component, AfterViewInit, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe, NgFor } from '@angular/common';

interface Country {
	id: number;
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		id: 1,
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		id: 2,
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		id: 3,
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		id: 4,
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];

export type SortColumn = keyof Country | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: string;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})

export class NgbdSortableHeader {
	@Input() sortable: string = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

@Component({
	standalone: true,
	selector: 'app-list-students',
	templateUrl: './list-students.component.html',
	styleUrls: ['./list-students.component.css'],
	imports: [DecimalPipe, NgFor, NgbdSortableHeader],
})

export class ListStudentsComponent {
	
	countries = COUNTRIES;

	@ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.countries = COUNTRIES;
		} else {
			this.countries = [...COUNTRIES].sort((a, b) => {
				let  aa = JSON.parse(JSON.stringify(a))
				let  bb = JSON.parse(JSON.stringify(b))
				const res = compare(aa[column], bb[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}

}