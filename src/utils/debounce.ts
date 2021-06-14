export default function useDebounce() {
  let time: NodeJS.Timeout;

  return (callback: () => void, wait = 1000) => {
    clearTimeout(time);

    time = setTimeout(() => callback(), wait);
  };
}
