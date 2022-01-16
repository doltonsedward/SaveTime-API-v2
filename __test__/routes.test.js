import supertest from "supertest";
import app from "../app";

const request = supertest;
describe("GET /api/v1", () => {
  it("should return status code === 200 & success", async () => {
    const res = await request(app).get("/api/v1/");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
  });
});

describe("GET /categories", () => {
  it("should return status code === 200 & success", async () => {
    const res = await request(app).get("/api/v1/categories");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("success");
  });
  it("should contain name property", async () => {
    const res = await request(app).get("/api/v1/categories");
    expect(res.body).hasOwnProperty("name");
  });
});
