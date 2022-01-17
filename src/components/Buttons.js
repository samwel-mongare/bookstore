const Buttons = (props) => {
  const labely = props;
  return (
    <button className="button" type="button">
      {labely.label}
    </button>
  );
};
export default Buttons;
