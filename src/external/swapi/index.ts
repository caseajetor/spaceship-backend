import { config } from "dotenv";

config({
  path: ".env",
});

const swapiUrl = process.env.SWAPI_API_URL || "";

export async function getSpaceshipInfo(model: string) {
  try {
    // Buscar dados da nave espacial na API swapi.dev
    const swapiResponse = await fetch(
      `${swapiUrl}/api/starships?search=${model}`
    );

    const swapiResponseBody = await swapiResponse.json();

    if (swapiResponseBody.count) {
      return swapiResponseBody.results[0];
    }

    return {};
  } catch (err) {
    throw new Error(err);
  }
}