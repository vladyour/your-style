import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {PopupAreaDirective} from '../popup-area/popup-area.directive';

@Component({
  selector: 'your-confirmation-area',
  templateUrl: './confirmation-area.component.html',
  styleUrls: ['./confirmation-area.component.scss']
})
export class ConfirmationAreaComponent implements OnInit, AfterViewInit {

  @ViewChild('confirmationInfo')
  confirmationInfo;

  hasConfirmationInfoElement: boolean;

  @Input()
  confirmationText: string = 'Are you sure?';

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  @Output()
  onDecline: EventEmitter<any> = new EventEmitter();

  constructor(private directive: PopupAreaDirective) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.hasConfirmationInfoElement = !!this.confirmationInfo.nativeElement.textContent;
  }

  submit($event) {
    this.onSubmit.emit($event);
    $event.stopPropagation();
    this.directive.close();
  }

  decline($event) {
    this.onDecline.emit($event);
    $event.stopPropagation();
    this.directive.close();
  }
}
