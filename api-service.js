const fetchData = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/auth/books');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  fetchData();