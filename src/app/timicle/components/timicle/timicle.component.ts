import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TimicleSercice } from '../../services/timicle.service';
import { Timicle } from '../../types/timicle';

@Component({
  selector: 'tc-timicle',
  templateUrl: './timicle.component.html',
  styleUrls: ['./timicle.component.css'],
})
export class TimicleComponent implements OnInit {
  public timicle: Timicle = {};
  public since: string = '';
  timicleId: string = '';
  constructor(
    private timicleService: TimicleSercice,
    private route: ActivatedRoute,
    private meta: Meta
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.timicleId = params['id'];
    });
    this.timicleService.getTimcleById(this.timicleId).subscribe((t) => {
      this.timicle = t;
      const period = this.dateDiffInDays(
        new Date(),
        new Date(this.timicle.year!, this.timicle.month!, this.timicle.day!)
      );
      const sinceDate = new Date(period);
      this.since = `${sinceDate.getFullYear()}Y ${sinceDate.getMonth()}M`;
      this.meta.updateTag({
        property: 'og:title',
        content: this.timicle.title!,
      });
      this.meta.updateTag({
        property: 'og:description',
        content: this.timicle.description!,
      });
      this.meta.updateTag({
        property: 'og:image',
        content: this.timicle.heroImageUrl!,
      });
      this.meta.updateTag({ property: 'og:url', content: 'wwww.timicle.com' });
    });
  }
  dateDiffInDays(a: Date, b: Date): number {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }
}
