import * as SQLite from 'expo-sqlite'

export const openDatabase = () => {
    // if (Platform.OS === 'web') {
    //     return {
    //         transaction: () => {
    //             return {
    //                 executeSql: () => {},
    //             }
    //         },
    //     }
    // }

    const db = SQLite.openDatabase('shelff', '1', '', 1, (msg) => {
        console.log('Open database connection')
    })
    return db
}

export const createTables = (db) => {
    const sqlDrop = `drop table items`
    const sql = `create table if not exists items (itemId text primary key not null , itemName text not null, quantity int default 0,
    expirationDate date NOT NULL,
   creationDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
   categoryId int not null, locationId not null, shelfId not null,
   isEssential boolean not null default false, barcode text not null
    );`


    db.transaction((txn) => {
        // txn.executeSql(
        //     sqlDrop,
        //     [],
        //     () => console.log('table droped'),
        //     (error) => {
        //         console.log('Error dropping table ')
        //     },
        // )
        txn.executeSql(
            sql,
            [],
            () => console.log('table created'),
            (error) => {
                console.log('Error creating table ')
            },
        )
    })
}
let resultados
export const executeTransaction = (sql, db, setItems) => {
    db.transaction((tx) => {
        tx.executeSql(
            sql,
            [],
            (_, { rows: { _array } }) => {
                resultados = _array
                if (setItems) {
                    setItems(resultados)
                }
                console.log('results in database', resultados)
            },

            (_, rej) => {
                // console.log('aqui')
                console.log('Error: ' + rej)
            },
        )
    })

    return resultados
}
