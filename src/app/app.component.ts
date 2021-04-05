import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public forma: FormGroup;

  public constructor(private fb: FormBuilder) {}

  ngOnInit(): void {

    // **************************** //
    // ******* MANERA 1 *********** //
    // **************************** //

    // this.forma = new FormGroup({ 
    //   'nombre': new FormControl(''),
    //   'apellido': new FormControl(''),
    //   'dni': new FormControl(''),
    //   'sexo': new FormControl(''),
    //   'email': new FormControl(''),
    //   'terminos': new FormControl('')
    // });

    // **************************** //
    // ******* MANERA 2 *********** //
    // **************************** //

    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'apellido': ['', Validators.required],
      'dni': ['', Validators.required],
      'sexo': ['', Validators.required],
      'email': ['', ],
      'terminos': ['', Validators.required]
    });

  }

  public aceptar(): void {
    console.log(this.forma);
  }

}