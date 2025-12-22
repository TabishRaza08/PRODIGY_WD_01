import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import { SectionId } from './types';

const App: React.FC = () => {
  // Simple state to track which section might be active (optional for this simple version)
  const [activeSection] = useState<string>(SectionId.HOME);

  return (
    <div className="font-sans text-gray-900">
      {/* 
        This is the main requirement: 
        Interactive Navigation Menu 
      */}
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section 
        id={SectionId.HOME} 
        className="h-screen flex items-center justify-center bg-gray-900 relative"
        style={{
          backgroundImage: 'url("https://picsum.photos/1920/1080?grayscale")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">The Crazy Book Store</h1>
          <p className="text-xl md:text-2xl mb-8">Read books like there is no tomorrow.</p>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4">
        
        {/* Books Section */}
        <section id={SectionId.BOOKS} className="py-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Collection</h2>
          <BookList />
        </section>

        {/* About Section */}
        <section id={SectionId.ABOUT} className="py-20 bg-orange-50 rounded-xl my-10 p-10">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to The Crazy Book Store. We are a small team of book lovers who believe that reading is the best way to escape reality. 
            This website was built as a final year project to demonstrate a simple, functional, and interactive user interface. 
            We hope you find your next favorite book here!
          </p>
        </section>

        {/* Contact Section */}
        <section id={SectionId.CONTACT} className="py-20 mb-20">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contact Us</h2>
          <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500" placeholder="your@email.com" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500 h-32" placeholder="Write something..."></textarea>
              </div>
              <button className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded hover:bg-orange-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2024 The Crazy Book Store.</p>
      </footer>
    </div>
  );
};

export default App;