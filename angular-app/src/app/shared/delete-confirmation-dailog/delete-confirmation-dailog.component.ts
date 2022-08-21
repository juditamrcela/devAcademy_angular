import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-delete-confirmation-dailog',
  templateUrl: './delete-confirmation-dailog.component.html',
  styleUrls: ['./delete-confirmation-dailog.component.css']
})
export class DeleteConfirmationDailogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }
  
  ngOnInit(): void {
  }

}
