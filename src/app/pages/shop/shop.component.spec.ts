import { TestBed } from '@angular/core/testing';
import { ShopComponent } from './shop.component';
import { ActivatedRoute } from '@angular/router';

describe('ShopComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: { get: () => null } },
          },
        },
      ],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ShopComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
