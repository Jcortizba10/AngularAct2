import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RickService } from '../../services/rick.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-rick',
  templateUrl: './rick.component.html',
  styleUrl: './rick.component.css'
})
export class RickComponent implements OnInit{
  personajes: any;

  constructor(
    private rickSer: RickService,
    public dialog: MatDialog
    ){}

  ngOnInit(): void {
    this.rickSer.getCharacters().subscribe(res=> {
      console.log(res);
      this.personajes= res;
    })
  }
  openDialog(character: any){
    this.dialog.open(DialogoComponent, {data: {character}})

  }
}