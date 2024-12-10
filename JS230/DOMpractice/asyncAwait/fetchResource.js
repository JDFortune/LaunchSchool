async function fetchResource(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch {
    console.error('Failed to load Resource');
  } finally {
    console.log('Resource fetch attempt made');
  }
}

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/3");
// Logs fetched data, then "Resource fetch attempt made"
// On error, logs "Failed to load resource", then "Resource fetch attempt made"