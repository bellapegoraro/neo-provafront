import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Abilities from "../abilities/index";
jest.mock("axios");
const mokedAxios = axios;

describe("When you click on abilities, should show the short_effects", () => {
  test("Should show short_effect of the abilities", async () => {
    const data = [
      {
        effect_changes: [],
        effect_entries: [
          {},
          {
            short_effect:
              "Strengthens water moves to inflict 1.5× damage at 1/3 max HP or less.",
          },
        ],
        flavor_text_entries: [],
        generation: [],
        id: [],
        is_main_series: true,
        name: "",
        pokemon: [],
      },
    ];

    mokedAxios.get.mockResolvedValueOnce({ data });

    render(<Abilities url={"url"} />);
    const returnAbilities = await screen.findAllByRole("listitem");
    expect(returnAbilities).toHaveLength(1);
  });
});
