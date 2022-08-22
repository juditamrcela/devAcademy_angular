import { Component, OnInit,Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StayVacationService } from 'app/StayVacation.service';
import { Accomodation } from 'app/models/Accomodation.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationDailogComponent } from 'app/shared/delete-confirmation-dailog/delete-confirmation-dailog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-my-places',
  templateUrl: './my-places.component.html',
  styleUrls: ['./my-places.component.css']
})
export class MyPlacesComponent implements OnInit {

  accommodations:Accomodation[] = [];
  isLoading=false;
  constructor(private dialog:MatDialog ,private http:HttpClient,private router:Router,private route:ActivatedRoute,private stayVacationService:StayVacationService) { }
  isDelete=false;

  ngOnInit(): void {
    this.getData();
  }
  private getData(){
    
    this.isLoading=true;
    this.stayVacationService.fetchAccommodations().subscribe(accommodations=>{
      this.isLoading=false;
      this.accommodations=accommodations
      console.log(accommodations)
    });
  }
  onClickedEdit(id:string){
    this.router.navigate(['/myPlaces/edit',id],{relativeTo:this.route});
  }
  onClicked(id:string){
    
    const dialogRef=this.dialog.open(DeleteConfirmationDailogComponent,{
      width:'600px',
      disableClose:true
    
    });
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
      if(result){
        this.stayVacationService.deleteAccommodation(id).subscribe(res=>{
          console.log(res);
          this.accommodations.filter(accommodationsDel=>{
            return accommodationsDel.id!==id
          })
          
      })
      }
    })
  }
  
 

}
