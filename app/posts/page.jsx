async function getData() {
  const res = await fetch("https://dummyjson.com/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <div>
      <ul>
        {data?.products.map((products) => (
          <li key={products.id}>{products.title}</li>
        ))}
      </ul>
    </div>
  );
}