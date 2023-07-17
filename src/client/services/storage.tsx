const setStorage = (key: string, value?: string) => {
    if (typeof value === 'string') {
      return window.localStorage.setItem(key, value);
    }
};

const getStorage = (key: string) => {
  return window.localStorage.getItem(key);
};

const removeStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};

const clearStorage = () => {
  return window.localStorage.clear();
};

export { setStorage, getStorage, removeStorage, clearStorage };
