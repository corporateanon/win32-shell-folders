const Winreg = require('winreg');
const normalize = require('./normalize');

const getUserShellFolders = () => {
    const reg = new Winreg({
        hive: Winreg.HKCU,
        key:
            '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\User Shell Folders'
    });
    return new Promise((ok, fail) => {
        reg.values((err, items) => {
            if (err) {
                fail(err);
                return;
            }
            ok(normalize(items));
        });
    });
};

exports.getUserShellFolders = getUserShellFolders;
