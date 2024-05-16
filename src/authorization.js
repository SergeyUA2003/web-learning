import axios from "axios";

export {
    isAdmin,
    isLoggedIn,
    base64UrlDecode,
    getAuthorizationUser,
    fetchAuthorizationUser
}

function extractJwtClaims(token) {
    let claims = token.split(".")[1];
    let user = JSON.parse(base64UrlDecode(claims));
    return user;
}

function isAdmin() {

    if (isLoggedIn.bind(this) ()) {
        let token = this.$store.getters.getAuthorization;
        console.log(typeof token)
        let user = extractJwtClaims(token);

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

function getAuthorizationUser() {
    console.log(this.$store.getters.getAuthorization)
    return this.$store.getters.getAuthorizationUser;
}

function fetchAuthorizationUser() {
    let authorization = this.$store.getters.getAuthorization;
    let claims = extractJwtClaims(authorization);
    axios.get("http://localhost:3000/users/" + claims.id, {
      headers: {
          "Authorization": "Bearer " + authorization
      },
    }).then(response => {
        let user = response.data;
        console.log(user);
        this.$store.commit('setAuthorizationUser', user);
    })
}

function base64UrlDecode(str) {
    while (str.length % 4 !== 0) {
        str += '=';
    }

    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');

    let decoded = atob(base64);

    return decoded;
}
