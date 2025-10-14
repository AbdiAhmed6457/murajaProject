import qurlogo from "../assets/qurlogo.jpg";

export default function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {<qurlogo/>}
          <h1 className="text-2xl font-bold text-green-600">Qur’an Murājaʿa</h1>
  
          <img src={qurlogo} alt="Qur'an Logo" className="h-12 w-auto" />
          <div className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </div>
      </nav>
    )
  }
  