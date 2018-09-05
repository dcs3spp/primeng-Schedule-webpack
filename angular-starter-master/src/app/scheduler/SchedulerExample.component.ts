import {
  Component,
  OnInit
} from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ScheduleModule } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'scheduler',
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './SchedulerExample.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './SchedulerExample.component.html'
})
export class SchedulerExampleComponent implements OnInit {

  /**
   * Set our default values
   */
   defaultDate: Date;
   events: any[];
   form: FormGroup;
   headerConfig: any;


  /**
   * TypeScript public modifiers
   */
  constructor(private fb:FormBuilder) {
    this.defaultDate = new Date();
  }

  public ngOnInit() {

    this.form = this.fb.group({
      myDate: [this.defaultDate, [Validators.required]]
    });

    console.log('hello `SchedulerExampleComponent` component');

    this.headerConfig = {
      left: '',
      center: 'title',
      right: 'prev,next'
    };

    this.events = [
      {
        "title": "All Day Event",
        "start": "2018-01-01",
        "end": "2018-01-12"
      }
    ];
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
