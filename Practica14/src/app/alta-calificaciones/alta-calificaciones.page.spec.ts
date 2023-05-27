import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaCalificacionesPage } from './alta-calificaciones.page';

describe('AltaCalificacionesPage', () => {
  let component: AltaCalificacionesPage;
  let fixture: ComponentFixture<AltaCalificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AltaCalificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
