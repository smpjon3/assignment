function GarbageIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 13.333 13.333"
      style={{
        isolation: "isolate",
      }}
      {...props}
    >
      <path
        d="M10 2.667h3.333V4H12v8.667a.667.667 0 0 1-.667.666H2a.665.665 0 0 1-.667-.666V4H0V2.667h3.333v-2A.668.668 0 0 1 4 0h5.333A.668.668 0 0 1 10 .667v2ZM10.667 4h-8v8h8V4Zm-6 2H6v4H4.667V6Zm2.666 0h1.334v4H7.333V6ZM4.667 1.333v1.334h4V1.333h-4Z"
        fill="#FF342A"
      />
    </svg>
  );
}

export default GarbageIcon;
