import { Oval } from "react-loader-spinner";

function showSpinner(accounts, style) {
  if (accounts.length === 0) {
    return true;
  } else {
    style.height = "0vh";
    return false;
  }
}

function Spinner({ accounts }) {
  const style = {
    height: "80vh",
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={style}
    >
      <Oval
        height={140}
        width={140}
        color="#5457b6"
        secondaryColor="#8284c9"
        visible={showSpinner(accounts, style)}
      />
    </div>
  );
}

export default Spinner;

// npm install react-loader-spinner --save
