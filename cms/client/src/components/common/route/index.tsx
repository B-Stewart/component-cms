import { FunctionalComponent, h } from "@stencil/core";
import { getCurrentUser } from "@app/services/auth-service";

interface RouteProps {
  authenticated: true;
}

export const Route: FunctionalComponent<any> = ({
  component,
  ...props
}: {
  [key: string]: any;
}) => {
  const Component = component;
  const redirectUrl = props.failureRedirect || "/login";
  const protectedRoute = props.authenticated;
  console.log(props, getCurrentUser());
  return (
    <stencil-route
      {...props}
      routeRender={(props: { [key: string]: any }) => {
        if (!protectedRoute || getCurrentUser()) {
          return <Component {...props} {...props.componentProps}></Component>;
        }
        return <stencil-router-redirect url="/login"></stencil-router-redirect>;
      }}
    />
  );
};
