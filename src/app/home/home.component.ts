import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  arr = [{src: '3.png', value: 'stephen King' },{src:'4.png', value: 'Just one Bite'},
  {src: '5.png', value: 'The Dark Tower'},{src:'6.png',value:'The Nanny'},{src: '7.png',value: 'Stephen King'}];

  loadSearch(val) {

    this.route.navigate(['search', val]);


  }

}
