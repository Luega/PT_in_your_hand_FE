import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() data: any;
  parentComponent = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.parentComponent = this.router.url.substring(1);
  }
}
