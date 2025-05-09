import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  isSubmitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const productName = this.route.snapshot.queryParamMap.get('product') || '';

    this.orderForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/)]],
      last_name: ['', [Validators.required, Validators.pattern(/^[A-Za-zА-Яа-яЁё\s]+$/)]],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^\+?\d{11}$/)
      ]],
      country: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-яЁё0-9\s\-\/]+$/)
      ]],
      product: [{ value: productName, disabled: true }, Validators.required],
      comment: ['']
    });
  }

 public get f() {
    return this.orderForm.controls;
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    const formData = {
      ...this.orderForm.getRawValue()
    };

    console.log( formData);

    this.http.post<any>('https://testologia.ru/order-tea', formData).subscribe({
      next: (response) => {
        if (response.success === 1) {
          this.isSubmitted = true;
        } else {
          this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
        }
      },
      error: () => {
        this.errorMessage = 'Произошла ошибка. Попробуйте еще раз.';
      }
    });
  }
}
