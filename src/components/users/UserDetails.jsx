import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import apiEndpoints from "../../api/users";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: user,
    error,
    isLoading,
  } = useQuery({
    queryFn: async () => apiEndpoints.fetchUserById.fn(id),
    queryKey: apiEndpoints.fetchUserById.key,
  });

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (error)
    return (
      <div className="text-center mt-4 text-red-500">
        Error loading user details
      </div>
    );

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">User Details</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg">
              <strong className="font-semibold">Name:</strong> {user.name}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg">
              <strong className="font-semibold">Email:</strong> {user.email}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg">
              <strong className="font-semibold">Phone:</strong> {user.phone}
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-lg">
              <strong className="font-semibold">Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
