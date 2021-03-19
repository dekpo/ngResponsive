import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  companyList: any;

  firstName = '';
  lastName = '';
  email = '';
  companies : any;
  company_id = '';
  phone = '';
  message = '';

  onSubmit(val): void{

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    const body = new URLSearchParams(val).toString();

    this.http.post('http://localhost:3000/contacts', body, {headers} ).subscribe(
      () => console.log( 'success' )
    );

    console.log( body );
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/entreprises/').subscribe( data => {
      console.log(data);
      this.companies = data;
    })
  }

}
