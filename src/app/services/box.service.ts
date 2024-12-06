import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private apiUrl = 'http://localhost:3000/squares'; // Replace with your Node.js API endpoint

  constructor(private http: HttpClient) {}

  // Get all squares
  getAllSquares(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Add a new square
  addSquare(square: { title: string }): Observable<any> {
    return this.http.post(this.apiUrl, square);
  }

  // Delete a square
  deleteSquare(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // Get a square by its ID
  getSquareById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
