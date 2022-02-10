const api = "http://localhost:8000/api";

export function post(path, data) {
    return fetch(api + path , {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then((result) => result.json());
}

export function get(path) {
    return fetch(api + path , {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json());
}

export function delety(path) {
    return fetch(api + path , {
        method: 'DELETE',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json());
}