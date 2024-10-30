import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  {
    return (
      <div id="wd-passing-functions">
        <h2>Lab 4</h2>
        <ClickEvent />
        <hr />
        <PassingDataOnEvent />
        <hr />
        <PassingFunctions theFunction={sayHello} />
        <hr />
        <EventObject />
        <hr />
        <Counter />
        <hr />
        <BooleanStateVariables />
        <hr />
        <StringStateVariables />
      </div>
    );
  }
}
