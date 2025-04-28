import { Dependency } from "app-life";
import { useState } from "react";
import { GreetingController } from "../Controllers/GreetingController.js";

export default function GreetingUI() {
  const greetingController = Dependency(GreetingController);
  const showGreeting = greetingController.useIsGreetingUIVisible();
  const [name, setName] = useState("");
  const [greetingText, setGreetingText] = useState("");

  const toggleGreeting = () => greetingController.ToggleGreetingUIVisibility();
  const handleGreet = () => {
    if (name.trim()) setGreetingText(greetingController.Greet(name));
  };

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {showGreeting ? (
        <div className="text-center p-8 transition-opacity duration-300">
          <h1 className="text-5xl font-bold mb-4">Welcome!</h1>
          {greetingText ? (
            <p className="text-2xl mb-8">{greetingText}</p>
          ) : (
            <p className="text-xl mb-8">
              Enter your name and click "Greet" to see a personalized greeting.
            </p>
          )}

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
            />
            <button
              onClick={handleGreet}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-all w-full md:w-auto"
            >
              Greet
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center p-8">
          <p className="text-xl">Click the button to see the greeting.</p>
        </div>
      )}

      <button
        onClick={toggleGreeting}
        className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
      >
        {showGreeting ? "Hide Greeting" : "Show Greeting"}
      </button>
    </div>
  );
}
