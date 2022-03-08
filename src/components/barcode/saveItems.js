import { openDatabase, executeTransaction } from '../../services/sqllite'

export const saveItemsToLocalStorage = (arrItems) => {
    const db = openDatabase()
    console.log('Data in array of items', arrItems)

    arrItems.map((item) => {
        const sql = `insert into items  (idItem, cItemName, iQuantity, dexpirationdate, idCategory, idLocation, idShelff,essential) values ("${item.idItem}","${item.cItemName}","${item.iQuantity}","${item.dexpirationdate}", "${item.idCategory}", "${item.idLocation}",1,"${item.essential}")`
        executeTransaction(sql, db)
    })

    const sql = 'select * from items '
    const query = executeTransaction(sql, db)
}
