![https://ci.appveyor.com/api/projects/status/github/corporateanon/win32-shell-folders
](https://ci.appveyor.com/api/projects/status/github/corporateanon/win32-shell-folders)

[![NPM](https://nodei.co/npm/win-shell-folders.png)](https://npmjs.org/package/win-shell-folders)

# win-shell-folders

Get a list of known shell folders indexed by `FOLDERID_*` constants.

Usage example:

```javascript
const { getShellFolders } = require('./index');
getUserShellFolders().then(folders => {
    console.log(folders);
});
```

will output:

```
{ FOLDERID_Desktop: 'C:\\Users\\user\\Desktop',
  FOLDERID_AppData: 'C:\\Users\\user\\AppData\\Roaming',
  FOLDERID_Startup: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup',
  FOLDERID_Cookies: 'C:\\Users\\user\\AppData\\Local\\Microsoft\\Windows\\INetCookies',
  FOLDERID_SendTo: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\SendTo',
  FOLDERID_Document: 'C:\\Users\\user\\Documents',
  FOLDERID_Recent: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Recent',
  FOLDERID_Favorites: 'C:\\Users\\user\\Favorites',
  FOLDERID_Pictures: 'C:\\Users\\user\\Pictures',
  FOLDERID_StartMenu: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu',
  FOLDERID_NetHood: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Network Shortcuts',
  FOLDERID_Music: 'C:\\Users\\user\\Music',
  FOLDERID_Videos: 'C:\\Users\\user\\Videos',
  FOLDERID_InternetCache: 'C:\\Users\\user\\AppData\\Local\\Microsoft\\Windows\\INetCache',
  FOLDERID_Programs: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs',
  FOLDERID_History: 'C:\\Users\\user\\AppData\\Local\\Microsoft\\Windows\\History',
  FOLDERID_Templates: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Templates',
  FOLDERID_PrintHood: 'C:\\Users\\user\\AppData\\Roaming\\Microsoft\\Windows\\Printer Shortcuts' }
```
