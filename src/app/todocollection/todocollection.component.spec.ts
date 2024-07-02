import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocollectionComponent } from './todocollection.component';

describe('TodocollectionComponent', () => {
  let component: TodocollectionComponent;
  let fixture: ComponentFixture<TodocollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodocollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodocollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
