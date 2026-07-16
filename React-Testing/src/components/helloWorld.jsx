function HelloWorld() {
  return (
    <div>
      <h1>Hello World</h1>
      <p data-testid="name">Sangam Mukherjee</p>
    </div>
  );
}

export default HelloWorld;

// npm install --save-dev @babel/preset-env @babel/preset-react jest @testing-library/react @testing-library/jest-dom jest-environment-jsdom babel-jest


// | Package                     | Purpose                                                      |
// | --------------------------- | ------------------------------------------------------------ |
// | `jest`                      | JavaScript testing framework that runs your tests.           |
// | `@testing-library/react`    | Renders React components and lets you test them like a user. |
// | `@testing-library/jest-dom` | Adds extra matchers like `toBeInTheDocument()`.              |
// | `jest-environment-jsdom`    | Provides a browser-like DOM environment for Jest.            |
// | `babel-jest`                | Lets Jest understand modern JavaScript and JSX.              |
// | `@babel/preset-env`         | Transpiles modern JavaScript.                                |
// | `@babel/preset-react`       | Transpiles JSX into JavaScript.                              |
