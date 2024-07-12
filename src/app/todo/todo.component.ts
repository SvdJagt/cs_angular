import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Todo } from '../todo';
import { DataService } from '../data.service';
import {TodoCollectionComponent} from '../todocollection/todocollection.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, NgFor, TodoCollectionComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoList : Todo[] = [];
  todo!: Todo;

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  

  ngOnInit() {
    this.dataService.getAllTodoItems().subscribe(response => {
      this.todoList = response;

      console.log(this.todoList);

  });
  }

  newTodo: Todo = {
    id: 0,
    name: "",
    isComplete: false,
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialog, {
      width: '250px',
      data: {name: this.newTodo.name, isComplete: this.newTodo.isComplete}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newTodo.name = result.name;
      this.newTodo.isComplete = result.isComplete;
      console.log(this.newTodo);
      this.dataService.postTodoItem(this.newTodo);
    });
  }
}



@Component({
  selector: 'popup-dialog',
  standalone: true,
  templateUrl: 'popup-dialog.html',
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class PopupDialog {

  constructor(
    public dialogRef: MatDialogRef<PopupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) {}

  // readonly dialogRef = inject(MatDialogRef<PopupDialog>);
  // readonly data = inject<Todo>(MAT_DIALOG_DATA);
  // readonly name = model(this.data.name);
  // readonly isComplete = model(this.data.isComplete);

  onNoClick(): void {
    this.dialogRef.close();
  }
}