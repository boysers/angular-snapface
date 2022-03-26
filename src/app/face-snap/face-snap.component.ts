import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  btnText!: string;

  constructor(
    private faceSnapServices: FaceSnapsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.btnText = 'Oh Snap!';
  }

  onSnap() {
    if (this.btnText === 'Oh Snap!') {
      this.faceSnapServices.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.btnText = 'Oops, unSnap!';
    } else {
      this.faceSnapServices.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.btnText = 'Oh Snap!';
    }
  }

  onViewFaceSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
