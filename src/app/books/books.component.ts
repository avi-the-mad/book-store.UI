import { Component, OnInit } from '@angular/core';
import { BookDataService } from "../book-data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  bookList: book[] = [];

  constructor(private bookDataService: BookDataService) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    this.bookDataService.getBooks().subscribe(
      (data: book[]) => {
        this.bookList = data;
        console.log(this.bookList);
      }
    )
  }

}
