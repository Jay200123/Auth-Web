import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { useGreetingsStore } from "./slice/greetings";
import { useCounterStore } from "./slice/counter";
import { useAuthStore } from "./routes/auth/index.js";
/**
 * Here is the main store that combines all slices.
 * You can add other slices here as needed.
 * For example, you can add a slice for managing user authentication,
 * another for managing application settings, etc.
 */
export const useStore = create()(
  persist(
    (...a) => ({
      ...useGreetingsStore(...a),
      ...useCounterStore(...a),
      ...useAuthStore(...a),
      // Add other slices here
      // Example: ...useOtherSlice(...a),
    }),
    {
      name: "store", // unique name
      storage: createJSONStorage(() => localStorage), // Use localStorage as the storage
    }
  )
);
/**
 * The `useStore` hook can be used in your components to access the state and actions.
 * For example:
 *
 * const { message, setMessage } = useStore();
 *
 * This will give you access to the `message` state and the `setMessage` action.
 */
