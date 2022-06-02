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
export class UsersComponent implements OnInit {

<<<<<<< HEAD
  mobileQuery: MediaQueryList;
  voip: boolean;

  private _mobileQueryListener: () => void;

  displayedColumns: string[] = ['ip_address', 'status', 'type', 'added_on_time_stamp', 'username', 'password', 'phone_number', 'email_address', 'postal_address', 'added_by', 'updated_by', 'updated_on_time_stamp'];
  dataSource: MatTableDataSource<userData>;
  readData: any;
 
  @ViewChild('activityTable')
  activityTable!: ElementRef;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private location: Location,private service:UsersService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.voip = false;
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
   // this.formGroup = new FormGroup({});
   // this.selectedRow={} as userData;
  }
=======
  constructor() { }
>>>>>>> 9916b73f8a8e119e76cacd0f918fa40e50806e34

  ngOnInit(): void {
  }

}
