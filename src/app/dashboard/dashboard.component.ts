import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
  }

  users$: Object;

  
  /*
  user: Object = {};

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      console.log('data', data);
      this.users$ = data;
    })

    this.data.addUser({
      userId: 777,
      title: 'EHE Training',
      body: 'lorem ipsum dolor sit amet'
    }).subscribe(data => {
      console.log('## POSTS ###', data);
    })
  }

  */

  form: FormGroup;
  firstName = new FormControl("", Validators.required);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": this.firstName,
      "password": ["", Validators.required]
    });
  }

  onSubmit() {
    console.log("model-based form submitted", this.form);
  }

  resetForm() {
    this.form.reset();
  }

  patchValue() {
    this.form.patchValue({firstName: "Ryan"});
  }

  setValue() {
    this.form.setValue({firstName: "John Doe", password: "hello#"})
  }

}
