import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.page.html',
  styleUrls: ['./emprestimos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EmprestimosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
