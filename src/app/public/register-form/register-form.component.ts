import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../helpers/must-match.validator';
import { PostApiService } from '../../Service/post-api.service';
import { Router } from '@angular/router';
import { GetApiService } from 'src/app/Service/get-api.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  posts: any;

  constructor(private fb: FormBuilder,private service: PostApiService,private router: Router, private getData: GetApiService) { }

  ngOnInit() {

    this.form = this.fb.group({

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      username: ['', [Validators.required, Validators.email]],

      phoneNo: ['', Validators.required],

      address: ['', Validators.required],

      brief : [''],

      password: ['', [Validators.required, Validators.minLength(6)]],

      confirmPswd: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPswd')//Custom validator
    });
  }

  get f() { return this.form.controls; } //getter function to get forms' controls

  register(){
    this.submitted = true;

    //register each form field's value (if form is valid) in db.json by hitting the post API
    if(this.form.valid)
    {
     console.log(this.form.value);

 
    this.service.createUser(this.form.value).subscribe();

    
    this.router.navigate(['/public/login']);
  }
    else
    alert("Fill the valid fields to proceed");

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    

  }

}
