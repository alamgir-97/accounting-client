import { useState } from 'react';

const dataList = [
  { id: 1, title: 'First Item', description: 'This is the first item.' },
  { id: 2, title: 'Second Item', description: 'This is the second item.' },
];

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 space-y-4">
      {dataList.map((item) => (
        <button
          key={item.id}
          onClick={() => openModal(item)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Open Modal for {item.title}
        </button>
      ))}

      {isOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-bold">{selectedItem.title}</h2>
            <p className="mt-2 text-gray-600">{selectedItem.description}</p>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
