import { openDatabase, executeTransaction } from '../../services/sqllite'

export const saveItemsToLocalStorage = (arrItems) => {
    const db = openDatabase()
    arrItems?.map((item) => {
        const sql = `insert into items  (itemId, itemName, quantity, expirationdate, categoryId, locationId, shelfId, isEssential, barcode) values ("${
            item.idItem
        }","${item.cItemName}","${item.iQuantity}","${
            item.dexpirationdate
        }", "${item.idCategory}", "${item.idLocation}",1,"${
            item.essential ? true : false
        }" , "${item.barcode}")`
        executeTransaction(sql, db)
        // console.log('insert', sql)
    })

    const sql = 'select * from items '
    const query = executeTransaction(sql, db)
}

export const updateItemNameForAll = (barcode, itemName, category) => {
    const db = openDatabase()
    const sql = `update items set itemName = '${itemName}', categoryId = '${category}' where barcode = '${barcode}'`
    executeTransaction(sql, db)
    // console.log('sql', sql)
}

export const findBarcodeinLocalDB = (barcode, setItems) => {
    // console.log('barcode', barcode)
    const db = openDatabase()
    const sql = `select itemName,barcode,categoryId from items where barcode = '${barcode}' limit 1`
    const results = executeTransaction(sql, db, setItems)
    // console.log('results in function', results)
    return results
}
