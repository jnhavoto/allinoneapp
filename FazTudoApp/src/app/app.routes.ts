import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'emprestimos',
    loadComponent: () => import('./emprestimos/emprestimos.page').then( m => m.EmprestimosPage)
  },
  {
    path: 'financimentos',
    loadComponent: () => import('./financimentos/financimentos.page').then( m => m.FinancimentosPage)
  },
];
