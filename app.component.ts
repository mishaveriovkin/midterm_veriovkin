import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface user{
  firstName:string,
  lastName:string,
  age:number

}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'midterm';

  changeTitle(){
    this.title='shualeduri';
  }

  users:user[]=[
    {firstName:'jon',lastName:'lenon',age:40},
    {firstName:'ringo',lastName:'stari',age:19},
    {firstName:'vigaca',lastName:'someone',age:13},
    {firstName:'mishel',lastName:'harison',age:66},
    {firstName:'gevorq',lastName:'lenona',age:32}
  ];
  parentUser=[
    {id:1,Firstname:'joni',Lastname:'jugashvili',DateOfBirth: new Date(2000,5,10),Phonenumber:'599999999',email:'juga@gmail.com'},
    {id:1,Firstname:'sosso',Lastname:'jugashvili',DateOfBirth: new Date(2005,7,12),Phonenumber:'594979999',email:'djuga@gmail.com'}, 
    {id:1,Firstname:'giga',Lastname:'jugashvili',DateOfBirth: new Date(2010,5,10),Phonenumber:'559999999',email:'jaga@gmail.com'},
    {id:1,Firstname:'jia',Lastname:'jugashvili',DateOfBirth: new Date(2007,5,10),Phonenumber:'591999999',email:'jiga@gmail.com'},
    {id:1,Firstname:'gio',Lastname:'jugashvili',DateOfBirth: new Date(2004,5,10),Phonenumber:'593999999',email:'jega@gmail.com'}  
  ];
}


