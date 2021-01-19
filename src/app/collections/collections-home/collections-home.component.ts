import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name: 'James', age: 24, job: 'Designer', employed: true},
    {name: 'Peter', age: 28, job: 'Developer', employed: false},
    {name: 'Laura', age: 32, job: 'Marketer', employed: true}
  ];

  headers = [
  {key: 'employed', label: 'Has a Job?'},
  {key: 'name', label: 'Name'},
  {key: 'age', label: 'Age'},
  {key: 'job', label: 'Job'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
