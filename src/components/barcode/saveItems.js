import { openDatabase, executeTransaction } from '../../services/sqllite'

export const saveItemsToLocalStorage = (arrItems) => {
    const db = openDatabase()
    arrItems.map((item) => {
        const sql = `insert into items  (itemId, itemName, quantity, expirationdate, categoryId, locationId, shelfId, isEssential) values ("${
            item.idItem
        }","${item.cItemName}","${item.iQuantity}","${
            item.dexpirationdate
        }", "${item.idCategory}", "${item.idLocation}",1,"${
            item.essential ? true : false
        }")`
        executeTransaction(sql, db)
    })

    const sql = 'select * from items '
    const query = executeTransaction(sql, db)
}

export const findBarcodeinLocalDB = (barcode) => {
    const db = openDatabase()
    const sql = `select cItemName from items where `
}
