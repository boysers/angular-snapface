import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Lost Ark',
      description: 'MMORPG',
      createdDate: new Date(),
      snaps: 255,
      imageUrl:
        'https://images.ctfassets.net/umhrp0op95v1/5xeSgaFA02VEkSFDtYQA9J/563f0680eef18a4b301d5ff91d5df2a4/Bern-Castle-740x420.jpg',
      location: 'la ville',
    },
    {
      id: 2,
      title: 'Minecraft',
      description: 'jeu de cube',
      createdDate: new Date(),
      snaps: 100,
      imageUrl:
        'https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg',
      location: 'la jungle',
    },
    {
      id: 3,
      title: 'Factorio',
      description: 'jeu de gestion',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://hb.imgix.net/368cd1a0b8a818d31d10ef8f45c17f05e6f8ef78.jpg?auto=compress,format&fit=crop&h=353&w=616&s=45f7c207620518090615e11622f7a7dd',
    },
    {
      id: 4,
      title: 'Lost Ark',
      description: 'MMORPG',
      createdDate: new Date(),
      snaps: 255,
      imageUrl:
        'https://images.ctfassets.net/umhrp0op95v1/5xeSgaFA02VEkSFDtYQA9J/563f0680eef18a4b301d5ff91d5df2a4/Bern-Castle-740x420.jpg',
      location: 'la ville',
    },
    {
      id: 5,
      title: 'Minecraft',
      description: 'jeu de cube',
      createdDate: new Date(),
      snaps: 100,
      imageUrl:
        'https://www.minecraft.net/content/dam/games/minecraft/marketplace/updates-catspandas_latest.jpg',
      location: 'la jungle',
    },
    {
      id: 6,
      title: 'Factorio',
      description: 'jeu de gestion',
      createdDate: new Date(),
      snaps: 0,
      imageUrl:
        'https://hb.imgix.net/368cd1a0b8a818d31d10ef8f45c17f05e6f8ef78.jpg?auto=compress,format&fit=crop&h=353&w=616&s=45f7c207620518090615e11622f7a7dd',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(facesnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find((faceSnap) => faceSnap.id === facesnapId);
    if (!faceSnap) {
      throw new Error("FaceSnap not found!");
    } else {
      return faceSnap
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
