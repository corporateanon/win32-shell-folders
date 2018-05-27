const { getAutostartApps } = require('./index');

getAutostartApps().then(items => {
    items.forEach(it => {
        console.log(it.key + ' = ' + it.value);
    });
});
