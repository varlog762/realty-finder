export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useState("authToken");

  if (to.path === "/" && !authToken.value) {
    return navigateTo("/login");
  }

  if (to.path === "/login" && authToken.value) {
    return navigateTo("/");
  }
});
