import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.component.html',
  styleUrls: ['./todoslist.component.css']
})
export class TodoslistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   todoslist = [
     {
       id : 2120,
       description: 'Angular',
       date: '20/2/2015'

     },
     {
      id : 2115,
      description: 'Analysis',
      date: '20/2/2015'

    },
    {
      id : 2170,
      description: 'Design',
      date: '20/2/2015'

    },
    {
      id : 2220,
      description: 'AQWER',
      date: '20/2/2015'

    },
    {
      id : 2224,
      description: 'qwer',
      date: '20/2/2015'
    }
   ];
}
