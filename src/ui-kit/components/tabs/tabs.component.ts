import { Component, AfterContentInit, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';

/**
 * The <samTab> component contains the content for a tab
 *
 * @Input title: string - Set tab text
 * @Input active: boolean - Set tab active class, defaults to false
 */
@Component({
  selector: 'samTab',
  template: `
    <div [class.hide]="!active" class="usa-tabs-content">
      <ng-content></ng-content>
    </div>
  `
})
export class SamTabComponent {
  @Input('tabTitle') title: string;
  @Input() active: boolean = false;
}

/**
 * The <samTabs> component is a wrapper for navigating through and displaying tabs
 *
 * @Output currentSelectedTab: SamTabComponent - Event emitted on tab selection
 */
@Component({
  selector: 'samTabs',
  template:`
    <ul class="usa-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        {{tab.title}}
      </li>
    </ul>
    <ng-content></ng-content>
  `
})
export class SamTabsComponent implements AfterContentInit {
  @ContentChildren(SamTabComponent) tabs: QueryList<SamTabComponent>;

  @Output() currentSelectedTab = new EventEmitter(); 

  ngAfterContentInit(){
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    if(activeTabs.length === 0){
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: SamTabComponent){
    this.tabs.toArray().forEach(tab => tab.active = false);
    tab.active = true;
    this.currentSelectedTab.emit(tab);
  }

}