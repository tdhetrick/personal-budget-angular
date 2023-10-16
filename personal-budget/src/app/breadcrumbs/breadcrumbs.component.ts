import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pb-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  breadcrumbs: { label: string; url: string; } | undefined;

  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    const route = this.activatedRoute.snapshot.firstChild;
    console.log(route)
    if (route) {
      const label: string = route.data['breadcrumbs'];
      const url: string = `/${route.url.map(segment => segment.path).join('/')}`;
      this.breadcrumbs = { label, url };
    }
  }

}
