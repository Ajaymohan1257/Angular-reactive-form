import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form : FormGroup;
  submitted = false;

  constructor(public builder : FormBuilder ) {}

  ngOnInit(): void {
    this.form = this.builder.group({
      name : ['', Validators.required],
      email : ['', [Validators.required, Validators.email]],
      phone : ['', [Validators.required, Validators.pattern("[7-9]{1}[0-9]{9}$")]],
      message : ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  get getControl(){
    return this.form.controls;
  }

  onSubmit(f : FormGroup){
    this.submitted = true;
    console.log(f.value)
  }

}
