const { getShellFolders, getUserShellFolders } = require('./index');

getShellFolders()
    .then(items => {
        items.forEach(it => {
            console.log(it.key + ' = ' + it.value);
        });
        return getUserShellFolders();
    })
    .then(items => {
        items.forEach(it => {
            console.log(it.key + ' = ' + it.value);
        });
    });
