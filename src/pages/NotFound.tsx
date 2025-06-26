import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="text-xl text-gray-600">Page not found</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Go back home
      </Link>
    </div>
  )
}

export default NotFound
