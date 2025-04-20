// components/AuthModal.js
"use client";

import { useState } from "react";

export default function AuthModal({ isOpen, onClose }) {

  const [isLogin, setIsLogin] = useState(true);
  if (!isOpen) return null;


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex space-x-75">
            <h2 className="text-2xl font-bold mb-4 text-black w-200" >
                {isLogin ? "Đăng nhập" : "Đăng ký"}
            </h2>
            {/*Close Modal*/}
            <button
                onClick={onClose}
                className="ml-10mt-2 text-black hover:text-black cursor:pointer"> 
                 X
            </button>
        </div>
        
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-black font-semibold mb-2">
                Họ và tên
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Nhập họ và tên"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Nhập email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-black font-semibold mb-2">
              Mật khẩu
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-red-600 mt-4 hover:underline"
        >
          {isLogin ? "Chưa có tài khoản? Đăng ký" : "Đã có tài khoản? Đăng nhập"}
        </button>
        
      </div>
    </div>
  );
}