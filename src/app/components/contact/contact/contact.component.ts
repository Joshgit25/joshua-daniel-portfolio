
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import {
  FormsModule,
  NgForm
} from '@angular/forms';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
declare var bootstrap: any;
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  profileImg = '/Josh_pic.jpeg';
  showContact = false;
  constructor(private toastr: ToastrService) { }
  isSending = false;

  contact = {
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  };

  async connectMe(form: NgForm): Promise<void> {

    if (form.invalid || this.isSending) {
      form.control.markAllAsTouched();
      return;
    }

    this.isSending = true;

    try {
      await emailjs.send(
        'service_12ekol2',
        'template_bfxwivn',
        {
          user_name: this.contact.user_name,
          user_email: this.contact.user_email,
          subject: this.contact.subject,
          message: this.contact.message
        },
        {
          publicKey: 'eqds_uCey8VApyID6'
        }
      );

      this.toastr.success('Message sent successfully!', "JD", { closeButton: true });

      form.resetForm();
      this.contact = {
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      };

    } catch (error) {
      this.toastr.error(
        'Unable to send your message. Please try again later.', "JD", {
        closeButton
          : true
      });
    } finally {
      this.isSending = false;
    }
  }

  profileName(): string {
    return 'joshua daniel'
      .split(' ')
      .map(name => name[0].toUpperCase())
      .join('');
  }

  connectBtn() {
    this.showContact = true;
    setTimeout(() => {
      const modalElement = document.getElementById('connectModal');
      if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }, 0);
  }

  openContact(): void {
    this.showContact = true;
  }

  closeContact(): void {
    this.showContact = false;
  }

  ngAfterViewInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    AOS.refresh();
  }

  ngOnDestroy(): void {
    AOS.refreshHard();
  }
}
