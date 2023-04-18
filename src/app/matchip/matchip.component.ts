import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-matchip',
  templateUrl: './matchip.component.html',
  styleUrls: ['./matchip.component.scss']
})
export class MatchipComponent implements OnInit {
 

  ngOnInit(): void {
    this.us.getMatChipData().subscribe((res)=>{
      console.log(res);
    })

    this.chipForm = this.fb.group({
      category:['',Validators.required],
      categoryLists:[[],Validators.required]
    })
  }
  chipForm!:FormGroup
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredFruits!: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private us : UsersService, private fb:FormBuilder) {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    // this.categoryLists.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    // this.categoryLists.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  SubmitForm(){
    let  payload = {
      category: this.chipForm.get('category')?.value,
      categoryLists: this.fruits
    }
     
    this.us.postMatChipData(payload).subscribe((res)=>{
      console.log(res);
      
    })
    
  }
}
