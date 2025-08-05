const BASE_URL = "https://www.books.weniv.co.kr";

function Card({ item }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-64 shadow-md flex flex-col gap-2">
      {item.thumbnail && (
        <img
          src={`${BASE_URL}${item.thumbnail}`}
          alt={item.title}
          className="w-full h-36 object-cover rounded"
        />
      )}
      {item.publisher && (
        <p className="text-sm text-gray-600">{item.publisher}</p>
      )}
      {item.title && <h3 className="text-lg font-semibold">{item.title}</h3>}
      {item.subtitle && (
        <p className="text-base text-gray-700">{item.subtitle}</p>
      )}
      {item.type && <p className="text-sm">Type: {item.type}</p>}
      {item.price && <p className="font-bold">Price: {item.price}</p>}
      {item.description && (
        <p className="text-xs text-gray-500">{item.description}</p>
      )}
      {item.booklink && (
        <a
          href={item.booklink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Book Link
        </a>
      )}
      {item.classlink && (
        <a
          href={item.classlink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Class Link
        </a>
      )}
      {item.date && <p className="text-xs text-gray-400">Date: {item.date}</p>}
    </div>
  );
}

export default Card;
