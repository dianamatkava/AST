interface Props {
  color?: string;
  hoverColor?: string;
  className?: string;
}

export const TrashIcon = ({
  color = "#4A4A4A",
  hoverColor = "black",
  className = "",
}: Props): JSX.Element => {
  return (
    <svg
      className={`group ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 7.99984H6.66667M6.66667 7.99984H28M6.66667 7.99984L6.66667 26.6665C6.66667 27.3737 6.94762 28.052 7.44772 28.5521C7.94781 29.0522 8.62609 29.3332 9.33333 29.3332H22.6667C23.3739 29.3332 24.0522 29.0522 24.5523 28.5521C25.0524 28.052 25.3333 27.3737 25.3333 26.6665V7.99984M10.6667 7.99984V5.33317C10.6667 4.62593 10.9476 3.94765 11.4477 3.44755C11.9478 2.94746 12.6261 2.6665 13.3333 2.6665H18.6667C19.3739 2.6665 20.0522 2.94746 20.5523 3.44755C21.0524 3.94765 21.3333 4.62593 21.3333 5.33317V7.99984"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        className={`group-hover:stroke-${hoverColor} stroke-width-2`}
      />
    </svg>
  );
};

export default TrashIcon;
