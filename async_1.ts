const url: string = 'https://jsonplaceholder.typicode.com/users';

async function getData(): Promise<void> {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming the response contains JSON data, use response.json()
        let data = await response.json();
        console.log("Data:", data);
    } catch (err) {
        console.error("Error fetching data:", err.message);
    }
}

getData();
