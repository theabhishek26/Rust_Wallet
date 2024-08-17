pub struct TokenManager {
    balance: u64,
}

impl TokenManager {
    pub fn new() -> Self {
        TokenManager { balance: 0 }
    }

    pub fn send_tokens(&mut self, amount: u64) -> Result<(), String> {
        if self.balance < amount {
            Err(String::from("Insufficient balance"))
        } else {
            self.balance -= amount;
            Ok(())
        }
    }

    pub fn receive_tokens(&mut self, amount: u64) {
        self.balance += amount;
    }

    pub fn get_balance(&self) -> u64 {
        self.balance
    }
}
