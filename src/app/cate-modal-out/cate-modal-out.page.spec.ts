import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CateModalOutPage } from './cate-modal-out.page';

describe('CateModalOutPage', () => {
  let component: CateModalOutPage;
  let fixture: ComponentFixture<CateModalOutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateModalOutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CateModalOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
