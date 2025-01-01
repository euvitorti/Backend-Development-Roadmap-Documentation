// Function to extract the domain name from a given URL
function getDomainName(url) {
    // Create a new URL object to parse the provided URL
    const obj = new URL(url);

    // Log the domain name (hostname) of the URL to the console
    console.log(`Url's domain name is ${obj.hostname}`);
}

// Define a URL to test the function
const url = 'https://github.com/euvitorti';

// Call the getDomainName function, passing the URL as an argument
const domain = getDomainName(url);
