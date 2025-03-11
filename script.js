// the url for the entire web api
const BASE_URL = "https://restcountries.com/v3.1/";

// endpoint: the address of a specific resource we want to access
const allCountriesEndpoint = "all";

//getAllCountries().then((result) => console.log(result));
listAllCountryNames();

// to access data on this RESTful service we will use the Fetch API
// async functions can use the "await" keyword
// async functions always return a promise
async function getAllCountries() {
    // ALWAYS have error handling prepared when making external requests
    try {
        // fetch("https://restcountries.com/v3.1/all")
        // fetch creates an HTTP GET request to the argument URL
        const request = fetch(`${BASE_URL}${allCountriesEndpoint}`);
    
        // wait for the fetch to resolve, and store the resolve argument in "response"
        const response = await(request);

        // OK is a boolean value for if the response code is in 200-299 range
        // 200: OK (succesful request/response)
        // 400: Error (resource not found, malformed request, etc)
        // 500: Internal server errors (server encountered a problem that prevented correct response)
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
    
        // parse the response body into an object for us to use
        return await response.json();
    } catch(error) {
        console.error(`Failed to fetch countries: ${error})`);
    }
}

async function listAllCountryNames() {
    // querying all countries
    const allCountriesJSON = await getAllCountries();

    // because our response is an array, we can iterate over it
    allCountriesJSON.forEach(country => {
        console.log(country["name"]["common"]);
    });
}