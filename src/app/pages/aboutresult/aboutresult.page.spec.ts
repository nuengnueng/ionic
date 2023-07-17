import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutresultPage } from './aboutresult.page';

describe('AboutresultPage', () => {
  let component: AboutresultPage;
  let fixture: ComponentFixture<AboutresultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AboutresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
