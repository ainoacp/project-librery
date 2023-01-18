import { Component } from '@angular/core';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent {
  arrayBooks: any [] = [{
    title: 'All dead thing',
    author: 'John Connolly',
    image: 'https://m.media-amazon.com/images/I/41ibkVz8JhL.jpg'
  },{
    title: 'To kill a mockingbird',
    author: 'Harper Lee',
    image: 'https://m.media-amazon.com/images/I/71FxgtFKcQL.jpg'
  },{
    title: 'To catcher in the rye',
    author: 'J.D. Salinger',
    image: 'https://m.media-amazon.com/images/I/51nXxz0taHL.jpg'
  }];

  addBook(book: any){
    this.arrayBooks = [...this.arrayBooks, book];
  }
}
