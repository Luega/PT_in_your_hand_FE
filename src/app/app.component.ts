import { Component } from '@angular/core';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'PT-in-your-hand-FE';

  customers: any[] = [];

  constructor(private customer: CustomerService) {}

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customer.getCustomers().subscribe((data: any) => {
      this.customers = data.customers;
    });
  }
}
