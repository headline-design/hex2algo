import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk'
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      address:""
    }
  }

  hexToBytes = (hex = []) => {
    let bytes = []
  
    for (let c = 0; c < hex.length; c += 2){
    bytes.push(parseInt(hex.substr(c, 2), 16))}
  
  console.log(bytes)
  
  this.setState({address: algosdk.encodeAddress(bytes)})
  }


  render(){
    return(<div>
      <div className="col-lg-8 mx-auto p-3 py-md-5">
  <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center text-dark text-decoration-none"
    >
     
      <span className="fs-4">ARC19 hexToAlgo Generator</span>
    </a>
  </header>
  <main>
    <h1>Get started with ARC19</h1>
    <p className="fs-5 col-md-8">
    Quickly and easily get started with the latest NFT minting standard by <a
              href="https://nf.domains/"
              rel="noopener"
              target="_blank"
            >
              NFDomains
            </a>. For the first time, upgradeable NFTs are available on Algorand. 
    The ARC19 hexToAlgo Generator was built by <strong>HEADLINE</strong> to accelerate ARC19 adoption by simplifying the hex conversion process.
    </p>
    <div className="mb-5">
      <a href="/nfd.json" className="btn btn-primary btn-lg px-4" download>
        Download JSON example
      </a>
    </div>
    <hr className="col-3 col-md-2 mb-5" />
    <h2>hexToAlgo Generator</h2>
    <input className="form-control" id="hex"></input>
      <button className="w-100 btn btn-primary btn-lg mt-3 mb-3" onClick={()=>{this.hexToBytes(document.getElementById("hex").value)}}>
        Convert
      </button>
      <div
  className="alert alert-secondary alert-dismissible fade show"
  role="alert"
>Reserve Address: &nbsp; 
  { this.state.address}
</div>

<h2 className="pt-3">Example JSON</h2>
      <div className="codeBlock pt-2 pb-4">
        <text value="">
        <pre className="snippet-code-css lang-css s-code-block">
  {"{"}
  {"\n"}
  {"    "}"name": "Astro #220",{"\n"}
  {"    "}"description": "Algo Astros, An NFT Collection from the HEADLINE
  Team.",{"\n"}
  {"    "}"image": "ipfs://QmPntG5UdzPifpDaxMAwi1Fdh4e9Nr6jeeHApLSsrV7LJo",
  {"\n"}
  {"    "}"decimals": 0,{"\n"}
  {"    "}"unitName": "ASTRO220",{"\n"}
  {"    "}"image_integrity":
  "(sha256-18C15D17D33E6AA1C8579F740F9684C069F56C5F8750745C157F79FA528AC997",
  {"\n"}
  {"    "}"image_mimetype": "image/jpeg",{"\n"}
  {"    "}"properties": {"{"}
  {"\n"}
  {"        "}"Logo": "NFDomains",{"\n"}
  {"        "}"Background": "Code"{"\n"}
  {"    "}
  {"}"}
  {"\n"}
  {"}"}
  {"\n"}
</pre>
        </text>
      </div>
      <div className="card mb-4">
  <div className="card-header">SHA-256</div>
  <div className="card-body">
    <h5 className="card-title">Hash Code</h5>
    <p className="card-text">
      template-ipfs://{"{"}ipfscid:0:dag-pb:reserve:sha2-256{"}"}
    </p>
  </div>
</div>

    <div className="row g-5">
      <div className="col-md-6">
        <h2>Documentation</h2>
        
        <p>
          Would you like to learn more about ARC19? Check out these additional resources and contribute to the latest ARC standard.
        </p>
        <ul className="icon-list">
          <li>
            <a
              href="https://github.com/headline-design/hex2algo"
              rel="noopener"
              target="_blank"
            >
              GitHub Repo for hex2algo
            </a>
          </li>
          <li >
          <a
              href="https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0019.md"
              rel="noopener"
              target="_blank"
            >
              GitHub Repo for ARC19
            </a>
          </li>
          <li >
          <a
              href="https://arc3.xyz/nft/708106509"
              rel="noopener"
              target="_blank"
            >
              Example ARC19 NFT (ASTRO220)
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <h2>Minting Links</h2>
        <p>
          Follow these links in order to mint your first ARC19 NFT on Algorand.
        </p>
        <ul className="icon-list">
          <li>
            <a href="https://anarkrypto.github.io/upload-files-to-ipfs-from-browser-panel/public/">
              Upload JPEG to IPFS
            </a>
          </li>
          <li>
          <a href="/nfd.json" download>
        Download/edit JSON object
      </a>
          </li>
          <li>
          <a href="https://anarkrypto.github.io/upload-files-to-ipfs-from-browser-panel/public/">
              Upload JSON object to IPFS
            </a>
          </li>
          <li>
            <a href="https://cid.ipfs.io">
              Fetch DIGEST (HEX)
            </a>
          </li>
          <li>
            <a href="/">
              Convert HEX to Algo Address
            </a>
          </li>
          <li>
            <a href="https://app.algodesk.io">
              Mint NFT with hash code
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
  <footer className="pt-5 my-5 text-muted border-top">
    Created by the HEADLINE team · © 2022
  </footer>
</div>

    </div>)
  }

}


export default App;
