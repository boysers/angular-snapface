import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>
  btnText!: string;

  constructor(
    private faceSnapServices: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.btnText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapServices.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.btnText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapServices.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.btnText = 'Oops, unSnap!')
      );
    } else {
      this.faceSnap$ = this.faceSnapServices.snapFaceSnapById(faceSnapId , 'unsnap').pipe(
        tap(() => {
          this.btnText = 'Oh Snap!';
        })
      )
    }
  }
}
