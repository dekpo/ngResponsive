import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  modalShow = false;
  modalSrc: string;
  modalCaption: string;
  modalTitle: string;

  nbItems = 4;

  portfolio = [
    {
      id: 0,
      title: 'Montain',
      src: 'mountain-landscape-2031539',
      alt: 'Beautyfull Path'
    },
    {
      id: 1,
      title: 'Road 1',
      src: 'road-220058_640',
      alt: 'Road of the City'
    },
    {
      id: 2,
      title: 'Road 2',
      src: 'the-road-815297',
      alt: 'Road Undefined'
    },
    {
      id: 3,
      title: 'Road 3',
      src: 'road-1072823',
      alt: 'More Road...'
    },
    {
      id: 4,
      title: 'Action',
      src: 'action-1838330_1280',
      alt: 'Falling Action'
    },
    {
      id: 5,
      title: 'Beard',
      src: 'beard-1845166_1280',
      alt: 'Long Beard'
    },
    {
      id: 6,
      title: 'Hair',
      src: 'beautiful-2405131_1920',
      alt: 'Hair Wind'
    },
    {
      id: 7,
      title: 'Building',
      src: 'building-102840',
      alt: 'Some Pyramid...'
    },
    {
      id: 8,
      title: 'Drink',
      src: 'drink-84533_1920',
      alt: 'Feeling Good'
    },
    { id: 9,
      title: 'Fish',
      src: 'fish-3322230_1920',
      alt: 'Under Water'
    }
  ];

  arrayCols = [];

  ngOnInit(): void {

    for (let i = 0; i < this.portfolio.length; i += this.nbItems){
      this.arrayCols.push( this.portfolio.slice(i, i + this.nbItems) );
    }
    console.log( this.arrayCols );
  }

  toggleModal(id = 0): void{
    this.modalShow = !this.modalShow;
    this.modalSrc = this.portfolio[id].src;
    this.modalTitle = this.portfolio[id].title;
    this.modalCaption = this.portfolio[id].alt;
  }

}
