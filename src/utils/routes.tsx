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
  vacancyDetails: "/dashboard/vacancy-details",
  profile: "/profile",
  requirements: "/requirements",
  candidates: "/candidates",
  candidateDetails: "/candidates/candidate-details",
  analytics: "/analytics",
  process: "/process",
  admin: "/admin",
  adminUserMangement: "/admin/users",
  adminPermissions: "/admin/permissions",
  adminViewUser: "/admin/user/:userId",
  home: "/home",
  interviews: "/interviews",
  userRegister: "/register/:token",

};

export default routes;