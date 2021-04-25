import {NotFoundView} from "../src/client/NotFoundView";
import TestRenderer from "react-test-renderer";
import ReactDOM from "react-dom";
import {act} from "react-dom/test-utils";
import React from "react";

describe("not found view", () => {
    it("not found view", () => {
        const view = TestRenderer.create(<NotFoundView />);
        expect(view.toJSON()).toMatchSnapshot();
    });

    it("show not found view on dom", () => {
       const container = document.createElement("div");
       document.body.appendChild(container);
       act(() => {
           ReactDOM.render(<NotFoundView />, container)
       });

       expect(container.innerHTML).toMatchSnapshot();
    });
})