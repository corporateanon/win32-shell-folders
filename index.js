const Winreg = require('winreg');

const getAutostartApps = () => {
    const reg = new Winreg({
        hive: Winreg.HKCU,
        key: '\\Software\\Microsoft\\Windows\\CurrentVersion\\Run'
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

exports.getAutostartApps = getAutostartApps;
