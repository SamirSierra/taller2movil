import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  tasks: any[] = [];
  expandedIndex: number | null = null;

  constructor() {}

  ngOnInit() {
    
  }
}
