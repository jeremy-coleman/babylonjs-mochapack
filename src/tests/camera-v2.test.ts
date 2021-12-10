import { expect } from "chai";
import { Camera } from "@babylonjs/core/Cameras/camera";

describe("Self sustained", () => {
    // Test to confirm that tests work.
    it("should equal a string with a string", () => {
        expect("789").to.equal("789").and.to.be.a("string");
    });
});

describe("The Camera", () => {
    it("should have a property perspective camera that equals 0.", () => {
        expect(Camera.PERSPECTIVE_CAMERA).to.eq(0).and.to.be.a("number");
    });
});
