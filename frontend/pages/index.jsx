import { useState } from 'react';

export default function Home() {
  const [connected, setConnected] = useState(false);
  
  const connectWallet = () => {
    setConnected(true);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="p-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">🎬 StreamChain</h1>
          <button 
            onClick={connectWallet}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold"
          >
            {connected ? '0x1234...5678' : 'Connect Wallet'}
          </button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-6">
        <div className="text-center py-16">
          <h2 className="text-5xl font-bold mb-6">
            Decentralized Video Streaming
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Censorship-resistant, creator-owned platform with P2P streaming and AI moderation
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg font-semibold">
              Watch Videos
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 px-8 py-3 rounded-xl text-lg font-semibold border border-gray-700">
              Upload Video
            </button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🎥 P2P Streaming</h3>
            <p>Peer-to-peer video delivery reduces bandwidth costs by 70%</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">💰 Crypto Monetization</h3>
            <p>Earn 90% revenue with instant crypto payments</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">🤖 AI Moderation</h3>
            <p>Client-side content scanning protects privacy</p>
          </div>
        </div>
      </main>
      
      <footer className="p-6 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2024 StreamChain. Decentralized video platform.</p>
        </div>
      </footer>
    </div>
  );
}
