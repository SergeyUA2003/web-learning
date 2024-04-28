export {
    isAdmin,
    isLoggedIn
}

function isAdmin() {

    if (isLoggedIn.bind(this) ()) {
        let token = this.$store.getters.getAuthorization;
        console.log(typeof token)
        let claims = token.split(".")[1];
        let user = JSON.parse(base64UrlDecode(claims));

        return user.roles.includes("ADMIN");
    }

    else {
        return false
    }
}

function isLoggedIn() {
    console.log(this.$store.getters.getAuthorization)
    return this.$store.getters.isAuthenticated;
}

function base64UrlDecode(str) {
    while (str.length % 4 !== 0) {
        str += '=';
    }

    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');

    let decoded = atob(base64);

    return decoded;
}
