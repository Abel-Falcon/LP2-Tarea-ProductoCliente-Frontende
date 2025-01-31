import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ClienteComponent } from '../component/cliente/cliente.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        routerLink: '/home',
        label: 'Home',
        icon: 'pi pi-home',
      },
      {
        routerLink: '/producto',
        label: 'Producto',
        icon: 'pi pi-star',
      },
      {
        routerLink: '/cliente',
        label: 'Cliente',
        icon: 'pi pi-envelope',
      },
    ];
  }
}
