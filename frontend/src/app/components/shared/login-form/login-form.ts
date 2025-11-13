import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  @Output() close = new EventEmitter<void>();

  email: string = '';

  onSubmit() {
    console.log('Login submitted:', { email: this.email });
    // Add your login logic here
  }

  onClose() {
    this.close.emit();
  }
}
