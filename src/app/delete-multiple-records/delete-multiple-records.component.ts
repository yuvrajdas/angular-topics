import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-delete-multiple-records',
  templateUrl: './delete-multiple-records.component.html',
  styleUrls: ['./delete-multiple-records.component.scss']
})
export class DeleteMultipleRecordsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol', 'action'];
  dataSource = ELEMENT_DATA;
  orgData = ELEMENT_DATA
  deleteAbleIds:Array<number> = [];
  constructor() { }

  ngOnInit(): void {
  }

  getCheckedValue(id:number){
    this.deleteAbleIds.push(id);
  }
  reset(){
    this.dataSource = this.orgData;
    this.deleteAbleIds = [];
  }
  deleteRecords(){
    
   let filteredElement =   ELEMENT_DATA.filter((newval)=>{
        return !this.deleteAbleIds.some((id)=>{
          return id === newval.id;
        })
    })
    this.dataSource = filteredElement;
  }
}
