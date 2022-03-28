import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [TodoFormComponent, TodoListComponent, TodoComponent],
  imports: [FontAwesomeModule],
  exports: [TodoFormComponent, TodoListComponent, TodoComponent],
})

export class ComponentsModule { }
