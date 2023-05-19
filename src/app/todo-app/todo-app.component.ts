import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent implements OnInit {

  testForm!:FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      testFormDatas: this.formBuilder.array([this.createEmailFormGroup()])
    });
  }

  public addInputFields() {
    const testFormDatas = this.testForm.get('testFormDatas') as FormArray
    testFormDatas.push(this.createEmailFormGroup())
  }

  get testFormDatasControls() {
    return (this.testForm.get('testFormDatas') as FormArray).controls;
  }

  private createEmailFormGroup(): FormGroup {
    return new FormGroup({
      'emailFormControl': new FormControl(''),
      'mobileFormControl': new FormControl('')
    })
  }

  public deleteInputFields(i: number) {
    const testFormDatas = this.testForm.get('testFormDatas') as FormArray
    if (testFormDatas.length > 1) {
      testFormDatas.removeAt(i)
    } else {
      testFormDatas.reset()
    }
  }

  submit(){
    console.log(this.testForm.value);
  }
}
