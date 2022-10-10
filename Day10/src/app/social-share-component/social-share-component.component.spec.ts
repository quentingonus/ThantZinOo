import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialShareComponentComponent } from './social-share-component.component';

describe('SocialShareComponentComponent', () => {
  let component: SocialShareComponentComponent;
  let fixture: ComponentFixture<SocialShareComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialShareComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialShareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
