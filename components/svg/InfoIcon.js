function InfoIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      style={{
        isolation: "isolate",
      }}
      {...props}
    >
      <path
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM9 5h2v2H9V5Zm0 4h2v6H9V9Z"
        fill="#8C94AB"
      />
    </svg>
  );
}

export default InfoIcon;
