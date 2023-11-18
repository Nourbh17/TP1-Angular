import { Component } from '@angular/core';
import { Observable, Subject, merge, scan, startWith, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent {
  inputValue1: number = 0;
  inputValue2: number = 0;

  resultMerge$: Observable<number[]>;
  resultScan$: Observable<number>;
  resultReduce: number | undefined;

  private input1Subject = new Subject<number>();
  private input2Subject = new Subject<number>();
  private terminate1Subject = new Subject<void>();
  private terminate2Subject = new Subject<void>();
  private updateReduceSubject = new Subject<void>();

  constructor() {
    // Opération de merge avec startWith
    this.resultMerge$ = merge(
      this.input1Subject.pipe(startWith(this.inputValue1)),
      this.input2Subject.pipe(startWith(this.inputValue2))
    ).pipe(
      // Opération de scan avec distinctUntilChanged
      scan<number, number[]>((acc, value) => [...acc, value], []),
      distinctUntilChanged()
    );

    // Opération de scan
    this.resultScan$ = this.resultMerge$.pipe(
      scan((acc, value) => acc + value[value.length - 1], 0)
    );

    // Opération de reduce
    this.resultMerge$.subscribe((values) => {
      // Mise à jour de reduce uniquement lorsque updateReduceSubject émet une valeur
      this.updateReduceSubject.subscribe(() => {
        this.resultReduce = values.reduce((acc, value) => acc + value, 0);
      });
    });

    // Mise à jour de reduce lorsqu'on clique sur les deux boutons Terminate
    merge(this.terminate1Subject, this.terminate2Subject).subscribe(() => {
      this.updateReduceSubject.next();
    });
  }

  updateInput1() {
    this.input1Subject.next(this.inputValue1);
  }

  updateInput2() {
    this.input2Subject.next(this.inputValue2);
  }

  terminateStream1() {
    this.terminate1Subject.next();
  }

  terminateStream2() {
    this.terminate2Subject.next();
  }
}




