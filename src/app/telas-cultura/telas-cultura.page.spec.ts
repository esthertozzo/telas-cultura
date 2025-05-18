import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelasCulturaPage } from './telas-cultura.page';

describe('TelasCulturaPage', () => {
  let component: TelasCulturaPage;
  let fixture: ComponentFixture<TelasCulturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelasCulturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
