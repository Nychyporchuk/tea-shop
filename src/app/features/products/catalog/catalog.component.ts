import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {TruncatePipe} from '../../../shared/pipes/truncate.pipe';
import {RouterModule} from '@angular/router';

interface TeaItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Component({
  standalone: true,
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [CommonModule, TruncatePipe, RouterModule]
})
export class CatalogComponent implements OnInit {
  teas: TeaItem[] = [];
  isLoading = true;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TeaItem[]>('https://testologia.ru/tea')
      .subscribe({
        next: (data) => {
          this.teas = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Ошибка при загрузке чая';
          this.isLoading = false;
        }
      });
  }
}
