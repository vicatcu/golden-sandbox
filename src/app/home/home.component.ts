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
    showCloseIcon: false,
    showPopoutIcon: false,
    reorderEnabled: false,
    showMaximiseIcon: false,
    hasHeaders: false
  },
  content: [
    {
      type: 'row',
      isClosable: false,
      content: [
        {
          type: 'column',
          isClosable: false,
          content: [
            {type: 'component', isClosable: false, title: 'Foo', componentName: 'fail-component'},
            {type: 'component', isClosable: false, title: 'Bar', componentName: 'fail-component'}
          ]
        },
        {
          type: 'component',
          isClosable: false,
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
