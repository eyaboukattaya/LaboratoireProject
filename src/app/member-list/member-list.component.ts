import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Member } from 'src/models/member';
import { MemberService } from 'src/services/member.service';
import {GLOBAL} from '../app-config';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  datasource: MatTableDataSource<Member>;


  displayedColumns: string[] = ['id','cin', 'name', 'createdDate', 'cv','type','action'];

  
  constructor(private MS:MemberService, private router:Router , private dialog:MatDialog) { 
    // this.dataSource = this.MS.tab
    this.datasource = new MatTableDataSource(this.MS.tab);
     
   }

  /** OnDelete(CurrentId : any){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().pipe().subscribe(
      isDeleteConfirmed =>{
      if(isDeleteConfirmed){
       this.Ms.deleteMemberById(CurrentId).then(()=> this.getData());
      }}
      )
   
  }*/
  getData()
  {
    this.MS.getAll().then((data)=> this.datasource.data = data);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }
  deleteMember( id : any ){
    const dialogRef = this.dialog.open(ConfirmDialogComponent,{});
    dialogRef.afterClosed().pipe().subscribe(
      isDeleteConfirmed => {
        if( isDeleteConfirmed ){
          this.MS.deleteMember(id).then(()=> { this.getData();})
        }
      }
    )
  }

  ngOnInit(): void {
  }


}
