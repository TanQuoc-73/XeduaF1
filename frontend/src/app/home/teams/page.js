// app/team/page.js
import axios from 'axios';
import { NavBar } from '@/components/NavBar';
import { Menu } from '@/components/Menu';
import { Footer } from '@/components/Footer';

export default async function Team() {
  let teams = [];
  let error = null;

  // Fetch dữ liệu từ backend
  try {
    const response = await axios.get('http://localhost:8080/api/teams');
    teams = response.data;
  } catch (err) {
    error = err.message;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <NavBar />
      <Menu />
      <div className="flex flex-col items-center py-10 h-screen bg-red-800">
        <h1 className="text-3xl font-bold mb-6">Danh sách đội đua</h1>
        {error && <p className="text-red-500">Lỗi: {error}</p>}
        {teams.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
            {teams.map((team) => (
              <div
                key={team.teamId}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{team.teamName}</h2>
                <p className="text-gray-600">Địa điểm: {team.baseLocation}</p>
                <p className="text-gray-600">Số lần vô địch: {team.numChampTitles}</p>
                <p className="text-gray-600">Tổng điểm: {team.totalPoints}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Không có đội đua nào.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}