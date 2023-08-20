//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    [p, g].forEach(n => {
      if (n % 2 == 0 || n < 0 || n > 9999) throw new Error();
    })
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error();
    else return (this.g** privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}
