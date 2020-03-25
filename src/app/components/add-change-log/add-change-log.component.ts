import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ChangeLogService} from '../../services/change-log-service/change-log.service';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {AddChangeLogDto} from "../../dtos/AddChangeLogDto";

@Component({
  selector: 'app-add-change-log',
  templateUrl: './add-change-log.component.html',
  styleUrls: ['./add-change-log.component.css']
})
export class AddChangeLogComponent implements OnInit {

  checkoutForm;
  addChangeLogDto: AddChangeLogDto = new AddChangeLogDto();
  title: string;
  content: string;

  constructor(
    private formBuilder: FormBuilder,
    private changeLogService: ChangeLogService,
    public router: Router,
    private toastr: ToastrService
  ) {
  }

  ngOnInit() {
  }

  addChangeLog(){
    console.log(this.title);
    console.log(this.content);
    this.addChangeLogDto.title = this.title;
    this.addChangeLogDto.content = this.content;

    this.changeLogService.addChangeLog(this.addChangeLogDto).subscribe(
      data => {
        console.log(this.addChangeLogDto);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('Wysłano pomyślnie.');
        this.toastr.success("Pomyślnie dodano wpis: " + this.title);
        this.router.navigate(['/change-log-list']);
      }
    )

  }
}
