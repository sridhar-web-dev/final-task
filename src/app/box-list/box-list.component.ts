import { Component, OnInit } from '@angular/core';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'app-box-list',
  templateUrl: './box-list.component.html',
  styleUrls: ['./box-list.component.css'],
})
export class BoxListComponent implements OnInit {
  squares: any[] = [];
  newTitle: string = '';

  constructor(private boxService: BoxService) {}

  ngOnInit(): void {
    this.fetchSquares();
  }

  fetchSquares() {
    this.boxService.getAllSquares().subscribe((data: any) => {
      this.squares = data;
    });
  }

  addSquare() {
    const square = { title: this.newTitle || `Square ${this.squares.length + 1}` };
    this.boxService.addSquare(square).subscribe(() => this.fetchSquares());
    this.newTitle = '';
  }

  deleteSquare(index: number) {
    const square = this.squares[index];
    this.boxService.deleteSquare(square.id).subscribe(() => this.fetchSquares());
  }
}
