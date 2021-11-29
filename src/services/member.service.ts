import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from 'src/app/app-config';
import {Member} from '../models/member'

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  public tab : any[]= GLOBAL._DB.members; 
  

  saveMember(member : Member) : Promise<Member>
  {
   // this.httpClient.post<Member>('link<ToAPIrest',member).toPromise(); // tpPromise kima fetch wala axios fel react native
   const memberToSave ={
     ...member,
   }
   memberToSave.id=member.id??Math.ceil(Math.random()*10000).toString(); //if short bil ?? walet
   memberToSave.createdDate=member.createdDate?? new Date().toString();
   this.tab = [memberToSave,...this.tab.filter(item => item.id !== member.id)]   // ...  n3mlouhoum ll extraction
   return new Promise(resolve => resolve(memberToSave)) 
  }
  getMemberById (id : string): Promise<Member>
  {
   // return this.HttpClient.get<Member>('link<ToAPIrest').toPromise();
   return new Promise (resolve => resolve(this.tab.filter(item => item.id === id)[0]??null)) // resolve block tru
  }
  deleteMember(id : string) :  Promise <void>
  {
   // return this.HttpClient.delete<void>('link<ToAPIrest').toPromise();
    this.tab =this.tab.filter(item => item.id !=id)  // ...  n3mlouhoum ll extraction
    return new Promise(resolve => resolve()) 

  }
  getAll(): Promise<Member[]>
  {
   // return this.HttpClient.get<Member>('link<ToAPIrest').toPromise();
   return new Promise(resolve => resolve(this.tab))
  }
  constructor() { }}