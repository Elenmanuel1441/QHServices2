import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaboratorioAnalisisPage } from './laboratorio-analisis.page';

describe('LaboratorioAnalisisPage', () => {
  let component: LaboratorioAnalisisPage;
  let fixture: ComponentFixture<LaboratorioAnalisisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratorioAnalisisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaboratorioAnalisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
