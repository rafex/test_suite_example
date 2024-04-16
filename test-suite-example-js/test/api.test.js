import callApi from "../src/modules/callApi.mjs";
import request from "supertest";

//jest.mock("axios");

describe("callApi", () => {

    test("should call the API", async () => {
        const response = await callApi("https://api.ipify.org?format=json");
        console.log(response);
        expect(response).toBe({ ip: '187.193.188.34' });
    });
    
});





