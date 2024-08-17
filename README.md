# TokenWalletTask
_**Secure token wallet on the ICP blockchain using Rust**__

Use command dfx deploy to set up the project

Setup Instructions for ICP Token Wallet

**Table of Contents**

    1.Prerequisites
    2.Installing Rust and ICP SDK
    3.Cloning the Repository
    4.Building the Wallet
    5.Deploying the Wallet to a Local ICP Test Network
    6.Configuring the Wallet
    7.Running the Wallet
    8.Testing the Wallet

1.[A]Prerequisites

    A computer with a 64-bit operating system (Windows, macOS, or Linux)
    A code editor or IDE (such as Visual Studio Code)
    A terminal or command prompt
    A GitHub account

2.[A]Installing Rust and ICP SDK

    Open a terminal or command prompt on your computer.
    Install Rust by running the following command:

      curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

      This will download and install Rust on your computer. 

  [B]. Once the installation is complete, restart your terminal or command prompt.
  [C]. nstall the ICP SDK by running the following command:

        sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

        This will download and install the ICP SDK on your computer.

3.Cloning the Repository

    [A]Open a terminal or command prompt on your computer.
    [B]Navigate to the directory where you want to clone the repository.
    [C]Run the following command to clone the repository:

        git clone https://github.com/your-username/icp-token-wallet.git

        Replace your-username with your actual GitHub username. 
        
4. Once the cloning is complete, navigate into the repository directory:

    cd icp-token-wallet

Building the Wallet

    Open a terminal or command prompt on your computer.
    Navigate to the repository directory.
    Run the following command to build the wallet:

cargo build

This will compile the wallet code and create a target directory.

5.Deploying the Wallet to a Local ICP Test Network

    [A]Open a terminal or command prompt on your computer.
    [B]Navigate to the repository directory.
    [C]Run the following command to deploy the wallet to a local ICP test network:

        dfx deploy

        This will deploy the wallet to a local ICP test network.

6.Configuring the Wallet

    [A]Open a terminal or command prompt on your computer.
    [A]Navigate to the repository directory.
    [C]Run the following command to configure the wallet:

        cargo run -- --config

        This will prompt you to enter the wallet configuration details.

7.Running the Wallet

    [A]Open a terminal or command prompt on your computer.
    [B]Navigate to the repository directory.
    [C]Run the following command to run the wallet:

        cargo run

        This will start the wallet and display the wallet menu.

8.Testing the Wallet

    [A]Open a terminal or command prompt on your computer.
    [B]Navigate to the repository directory.
    [C]Run the following command to test the wallet:

        cargo test

        This will run the wallet tests and display the test results.

**_[i]Troubleshooting_**

    If you encounter any issues during the setup process, refer to the Troubleshooting section.
    If you are unable to resolve the issue, contact the wallet developer for assistance.

**_[ii]Troubleshooting Guide_**

    Error: Unable to install Rust
        Check that you have the latest version of Rust installed.
        Try reinstalling Rust.
    Error: Unable to deploy wallet to local ICP test network
        Check that you have the latest version of the ICP SDK installed.
        Try redeploying the wallet.
    Error: Unable to run wallet
        Check that you have the latest version of the wallet code.
        Try rebuilding the wallet.
