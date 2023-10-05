import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerItems =[{
    'icon':'bi bi-house',
    'class':'col-2',
    'url':'/'
  },
  {
    'titulo':'About',
    'class':'col-8',
    'url':'/about'
  },
  {
    'titulo':'Contact',
    'class':'contact',
    'url':'/contact'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
