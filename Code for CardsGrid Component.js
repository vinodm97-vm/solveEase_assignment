
import { Worker } from '../types'; 

interface CardsGridProps {
  workers: Worker[];
}

export default function CardsGrid({ workers }: CardsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
      {workers.map((worker) => (
        <div
          key={worker.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={worker.image}
            alt={worker.name}
            className="w-full h-48 object-cover"
            loading="lazy" // For optimization (Task 3)
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{worker.name}</h3>
            <p className="text-gray-600 mb-2">{worker.serviceType}</p>
            <p className="text-lg font-bold text-green-600">₹{worker.price}/day</p>
          </div>
        </div>
      ))}
    </div>
  );
}
