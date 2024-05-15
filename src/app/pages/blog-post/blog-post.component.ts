import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'blog-post',
  templateUrl: 'blog-post.component.html',
  styleUrls: ['blog-post.component.css'],
})
export class BlogPost {
  rawjqc8: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('BlogPost - OVS 360 Solutions')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'BlogPost - OVS 360 Solutions',
      },
    ])
  }
}
