import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form:any
  currentID:any
  item1:any
  constructor(private memberService : MemberService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentID=this.activatedRoute.snapshot.params.id;
    if(!!this.currentID)
    //je suis dans edit
    {

      this.memberService.getMemberById(this.currentID).then((item)=>{this.item1=item;this.initForm(this.item1)})
    }
    else
{
  this.initForm(null);
}
   }


  initForm(item:any) :void{

    this.form=new FormGroup({
  
        cin: new FormControl( item?.cin, [Validators.required]),
        name: new FormControl( item?.name, [Validators.required]),
        cv: new FormControl( item?.cv),
        type: new FormControl( item?.type, [Validators.required]),
    

    });
  }
 
 
  OnSubmit():void{
   
    console.log(this.form.value);
    const objectToSubmit = {...this.item1 ,...this.form.value};
    this.memberService.saveMember(objectToSubmit).then(() => this.router.navigate(['./members']));
  }

  
  























}




