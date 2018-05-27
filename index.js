const Winreg = require('winreg');

const getShellFolders = () => {
    const reg = new Winreg({
        hive: Winreg.HKCU,
        key:
            '\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Shell Folders'
    });
    return new Promise((ok, fail) => {
        reg.values((err, items) => {
            if (err) {
                fail(err);
                return;
            }
            ok(items);
        });
    });
};
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
            ok(items);
        });
    });
};

exports.getShellFolders = getShellFolders;
exports.getUserShellFolders = getUserShellFolders;
