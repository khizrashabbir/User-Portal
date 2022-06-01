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

export interface userData {
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

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  formGroup: FormGroup;
  selectedRow: userData;

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
    this.formGroup = new FormGroup({});
    this.selectedRow={} as userData;
  }

  ngOnInit(): void {
    this.getAllData();
     this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      ip_address: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      type: new FormControl('', []),
      added_on_time_stamp: new FormControl('', []),
      username: new FormControl('', []),
      password: new FormControl('', []),
      phone_number: new FormControl('', []),
      email_address: new FormControl('', []),
      postal_address: new FormControl('', []),
      added_by: new FormControl('', []),
      updated_by: new FormControl('', []),
      updated_on_time_stamp: new FormControl('', []),
    });
  }

  setTableData(results): void {
    this.dataSource = null;
    this.dataSource = new MatTableDataSource(results);
    //this.dataSource.paginator = this.paginator;
    //  this.dataSource.sort = this.sort;
  }
tableRowClick(row: any) {
    console.log(row);
    console.log(this.formGroup.value);
    //this.formGroup.setValue(row);
    // this.formGroup.patchValue({ username: row.username, action:row.action, start_time: row.time});
    // console.log(row);
    // console.log(this.formGroup.value);
    // this.selectedRow = row;

    // this.formGroup.setValue(row);
    //patch value use for specific values priting
    // this.formGroup.patchValue({ username: row.username, action:row.action });
  }
 

  clearForm() {
    // this.formGroup.reset();
    // this.formGroup.patchValue();
    this.getAllData();
  }
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      this.readData = res;
      this.setTableData(res);
    });
  }

  goBack() {
    this.location.back();
  }

  logout() {
    this.router.navigate(['login']);
  }

}