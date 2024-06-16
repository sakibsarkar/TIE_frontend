export const NextSlide = (
  element: HTMLDivElement,
  gap?: number,
  toScroll?: number
) => {
  const width = element.clientWidth;
  if (element && width) {
    const scrollAmmount = element.scrollLeft + (toScroll || width) + (gap || 0);
    element.scrollLeft = scrollAmmount;
    return scrollAmmount;
  }
};

export const PrevSlide = (element: HTMLDivElement, gap?: number) => {
  const width = element.clientWidth;
  if (element && width) {
    const scrollAmmount = element.scrollLeft - width - (gap || 0);
    element.scrollLeft = scrollAmmount;
    return scrollAmmount;
  }
};
