import { Component, Input, Inject } from '@angular/core';
import { Todo } from '../todo';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RandomBackgroundDirective } from '../random-background.directive'; 
import { DataService } from '../data.service';
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
  selector: 'app-todocollection',
  standalone: true,

  imports: [RouterLink, RouterOutlet, RandomBackgroundDirective],
  templateUrl: './todocollection.component.html',
  styleUrl: './todocollection.component.css'
})
export class TodoCollectionComponent {
  @Input() Todo!: Todo;
  
  changedTodo: Todo = {
    id: 0,
    name: "",
    isComplete: false,
  };

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  onDelete(id: number): void {
    this.dataService.deleteTodoItem(id);
    alert("item deleted");
  }

  onChange(id: number, name: string, isComplete: boolean): void {
      const dialogRef = this.dialog.open(PopupDialogChange, {
        width: '250px',
        data: {name: name, isComplete: isComplete}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.changedTodo.id = id;
        this.changedTodo.name = result.name;
        this.changedTodo.isComplete = result.isComplete;
        console.log(this.changedTodo);
        this.dataService.changeTodoItem(id, this.changedTodo);
      });
      alert("item changed");
    }
}
  



@Component({
  selector: 'popup-dialog-change',
  standalone: true,
  templateUrl: 'popup_dialog_change.html',
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
export class PopupDialogChange {

  constructor(
    public dialogRef: MatDialogRef<PopupDialogChange>,
    @Inject(MAT_DIALOG_DATA) public data: Todo) {}

  // readonly dialogRef = inject(MatDialogRef<PopupDialog>);
  // readonly data = inject<Todo>(MAT_DIALOG_DATA);
  // readonly name = model(this.data.name);
  // readonly isComplete = model(this.data.isComplete);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
