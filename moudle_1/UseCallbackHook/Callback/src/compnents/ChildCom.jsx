
const ChildCom = React.memo(
  (props) => {
    console.log("Child Component got re-rendered");
    return (
      <div>
        <button onClick={props.handleClick}>
          {props.buttonName}
        </button>
      </div>
    )
  }
)

export default ChildCom
