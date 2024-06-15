/** All of the logic for making network calls is going in this file so that I
 * can reuse it as necessary throughout my project, or even in other projects.
 * Below is the API I'm using to get my house data, it is capitalized because
 * it is a global variable. The URL is in a string so that computer can read
 * it.*/

const API_HOUSES = 'https://ancient-taiga-31359.herokuapp.com/api/houses';
// const API_HOUSES = 'https://666d4cd47a3738f7cacc0611.mockapi.io/House'


/** Starting with a simple class to hold all of the HTTP requests.*/
class HousesApi {  
    
/** This is the get function. It's asynchronous so that other things can 
 * continue to happen should it take a while to talk to the server. I
 * wrapped the body of the function in a try...catch statement to catch
 * any errors in the process of talking to the server. The first variable,
 * resp, fetches the raw data from the API. The second variable, data, then
 * takes that data and converts it to json so that react can read it, and 
 * then returns that data. If we ran into a problem, an alert would pop up
 * saying "fetch didn't fetch".*/

    get = async() => {
        try{
            const resp = await fetch(API_HOUSES);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("Error, fetch didn't fetch", e);
        }
    }

/** This is the put function. It's also asynchronous, for the same reasons 
 * as above but it also has the parameter house passed through it. 
 * The body here is also wrapped with a try...catch statement, but the 
 * alert says something a little different. The variable within the try
 * is awaiting the fetch of a specific index from the house API, then will
 * convert it to json and stringify the data (which is just turning the 
 * house data into a string), and finally returns it. The catch, should I
 * pop an error, will alert that "Put ain't puttin".*/
    put = async (house) => {
        try {
            const resp = await fetch(`${API_HOUSES}/${house._id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log("Put ain't puttin", e);
        }
    }
}

/** In order to use this code elsewhere it needs to be exported.*/
export const housesApi = new HousesApi();

