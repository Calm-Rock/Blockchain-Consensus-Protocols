const sha256 = require('sha256');

function Blockchain() {
    this.chain = [];
    this.pendingTransactions = [];

    /// Genesis Block
    this.createNewBlock(100,'0','0');
}

/// Create new block method or function
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
    const newBlock = {
        index: this.chain.length +1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nocne: nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };

    this.pendingTransactions = [];
    this.chain.push(newBlock);

    return newBlock;

}

/// Get lat block method --- Explaination
Blockchain.prototype.getLastBlock = function() {
    return this.chain[this.chain.length - 1];
}

/// createNewTransaction method --- Explaination
Blockchain.prototype.createNewTransaction = function(amount, sender, receiver) {
    const newTransaction = {
        amount: amount,
        sneder: sender,
        receiver: receiver
    };
    this.pendingTransactions.push(newTransaction);

    return this.getLastBlock()['index'] + 1;
}

/// Hash Block method --- Takes a block as input and hash that block into a fixed length string
Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
    
}

/// proof of work method
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
	let nonce = 0;
	let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	while (hash.substring(0, 4) !== '0000') {
		nonce++;
		hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	}

	return nonce;
};

module.exports = Blockchain;