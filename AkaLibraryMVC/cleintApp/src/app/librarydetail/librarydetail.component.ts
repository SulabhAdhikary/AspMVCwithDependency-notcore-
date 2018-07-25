// tslint:disable:quotemark
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendApiService } from '../services/backend-api.service';

@Component({
  selector: 'app-librarydetail',
  templateUrl: './librarydetail.component.html',
  styleUrls: ['./librarydetail.component.css']
})
export class LibrarydetailComponent implements OnInit {

  libraryName: string;
  cityName: string;

  constructor(private activatedRoute: ActivatedRoute,  private router: Router, private backendApiService: BackendApiService) {
    // Check for Query string
    this.activatedRoute.params.subscribe(parm => this.performLibraryDetailRequest(parm));
  }

  performLibraryDetailRequest(libraryID: any) {
   
    if ("libid" in libraryID) {
      this.backendApiService.getLibrarayDetail(libraryID["libid"])
      .subscribe(libDetail => this.performLibrarayBindDetail(libDetail));
    }
  }

  performLibrarayBindDetail(libDetail: any) {
     this.libraryName = libDetail.name;
     this.cityName = libDetail.city;
  }


  ngOnInit() {
  }

}
