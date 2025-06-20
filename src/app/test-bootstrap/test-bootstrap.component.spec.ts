import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootstrapComponent } from './test-bootstrap.component';

describe('TestBootstrapComponent', () => {
  let component: TestBootstrapComponent;
  let fixture: ComponentFixture<TestBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
