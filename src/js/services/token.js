export default class Token {
  constructor(name, icon, address, owner, balance) {
    this.name = name;
    this.icon = icon;
    this.address = address;
    this.owner = owner;
    this.balance = balance || 0;
  }

  shallowClone() {
    return new Token(
      this.name, this.icon, this.address,
      this.owner, this.balance)
  }

  sync(ethereum) {
    const tok = this.shallowClone()
    tok.balance = ethereum.getTokenBalance(
      tok.address,
      tok.owner.address,
    );
    return tok
  }
}
