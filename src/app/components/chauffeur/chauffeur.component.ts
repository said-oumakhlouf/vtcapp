import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {

  title = 'Chauffeur'

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterClick(): void {
    this.router.navigateByUrl('register');
  }


}
