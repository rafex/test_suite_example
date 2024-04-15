import callApi from "../src/modules/callApi.mjs";
import request from "supertest";

//jest.mock("axios");

describe("callApi", () => {

    it("should call the API", async () => {
        const response = await callApi("https://api.ipify.org?format=json");
        expect(response).toHaveBeenCalledWith({ ip: '187.193.188.34' });
    });
    
});





