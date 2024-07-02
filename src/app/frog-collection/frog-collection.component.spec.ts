import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogCollectionComponent } from './frog-collection.component';

describe('FrogCollectionComponent', () => {
  let component: FrogCollectionComponent;
  let fixture: ComponentFixture<FrogCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrogCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
