import { Component, OnInit } from '@angular/core';
import { DiagnosisModel } from 'src/app/core/services/infermedica/models/diagnosis.model';
import { InfermedicaService } from 'src/app/core/services/infermedica/infermedica.service';
import { EvidenceModel } from 'src/app/core/services/infermedica/models/evidence.model';

@Component({
  selector: 'home-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  started: boolean = false;
  diagnosis: DiagnosisModel;
  evidence: EvidenceModel = new EvidenceModel();

  constructor(private quizService: InfermedicaService) { }

  ngOnInit() {
  }

  startQuiz() {
    this.quizService.diagnosis({ sex: 'male', age: 23, evidence: [] }).subscribe(res => {
      this.diagnosis = DiagnosisModel.Create(res);

      this.started = true;

    });
  }

  nextQuestion() {

  }
}
