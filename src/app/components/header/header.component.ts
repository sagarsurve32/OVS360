import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  rootClassName: string = ''
  @Input()
  heading11: string = 'OVS360 Solutions'
  @Input()
  heading1: string = 'OVS360 Solutions'
  constructor() {}
}
