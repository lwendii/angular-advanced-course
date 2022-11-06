import { DebugElement } from '@angular/core';
import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuFaInputComponent } from './lib/au-fa-input/au-fa-input.component';
import { InputRefDirective } from './lib/common/input-ref.directive';

describe('AppComponent', () => {    // descrbies the test suite
    let component: AppComponent,
        fixture: ComponentFixture<AppComponent>,
        el: DebugElement,
        emailField: DebugElement;

    beforeEach(waitForAsync(() => {     // before each test this is run
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AuFaInputComponent,
                InputRefDirective
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);  // fixture is the element, that allows us to test the component
        component = fixture.debugElement.componentInstance;
        el = fixture.debugElement;
        emailField = el.query(By.css('#email-field'));

        fixture.detectChanges();
    });

    it('should create the app', waitForAsync(() => {    // individual test itself, async call ensures that whole template is compiled and when the dom is ready
        expect(component).toBeTruthy();
    }));

    it('should create a font awesome email input', waitForAsync(() => { // better make many small specs
        expect(emailField).toBeTruthy();
    }));

    it('should include the correct email icon inside the email input', waitForAsync(() => {
        expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
    }));

    it('should have projected the correct test input inside the email field', waitForAsync(() => {
        expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
    }));

});
