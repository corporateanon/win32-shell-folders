const { getAutostartApps } = require('./index');

getAutostartApps().then(items => {
    console.log(items);
});
