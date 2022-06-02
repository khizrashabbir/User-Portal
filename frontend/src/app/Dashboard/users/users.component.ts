import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
import { UsersService } from '../../api-services/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export interface userData{
  ip_address: string,
  status: string,
  type: string,
  added_on_time_stamp: string,
  username: string,
  password: number,
  phone_number: string,
  email_address: number,
  postal_address: number,
  added_by: string,
  updated_by: string,
  updated_on_time_stamp: string,
}
export class UsersComponent implements OnInit {
  formGroup: FormGroup;
  selectedRow: userData;

  mobileQuery: MediaQueryList;
  voip: boolean;

  private _mobileQueryListener: () => void;

  displayedColumns: string[] = []
  dataSource: MatTableDataSource<userData>;
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private location: Location, private service: UsersService,private mat:MatSort,private matpagination:MatPaginator) { }

  ngOnInit(): void {
  }

}
