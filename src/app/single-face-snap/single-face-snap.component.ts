import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  btnText!: string;

  constructor(
    private faceSnapServices: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.btnText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapServices.getFaceSnapById(faceSnapId);
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
}
