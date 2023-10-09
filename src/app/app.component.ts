import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './api.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'binding';
  formValue!: FormGroup;
  nemek: string[] = ["Nő", "Férfi"] ;
users: any;
user!: User;

//two-way data binding gyakorlás 
formExample =new FormGroup([]);
userName: FormControl = new FormControl('');
userAge: FormControl = new FormControl('');
userGender: FormControl = new FormControl('');
userHobbies: FormControl = new FormControl(['']);
//idáig!!

//ngModel
modelTest ='';
//


  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ){

  }
  ngOnInit(): void {
    this.formValue = this.fb.group({
      nev: ['', Validators.required],
      cim: ['', Validators.required],
      telefonszam: ['', Validators.required],
      kor: ['', Validators.required],
      nem: ['', Validators.required],
    });

    this.getUsers();
  }

  getUsers(){
this.api.getAllUser().subscribe({
  next: (res) =>{
  this.users = res;
  }
});
  }

  adduser(user: User){
    this.api.postNew(this.formValue.value).subscribe(res=>{
      this.user = res;
      this.formValue.reset();
    })
  }

  //ngModel method - checking
  check(){
    console.log(this.modelTest);
  }

  change(){
    this.modelTest = 'Update test text.'
  }
}
