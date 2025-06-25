import { useAuth } from "../contexts/AuthContext";

const HomePage = () => {
  const { user, logout }: any = useAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}</h1>
      <button
        onClick={logout}
        className="px-4 py-2 text-white bg-red-600 rounded-lg"
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
