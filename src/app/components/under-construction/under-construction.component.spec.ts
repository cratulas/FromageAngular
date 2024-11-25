import { TestBed } from '@angular/core/testing';
import { UnderConstructionComponent } from './under-construction.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('UnderConstructionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderConstructionComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}) }, 
        },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UnderConstructionComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
