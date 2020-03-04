import {firestore} from 'firebase';

export interface News {
  title: string;
  content: string;
  date: firestore.Timestamp;
}
