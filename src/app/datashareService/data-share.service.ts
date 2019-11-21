import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';

/**
 * Service permettant de partager des données entre des composants
 * permet la mise en place du pattern Observer/Observable sur un type
 * d'objet générique
 */
@Injectable()
export class DataShareService<T> {

  private dataSource = new Subject<T>();
  data = this.dataSource.asObservable();

  constructor() { }

  /**
   * notify les observer de ce service
   * d'un changement sur les données
   * @param message
   */
  notifyObserver(message: T) {
    this.dataSource.next(message);
  }

}
