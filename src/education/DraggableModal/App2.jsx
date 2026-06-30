import { useState } from 'react';

const data = [
  { id: 1, title: 'Item One', description: 'This is the first item.' },
  { id: 2, title: 'Item Two', description: 'This is the second item.' }
];

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-red-500 font-bold"
        >
          ×
        </button>
        <h2 className="text-xl font-bold mb-2">{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </div>
  );
};

const App2 = () => {
  const [openModalId, setOpenModalId] = useState(null);

  const toggleModal = (id) => {
    setOpenModalId(prev => (prev === id ? null : id));
  };

  return (
    <div className="p-6 space-y-4">
      {data.map(item => (
        <div key={item.id}>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => toggleModal(item.id)}
          >
            Toggle Modal for {item.title}
          </button>

          <Modal
            isOpen={openModalId === item.id}
            onClose={() => setOpenModalId(null)}
            content={item}
          />
        </div>
      ))}
    </div>
  );
};

export default App2;
