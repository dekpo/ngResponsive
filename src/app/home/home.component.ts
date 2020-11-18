import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  team = [
    {icon: 'avatar3',
    firstname: 'Mike',
    lastname: 'Scott',
    status: 'Web Designer'
    },
    {icon: 'avatar3',
    firstname: 'Marie',
    lastname: 'Peterson',
    status: 'Developer'
    },
    {icon: 'avatar6',
    firstname: 'Jill',
    lastname: 'Scott',
    status: 'IT Manager'
    },
    {
    icon: 'avatar4',
    firstname: 'Bob',
    lastname: 'Leepong',
    status: 'Admin System'
    },
    {
      icon: 'avatar1',
      firstname: 'Dider',
      lastname: 'Dupont',
      status: 'President'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
