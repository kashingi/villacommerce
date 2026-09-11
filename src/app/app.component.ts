import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'VillaCommerceFrontend';

  constructor(
    private snackbar: SnackbarService
  ) {}

  ngOnInit() {
  }

  showSnackbar() {
    this.snackbar.success('Welcome to Villa Ecommerce!');
  }
}
