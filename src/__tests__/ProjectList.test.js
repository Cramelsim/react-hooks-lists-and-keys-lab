import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectList from "../components/ProjectList";

const projects = [
  {
    id: 1,
    name: "Reciplease",
    about: "A recipe tracking app",
    technologies: ["Rails", "Bootstrap CSS"],
  },
  {
    id: 2,
    name: "Kibbles N Bitz",
    about: "Tinder for dogs",
    technologies: ["React", "Redux"],
  },
  {
    id: 3,
    name: "Alienwares",
    about: "Etsy for aliens",
    technologies: ["React", "Redux", "Rails"],
  },
];

test("gives each <ProjectItem> a key based on the project id", () => {
  let errorSpy = jest.spyOn(global.console, "error");
  render(<ProjectList projects={projects} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});


test("renders ProjectList without console errors", () => {
  const projects = [
    { id: 1, name: "Project 1", description: "Description 1" },
    { id: 2, name: "Project 2", description: "Description 2" },
  ];
  const errorSpy = jest.spyOn(global.console, "error").mockImplementation(() => {});

  render(<ProjectList projects={projects} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});