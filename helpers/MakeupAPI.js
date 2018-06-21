export async function searchProducts() {
    return fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
        .then((response) => response.json())
        .then((jsonData) => {
            const results = jsonData
            console.log(results.length)
            return results
        })
        .catch(err => console.log(err))
}