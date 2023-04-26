async function getData({ id }: any) {
    console.log(id);

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export default async function Page({ params }: any) {
    const data = await getData(params);
    return (
        <div>
            {Object.entries(data).map((k, v) => {
                return (
                <li>
                    <span>key: {v} : {[k]} </span>
                </li>)
            })}
        </div>
    );
}

//   '1'