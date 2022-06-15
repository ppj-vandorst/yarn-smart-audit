import { audit } from ".";

describe("audit", () => {
  it("should audit correctly", async () => {
    const result = await audit({ directory: "./mock" });
  });
});
