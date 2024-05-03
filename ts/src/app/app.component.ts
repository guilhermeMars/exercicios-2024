import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  createTopicDisplay: string = 'flex';
  createTopicFormDisplay: string = 'none';
  sendedPopupDisplay: string = 'none';

  // constructor(private elementRef: ElementRef){}

  // ngAfterViewInit(): void {
  //   this.addAnswerListener();
  // }

  // addAnswerListener(): void{
  //   const answerElement = this.elementRef.nativeElement.querySelectorAll(".answered-topic");
  //   if(answerElement){
  //     answerElement.addEventListener('click', this.expandAnswer);
  //   }
  // }

  expandAnswer(event: MouseEvent): void{
    const element = event.currentTarget as HTMLElement;
    if (String(element.classList).includes("truncated-comment")) {
      element.classList.remove("truncated-comment");
    } else{
      element.classList.add("truncated-comment");
    }
  }

  createTopic(): void{
    this.createTopicDisplay = 'none';
    this.createTopicFormDisplay = 'flex';
    this.sendedPopupDisplay = 'none';
  }

  sendTopic(): void{
    this.createTopicDisplay = 'none';
    this.createTopicFormDisplay = 'none';
    this.sendedPopupDisplay = 'block';
  }

  createAnotherTopic(): void{
    this.createTopicDisplay = 'none';
    this.createTopicFormDisplay = 'flex';
    this.sendedPopupDisplay = 'none';
  }

  expandItem(event: MouseEvent): void {
    const element = event.currentTarget as HTMLElement;
    if (String(element.classList).includes("truncated")) {
      element.classList.remove("truncated");
    } else{
      element.classList.add("truncated");
    }
  }
}
