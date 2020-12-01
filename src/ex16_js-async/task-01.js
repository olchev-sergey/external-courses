function myFetch(url, method = 'GET', postData = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

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

