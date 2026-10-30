
function getCookie(name) {
    const cookies = document.cookie.split("; ");

    const cookie = cookies.find((item) =>
        item.startsWith(`${name}=`)
    );

    return cookie ? decodeURIComponent(cookie.substring(name.length + 1)) : null;

}

export default getCookie;
