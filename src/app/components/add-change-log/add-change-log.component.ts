import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ChangeLogService} from '../../services/change-log-service/change-log.service';

@Component({
  selector: 'app-add-change-log',
  templateUrl: './add-change-log.component.html',
  styleUrls: ['./add-change-log.component.css']
})
export class AddChangeLogComponent implements OnInit {

  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private changeLogService: ChangeLogService
  ) {
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {

    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}
