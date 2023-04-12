import { Injectable } from '@angular/core';
import {getDownloadURL, listAll, ref, Storage, uploadBytes} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class ApiStorageService {

  constructor(
    private storage:Storage
  ) { }

  addFileStorage(file_name:string, file:any) {
    const imgRef = ref(this.storage, `products/${file_name}`);
    uploadBytes(imgRef, file).then((res)=>{
      // console.log(res);
    }).catch((e)=>{
      // console.log(e);
    })
  }

}
