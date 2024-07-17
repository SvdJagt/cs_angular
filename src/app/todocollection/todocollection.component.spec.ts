import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCollectionComponent } from './todocollection.component';

describe('TodocollectionComponent', () => {
  let component: TodoCollectionComponent;
  let fixture: ComponentFixture<TodoCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
