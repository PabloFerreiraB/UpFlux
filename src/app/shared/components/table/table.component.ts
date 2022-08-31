import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Patient } from 'src/app/models/patient.interface';
import {
  SortEmitter,
  SORT_EMITTER,
} from '../../list-data/interfaces/sort-emitter.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [{ provide: SORT_EMITTER, useExisting: TableComponent }],
})
export class TableComponent implements SortEmitter {
  @Input() patients: any = [];

  @Output() sortChange = new EventEmitter<Sort>();
  @Output() edit = new EventEmitter<Patient>();
  @Output() delete = new EventEmitter<Patient>();

  readonly displayedColumns: string[] = ['name', 'email', 'actions'];
}
