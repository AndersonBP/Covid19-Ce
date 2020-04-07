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
  public evidence: EvidenceModel;

  isReady: boolean = false;
  isStarted: boolean = false;
  sexes: any[];

  constructor(private quizService: InfermedicaService) { }

  ngOnInit() {
    this.evidence = new EvidenceModel();
    this.quiz = new QuizModel();
    this.sexes = [{ value: 'male', label: 'Masculino' }, { value: 'female', label: 'Feminino' }];
  }

  startQuiz() {
    this.quizService.diagnosis(this.quiz).subscribe(res => {
      this.diagnosis = DiagnosisModel.Create(res);

      this.isStarted = true;
    });
  }

  nextQuestion() {

  }
}
