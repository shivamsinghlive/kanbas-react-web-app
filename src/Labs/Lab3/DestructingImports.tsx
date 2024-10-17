import React from "react";
import Math, { add, subtract, multiply, divide } from "./Math";
import * as Matematica from "./Math";
export default function DestructingImports() {
    return (
        <div id="wd-destructuring-imports">
            <h2>Destructing Imports</h2>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Math</th>
                        <th>Matematica</th>
                        <th>Functions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
                        <td>Matematica.add(2, 3) =
                            {Matematica.add(2, 3)}</td>
                        <td>add(2, 3) = {add(2, 3)}</td>
                    </tr>
                    <tr>
                        <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
                        <td>Matematica.subtract(5, 1) =
                            {Matematica.subtract(5, 1)}</td>
                        <td>subtract(5, 1) = {subtract(5, 1)}</td>
                    </tr>
                    <tr>
                        <td>Math.subtract(3, 4) = {Math.subtract(3, 4)}</td>
                        <td>Matematica.subtract(3, 4) =
                            {Matematica.subtract(3, 4)}</td>
                        <td>subtract(3, 4) = {subtract(3, 4)}</td>
                    </tr>
                    <tr>
                        <td>Math.subtract(8, 2) = {Math.subtract(8, 2)}</td>
                        <td>Matematica.subtract(8, 2) =
                            {Matematica.subtract(8, 2)}</td>
                        <td>subtract(8, 2) = {subtract(8, 2)}</td>
                    </tr>
                    
                    

                </tbody>
            </table>
            <hr />
        </div>
    );
}
