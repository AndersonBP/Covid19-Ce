import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { InfermedicaService } from 'src/app/core/services/infermedica/infermedica.service';

import { DiagnosisModel } from 'src/app/core/services/infermedica/models/diagnosis.model';
import { EvidenceModel } from 'src/app/core/services/infermedica/models/evidence.model';
import { QuizModel } from 'src/app/core/services/infermedica/models/quiz.model';
import { TriageModel } from 'src/app/core/services/infermedica/models/triage.model';
import { InfoQuizComponent } from './info.quiz/info.quiz.component';
import { concat } from 'rxjs';

@Component({
  selector: 'home-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public quiz: QuizModel;
  public diagnosis: DiagnosisModel;
  public triage: TriageModel;

  evidencesByQuestion: EvidenceModel[] = [];
  isReady: boolean = false;
  sexes: any[];
  isLoading: boolean = false;

  constructor(private quizService: InfermedicaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.sexes = [{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }];
    this.diagnosis = new DiagnosisModel();
  }

  requestData() {
    const dialogRef = this.dialog.open(InfoQuizComponent, { data: {}, disableClose: true });

    dialogRef.afterClosed().subscribe(res => {
      this.quiz = QuizModel.Create({ age: res.age, sex: res.sex });

      this.isReady = true;

    this.nextQuestion();
    });
  }

  nextQuestion() {
    this.isLoading = true;
    this.quiz.evidence = this.quiz.evidence.concat(this.evidencesByQuestion);

    this.quizService.diagnosis(this.quiz).subscribe(res => {
      this.diagnosis = DiagnosisModel.Create(res);
      console.log(this.diagnosis);
      this.evidencesByQuestion = [];

      if (this.diagnosis.should_stop) {
        this.isLoading = true
        this.quizService.triage(this.quiz).subscribe(res => {
          this.isReady = false;
          this.triage = TriageModel.Create(res);

          console.log(this.triage);
          this.isLoading = false;
        });

        return;
      }

      this.isLoading = false;
    });
  }

  finishQuiz() {
    this.isReady = false;
    this.evidencesByQuestion = [];
    this.quiz = new QuizModel();
    this.diagnosis = new DiagnosisModel();
  }

  addEvidence(item: any) {
    if (this.diagnosis.question.type === 'group_multiple') {
      const index = this.evidencesByQuestion.findIndex(f => f.id === item.id);
      if (index >= 0) {
        this.evidencesByQuestion[index].choice_id = item.choiceId;

        return
      }

      this.evidencesByQuestion.push({ id: item.id, choice_id: item.choiceId } as EvidenceModel);

      return;
    }

    this.evidencesByQuestion = [{ id: item.id, choice_id: item.choiceId } as EvidenceModel];
  }

  isValid() {
    if (this.diagnosis.question.type === 'group_multiple') {
      return this.evidencesByQuestion.length === this.diagnosis.question.items.length;
    }

    return this.evidencesByQuestion.length > 0;
  }
}
