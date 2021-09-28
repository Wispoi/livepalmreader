const LoadImage = (component, imageUrl, seconds, success, failure) => {
    let timeoutOccured = false;
    const image = new Image();
    const timeout = setTimeout(() => {
      timeoutOccured = true;
      failure();
    }, seconds * 1000);
  
    image.onload = () => {
      clearTimeout(timeout);
      component.style.backgroundImage = `url('${imageUrl}')`;
      if (!timeoutOccured) success();
    };
    image.src = imageUrl;
  };
  
  export default LoadImage;