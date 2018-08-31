import {
  Component,
  OnInit
} from '@angular/core';

import { ScheduleModule } from 'primeng/primeng';


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

  /**
   * TypeScript public modifiers
   */
  constructor( ) {}

  public ngOnInit() {
    console.log('hello `SchedulerExampleComponent` component');

  }

  public submitState(value: string) {
    console.log('submitState', value);
  }
}
