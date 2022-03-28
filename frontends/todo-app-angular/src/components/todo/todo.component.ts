import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {

  @Input() public color: string = '';

  constructor() {}

  ngOnInit = (): void => {
  }

}
