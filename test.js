const { getShellFolders, getUserShellFolders } = require('./index');

console.time('getUserShellFolders');
getUserShellFolders().then(folders => {
    console.timeEnd('getUserShellFolders');
    console.log(folders);
});
