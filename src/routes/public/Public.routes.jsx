import React, { lazy, Suspense } from "react";
// * Switch and Route
import { Switch, Route } from "react-router-dom";
// * Ant-Design
import { Icon } from "antd";

function PublicRoutes() {
  // * Components with lazy
  const HomeContainer = lazy(() =>
    import("../../containers/Home/views/Home.container")
  );
  const ArtGalleryContainer = lazy(() =>
    import("../../containers/ArtGallery/views/ArtGallery.container")
  );
  const Error404 = lazy(() =>
    import("../../shared/components/Error404/Error404.component")
  );
  const LoginContainer = lazy(() =>
    import("../../containers/Login/Login.container")
  );

  // * Loading Element
  const Loading = (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>Loading...</h1>
      <Icon type="loading" style={{ fontSize: "100px" }} />
    </div>
  );

  return (
    // * Return All the Public Components
    <Suspense fallback={Loading}>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/galeria" component={ArtGalleryContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  );
}

export default PublicRoutes;
