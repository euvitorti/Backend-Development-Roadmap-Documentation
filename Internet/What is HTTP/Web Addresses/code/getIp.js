// Cloudflare provides a public DNS resolver at https://cloudflare-dns.com/dns-query. This resolver helps convert domain names (like google.com) into IP addresses.
// Learn more: https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/make-api-requests/

async function fetchIpAddress(domain) {
    // Remove extra spaces from the domain
    domain = domain.trim();

    // Create the URL with the correct parameters
    const url = `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domain)}`;

    // Make the GET request with the correct header
    const response = await fetch(url, {
        headers: {
            'accept': 'application/dns-json',  // Response in JSON format
        }
    });

    // Check if the response was successful
    if (!response.ok) {
        console.error(`Error in DNS query: ${response.status} ${response.statusText}`);
        return;
    }

    // Convert the response to JSON
    const responseObject = await response.json();

    // Display the response object
    console.log(responseObject);
}

// Call the function in an async block
(async () => {
    const domain = 'cloudflare.com';  // Try with google.com, api.boot.dev or another domain
    await fetchIpAddress(domain);
})();
