import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaPersonaComponent } from './carga-persona.component';

describe('CargaPersonaComponent', () => {
  let component: CargaPersonaComponent;
  let fixture: ComponentFixture<CargaPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaPersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
