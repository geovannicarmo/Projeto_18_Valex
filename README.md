# Projeto_18_Valex


## Routes

### /createCard
#### input example

{
  "employeeId": "3",
  "type": "transport"
}

### /cardActivate

{
  "cardId": 21,
  "securityCode": "859",
  "password": 4565
}

### /unlock

{
  "cardId": 21,
  "password": "4565"
}

### /block

{
  "cardId": 21,
  "password": "4565"
}

### /balanceTransactions

{
  "cardId": 21
}

### /cardRecharge

{
  "cardId": 21,
  "amount": 10
}

### /buy

{
  "cardId": 21,
  "password": "4565",
   "amount": 0.01,
  "businessesId": 4
}



