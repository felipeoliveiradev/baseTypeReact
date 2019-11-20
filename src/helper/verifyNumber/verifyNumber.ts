export const verifyNumber = (e: React.KeyboardEvent) => {
    const eyCode = e.keyCode ? e.keyCode : e.which;
    const teste = eyCode < 58;
    if (!teste) {
      e.preventDefault();
    }
  };