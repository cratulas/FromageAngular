import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticia3Component } from './noticia3.component';

describe('Noticia3Component', () => {
  let component: Noticia3Component;
  let fixture: ComponentFixture<Noticia3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticia3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
