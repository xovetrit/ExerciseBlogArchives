import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrls: ['./archive-page.component.css'],
})
export class ArchivePageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  yearArchive: number;
  monthArchive: number;
  
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      var year = +params.get('year');
      var month = +params.get('month');
      
      this.yearArchive = year;
      this.monthArchive = month;

    });
  }

  viewAll(){
    this.router.navigate(['/'])
  }


}
