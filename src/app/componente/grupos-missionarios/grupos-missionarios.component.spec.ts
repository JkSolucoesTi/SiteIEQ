import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposMissionariosComponent } from './grupos-missionarios.component';

describe('GruposMissionariosComponent', () => {
  let component: GruposMissionariosComponent;
  let fixture: ComponentFixture<GruposMissionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposMissionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposMissionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
