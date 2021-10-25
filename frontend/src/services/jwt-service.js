const TOKEN_KEY = "token";

export const getToken = () => {
    return JSON.parse(window.localStorage.getItem(TOKEN_KEY));
};

export const saveToken = token => {
    window.localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

export const destroyToken = () => {
    window.localStorage.removeItem(TOKEN_KEY);
};

export const isValid = () => {
    const idToken = getToken();
    if (idToken && idToken.expiresAt > new Date().getTime()) {
        return true;
    } else {
        destroyToken();
        return false;
    }
}

export default { getToken, saveToken, destroyToken, isValid };