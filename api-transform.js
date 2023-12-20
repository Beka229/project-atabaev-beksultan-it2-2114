// api-transform.js
// Use and make transforming API data.
// Using appropriate methods and JavaScript asynchrony libraries (async/await) and functions according to requirement 25.

// Example transforming API data
const transformData = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/auth/books');
      const rawData = await response.json();
      const transformedData = rawData.map(item => ({ id: item.id, name: item.name }));
      console.log(transformedData);
    } catch (error) {
      console.error('Error fetching and transforming data:', error);
    }
  };
  
  transformData();
  