export default defineNuxtRouteMiddleware((to, from) => {
  const authToken = useState("authToken");

  const isProtectedRoute = to.path === "/";

  const isPublicAuthRoute = to.path === "/login" || to.path === "/register";

  if (!authToken.value && isProtectedRoute) {
    return navigateTo("/login");
  }

  if (authToken.value && isPublicAuthRoute) {
    return navigateTo("/");
  }
});
