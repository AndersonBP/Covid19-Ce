import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'info.quiz',
  templateUrl: './info.quiz.component.html',
  styleUrls: ['./info.quiz.component.css']
})
export class InfoQuizComponent {
  constructor(public dialogRef: MatDialogRef<InfoQuizComponent>, @Inject(MAT_DIALOG_DATA) public data: { age: number, sex: string }) { }

  sexes: any[] = [{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }];

  onExit() {
    this.dialogRef.close();
  }
}
