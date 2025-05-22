import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface TeaItem {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}

@Component({
  standalone: true,
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  imports: [CommonModule]
})
export class ProductComponent implements OnInit {
  tea: TeaItem | undefined;
  isLoading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<TeaItem[]>('https://testologia.ru/tea').subscribe({
      next: (data) => {
        const found = data.find(item => item.id === Number(id));
        if (found) {
          this.tea = found;
        } else {
          this.error = 'Товар не найден';
        }
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Ошибка при загрузке товара';
        this.isLoading = false;
      }
    });
  }


  buy(): void {

    this.router.navigate(['/order'], { queryParams: { product: this.tea?.title } });
  }
}
