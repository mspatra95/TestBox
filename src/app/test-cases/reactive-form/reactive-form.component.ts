import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormArray, Validators } from "@angular/forms";
import { MustMatch } from "src/app/common/utils/must-match.validator";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"]
})
export class ReactiveFormComponent {
  data = {
    cities: [
      {
        city: "",
        addressLines: [
          {
            addressLine: ""
          }
        ]
      }
    ]
  };
  submitted = false;

  myForm: FormGroup;
  genderList: string[] = ["Male", "Female", "Others"];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        pwd: ["", Validators.required],
        confirmPwd: ["", Validators.required],
        gender: ["", Validators.required],
        cities: this.fb.array([]),
        terms: ["", Validators.requiredTrue]
      },
      {
        validator: MustMatch("pwd", "confirmPwd")
      }
    );
    this.setCities();
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm.value);
  }

  get f() {
    return this.myForm.controls;
  }

  get cityData() {
    return this.myForm.get("cities");
  }

  addNewCity() {
    let control = <FormArray>this.myForm.controls.cities;
    control.push(
      this.fb.group({
        city: ["", Validators.required],
        addressLines: this.fb.array([])
      })
    );
  }

  deleteCity(index) {
    let control = <FormArray>this.myForm.controls.cities;
    control.removeAt(index);
  }

  addNewAddressLine(control) {
    control.push(
      this.fb.group({
        addressLine: ["", Validators.required]
      })
    );
  }

  deleteAddressLine(control, index) {
    control.removeAt(index);
  }

  setCities() {
    let control = <FormArray>this.myForm.controls.cities;
    this.data.cities.forEach(x => {
      control.push(
        this.fb.group({
          city: x.city,
          addressLines: this.setAddressLines(x)
        })
      );
    });
  }

  setAddressLines(x) {
    let arr = new FormArray([]);
    x.addressLines.forEach(y => {
      arr.push(
        this.fb.group({
          addressLine: y.addressLine
        })
      );
    });
    return arr;
  }
}
