import Link from "next/link";

export const NavBar = () => {
    return (
        <div className="flex justify-between items-center h-25 w-screen text-white bg-gradient-to-r from-red-950 to-red-800">
            <h1 className="text-2xl font-bold ml-8">
                <a href="/" className="flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="h-30 w-30 mb-2" />
                </a>
            </h1>

            <ul className="flex ml-6 ">
                <li className="mr-4 text-lg font-semibold hover:text-gray-300">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-4 text-lg font-semibold hover:text-gray-300">
                    <Link href="/pages/about">About</Link>
                </li>
                <li className="mr-4 text-lg font-semibold hover:text-gray-300">
                    <Link href="/pages/contact">Contact</Link>
                </li>
                <li className="mr-4 text-lg font-semibold hover:text-gray-300">
                    <Link href="/pages/sign">Sign</Link>
                </li>
            </ul>

            <ul className="flex mr-10">
                <button className="cursor-pointer bg-red-900 hover:scale-105 active:scale-95 p-2.5 rounded-lg">Đăng nhập</button>
            </ul>
        </div>
    );
}