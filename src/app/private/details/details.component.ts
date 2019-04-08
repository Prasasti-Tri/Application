import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UpdateService } from 'src/app/Service/update.service';
import { GetApiService } from 'src/app/Service/get-api.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  Form: FormGroup;
  userId: any;
  data: any;

  constructor(private fb: FormBuilder,private updateService: UpdateService, private getUser: GetApiService) { }

  ngOnInit() {

    /*Defining a form group and initializing form controls in it*/ 
    this.Form = this.fb.group({
      firstName:[''],
      lastName: [''],
      fullName:['',Validators.required],
      username: ['',[Validators.required,Validators.email]],
      phoneNo: ['',Validators.required],

      address: ['',Validators.required],
      brief: [''],
      password: ['',[Validators.required,Validators.minLength(6)]]
      
    });

    this.userId = localStorage.getItem('data'); 
/*Fetching data from API */
this.getUser.getById(this.userId).subscribe(response => { 

this.data=response;
console.log(this.data);
//setting values to all the form controls
this.Form.get('firstName').setValue(this.data.firstName);  
this.Form.get('lastName').setValue(this.data.lastName); 
this.Form.get('fullName').setValue(localStorage.getItem('name')); 
this.Form.get('username').setValue(this.data.username); 
this.Form.get('address').setValue(this.data.address); 
this.Form.get('phoneNo').setValue(this.data.phoneNo); 
this.Form.get('brief').setValue(this.data.brief);
this.Form.get('password').setValue(this.data.password); 

});

  }

  /*Making changes in the form and hitting an API to update the response */
  update(){
    if(this.Form.valid)
    {
      //splitting full name to get first name and last names changed
      var fullname = this.Form.get('fullName').value.split(" "); 

      console.log(fullname[0]);console.log(fullname[1]);

      this.Form.get('firstName').setValue(fullname[0]);
      
      this.Form.get('lastName').setValue(fullname[1]);
      
      //hitting of update API
      this.updateService.updateData(localStorage.getItem('data'),this.Form.value).subscribe(response => {
        console.log("Put request successful");
        console.log(response);
        localStorage.removeItem('name');//removing name key in order to fetch updated value of the same key
        localStorage.setItem('name',this.Form.get('fullName').value);//setting the name key with updated value 
        window.location.reload();//showing changes on refresh of windows
      });
  }
}
}
