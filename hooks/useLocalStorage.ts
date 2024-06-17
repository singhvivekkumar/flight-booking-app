const useLocalStorage = () => {

  const getUserData = (key: string) => {
		const data = localStorage.getItem(key);
		return data;
	};

  const setUserData = (key: string, value: string) => {
		localStorage.setItem(key, value);
	};

  const removeUserData = (key: string) => {
		localStorage.removeItem(key);
	};

  return { getUserData, setUserData, removeUserData };
};

export default useLocalStorage;