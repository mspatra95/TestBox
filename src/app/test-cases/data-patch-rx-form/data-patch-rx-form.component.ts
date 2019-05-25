import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: "app-data-patch-rx-form",
  templateUrl: "./data-patch-rx-form.component.html",
  styleUrls: ["./data-patch-rx-form.component.css"]
})
export class DataPatchRxFormComponent implements OnInit {
  public myForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      addresses: this._fb.array([])
    });
    this.patchMockData(mockData);
  }

  patchMockData(mock) {
    for (let index = 0; index < mock.addresses.length; index++) {
      const addressFormArray = this.myForm.get("addresses") as FormArray;
      addressFormArray.push(this.initAddress);
      for (
        let index2 = 0;
        index2 < mock.addresses[index].phonenumber.length;
        index2++
      ) {
        const phoneNoFormArray = addressFormArray
          .at(index)
          .get("phonenumber") as FormArray;
        phoneNoFormArray.push(this.initNumber);
      }
    }
    this.myForm.patchValue(mock);
  }

  resetForm() {
    this.myForm.reset();
    (this.myForm.get("addresses") as FormArray)["controls"].splice(0);
  }

  get initAddress() {
    return this._fb.group({
      street: ["", Validators.required],
      phonenumber: this._fb.array([])
    });
  }

  get initNumber() {
    return this._fb.group({
      number: ["", Validators.required]
    });
  }

  addAddress() {
    const control = <FormArray>this.myForm.controls["addresses"];
    control.push(this.initAddress);
  }

  removeAddress(i: number) {
    const control = <FormArray>this.myForm.controls["addresses"];
    control.removeAt(i);
  }

  addNumber(address): void {
    const control = <FormArray>address.controls.phonenumber;
    control.push(this.initNumber);
  }

  removeNumber(address, j: number) {
    const control = <FormArray>address.controls.phonenumber;
    control.removeAt(j);
  }

  save(formData) {
    console.log(formData.value);
  }
}

const mockData = {
  name: "Suman",
  addresses: [
    {
      street: "Sankarpur Street",
      phonenumber: [
        {
          number: "9778820039"
        },
        {
          number: "7978332991"
        }
      ]
    },
    {
      street: "Raja Street",
      phonenumber: [
        {
          number: "9432691712"
        }
      ]
    }
  ]
};
