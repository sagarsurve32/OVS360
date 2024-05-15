import { Component, Input } from '@angular/core'

@Component({
  selector: 'user-details',
  templateUrl: 'user-details.component.html',
  styleUrls: ['user-details.component.css'],
})
export class UserDetails {
  @Input()
  imageSrc: string = '/assets/team4-200h.png'
  @Input()
  name: string = 'Laura Hanks'
  @Input()
  time: string = '3 days'
  @Input()
  imageAlt: string = 'image'
  raw64l5: string = ' '
  constructor() {}
}
