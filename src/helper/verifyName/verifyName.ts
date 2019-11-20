export const verifyName = (e: React.KeyboardEvent) => {
    const eyCode = e.keyCode ? e.keyCode : e.which;
    if (eyCode > 47 && eyCode < 58) {
      e.preventDefault();
    }
  };