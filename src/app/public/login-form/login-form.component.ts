import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { GetApiService } from 'src/app/Service/get-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  angForm: FormGroup;
  posts: any;
  

  constructor(private fb: FormBuilder,private svc: GetApiService,private router: Router) { 
    this.createForm();
  }

  ngOnInit() {}

  createForm(){
    this.angForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['',[Validators.required,Validators.minLength(6)]]
   });
  }

  //this function will only execute when our login form will pass all its validatins
  login(){
    if(this.angForm.valid)
    {
    // console.log(this.angForm.value);
    this.svc.getUserInfo(this.angForm.value).subscribe(response => {
      this.posts = response;
      
      console.log(this.posts);

      //Condition for user to be invalid
      if((Object.keys(response).length)==0)
      { 
        console.log("Invalid user");
        // return;
      }

      //Condition when the user will be valid
      else
      {
        console.log("Valid user");
        // localStorage.setItem('data', JSON.stringify(this.posts));
        var data = JSON.parse(JSON.stringify(this.posts));
        console.log(data);
        localStorage.setItem('data', data[0].id);
        localStorage.setItem('name',data[0].firstName+" "+data[0].lastName);
        this.router.navigate(['/private/navbar']);
      }
      
    
  });

    }
  }

}
