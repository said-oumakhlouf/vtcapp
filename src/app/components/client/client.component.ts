import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  hide = true;

  clientForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  })

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onConnectClick(): void {
    const result = {
      email: this.clientForm.controls.email.value,
      password: this.clientForm.controls.password.value,
    };

    this.router.navigateByUrl('list');
    console.log(result);
  }



}
