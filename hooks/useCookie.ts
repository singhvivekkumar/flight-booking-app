import { getCookie, setCookie, deleteCookie } from "cookies-next";

const useCookie = () => {

  const getTheCookie = (key: string) => getCookie(key);

  const setTheCookie = (key: string, value: string) =>
    setCookie(key, value, {
      path: "/",
      httpOnly: true
    });

  const removeTheCookie = (key: string) => deleteCookie(key);

  return { setTheCookie, getTheCookie, removeTheCookie };
};

export default useCookie;