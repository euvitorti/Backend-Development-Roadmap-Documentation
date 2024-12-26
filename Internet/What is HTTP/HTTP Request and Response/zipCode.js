const zipCode = Input_your_zip_code; // User's ZIP code input

// Fetches address data based on the provided ZIP code using an API
async function fetchZipCodeData(zipCode) {

    try {
        // Make an HTTP request to the API to get address information
        const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);

        // If the response is not successful (e.g., invalid ZIP code)
        if (!response.ok) {
            throw await response.json(); // Throw the error response for further handling
        }
        const data = await response.json(); // Parse the successful JSON response
        return data; // Return the fetched data
    } finally {
        console.log("Request completed"); // Log the completion of the request
    }
}

const response = await fetchZipCodeData(zipCode);
console.log(response); // Log the fetched response to the console
