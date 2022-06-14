/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Calendario_DisponibilidadComponent } from './Calendario_Disponibilidad.component';

describe('Calendario_DisponibilidadComponent', () => {
  let component: Calendario_DisponibilidadComponent;
  let fixture: ComponentFixture<Calendario_DisponibilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Calendario_DisponibilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Calendario_DisponibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
