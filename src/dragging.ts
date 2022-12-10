export { dragging }
const wrapper = document.querySelector(".wrapper") as HTMLDivElement;

const dragging = ( {movementX, movementY}: MouseEvent ) => {
  const getStyle = window.getComputedStyle(wrapper);
  const left = parseInt(getStyle.left);
  const top = parseInt(getStyle.top);

  wrapper.style.left = `${left + movementX}px`
  wrapper.style.top = `${top + movementY}px`;
}