
export const handleMouseMove = (event: MouseEvent) => {

  const hero = document.querySelector('.hero') as HTMLElement;
  const videoStreaming = document.querySelector('.video-streaming') as HTMLElement;
  
 
  if (hero) {
    handleGradientMovement(hero, event);
  }


  if (videoStreaming) {
    handleGradientMovement(videoStreaming, event);
  }
};

const handleGradientMovement = (element: HTMLElement, event: MouseEvent) => {
  const { clientX: x, clientY: y } = event;
  const { offsetWidth: width, offsetHeight: height } = element;

  const radius = 70; 
  const movementFactor = 0.05; 

  const centerX = width / 2;
  const centerY = height / 2;
  const deltaX = x - centerX;
  const deltaY = y - centerY;
  const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

  let clampedX = centerX + (distance < radius ? deltaX : (radius * deltaX) / distance);
  let clampedY = centerY + (distance < radius ? deltaY : (radius * deltaY) / distance);

  const xPercent = ((clampedX / width) * 100);
  const yPercent = ((clampedY / height) * 100);

  const currentX = parseFloat(getComputedStyle(element).getPropertyValue('--gradient-x')) || 50;
  const currentY = parseFloat(getComputedStyle(element).getPropertyValue('--gradient-y')) || 50;

  element.style.setProperty('--gradient-x', `${currentX + (xPercent - currentX) * movementFactor}%`);
  element.style.setProperty('--gradient-y', `${currentY + (yPercent - currentY) * movementFactor}%`);
};
