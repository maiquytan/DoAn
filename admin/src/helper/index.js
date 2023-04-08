// import { api } from '../api';

export const getCookie = (name, cookiesParam) => {
  let cookies = cookiesParam || (typeof document !== 'undefined' && document.cookie)
  const value = `; ${cookies}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts?.pop()?.split(';').shift()
}

export const updateAccess = (type) => {
  if (type) {
    const d = new Date();
    d.setTime(d.getTime() + (10 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `access=${type};${expires};path=/;`
  } else {
    document.cookie = `access=;path=/;`
  }
}
