const createResourceRoutes = (resource: string) => ({
  root: `/${resource}`,
  create: `/${resource}/create`,
  view: `/${resource}/view/:id`,
});

export const routes = {
  root: '/',
  login: "/login",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password/:token",
  dashboard: {root:'/dashboard'},
  profile: "/profile",
  userRegister: "/register/:token",

};

export default routes;