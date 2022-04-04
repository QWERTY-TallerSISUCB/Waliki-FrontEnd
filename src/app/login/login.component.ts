import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
      this.form = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required],
      })
    }
  //constructor() { }

  ngOnInit(): void {
  }
  
  ingresar(){
      const usuario = this.form.value.usuario;
      const password = this.form.value.password;

      console.log(usuario);
      console.log(password);

      if(usuario == 'sergio' && password == '12345'){
        //redireccionamos al dashboard
        this.fakeLoading();
      } else{
        //mensaje de error
        this.error();
        this.form.reset();
      }
    }

    error(){
      this._snackBar.open('Usuario o contraseña incorrectos', '',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }

    fakeLoading(){
      this.loading = true;
      setTimeout(() => {

        //redireccionamos al home

        this.router.navigate(['home'])
      }, 1500);
    }

}
