import "./alert.scss";

function Alert(props: { attension: { msg: string; type: string } | null }) {
  const capital = (text: string) => {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + text.slice(1);
  };      
  return (
    <div className="alert" style={{ height: "30px" }}>
      {props.attension && (
        <div
          className={`alert alert-${props.attension.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capital(props.attension.type)}</strong>:{" "}
          {props.attension.msg}
        </div> 
      )} 
    </div>
  );
}

export default Alert;
