// tslint:disable-next-line: no-default-export
export default class Errors {
  public emailValidation(email: string): string {
    const errorMessage: string = "E-mail inválido";
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return !regex.test(email) ? errorMessage : "";
  }
  public phone(phoneNumber: string): string {
    const phone = phoneNumber.replace(/[^\d]/g, "");
    if (!phone) {
      return "Você esqueceu de informar seu telefone.";
    }

    const DDD: number[] = [
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      21,
      22,
      24,
      27,
      28,
      31,
      32,
      33,
      34,
      35,
      37,
      38,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      51,
      53,
      54,
      55,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      71,
      73,
      74,
      75,
      77,
      79,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99
    ];
    if (phone.length !== 11) {
      return "Você digitou um celular inválido";
    }
    if (phone[2] !== "9") {
      return "Você digitou um celular inválido";
    }
    if (!DDD.includes(parseInt(phone.slice(0, 2), 10))) {
      return "Você digitou um DDD inválido";
    }
    return "";
  }

}
