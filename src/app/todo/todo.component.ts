import { ChangeDetectionStrategy, Component, Inject, inject, model } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { Todo } from '../todo';
import { DataService } from '../data.service';
import {TodoCollectionComponent} from '../todocollection/todocollection.component';
import { FormsModule, NgModel } from '@angular/forms';
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
import { Observable } from 'rxjs';

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

  name: string = "";
  complete: boolean = false;

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.todo = result;
      console.log(this.todo);
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
  readonly dialogRef = inject(MatDialogRef<PopupDialog>);
  readonly data = inject<Todo>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);
  readonly isComplete = model(this.data.isComplete);

  onNoClick(): void {
    this.dialogRef.close();
  }
}