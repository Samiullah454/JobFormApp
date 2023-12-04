import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, AbstractControl } from '@angular/forms';
import { JobService } from './jobservice';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobForm!: FormGroup;
  showSectionInput = false;
  newSectionNameControl = new FormControl('');
  constructor(private fb: FormBuilder, private jobservice:JobService) {}

  ngOnInit() {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      expiry: ['', Validators.required],
      jobDuration: ['', [Validators.required, Validators.min(1)]],
      jobType: ['', Validators.required],
      sections: this.fb.array([]),
    });
  }

  get sections(): FormArray {
    return this.jobForm.get('sections') as FormArray;
  }

  addSection() {
    
    const section = this.fb.group({
      name: ['', Validators.required],
      fields: this.fb.array([]),
    });

    this.sections.push(section);
  }

  removeSection(index: number) {
    this.sections.removeAt(index);
  }

  addField(sectionIndex: number) {
    const section = this.sections.at(sectionIndex) as FormGroup;
    const fields = section.get('fields') as FormArray;
    fields.push(this.fb.group({
      name: ['',Validators.required] ,
      value:['',Validators.required]
    }));
  }
  
  getFields(section: AbstractControl): FormArray {
    return section.get('fields') as FormArray;
  }
  removeField(sectionIndex: number, fieldIndex: number) {
    const section = this.sections.at(sectionIndex) as FormGroup;
    const fields = section.get('fields') as FormArray;
    fields.removeAt(fieldIndex);
  }

  submitForm() {
    if (this.jobForm.valid) {
      console.log('Form submitted:', this.jobForm.value);
      this.jobservice.createJob(this.jobForm.value).subscribe(
        (response) => {
          console.log('API Response:', response);
          this.jobForm.reset();
        },
        (error) => {
          console.error('API Error:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
