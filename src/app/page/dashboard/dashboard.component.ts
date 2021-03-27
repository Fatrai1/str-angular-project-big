import { Component, OnInit } from '@angular/core';
import { InfoCard } from 'src/app/common/info-card/info-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    cards: InfoCard[] = [
      {
        title: 'Customers',
        content: '102',
        cardClass: 'card-header-warning',
        icon: 'content_copy',
        footer: 'ide is jön valami',
      },
      {
        title: 'Product',
        content: 'Hali',
        cardClass: 'card-header-success',
        icon: 'store',
        footer: 'ide is jön valami',
      },
      {
        title: '1. card',
        content: 'Hali',
        cardClass: 'card-header-danger',
        icon: 'info_outline',
        footer: 'ide is jön valami',
      },
      {
        title: '1. card',
        content: 'Hali',
        cardClass: 'card-header-info',
        icon: 'update',
        footer: 'ide is jön valami',
      },
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
