import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMascotasComponent } from './agregar-mascotas.component';

describe('AgregarMascotasComponent', () => {
  let component: AgregarMascotasComponent;
  let fixture: ComponentFixture<AgregarMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMascotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
