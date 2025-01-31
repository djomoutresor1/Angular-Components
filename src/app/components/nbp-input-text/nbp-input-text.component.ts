import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { NbpStyle } from 'src/assets/utils/nbp-commons/nbp-commons.enums';

@Component({
  selector: 'nbp-input-text',
  templateUrl: './nbp-input-text.component.html',
  styleUrls: ['./nbp-input-text.component.scss']
})
export class NbpInputTextComponent implements OnInit, OnDestroy, OnChanges {

  @Input() nbpInputLabel: string;
  @Input() nbpInputLabelRequired: boolean;
  @Input() nbpInputName: string;
  @Input() nbpInputValue: string;
  @Input() nbpInputRequired: boolean;
  @Input() nbpInputDisabled: boolean;
  @Input() nbpInputBorderType: string;
  @Input() nbpInputIcon: string;
  @Input() nbpInputIconRequired: boolean;
  @Input() nbpInputPlaceholder: string;
  @Input() nbpInputType: string;
  @Input() nbpInputErrorMessage: string;

  @Output() nbpInputModel: EventEmitter<string> = new EventEmitter<string>();

  _style = NbpStyle;

  nbpModel: string = '';
  nbpInput: string;
  nbpErrorBorder: string = '';
  nbpBorderType: string;
  nbpErrorMessage: boolean = false;
  nbpIsDigitText: boolean = false;
  nbpCleanInput: string = 'fa fa-times-circle';
  nbpSeparator: string = ' ';

  nbpInputDefault = {
    type: 'text'
  }

  nbpBorder = {
    GENERIC: 'nbp-border-color-default',
    POSITIVE: 'nbp-border-color-success',
    PROMOTIONAL: 'nbp-border-color-info',
    WARNING: 'nbp-border-color-warning',
    ERROR: 'nbp-border-color-danger'
  }

  nbpTypeInput = {
    ROUNDED: 'nbp-rounded',
    CURSOR: 'nbp-cursor-not-allowed'
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges: ', changes.nbpInputValue.currentValue);
    if (this.nbpInputDisabled) {
      this.nbpModel = this.nbpInputValue.length ? this.nbpInputValue : '';
    }

  }

  ngOnInit(): void {
    this.nbpSetUpComponent();
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');

    this.nbpModel = '';
  }

  // Functions
  nbpSetUpComponent() {
    this.nbpInputType = this.nbpInputType === undefined ? this.nbpInputDefault.type : this.nbpInputType;
    this.nbpBorderType = this.nbpGetTypeInputText(this.nbpInputBorderType);
    this.nbpGetClasses();
  }

  nbpGetClasses() {
    this.nbpInput = this.nbpInputDisabled ? this.nbpTypeInput.CURSOR : '';
    this.nbpInput = this.nbpInput + this.nbpSeparator + this.nbpBorderType + this.nbpSeparator + this.nbpErrorBorder;
    this.nbpInputModel.emit(this.nbpModel);
  }

  nbpGetTypeInputText(nbpInput) {
    if (nbpInput === this._style.ROUNDED) {
      return this.nbpTypeInput.ROUNDED;
    }
  }

  nbpInputKeyUp() {
    console.log('nbpInputKeyUp')
    if (this.nbpInputRequired) {
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpBorder.ERROR : '';
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpIsDigitText = (this.nbpModel.length >= 1) ? true : false;
      this.nbpGetClasses();
    } else {
      this.nbpIsDigitText = (this.nbpModel.length >= 1) ? true : false;
    }
  }

  nbpInputBlur() {
    console.log('nbpInputBlur')
  }

  nbpInputFocusOut() {
    console.log('nbpInputFocusOut')
    if (this.nbpInputRequired) {
      this.nbpErrorMessage = (this.nbpModel.length === 0) ? true : false;
      this.nbpErrorBorder = (this.nbpModel.length === 0) ? this.nbpBorder.ERROR : '';
      this.nbpGetClasses();
    }
    this.nbpIsDigitText = false;
  }

  nbpInputFocus() {
    console.log('nbpInputFocus')
    this.nbpIsDigitText = (this.nbpModel.length === 0) ? false : true;
  }

  nbpInputOnClean() {
    console.log('nbpInputOnClean')
    if (this.nbpModel.length !== 0) {
      this.nbpModel = '';
      this.nbpIsDigitText = false;
      this.nbpInputModel.emit(this.nbpModel);
      if (this.nbpInputRequired) {
        this.nbpInput = this.nbpBorderType + this.nbpSeparator + this.nbpBorder.ERROR;
        this.nbpErrorMessage = true;
      }
    }
  }
}
