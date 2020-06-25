
export const isAuthenticated = () => {
  return !localStorage.getItem('success') == null;
}