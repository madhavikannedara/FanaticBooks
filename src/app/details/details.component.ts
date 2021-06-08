import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private acti : ActivatedRoute) { }
  fileName = '';
  flag = false;

  ngOnInit(): void {

    this.acti.params.subscribe(obj => {
debugger;
      this.fileName = obj.id;

      this.flag = true;
     
       
    })
  }

}
