import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinancimentosPage } from './financimentos.page';

describe('FinancimentosPage', () => {
  let component: FinancimentosPage;
  let fixture: ComponentFixture<FinancimentosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinancimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
