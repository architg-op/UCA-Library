import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  public booksList = [
  {
    bookName : "Story of my Life",
    authorName : "Helen Keller",
    isAvailable : "Yes",
  },
  {
    bookName : "Half Girlfriend",
    authorName : "Chetan Bhagat",
    isAvailable : "No",
  },
  {
    bookName : "The Blue Umbrella",
    authorName : "Ruskin Bond",
    isAvailable : "No",
  }
  ];
  constructor() { }

  ngOnInit() {
  }
  public showTable = true;

  public toggleTableVisibilty() {
    this.showTable = !this.showTable;
  }
}
