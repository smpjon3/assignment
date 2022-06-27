function NotificationBadgeIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9 9"
      style={{
        isolation: "isolate",
      }}
      {...props}
    >
      <circle
        vectorEffect="non-scaling-stroke"
        cx={4.5}
        cy={4.5}
        r={4}
        fill="#F43F5E"
        stroke="#FAFAFC"
      />
    </svg>
  );
}

export default NotificationBadgeIcon;
