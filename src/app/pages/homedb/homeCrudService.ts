import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, updateDoc } from
    '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

export interface CustomerData {
    id?: string;
    fullname: string;
    ispostpaid: boolean;
    price: number;
    telno: string;

}

@Injectable({
    providedIn: 'root'
})

export class HomeCrudService {

    private _DB: any;
    constructor(private firestore: Firestore) { }

    loadAllData(): Observable<CustomerData[]> {
        const notesRef = collection(this.firestore, 'StudentCollection');
        return collectionData(notesRef, { idField: 'id' }) as Observable<CustomerData[]>;
    }
    createData(tmpObj: CustomerData) {
        const notesRef = collection(this.firestore, 'StudentCollection');

        return addDoc(notesRef, {
            fullname: tmpObj.fullname,
            price: tmpObj.price,
            telno: tmpObj.telno,
            ispostpaid: tmpObj.ispostpaid
        });
    }//func

    updateData(tmpObj: CustomerData) {
        const notesRef = doc(this.firestore, 'StudentCollection/' + tmpObj.id);
        return updateDoc(notesRef, {
          fullname: tmpObj.fullname,
          price: tmpObj.price,
          telno: tmpObj.telno,
          ispostpaid: tmpObj.ispostpaid
        });
      }
      
    deletedata(tmpObj: CustomerData) {
        const notesRef = doc(this.firestore, 'StudentCollection/'+tmpObj.id);
        return deleteDoc(notesRef);
      }
}