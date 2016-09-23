import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items = [
    {
      link: "https://www.youtube.com/watch?v=VZ7fFtsIE-8",
      name: "2pac - Ambitionz Az A Ridah"
    },
    {
      link: "https://dropbox.com",
      name: "Dropbox"
    },
    {
      link: "https://gitter.im/angular/angular",
      name: "Gitter - Angular Chat"
    }
  ];

  constructor() { }

  ngOnInit() {
  }



}
