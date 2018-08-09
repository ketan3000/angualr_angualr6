import { Component, Pipe, PipeTransform } from '@angular/core';
import { NgStyle } from '@angular/common';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  topic = [{id:1,name:'Angualr'},{id:2,name:'PHP'},{id:3,name:'Dotnet'},{id:4,name:'Java'}]
  cpuName = [{id:1,name:'Intel',Checked: true},{id:2,name:'AMD',Checked: false},{id:3,name:'Sonic',Checked: false}]
  
  userModule = new User('','123456','2','M',true);
 
  userFromSubmit(userdata){
   // userdata.cpuname = this.cpuName;
    console.log(userdata);
    
  }
  

}
