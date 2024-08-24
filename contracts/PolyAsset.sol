// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract PolyAsset is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("PolyAsset", "PAS") {}

    function safeMint(address to, uint8 _quantity) external  {
        _safeMint(to, _quantity);
    }

    function promptDescription() external pure returns (string memory) {
        return "generate image of polygon coin in the desert";
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmUuF3xxusT9sSqqneePUwResyLHcL3d7f7TiD5pTtCNBm/";
    }
}