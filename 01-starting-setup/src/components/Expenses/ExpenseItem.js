import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //   const expenseDate = new Date(2021, 2, 3);
  //   const expenseTitle = "Car Insuarance";
  //   const expenseAmount = 4000;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
