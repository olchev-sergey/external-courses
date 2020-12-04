function myFetch(url, method = 'GET', headers = {}, postData = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        
        for (const name in headers) {
            xhr.setRequestHeader(name, headers[name]);
        }

        xhr.onload = (e) => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.response);
                } else {
                    reject(xhr.statusText);
                }

            }
        };

        xhr.onerror = (e) => {
            reject(xhr.statusText)
        }

        xhr.send(postData);
    });
};
