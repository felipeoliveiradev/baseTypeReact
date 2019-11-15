export const mask = (value: string, type: string) => {
  const cpf = value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");

  const phone = () => {
    const numberWhithoutSpace = value.replace(/\D/g, "");
    const numbers: number | string = numberWhithoutSpace;
    if (numberWhithoutSpace.length <= 10) {
      const phones = numbers.replace(
        /^([0-9]{2})([0-9]{4})([0-9]{4})$/,
        "($1) $2-$3"
      );
      return phones;
    } else if (numberWhithoutSpace.length <= 11) {
      const cellphone = numbers.replace(
        /^([0-9]{2})([0-9]{1})([0-9]{4})([0-9]{4})$/,
        "($1) $2 $3-$4"
      );
      return cellphone;
    }
    return numberWhithoutSpace;
  };

  switch (type) {
    case "cpf":
      return cpf;
    case "phone":
      return phone;
    default:
      break;
  }
};
