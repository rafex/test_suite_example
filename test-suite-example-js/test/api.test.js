import {expect, jest, test, it} from '@jest/globals';

import callApi from "../src/modules/callApi.mjs";
import request from "supertest";

//jest.mock("axios");

describe("callApi", () => {

    test("Satisfactory service call (200 response code)", async () => {
        const response = await callApi("https://api.ipify.org?format=json");

        expect(response.status).toBe(200);
        expect(response.data).not.toBeNull();
    });
    
});





