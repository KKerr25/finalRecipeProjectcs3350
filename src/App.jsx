import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Recipe from "./pages/RecipiePage";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";

import cuteBackground from "./images/cutebackground.jpg";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "Recipe", element: <Recipe /> },
        { path: "Recipe/:id", element: <Recipe /> },
        // Set this up for future purposes where I can use real data instead of filler stuff...
      ],
    },
  ]);

  return (
    <div
      style={{
        backgroundImage: `url(${cuteBackground})`, // Correct formatting for backgroundImage
        backgroundSize: "cover", // Optional: Ensures the image covers the container
        backgroundRepeat: "no-repeat", // Optional: Prevents image repetition
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
