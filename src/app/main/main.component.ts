import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from '../shared/note';
import { ServiceService } from '../shared/service.service';
import { User } from '../shared/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  notes: Note[] = []
  users: User[] = []
  currentDescription;
  currentUser;
  currentNote: Note;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ServiceService
  ) {
    this.service.getNotes().subscribe(
      (data) => { this.notes = data },
      (err) => { console.log(err) }
    )

    this.service.getUser().subscribe(
      (data) => { this.users = data },
      (err) => { console.log(err) }
    )

    this.service.getUserById(localStorage.getItem("id")).subscribe(
      (data) => { this.currentUser = data },
      (err) => { console.log(err) }
    )
  }

  deleteNote(note: Note) {
    console.log(note)
    console.log("delete")
    this.service.removeNote(note.id).subscribe(
      (data) => { console.log(data) },
      (err) => { console.log(err) }
    )
    setTimeout(function () {
      location.reload()
    }, 100);
  }

  editNote(note: Note) {
    this.currentDescription = note.description;
    this.currentNote = note;
    console.log(note)
  }

  save() {
    if (this.currentDescription && this.currentUser) {
      console.log("main")
      console.log(this.currentDescription)
      let desc = this.currentDescription

      this.service.getUserById(localStorage.getItem("id")).subscribe(
        (data) => {
          if (data) {
            if (this.currentNote) {
              this.currentNote.description = desc
              console.log(this.currentNote)
              this.service.updateNote(this.currentNote).subscribe(
                (data) => { console.log(data); console.log("note updated") },
                (err) => { console.log(err) }
              )
              this.currentNote = null;
            } else {
              console.log("else")
              let note = new Note(null, desc, null, null, data)
              this.service.saveNote(note).subscribe(
                (data) => { console.log(data); console.log() },
                (err) => { console.log(err) }
              )
            }

          }
        },
        (err) => { console.log(err) }
      )

      this.currentDescription = null
    }

    setTimeout(function () {
      location.reload()
    }, 100);


  }

  logout() {
    localStorage.clear()
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
  }

}
