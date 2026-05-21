#  Country Explorer

A simple React application for exploring global countries using live data from the REST Countries API. The app features an optimized search bar and displays country details in responsive, dynamic card layouts.

## Key Features & Accomplishments

* **Live API Integration:** Fetches real-time data to display each country's Flag, Name, Capital, Population, and Region.
* **Optimized Search:** Implements a search bar with **useRef**-based debounce functionality and auto-focus on page load.
* **State Management:** Gracefully handles loading, success, and error states during API calls.
* **Dynamic UI:** Uses the **map()** function to render reusable, responsive country card components.

## Core Concepts & Tech Stack

* **React & Vite:** Built with a fast Vite environment utilizing **JSX** and a modular, functional component architecture.
* **React Hooks:** Heavily utilizes **useState** (managing data and UI states), **useEffect** (triggering side effects like API fetching), and **useRef** (persisting values for debounce).
* **Component Communication:** Passes data and functions via **Props** between a clean hierarchy: `App` ➔ `Searchbar` & `CountryList` ➔ `CountryCard`.
* **Data Retrieval:** Uses the native `fetch()` API to pull customized fields from `restcountries.com`.

