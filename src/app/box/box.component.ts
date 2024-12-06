import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoxService } from '../services/box.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit {
  square: any;

  constructor(private route: ActivatedRoute, private boxService: BoxService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.boxService.getSquareById(+id).subscribe((data) => {
        this.square = data;
      });
    }
  }
}
