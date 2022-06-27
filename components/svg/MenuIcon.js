function MenuIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 10"
      style={{
        isolation: "isolate",
      }}
      {...props}
    >
      <path
        d="M0 0h15v1.667H0V0Zm0 4.167h15v1.666H0V4.167Zm0 4.166h15V10H0V8.333Z"
        fill="#B9BDC8"
      />
    </svg>
  );
}

export default MenuIcon;
