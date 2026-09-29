let isLoggedIn: boolean = true;
let isAccountActive: boolean = true;
let hasPermission: boolean = true;
let canAccessApplication: boolean = isLoggedIn && isAccountActive && hasPermission;

console.log(`
    User is logged in: ${isLoggedIn}
    User account is active: ${isAccountActive}
    User has all the permission to access: ${hasPermission}
    User can access the application: ${canAccessApplication}
    `)