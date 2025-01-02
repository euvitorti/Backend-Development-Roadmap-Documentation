function printUrlParts(url) {
    const obj = new URL(url);  // Create a new URL object from the provided URL string
    
    // Create an object to hold all parts of the URL
    const urlParts = {
        protocol: obj.protocol,   // The protocol (e.g., "https:")
        hostname: obj.hostname,   // The domain name or host (e.g., "www.geeksforgeeks.org")
        port: obj.port || "N/A",  // The port (if present); if not, display "N/A"
        pathname: obj.pathname,   // The path of the URL (e.g., "/difference-between-url-and-uri/")
        search: obj.search || "N/A", // The query string (if any); if not, display "N/A"
        hash: obj.hash || "N/A",  // The fragment identifier (if any); if not, display "N/A"
        origin: obj.origin        // The origin (protocol + hostname + port, if present)
    };

    // Loop through each key-value pair in the urlParts object and log it to the console
    Object.entries(urlParts).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}

printUrlParts("https://www.geeksforgeeks.org/difference-between-url-and-uri/#section1");
