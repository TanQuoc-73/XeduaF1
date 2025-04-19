export const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center h-40 py-10 bg-gradient-to-r from-black to-red-950">
            <p className="mt-4 text-white">© 2025 HAU - Formula 1</p>
            <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300">Privacy Policy</a>
                <a href="#" className="text-white hover:text-gray-300">Terms of Service</a>
                <a href="#" className="text-white hover:text-gray-300">Contact Us</a>
            </div>
        </div>
    );
}