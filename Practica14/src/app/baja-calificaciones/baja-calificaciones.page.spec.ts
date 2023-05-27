import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BajaCalificacionesPage } from './baja-calificaciones.page';

describe('BajaCalificacionesPage', () => {
  let component: BajaCalificacionesPage;
  let fixture: ComponentFixture<BajaCalificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BajaCalificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
