import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public forma: FormGroup;

  public constructor() {}

  ngOnInit(): void {
    this.forma = new FormGroup({ 
      'nombre': new FormControl(''),
      'apellido': new FormControl(''),
      'dni': new FormControl(''),
      'sexo': new FormControl(''),
      'email': new FormControl(''),
      'terminos': new FormControl('')
    });
  }

}