import { Component, OnInit, Inject } from '@angular/core';
import { of } from 'rxjs';
import { FailedComponent, IExtendedGoldenLayoutConfig } from 'ngx-golden-layout';

@Component({
  template: `<h1>Failed to load {{componentName}}</h1>`,
  selector: `app-failed`,
})
export class FailComponent {
  constructor(@Inject(FailedComponent) public componentName: string) { }
}

const INITIAL_LAYOUT: IExtendedGoldenLayoutConfig = {
  settings: {

  },
  content: [
    {
      type: 'row',
      content: [
        {
          type: 'column',
          content: [
            {type: 'component', title: 'Foo', componentName: 'fail-component'},
            {type: 'component', title: 'Bar', componentName: 'fail-component'}
          ]
        },
        {
          type: 'component',
          componentName: 'fail-component',
          title: 'Ferrari'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  layoutConfig$ = of(INITIAL_LAYOUT);

  constructor() { }

  ngOnInit() {
  }

}
