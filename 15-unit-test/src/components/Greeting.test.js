import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    //Arrange
    render(<Greeting />);
    //Act
    //Nothing to act
    //Assert
    const helloWorldElelment = screen.getByText("Hello World", {
      exact: false,
    });
    expect(helloWorldElelment).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not clicked', () => {
    render(<Greeting />);
    const goodToSeeElelment = screen.getByText("good to see", {
      exact: false,
    });
    expect(goodToSeeElelment).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const changedElelment = screen.getByText("Changed!", {
      exact: false,
    });
    expect(changedElelment).toBeInTheDocument();
  });

  test('does not renders "good to see" if the button was clicked', () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const goodToSeeElelment = screen.queryByText("good to see", {
      exact: false,
    });
    expect(goodToSeeElelment).toBeNull();
  });
});
