const wrapper = document.querySelector('.wrapper') as HTMLDivElement;

const dragging = ({ movementX, movementY }: MouseEvent) => {
  const getStyle = window.getComputedStyle(wrapper);
  const left = parseInt(getStyle.left, 10);
  const top = parseInt(getStyle.top, 10);

  wrapper.style.left = `${left + movementX}px`;
  wrapper.style.top = `${top + movementY}px`;
};

export default dragging;
