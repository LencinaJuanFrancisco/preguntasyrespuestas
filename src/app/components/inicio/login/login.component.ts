import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Usuario} from '../../../models/usuario'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login:FormGroup
  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private router:Router){
    this.login = this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
  }
  log():void{
    console.log(this.login)
    const usuario: Usuario = {
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    }
    if (usuario.nombreUsuario === 'fran' && usuario.password === '123') {
      this.router.navigate(['/dashboard'])
    }else{
      this.toastr.error('Usuario o contraseña incorrecto','Error')
    }
    console.log(usuario)


  }

}
