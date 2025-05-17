import { create } from "zustand";

/**
 * Create a basic zustand store hook for managing a greeting message.
 * The store contains a single state variable `message` and a method (action) `setMessage`
 * to update the message to "Hello, World!".
 */
export const useGreetingsStore = create((set) => ({
  message: "",

  setMessage: () => {
    set({ message: "Hello, World!" });
  },
}));
