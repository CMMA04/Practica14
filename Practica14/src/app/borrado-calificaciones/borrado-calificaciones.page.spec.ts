import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BorradoCalificacionesPage } from './borrado-calificaciones.page';

describe('BorradoCalificacionesPage', () => {
  let component: BorradoCalificacionesPage;
  let fixture: ComponentFixture<BorradoCalificacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BorradoCalificacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
