import { FormBuilder, Validators, FormGroup, FormArray } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-view-reactive-form",
  templateUrl: "./view-reactive-form.component.html",
  styleUrls: ["./view-reactive-form.component.css"]
})
export class ViewReactiveFormComponent implements OnInit {
  cvForm: FormGroup;
  dataModel: any; //active model
  storeData: any; //save to disk model
  constructor(private _fb: FormBuilder) {}

  showValue() {
    return this.cvForm.getRawValue();
  }

  showSavedValue() {
    return this.dataModel;
  }

  saveForm() {
    //save form values to ojbect and reset the form
    this.storeData = this.cvForm.getRawValue();
    this.cvForm.reset();
    // reset will not remove form elements added already
    //to the formarrays so we need to purge those as well
    //without losing our subscription!
    (this.cvForm.get("lines") as FormArray)["controls"].splice(0);
  }

  loadFormAction() {
    this.loadForm(this.storeData);
  }

  loadForm(data) {
    //create lines array first
    for (let index = 0; index < data.lines.length; index++) {
      const linesFormArray = this.cvForm.get("lines") as FormArray;
      linesFormArray.push(this.line);
      for (
        let player = 0;
        player < data.lines[index].players.length;
        player++
      ) {
        const playersFormsArray = linesFormArray
          .at(index)
          .get("players") as FormArray;
        playersFormsArray.push(this.player);
      }
    }
    //once we setup the form with all the arrays and such, we cna just
    //patch the form:
    this.cvForm.patchValue(data);
  }

  seedForm(): void {
    //seed the form with sample data
    this.loadForm(seedData);
  }

  get player(): FormGroup {
    return this._fb.group({
      first_name: "",
      last_name: ""
    });
  }
  //get functions cannot have parameters...
  get line(): FormGroup {
    return this._fb.group({
      name: "",
      players: this._fb.array([])
    });
  }

  ngOnInit() {
    this.dataModel = Object.create(null);

    //each team has at least one line and each line has at least
    //3 players, so let's set that up as the default
    this.cvForm = this._fb.group({
      team_name: ["", [Validators.required]],
      lines: this._fb.array([])
    });

    console.log(this.cvForm.getRawValue());
    //subscribe to value changes on form
    this.cvForm.valueChanges.subscribe(data => {
      this.dataModel = data;
    });
    console.log(this.cvForm.getRawValue());
  }
}

const seedData = {
  team_name: "Team",
  lines: [
    {
      name: "line a",
      players: [
        {
          first_name: "1a",
          last_name: ""
        },
        {
          first_name: "2a",
          last_name: ""
        },
        {
          first_name: "3a",
          last_name: ""
        }
      ]
    },
    {
      name: "line b",
      players: [
        {
          first_name: "1b",
          last_name: ""
        },
        {
          first_name: "2b",
          last_name: ""
        },
        {
          first_name: "3b",
          last_name: ""
        }
      ]
    },
    {
      name: "line c",
      players: [
        {
          first_name: "1c",
          last_name: ""
        },
        {
          first_name: "2c",
          last_name: ""
        },
        {
          first_name: "3c",
          last_name: ""
        }
      ]
    }
  ]
};
