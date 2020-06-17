import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaterPage } from './cater.page';

describe('CaterPage', () => {
  let component: CaterPage;
  let fixture: ComponentFixture<CaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
