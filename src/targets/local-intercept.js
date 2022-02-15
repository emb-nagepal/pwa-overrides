module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
      routes.push({
        name: "MyGreetingRoute",
        pattern: "/greeting/:who?",
        path: require.resolve("../overrides/venia-ui-v1/components/GreetingPage/greetingPage.js"),
      });
      return routes;
    });
  };
  