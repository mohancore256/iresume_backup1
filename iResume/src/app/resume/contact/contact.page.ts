import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showMenu(){
    console.log('called menu');
    this.router.navigateByUrl('/menu');
  }

}
