import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DamodarStotramComponent } from './damodar-stotram.component';

describe('DamodarStotramComponent', () => {
  let component: DamodarStotramComponent;
  let fixture: ComponentFixture<DamodarStotramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DamodarStotramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DamodarStotramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
