import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild('f') singupForm: NgForm;
defaultQuestion="pet"
answar=''
genders=['male', 'female']
user={
  username: '',
  mail: '',
  secret: '',
  answare: '',
  gender: 'male'
}
submitted= false

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnsware: 'cos tam',
    //   gender: 'male'
    // });

    this.singupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

// onSubmit(form: NgForm) {
//   console.log(form)
// }

onSubmit () {
  this.submitted= true
  this.user.username = this.singupForm.value.userData.username
  this.user.mail = this.singupForm.value.userData.email
  this.user.secret = this.singupForm.value.secret
  this.user.gender = this.singupForm.value.gender

  this.singupForm.reset()
}
}
