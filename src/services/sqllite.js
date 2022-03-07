import * as SQLite from "expo-sqlite";

export const openDatabase = () => {
  // if (Platform.OS === "web") {
  //   return {
  //     transaction: () => {
  //       return {
  //         executeSql: () => {},
  //       };
  //     },
  //   };
  // }

  const db = SQLite.openDatabase("shelff", "1", "", 1, (msg) => {
    console.log("Open database connection");
  });
  return db;
};

export const createTables = (db) => {
  const sqlDrop = `drop table tmpItems`;
  const sql = `create table if not exists items (idItem text primary key not null ,  cItemName text not null, iQuantity int default 0,
    dExpirationDate date NOT NULL,
   dCreatedDate date NOT NULL DEFAULT CURRENT_TIMESTAMP,
   idCategory int not null, idLocation not null, idShelff not null,
   essential int not null default 0
    );`;

  db.transaction((txn) => {
    txn.executeSql(
      sqlDrop,
      [],
      () => console.log("table droped"),
      (error) => {
        console.log("Error dropping table ");
      }
    );
    txn.executeSql(
      sql,
      [],
      () => console.log("table created"),
      (error) => {
        console.log("Error creating table ");
      }
    );
  });
};
let resultados;
export const executeTransaction = (sql, db, setItems) => {
  db.transaction((tx) => {
    tx.executeSql(
      sql,
      [],
      (_, { rows: { _array } }) => {
        resultados = _array;
        if (setItems) {
          setItems(resultados);
        }
        // console.log("resultados 1111", resultados);
      },

      (_, rej) => {
        console.log("Error: " + rej);
      }
    );
  });

  return resultados;
};
