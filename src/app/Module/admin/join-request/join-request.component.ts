import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/Services/admin-service.service';

@Component({
  selector: 'app-join-request',
  templateUrl: './join-request.component.html',
  styleUrls: ['./join-request.component.css']
})
export class JoinRequestComponent implements OnInit {

  constructor(public service: AdminServiceService,public tostar:ToastrService) { }

  ngOnInit(): void {

    this.service.GetAllRequests();
    this.searchBtn = document.querySelector(".bx-search");
    this.closeBtn= document.querySelector("#btn");
    this.sidebar = document.querySelector(".sidebar");
    this.navbar= document.querySelector("#nav");
    this.section= document.querySelector("#section");


  }
  sidebar:Element | null = null;
  closeBtn:Element | null = null;
  searchBtn:Element | null = null;
  navbar:Element|null=null;
  section:Element|null=null;

Accept(id:number){
this.service.ResponseToRequest(id,1);
}

Reject(id:number){
  this.service.ResponseToRequest(id,17);
}


 MoveOut(){

 }

 btnclicked(){
   this.sidebar!.classList.toggle("open");
   this.menuBtnChange();
 }

 // following are the code to change sidebar button(optional)
 menuBtnChange(this: any) {
  if(this.sidebar.classList.contains("open")){
    this.section.classList.replace("container-full","container")
    this.navbar.classList.replace("nav","navManage")
    this.closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
  }else {
    this.section.classList.replace("container","container-full")
    this.navbar.classList.replace("navManage","nav")
    this.closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
  }
 }
}
