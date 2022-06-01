import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '@angular/common';
// import { UsersComponent } from '../../api-services/users.service';
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

  // formGroup: FormGroup;
  screen: string;
  message: string;
  operators: any;

  // req_data: userData;

  mobileQuery: MediaQueryList;
  voip: boolean;

  private _mobileQueryListener: () => void;

  displayedColumns: string[] = ['ip_address', 'status', 'type', 'added_on_time_stamp', 'username', 'password', 'phone_number', 'email_address', 'postal_address', 'added_by', 'updated_by', 'updated_on_time_stamp'];
  dataSource: MatTableDataSource<userData>;
  readData: any;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private location: Location) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.voip = false;
    this.screen = "";
    this.message = "";
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.getAllData();
    // this.initForm();
  }
  //get key by given value of json

  getJSONKeyByValue(json_obj: any, value: string) {
    for (var key in json_obj) {
      if (json_obj[key] == value) {
        return key + "";
      }
    }
    return "";
  }

 
  // initForm() {
  //   this.formGroup = new FormGroup({
  //     start_time: new FormControl('', [Validators.required]),
  //     end_time: new FormControl('', [Validators.required]),
  //     subtype: new FormControl('', []),
  //     policy: new FormControl('', []),
  //     network_id: new FormControl('', []),
  //     subscriber_id: new FormControl('', []),
  //     assigned_to: new FormControl('', []),
  //     active: new FormControl('', []),
  //   });


  // }


  // setTableData(results): void {
  //   // this.dataSource = null;
  //   this.dataSource = new MatTableDataSource(results);
  // }

  getAllData() {
    if (this.screen == "") {
      return;
    } 
    // this.service.getAllData(this.screen).subscribe((res) => {
    //   console.log(res);


    //   this.readData = res;
    //   this.setTableData(res);
    // });
  }

  clearForm() {
    // this.formGroup.reset();
    // this.formGroup.patchValue();
    this.getAllData();
  }

  goBack() {
    this.location.back();
  }

  logout() {
    this.router.navigate(['login']);
  }

}