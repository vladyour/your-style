import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {PopupAreaComponent} from '../popup-area/popup-area/popup-area.component';

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
  @Input()
  yesText: string;
  @Input()
  noText: string;

  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  @Output()
  onDecline: EventEmitter<any> = new EventEmitter();

  constructor(private popupArea: PopupAreaComponent) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.hasConfirmationInfoElement = !!this.confirmationInfo.nativeElement.textContent;
  }

  submit($event) {
    this.onSubmit.emit($event);
    $event.stopPropagation();
    this.popupArea.close();
  }

  decline($event) {
    this.onDecline.emit($event);
    $event.stopPropagation();
    this.popupArea.close();
  }
}
