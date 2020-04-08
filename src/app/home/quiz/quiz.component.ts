import { Component, OnInit } from '@angular/core';
import { DiagnosisModel } from 'src/app/core/services/infermedica/models/diagnosis.model';
import { InfermedicaService } from 'src/app/core/services/infermedica/infermedica.service';
import { EvidenceModel } from 'src/app/core/services/infermedica/models/evidence.model';
import { QuizModel } from 'src/app/core/services/infermedica/models/quiz.model';

@Component({
  selector: 'home-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public quiz: QuizModel;
  public diagnosis: DiagnosisModel;

  evidencesByQuestion: EvidenceModel[] = [];
  isReady: boolean = false;
  sexes: any[];

  constructor(private quizService: InfermedicaService) { }

  ngOnInit() {
    this.quiz = new QuizModel();
    this.sexes = [{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }];
  }

  startQuiz() {
    this.isReady = true;

    this.nextQuestion();
  }

  nextQuestion() {
    this.quiz.evidence = this.quiz.evidence.concat(this.evidencesByQuestion);

    this.quizService.diagnosis(this.quiz).subscribe(res => {
      this.diagnosis = DiagnosisModel.Create(res);
      console.log(this.diagnosis);
      this.evidencesByQuestion = [];
    });
  }

  addEvidence(item: any) {
    const index = this.evidencesByQuestion.findIndex(f => f.id === item.id);
    if (index >= 0) {
      this.evidencesByQuestion[index].choice_id = item.choiceId;

      return
    }

    this.evidencesByQuestion.push({ id: item.id, choice_id: item.choiceId } as EvidenceModel);
  }

  isValid() {
    return this.evidencesByQuestion.length === this.diagnosis.question.items.length;
  }
}
