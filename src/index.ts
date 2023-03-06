interface BlockShape {
    data:string;
    hash:string;
    prevHash:string;
}

class Block implements BlockShape {
    constructor(
        public data:string,
        public hash:string,
        public prevHash:string
    ){
        
    }
}

function main():number{

    genesisBlock

    return 0;
}