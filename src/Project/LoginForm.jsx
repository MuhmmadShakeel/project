import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
const hello =()=>{

  alert("Thanks for login our Page!");
}
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4 z-50">
      <button 
        onClick={() => navigate(-1)} 
        className="absolute top-4 left-4 text-[#D4AF37] hover:text-yellow-600 flex items-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="w-full max-w-md bg-white rounded-xl mt-12 shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#1C1C1C] p-6  text-center ">
          <h2 className="text-2xl font-light text-[#D4AF37] tracking-wide">AKOYA PREMIUM LAUNDRY</h2>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <p className="mt-2 text-gray-300 text-sm">Sign in to your account</p>
        </div>
        
        <div className="p-8">
          <form>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <input 
                  id="email" 
                  placeholder="Example@gmail.com" 
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200" 
                  required 
                  type="email" 
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <input 
                  id="password" 
                  placeholder="••••••••" 
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200" 
                  required 
                  type="password" 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input 
                  id="remember" 
                  className="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded" 
                  type="checkbox" 
                  name="remember" 
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a className="font-medium text-[#D4AF37] hover:text-yellow-600" href="/forgot-password">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <button onClick={hello}
              type="submit" 
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C232] hover:from-[#C9A227] hover:to-[#E0B82D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">New to AKOYA?</span>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a className="font-medium text-[#D4AF37] hover:text-yellow-600 border-b border-transparent hover:border-[#D4AF37] transition duration-200" href="/login">
                Create your account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;