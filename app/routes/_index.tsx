// The route name _index is special.
// It tells Remix to match and render this route
// when the user is at the parent route's exact path,
// so there are no other child routes to render in the <Outlet />.

export default function Index() {
  return (
    <p id="index-page">
      This is a demo for Remix.
      <br />
      Check out <a href="https://remix.run">the docs at remix.run</a>.
    </p>
  );
}
