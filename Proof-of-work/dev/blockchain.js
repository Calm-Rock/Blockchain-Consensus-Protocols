function Blockchain() {
    this.chain = [];
    this.newTransactions = [];
}

/// Create new block method or function
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length +1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nocne: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.newTransactions = [];
    this.chain.push(newBlock);

    return newBlock;

}