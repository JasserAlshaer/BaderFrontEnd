import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/Services/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-statitcs',
  templateUrl: './statitcs.component.html',
  styleUrls: ['./statitcs.component.css']
})
export class StatitcsComponent implements OnInit {


  constructor(public service: AdminServiceService,public tostar:ToastrService,public router:Router) { }

  ngOnInit(): void {
    this.service.GetStatics();
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
  MoveOut(){
    this.tostar.warning('Logged Out')
   this.router.navigate(['/login'])
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
