import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Gig from "../src/components/Gig";

test("Render page with all elements", () => {
  const { container } = render(
    <Gig
      name="Megadeth"
      image="https://cdn.britannica.com/08/252308-050-D0C3221F/Members-of-thrash-metal-band-Megadeth-1986.jpg"
      description="Reunited with Marty Friedman to play Rust In Peace in full!"
      date="2026"
      location="Rock City - Nottingham"
    />
  );

  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "Megadeth"
  );

  const image = screen.getByRole("img");
  expect(image).toHaveTextContent("");
  expect(image).toHaveClass("gigImage");

  const paragraph = container.querySelectorAll("p");
  expect(paragraph[0]).toHaveTextContent(
    "Reunited with Marty Friedman to play Rust In Peace in full!"
  );
  expect(paragraph[0]).toHaveClass("gigDescription");

  expect(paragraph[1]).toHaveTextContent("2026");
  expect(paragraph[1]).toHaveClass("gigDate");

  expect(paragraph[2]).toHaveTextContent("Rock City - Nottingham");
  expect(paragraph[2]).toHaveClass("gigLocation");
});

test("Test for favourited gig state", async () => {
  const { container } = render(
    <Gig
      name="Megadeth"
      image="https://cdn.britannica.com/08/252308-050-D0C3221F/Members-of-thrash-metal-band-Megadeth-1986.jpg"
      description="Reunited with Marty Friedman to play Rust In Peace in full!"
      date="2026"
      location="Rock City - Nottingham"
    />
  );

  await userEvent.click(screen.getByText("😈"));
  expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(
    "Favourited!"
  );
  expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
    "Megadeth"
  );

  const image = screen.getByRole("img");
  expect(image).toHaveTextContent("");
  expect(image).toHaveClass("gigImage");

  const paragraph = container.querySelectorAll("p");
  expect(paragraph[0]).toHaveTextContent(
    "Reunited with Marty Friedman to play Rust In Peace in full!"
  );
  expect(paragraph[0]).toHaveClass("gigDescription");

  expect(paragraph[1]).toHaveTextContent("2026");
  expect(paragraph[1]).toHaveClass("gigDate");

  expect(paragraph[2]).toHaveTextContent("Rock City - Nottingham");
  expect(paragraph[2]).toHaveClass("gigLocation");
});
