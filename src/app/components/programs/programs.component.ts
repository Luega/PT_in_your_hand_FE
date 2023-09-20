import { Component } from '@angular/core';
import { ProgramService } from 'src/app/services/program.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent {
  programs: any[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.programService.getPrograms().subscribe((data: any) => {
      this.programs = data.programs;
    });
  }
}
