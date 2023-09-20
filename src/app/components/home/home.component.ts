import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
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
