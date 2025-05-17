export const useCounterStore = (set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
});
/**
 * The `useCounterStore` hook can be used in your components to access the state and actions.
 * For example:
 *
 * const { count, increment } = useCounterStore();
 *
 * This will give you access to the `count` state and the `increment` action.
 */
