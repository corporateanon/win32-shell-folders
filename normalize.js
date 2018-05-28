const { byGUID, byName } = require('./conf');

const normalize = regItems =>
    regItems.reduce((byFolderId, item) => {
        const { name, value } = item;
        if (byGUID[name] !== undefined) {
            byFolderId[byGUID[name]] = value;
        } else if (byName[name] !== undefined) {
            byFolderId[byName[name]] = value;
        }
        return byFolderId;
    }, {});

module.exports = normalize;
