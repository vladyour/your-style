import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'your-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  useLoginIcon = true;

  @Input()
  loginLabel = 'Login';

  @Input()
  wrongLoginMessage = 'Label can\'t be empty';

  @Input()
  usePasswordIcon = true;

  @Input()
  passwordLabel = 'Password';

  @Input()
  wrongPasswordMessage = 'Password can\'t be empty';

  loginControl: FormControl;

  passwordControl: FormControl;

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginControl = this.fb.control(null, Validators.required);
    this.passwordControl = this.fb.control(null, Validators.required);

    this.loginForm = this.fb.group({
      login: this.loginControl,
      password: this.passwordControl
    });
  }

}
