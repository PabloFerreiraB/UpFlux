import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { PAGE_SIZE_OPTIONS } from '../../list-data/constants/page-size-options';
import {
  FilterEmitter,
  FILTER_EMITTER,
} from '../../list-data/interfaces/filter-emitter.interface';
import { SearchParams } from '../../list-data/models/search-params';
import { fade } from 'src/app/animations/fade';

@Component({
  selector: 'app-filter-table',
  templateUrl: './filter-table.component.html',
  styleUrls: ['./filter-table.component.scss'],
  providers: [{ provide: FILTER_EMITTER, useExisting: FilterTableComponent }],
  animations: [fade],
})
export class FilterTableComponent implements FilterEmitter {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Input() searchParams!: SearchParams;
  @Output() pageChange = new EventEmitter<PageEvent>();

  showFilters = false;

  total$!: Observable<number>;
  readonly pageSizeOptions = PAGE_SIZE_OPTIONS;

  filterForm = new FormGroup({
    name_like: new FormControl(''),
    email_like: new FormControl(''),
  });

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
    if (!this.showFilters) {
      this.filterForm.reset();
    }
  }
}
