import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { Subscription, timer } from 'rxjs';
import {NgIf} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule,
    NgIf
  ]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  showPopup = false;
  private popupSub: Subscription | undefined;

  constructor(private el: ElementRef, private router: Router) {}

  ngAfterViewInit(): void {

      this.popupSub = timer(10000).subscribe(() => {
      this.showPopup = true;
    });

  }
  closePopup(): void {
    this.showPopup = false;
  }
  ngOnDestroy(): void {

    if (this.popupSub) {
      this.popupSub.unsubscribe();
    }
  }

  goToCatalog(): void {
    this.showPopup = false;
    this.router.navigate(['/catalog']);
  }
}
