import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, value) => {
  console.log('putting update to jateDB');
  const jateDB = await openDB('jate', '1');
  const tx = jateDB.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  const req = req.objStore({id: id, value:value})
  const res = await req;
  console.log('saved to jateDB');


};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (value) => {
  console.log('getting from jateDB');
  const jateDB = await openDB('jate', '1');
  //specifying new transaction and permissions 
  const tx = jateDB.transaction('jate', 'readwrite');
  const objStore = tx.objectStore('jate');
  //.getAll to pull all DB data 
  const req = objStore.getAll()
  const res = await req;
  console.log('data saved')
};

initdb();
