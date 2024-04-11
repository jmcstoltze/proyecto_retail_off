import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaGenericaPage } from './pagina-generica.page';

describe('PaginaGenericaPage', () => {
  let component: PaginaGenericaPage;
  let fixture: ComponentFixture<PaginaGenericaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaGenericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
