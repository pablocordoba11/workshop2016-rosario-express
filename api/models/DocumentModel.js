'use strict';

const dataBase = require('../../database/Database').instance;
const docTypes = require('../../database/docTypes');

class DocumentModel {
    getDocuments(id) {
        return dataBase.findOne({docType: docTypes.COMMENT, _id: id})
    }
    setComments(id,body) {
        return dataBase.updateOne(
            { docType: docTypes.COMMENT, _id: id },
            { $set: { "comments" : body } }
         );
    }
}
module.exports.DocumentModel = DocumentModel;
module.exports.instance = new DocumentModel;
