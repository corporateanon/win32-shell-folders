const { getUserShellFolders } = require('./index');
const assert = require('assert');
const processEnvVars = require('./processEnvVars');

process.env.FOO = 'bar';
assert.deepStrictEqual(processEnvVars({ a: '%FOO%becue %FOO%' }), {
    a: 'barbecue bar'
});

console.time('getUserShellFolders');
getUserShellFolders()
    .then(folders => {
        console.timeEnd('getUserShellFolders');
        console.log(folders);
        assert.equal(
            folders.FOLDERID_Desktop,
            process.env.USERPROFILE + '\\Desktop'
        );
        assert.equal(
            folders.FOLDERID_Downloads,
            process.env.USERPROFILE + '\\Downloads'
        );
    })
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    });
