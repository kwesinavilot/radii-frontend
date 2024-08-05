import React, { useState } from "react";
import { toast } from "react-toastify";


interface DatabaseConnectionFormProps {
  onClose: () => void;
}


const DatabaseConnectionForm: React.FC<DatabaseConnectionFormProps> = ({
  onClose,
}) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    host: "",
    port: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    toast.success("Database connected successfully!");
    onClose(); 
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Connect a Database</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Database Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="PostgreSQL"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="My PostgreSQL database"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Host
              </label>
              <input
                type="text"
                name="host"
                value={formData.host}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Port
              </label>
              <input
                type="text"
                name="port"
                value={formData.port}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Database Username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="postgres"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Database Password
            </label>
            <input
              type="password"
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className={`p-2 border rounded-xl shadow hover:shadow-md transition-shadow cursor-pointer`}
              style={{
                borderImage:
                  "linear-gradient(to right,  #3788E5 0%, #3788E5 20%, #E58A13 20%, #E58A13 40%, #3788E5 40%, #3788E5 60%, #3788E5 60%, #3788E5 80%, #E58A13 80%, #E58A13 100%) 1",
              }}
            >
              Test Connection
            </button>
            <button
              type="submit"
              className="p-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Create
            </button>
            <button
              type="button"
              className="p-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DatabaseConnectionForm;
