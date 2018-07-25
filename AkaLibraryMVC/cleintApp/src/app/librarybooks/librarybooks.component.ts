// tslint:disable:quotemark
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BackendApiService } from '../services/backend-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-librarybooks',
  templateUrl: './librarybooks.component.html',
  styleUrls: ['./librarybooks.component.css']
})
export class LibrarybooksComponent implements OnInit {

  bookmodel: any;
  memberModel: any;

  constructor(private activatedRoute: ActivatedRoute, private backendApiService: BackendApiService) {
    this.activatedRoute.params.subscribe(parm => this.performLibraryDetailRequest(parm));
  }

  performLibraryDetailRequest(libraryID: any) {
    if ("libid" in libraryID) {
      this.backendApiService.getBooksAndMember(libraryID["libid"])
      .subscribe(libDetail => this.GetBookDetail(libDetail));
    }
  }

  GetBookDetail(data: any) {
    this.bookmodel = data[0];
    this.memberModel = data[1];
  }

  Submit() {

  }

  ngOnInit() {
  }

}
