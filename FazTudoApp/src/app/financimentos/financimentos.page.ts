import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-financimentos',
  templateUrl: './financimentos.page.html',
  styleUrls: ['./financimentos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FinancimentosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
