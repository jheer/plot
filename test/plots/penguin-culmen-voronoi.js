import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

export default async function () {
  const penguins = await d3.csv("data/penguins.csv", d3.autoType);
  return Plot.plot({
    marks: [
      Plot.dot(penguins, {x: "culmen_depth_mm", y: "culmen_length_mm", fill: "currentColor", r: 1.5}),
      Plot.voronoi(penguins, {x: "culmen_depth_mm", y: "culmen_length_mm", stroke: "species"})
    ]
  });
}
